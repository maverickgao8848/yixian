import { create } from 'zustand';
import type { ChapterId, Item, EncyclopediaEntry, Landmark, Toast, OverlayId } from '../../types';
import { INITIAL_ITEMS, ENCYCLOPEDIA_ENTRIES, LANDMARKS } from '../../config/chapters';

interface GameState {
  // 核心流程
  hasSeenPrologue: boolean;
  currentChapterId: ChapterId | null;
  completedChapters: ChapterId[];

  // 收集系统
  inventory: Item[];
  encyclopedia: EncyclopediaEntry[];
  landmarks: Landmark[];

  // UI 状态
  activeOverlay: OverlayId;
  toasts: Toast[];
  viewMode: 'day' | 'night';

  // 演示模式
  demoTapCounts: Record<string, number>;

  // 动作
  enterMap: () => void;
  completePrologue: () => void;
  startChapter: (chapterId: ChapterId) => void;
  completeChapter: (chapterId: ChapterId) => void;
  acquireItem: (itemId: string) => void;
  unlockEncyclopedia: (entryId: string) => void;
  setOverlay: (overlay: OverlayId) => void;
  closeOverlay: () => void;
  addToast: (message: string, type: Toast['type']) => void;
  removeToast: (id: string) => void;
  toggleViewMode: () => void;
  resetGame: () => void;
  recordDemoTap: (landmarkId: string) => number;
  clearDemoTap: (landmarkId: string) => void;
}

const initialState = {
  hasSeenPrologue: false,
  currentChapterId: null as ChapterId | null,
  completedChapters: [] as ChapterId[],
  inventory: JSON.parse(JSON.stringify(INITIAL_ITEMS)) as Item[],
  encyclopedia: JSON.parse(JSON.stringify(ENCYCLOPEDIA_ENTRIES)) as EncyclopediaEntry[],
  landmarks: JSON.parse(JSON.stringify(LANDMARKS)) as Landmark[],
  activeOverlay: null as OverlayId,
  toasts: [] as Toast[],
  viewMode: 'day' as const,
  demoTapCounts: {} as Record<string, number>,
};

export const useGameStore = create<GameState>((set, get) => ({
  ...initialState,

  enterMap: () => {
    set({ activeOverlay: null });
  },

  completePrologue: () => {
    // 发放初始道具
    const updatedInventory = get().inventory.map((item) =>
      item.category === 'tool' ? { ...item, acquired: true } : item
    );
    set({
      hasSeenPrologue: true,
      inventory: updatedInventory,
      activeOverlay: null,
    });
    get().addToast('获得初始道具：族谱残页、放大镜、简易罗盘', 'unlock');
  },

  startChapter: (chapterId: ChapterId) => {
    set({ currentChapterId: chapterId, activeOverlay: 'puzzle' });
  },

  completeChapter: (chapterId: ChapterId) => {
    const state = get();
    // 标记章节完成
    const completed = [...state.completedChapters, chapterId];
    // 发放印章
    const stampMap: Record<string, string> = {
      chapter1_paifang: 'stamp_zhong',
      chapter2_ruiyuting: 'stamp_qin',
      chapter3_jingaitang: 'stamp_xiao',
      chapter4_dafudi: 'stamp_he',
      chapter5_lvfutang: 'stamp_du',
    };
    const stampId = stampMap[chapterId];
    const updatedInventory = state.inventory.map((item) =>
      item.id === stampId ? { ...item, acquired: true } : item
    );
    // 解锁地标
    const updatedLandmarks = state.landmarks.map((lm) => {
      if (lm.chapterId === chapterId) return { ...lm, completed: true };
      // 解锁下一地标
      const chapterOrder = [
        'chapter1_paifang',
        'chapter2_ruiyuting',
        'chapter3_jingaitang',
        'chapter4_dafudi',
        'chapter5_lvfutang',
      ];
      const idx = chapterOrder.indexOf(chapterId);
      const nextChapter = chapterOrder[idx + 1];
      if (lm.chapterId === nextChapter) return { ...lm, locked: false };
      return lm;
    });
    // 解锁百科
    const updatedEncyclopedia = state.encyclopedia.map((entry) =>
      entry.unlockChapterId === chapterId ? { ...entry, unlocked: true } : entry
    );

    set({
      completedChapters: completed,
      inventory: updatedInventory,
      landmarks: updatedLandmarks,
      encyclopedia: updatedEncyclopedia,
      currentChapterId: null,
      activeOverlay: 'settlement',
    });

    if (stampId) {
      get().addToast(`获得明经印：${stampId === 'stamp_zhong' ? '忠' : stampId === 'stamp_qin' ? '勤' : stampId === 'stamp_xiao' ? '孝' : stampId === 'stamp_he' ? '和' : '读'}`, 'success');
    }
  },

  acquireItem: (itemId: string) => {
    set((state) => ({
      inventory: state.inventory.map((item) =>
        item.id === itemId ? { ...item, acquired: true } : item
      ),
    }));
  },

  unlockEncyclopedia: (entryId: string) => {
    set((state) => ({
      encyclopedia: state.encyclopedia.map((entry) =>
        entry.id === entryId ? { ...entry, unlocked: true } : entry
      ),
    }));
  },

  setOverlay: (overlay: OverlayId) => {
    set({ activeOverlay: overlay });
  },

  closeOverlay: () => {
    set({ activeOverlay: null });
  },

  addToast: (message: string, type: Toast['type']) => {
    const id = Math.random().toString(36).slice(2, 9);
    set((state) => ({ toasts: [...state.toasts, { id, message, type }] }));
    setTimeout(() => {
      get().removeToast(id);
    }, 3000);
  },

  removeToast: (id: string) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  },

  toggleViewMode: () => {
    set((state) => ({ viewMode: state.viewMode === 'day' ? 'night' : 'day' }));
  },

  resetGame: () => {
    set({ ...initialState });
  },

  recordDemoTap: (landmarkId: string) => {
    const current = get().demoTapCounts[landmarkId] || 0;
    const next = current + 1;
    set((state) => ({
      demoTapCounts: { ...state.demoTapCounts, [landmarkId]: next },
    }));
    return next;
  },

  clearDemoTap: (landmarkId: string) => {
    set((state) => {
      const copy = { ...state.demoTapCounts };
      delete copy[landmarkId];
      return { demoTapCounts: copy };
    });
  },
}));

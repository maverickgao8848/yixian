import { create } from 'zustand';
import type { GamePhase, GameProgress } from '../../types/game';

interface GameStore extends GameProgress {
  setPhase: (phase: GamePhase) => void;
  nextMission: () => void;
  collectStamp: (stampId: string) => void;
  incrementWrongAttempts: () => void;
  resetWrongAttempts: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
  currentMissionIndex: 0,
  collectedStampIds: [],
  wrongAttempts: 0,
  phase: 'prologue',
  setPhase: (phase) => set({ phase }),
  nextMission: () =>
    set((s) => ({
      currentMissionIndex: s.currentMissionIndex + 1,
      phase: 'mission_active',
    })),
  collectStamp: (stampId) =>
    set((s) => ({
      collectedStampIds: [...s.collectedStampIds, stampId],
    })),
  incrementWrongAttempts: () =>
    set((s) => ({ wrongAttempts: s.wrongAttempts + 1 })),
  resetWrongAttempts: () => set({ wrongAttempts: 0 }),
}));

export type GamePhase = 'entry' | 'map' | 'prologue' | 'puzzle' | 'settlement';

export type ChapterId =
  | 'prologue'
  | 'chapter1_paifang'
  | 'chapter2_ruiyuting'
  | 'chapter3_jingaitang'
  | 'chapter4_dafudi'
  | 'chapter5_lvfutang'
  | 'finale';

export type NPCId =
  | 'hulaofuzi'
  | 'huwenguang'
  | 'huwenzhao'
  | 'hushangyan'
  | 'xiulousister'
  | 'laomojiang';

export interface Item {
  id: string;
  name: string;
  description: string;
  iconPath: string;
  acquired: boolean;
  category: 'tool' | 'stamp' | 'food' | 'fragment' | 'special';
}

export interface Stamp {
  id: string;
  name: string;
  chapterId: ChapterId;
  iconPath: string;
  acquired: boolean;
}

export interface EncyclopediaEntry {
  id: string;
  title: string;
  category: string;
  summary: string;
  detail: string;
  trivia: string;
  unlockChapterId?: ChapterId;
  unlocked: boolean;
}

export interface Landmark {
  id: string;
  name: string;
  chapterId: ChapterId;
  x: number; // 地图上的百分比位置 0-100
  y: number;
  iconPath: string;
  locked: boolean;
  completed: boolean;
  demoTapCount?: number; // 演示模式点击计数（非持久化）
}

export interface DialogueLine {
  speakerId: NPCId | 'system' | 'narrator';
  text: string;
  options?: { label: string; nextIndex: number }[];
}

export interface ChapterConfig {
  id: ChapterId;
  title: string;
  subtitle: string;
  npcId: NPCId;
  landmarkId: string;
  stampId: string;
  stampName: string;
  bgImagePath: string;
  npcImagePath: string;
}

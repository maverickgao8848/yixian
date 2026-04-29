export interface Dialog {
  id: string;
  characterName: string;
  characterImage: string;
  text: string;
}

export interface Puzzle {
  question: string;
  imageUrl: string;
  options: string[];
  correctIndex: number;
  hint: string;
}

export interface Stamp {
  id: string;
  name: string;
  character: string; // single character displayed in stamp
  collected: boolean;
}

export interface Mission {
  id: string;
  chapter: string; // e.g. "序章", "第一幕", "终章"
  title: string;
  subtitle: string;
  targetLat: number;
  targetLng: number;
  triggerRadius: number; // meters
  dialogs: Dialog[];
  puzzle: Puzzle;
  stampReward: string; // stamp id
}

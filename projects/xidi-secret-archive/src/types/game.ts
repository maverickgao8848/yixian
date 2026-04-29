export type GamePhase =
  | 'prologue'
  | 'mission_active'
  | 'approaching'
  | 'in_dialog'
  | 'in_puzzle'
  | 'stamp_earned'
  | 'finale'
  | 'achievement';

export interface GameProgress {
  currentMissionIndex: number;
  collectedStampIds: string[];
  wrongAttempts: number;
  phase: GamePhase;
}

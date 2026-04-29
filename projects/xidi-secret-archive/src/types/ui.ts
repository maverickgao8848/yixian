export type ViewMode = 'day' | 'night';

export type OverlayId =
  | 'prologue'
  | 'backpack'
  | 'encyclopedia'
  | 'puzzle'
  | 'settlement'
  | 'camera'
  | 'about'
  | null;

export type ToastType = 'success' | 'error' | 'info' | 'unlock';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

export interface MobileSafeArea {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

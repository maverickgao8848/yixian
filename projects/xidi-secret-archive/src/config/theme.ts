/** Theme-related constants for transitions and visual effects */

export const THEME_TRANSITION_SPEED = 0.3; // seconds for theme switch transition

export const GRAIN_OPACITY = {
  light: 0.06,
  dark: 0.10,
} as const;

export const THEME_ACCENT_COLORS = {
  light: '#D32F2F', // 朱泥 (Cinnabar Seal)
  dark: '#A9C25D',  // 苔绿 (Moss Green)
} as const;

export const THEME_BG_COLORS = {
  light: '#EBE8E3', // 黛瓦 (Ink Tile)
  dark: '#131615',  // 碑石 (Stele)
} as const;

import { create } from 'zustand';

interface ThemeStore {
  isDark: boolean;
  toggle: () => void;
  setByTime: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDark: (() => {
    const hour = new Date().getHours();
    return hour < 6 || hour >= 19;
  })(),
  toggle: () => set((s) => ({ isDark: !s.isDark })),
  setByTime: () => {
    const hour = new Date().getHours();
    set({ isDark: hour < 6 || hour >= 19 });
  },
}));

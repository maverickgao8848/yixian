export const THEME_TOKENS = {
  colors: {
    day: {
      bg: '#F4EFE6',
      bgSecondary: '#EDE6DA',
      text: '#2A2F33',
      textSecondary: '#5A6369',
      accent: '#698173',
      glow: '#E8CA94',
      mist: '#D6E5ED',
    },
    night: {
      bg: '#0D1114',
      bgSecondary: '#141B20',
      text: '#E6E9EB',
      textSecondary: '#9AA3A8',
      accent: '#4CF09D',
      glow: '#FF3366',
      mist: '#1A2A33',
    },
  },
  fonts: {
    serif: '"Noto Serif SC", serif',
    sans: '"Noto Sans SC", sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  spacing: {
    safeTop: 'env(safe-area-inset-top, 0px)',
    safeBottom: 'env(safe-area-inset-bottom, 0px)',
  },
  easing: {
    snap: 'cubic-bezier(0.25, 1, 0.5, 1)',
    dramatic: 'cubic-bezier(0.85, 0, 0.15, 1)',
  },
} as const;

export const ASSET_BASE = '/assets';

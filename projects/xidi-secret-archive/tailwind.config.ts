import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Noto Serif SC', 'Songti SC', 'serif'],
        body: ['Noto Sans SC', 'PingFang SC', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
      maxWidth: {
        app: '430px',
      },
    },
  },
  plugins: [],
};

export default config;

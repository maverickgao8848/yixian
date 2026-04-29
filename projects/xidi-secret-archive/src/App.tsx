import { useEffect } from 'react';
import { useThemeStore } from './runtime/stores/useThemeStore';
import { MapHome } from './ui/pages/MapHome';
import './ui/styles/tailwind.css';
import './ui/styles/design-system.css';
import './ui/styles/components.css';

export function App() {
  const isDark = useThemeStore((s) => s.isDark);
  const toggle = useThemeStore((s) => s.toggle);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
  }, [isDark]);

  return (
    <>
      <div className="film-grain" />
      <button
        className="theme-toggle"
        onClick={toggle}
        title="切换日间/夜间"
      >
        D/L
      </button>
      <MapHome />
    </>
  );
}

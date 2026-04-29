import { useGameStore } from '../../runtime/stores/gameStore';

export function SideActions() {
  const setOverlay = useGameStore((s) => s.setOverlay);

  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
      <button
        onClick={() => setOverlay('backpack')}
        className="w-12 h-12 glass-panel flex items-center justify-center active:scale-95 transition-transform"
        aria-label="背包"
        style={{ borderRadius: '50%' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[var(--accent-primary)]">
          <path d="M6 7h12l1 13H5L6 7z" />
          <path d="M9 7V5a3 3 0 016 0v2" />
        </svg>
      </button>
      <button
        onClick={() => setOverlay('encyclopedia')}
        className="w-12 h-12 glass-panel flex items-center justify-center active:scale-95 transition-transform"
        aria-label="百科"
        style={{ borderRadius: '50%' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[var(--accent-primary)]">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        </svg>
      </button>
    </div>
  );
}

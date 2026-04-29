import { motion } from 'framer-motion';
import { useGameStore } from '../../runtime/stores/gameStore';
import { useState } from 'react';

export function EncyclopediaPanel() {
  const encyclopedia = useGameStore((s) => s.encyclopedia);
  const closeOverlay = useGameStore((s) => s.closeOverlay);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = encyclopedia.find((e) => e.id === selectedId);

  return (
    <motion.div
      className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeOverlay();
      }}
    >
      <motion.div
        className="w-[85%] max-w-[360px] h-full bg-[var(--bg-primary)] border-l border-[var(--border-subtle)] flex flex-col"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* 头部 */}
        <div className="flex items-center justify-between px-5 pt-6 pb-4 border-b border-[var(--border-subtle)]">
          <h2 className="text-xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-serif)' }}>
            西递小百科
          </h2>
          <button
            onClick={closeOverlay}
            className="w-8 h-8 flex items-center justify-center text-[var(--text-secondary)] active:scale-90 transition-transform"
            aria-label="关闭"
          >
            ✕
          </button>
        </div>

        {/* 内容 */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-4">
          {selected ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="text-xs text-[var(--accent-primary)] mb-2"
              >
                ← 返回列表
              </button>
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
                {selected.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {selected.summary}
              </p>
              <div className="h-px bg-[var(--border-subtle)]" />
              <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                {selected.detail}
              </p>
              <div className="glass-panel p-3 border-l-2 border-dawn">
                <p className="text-xs text-[var(--text-secondary)] italic">
                  💡 {selected.trivia}
                </p>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-3">
              {encyclopedia.map((entry) => (
                <button
                  key={entry.id}
                  onClick={() => setSelectedId(entry.id)}
                  className="w-full text-left p-4 border transition-all border-[var(--border-strong)] bg-[var(--bg-secondary)] hover:border-dawn"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                        {entry.category}
                      </span>
                      <h4 className="text-sm font-medium mt-0.5">{entry.title}</h4>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

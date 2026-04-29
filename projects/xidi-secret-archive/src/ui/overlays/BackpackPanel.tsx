import { motion } from 'framer-motion';
import { useGameStore } from '../../runtime/stores/gameStore';

export function BackpackPanel() {
  const inventory = useGameStore((s) => s.inventory);
  const closeOverlay = useGameStore((s) => s.closeOverlay);

  const tools = inventory.filter((i) => i.category === 'tool');
  const stamps = inventory.filter((i) => i.category === 'stamp');

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
            我的背包
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
        <div className="flex-1 overflow-y-auto no-scrollbar px-5 py-4 space-y-6">
          {/* 基础道具 */}
          <section>
            <h3 className="text-xs font-mono tracking-widest text-[var(--text-secondary)] uppercase mb-3">
              基础道具
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {tools.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col items-center gap-2 p-3 border transition-opacity ${
                    item.acquired
                      ? 'border-[var(--border-strong)] bg-[var(--bg-secondary)] opacity-100'
                      : 'border-[var(--border-subtle)] opacity-30'
                  }`}
                >
                  <img
                    src={item.iconPath}
                    alt={item.name}
                    className="w-10 h-10 object-contain"
                    draggable={false}
                  />
                  <span className="text-[10px] text-center text-[var(--text-secondary)]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 明经印 */}
          <section>
            <h3 className="text-xs font-mono tracking-widest text-[var(--text-secondary)] uppercase mb-3">
              明经印
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {stamps.map((item) => (
                <div
                  key={item.id}
                  className={`flex flex-col items-center gap-2 p-3 border transition-all ${
                    item.acquired
                      ? 'border-dawn bg-dawn/10 opacity-100'
                      : 'border-[var(--border-subtle)] opacity-25'
                  }`}
                >
                  <img
                    src={item.iconPath}
                    alt={item.name}
                    className="w-10 h-10 object-contain"
                    draggable={false}
                  />
                  <span className="text-[10px] text-center text-[var(--text-secondary)]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}

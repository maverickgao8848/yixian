import { motion } from 'framer-motion';
import { useGameStore } from '../../runtime/stores/gameStore';

export function AboutOverlay() {
  const closeOverlay = useGameStore((s) => s.closeOverlay);

  return (
    <motion.div
      className="absolute inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeOverlay();
      }}
    >
      <motion.div
        className="w-full max-w-sm max-h-[80vh] overflow-y-auto no-scrollbar glass-panel"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* 头部 */}
        <div className="flex items-center justify-between px-5 pt-6 pb-3 border-b border-[var(--border-subtle)]">
          <h2
            className="text-xl font-bold tracking-wider"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            关于西递秘档
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
        <div className="px-5 py-5 space-y-6">
          {/* 游戏介绍 */}
          <section>
            <h3
              className="text-sm font-bold tracking-wider text-[var(--accent-primary)] mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              游戏介绍
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              「西递秘档：明经遗梦」是一款结合西递古村落实景的沉浸式解谜导览游戏。玩家将化身"有缘人"，在胡老夫子的指引下，走访村内五座古建，收集「明经秘档」的碎片，揭开一段尘封的家族往事。
            </p>
          </section>

          {/* 开发团队 */}
          <section>
            <h3
              className="text-sm font-bold tracking-wider text-[var(--accent-primary)] mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              开发团队
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              本项目由西递景区与跨学科创作团队联合打造。策划、美术、程序与文史顾问通力合作，力求在娱乐性与文化真实性之间取得平衡。（此处将填入团队详细介绍……）
            </p>
          </section>

          {/* 创作初衷 */}
          <section>
            <h3
              className="text-sm font-bold tracking-wider text-[var(--accent-primary)] mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              创作初衷
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              我们希望让更多游客，尤其是年轻一代，在轻松有趣的游戏体验中，主动了解徽派建筑之美与宗族文化的深厚底蕴。西递不仅是一处景点，更是一本活着的历史书。（此处将填入更详细的创作初衷……）
            </p>
          </section>

          {/* 关闭按钮 */}
          <button
            onClick={closeOverlay}
            className="w-full btn-primary text-sm py-3 mt-2"
          >
            关闭
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

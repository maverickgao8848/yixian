import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ASSETS } from '../../config/assets';
import { useGameStore } from '../../runtime/stores/gameStore';

export function EntryPage() {
  const navigate = useNavigate();
  const setOverlay = useGameStore((s) => s.setOverlay);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      {/* 全屏背景 */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.scene.entrance}
          alt="西递古村落"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* 标题区域 */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="mt-12 text-center"
        >
          <h1
            className="text-5xl font-black tracking-widest text-white text-shadow-ink"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            西递秘档
          </h1>
          <p
            className="mt-3 text-lg tracking-[0.3em] text-white/90"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            明经遗梦
          </p>
          <div className="mt-4 mx-auto w-16 h-[1px] bg-white/50" />
          <p
            className="mt-4 text-xs tracking-wider text-white/60 uppercase"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Xidi Secret Archive
          </p>
        </motion.div>

        {/* 底部按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="w-full max-w-xs mb-8 space-y-3"
        >
          <button
            onClick={() => setOverlay('about')}
            className="w-full btn-primary text-sm py-3"
            style={{ backgroundColor: 'rgba(105, 129, 115, 0.85)' }}
          >
            关于本作
          </button>
          <button
            onClick={() => navigate('/map')}
            className="w-full btn-primary"
          >
            进入西递秘档
          </button>
          <p className="mt-4 text-center text-[11px] text-white/40 tracking-wide">
            移动端沉浸式实景解谜体验
          </p>
        </motion.div>
      </div>
    </div>
  );
}

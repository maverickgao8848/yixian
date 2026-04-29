import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../../runtime/stores/gameStore';
import { ASSETS } from '../../config/assets';
import { PROLOGUE_DIALOGUE } from '../../config/chapters';
import { DialogueBox } from '../components/DialogueBox';

type PrologueStep = 'letter' | 'items' | 'dialogue';

export function PrologueOverlay() {
  const completePrologue = useGameStore((s) => s.completePrologue);
  const [step, setStep] = useState<PrologueStep>('letter');

  const handleNext = () => {
    if (step === 'letter') {
      setStep('items');
    } else if (step === 'items') {
      setStep('dialogue');
    }
  };

  return (
    <motion.div
      className="absolute inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget && step !== 'dialogue') handleNext();
      }}
    >
      <AnimatePresence mode="wait">
        {/* 古信展开 */}
        {step === 'letter' && (
          <motion.div
            key="letter"
            className="w-full max-w-sm mx-4 mb-8"
            initial={{ opacity: 0, scaleY: 0, originY: 1 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            <div
              className="relative p-6 pb-10"
              style={{
                backgroundImage: `url(${ASSETS.ui.jingtianLetter})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="text-center">
                <p
                  className="text-lg font-bold text-[var(--ink)] mb-4"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  有缘人亲启
                </p>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  吾乃明经胡氏后人，先祖昌翼公留有遗训——「五堂归一，秘档自现」。今吾年事已高，恐此秘密永埋尘土，特寻有缘之人。请于西递村口牌坊下，寻找一位手持竹杖的白胡子老者。
                </p>
              </div>
              <button
                onClick={handleNext}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 btn-primary text-sm px-6 py-2"
              >
                展开信件
              </button>
            </div>
          </motion.div>
        )}

        {/* 道具获取 */}
        {step === 'items' && (
          <motion.div
            key="items"
            className="w-full max-w-sm mx-4 mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="glass-panel p-5">
              <h3
                className="text-center text-base font-bold mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                获得初始道具
              </h3>
              <div className="flex justify-around mb-4">
                {[
                  { icon: ASSETS.item.genealogy, name: '族谱残页' },
                  { icon: ASSETS.item.magnifier, name: '放大镜' },
                  { icon: ASSETS.item.compass, name: '简易罗盘' },
                ].map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-2">
                    <motion.div
                      className="w-14 h-14 bg-white/60 border border-[var(--border-strong)] flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                      <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />
                    </motion.div>
                    <span className="text-xs text-[var(--text-secondary)]">{item.name}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-full btn-primary text-sm py-2"
              >
                收下道具
              </button>
            </div>
          </motion.div>
        )}

        {/* NPC 对话 */}
        {step === 'dialogue' && (
          <DialogueBox
            lines={PROLOGUE_DIALOGUE.map((d) => ({
              speakerId: d.speakerId,
              text: d.text,
            }))}
            onComplete={completePrologue}
            npcImageMap={{
              hulaofuzi: ASSETS.npc.hulaofuzi,
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

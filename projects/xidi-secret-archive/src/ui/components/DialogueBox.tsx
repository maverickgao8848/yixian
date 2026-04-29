import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NPCId } from '../../types';
import { ASSETS } from '../../config/assets';

export interface DialogueLine {
  speakerId: NPCId | 'narrator';
  text: string;
}

interface DialogueBoxProps {
  lines: DialogueLine[];
  onComplete: () => void;
  npcImageMap?: Partial<Record<NPCId, string>>;
}

export function DialogueBox({ lines, onComplete, npcImageMap }: DialogueBoxProps) {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState<'center' | 'bottom'>('center');
  const currentLine = lines[index];

  useEffect(() => {
    setIndex(0);
    setPosition('center');
  }, [lines]);

  const handleNext = () => {
    if (position === 'center') {
      setPosition('bottom');
      return;
    }
    if (index < lines.length - 1) {
      setIndex(index + 1);
    } else {
      onComplete();
    }
  };

  const isNpc = currentLine?.speakerId !== 'narrator';
  const npcImg = currentLine?.speakerId && currentLine.speakerId !== 'narrator'
    ? (npcImageMap?.[currentLine.speakerId] ?? ASSETS.npc[currentLine.speakerId as keyof typeof ASSETS.npc])
    : null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`dialogue-${index}-${position}`}
        className={`z-50 flex items-end gap-3 ${
          position === 'center'
            ? 'fixed inset-0 m-auto w-full max-w-[280px] h-fit px-4'
            : 'fixed bottom-4 left-4 right-4 mx-auto max-w-[280px]'
        }`}
        initial={
          position === 'center'
            ? { opacity: 0, scale: 0.92, y: 20 }
            : { opacity: 0, y: 30 }
        }
        animate={
          position === 'center'
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 1, y: 0 }
        }
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* NPC 立绘 */}
        {isNpc && npcImg && (
          <img
            src={npcImg}
            alt="NPC"
            className="w-40 h-56 object-contain object-bottom flex-shrink-0"
            draggable={false}
            style={{ marginBottom: position === 'bottom' ? 0 : '-12px' }}
          />
        )}

        {/* 对话框 */}
        <div className="flex-1 min-w-0">
          <div className="glass-panel p-4 mb-2">
            <p className="text-sm leading-[1.85] text-[var(--text-primary)] whitespace-pre-wrap">
              {currentLine?.text}
            </p>
          </div>
          <button
            onClick={handleNext}
            className="text-xs text-[var(--accent-primary)] font-medium tracking-wide active:scale-95 transition-transform"
          >
            {position === 'center' ? '开始对话 ▶' : index < lines.length - 1 ? '继续 ▶' : '准备好了 ▶'}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

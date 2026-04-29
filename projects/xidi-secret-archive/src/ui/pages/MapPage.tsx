import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../../runtime/stores/gameStore';
import { Compass } from '../components/Compass';
import { SideActions } from '../components/SideActions';
import { PrologueOverlay } from '../overlays/PrologueOverlay';
import { BackpackPanel } from '../overlays/BackpackPanel';
import { EncyclopediaPanel } from '../overlays/EncyclopediaPanel';
import { AboutOverlay } from '../overlays/AboutOverlay';
import type { ChapterId } from '../../types';

const MIN_SCALE = 1;
const MAX_SCALE = 3;
const DEMO_TAP_WINDOW = 500; // ms

export function MapPage() {
  const hasSeenPrologue = useGameStore((s) => s.hasSeenPrologue);
  const activeOverlay = useGameStore((s) => s.activeOverlay);
  const landmarks = useGameStore((s) => s.landmarks);
  const startChapter = useGameStore((s) => s.startChapter);
  const setOverlay = useGameStore((s) => s.setOverlay);
  const recordDemoTap = useGameStore((s) => s.recordDemoTap);
  const clearDemoTap = useGameStore((s) => s.clearDemoTap);
  const addToast = useGameStore((s) => s.addToast);

  const containerRef = useRef<HTMLDivElement>(null);
  const mapWrapperRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1.2);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    startPosX: 0,
    startPosY: 0,
  });

  const demoTimers = useRef<Record<string, number>>({});

  useEffect(() => {
    if (!hasSeenPrologue) {
      setOverlay('prologue');
    }
  }, [hasSeenPrologue, setOverlay]);

  // 限制拖拽边界
  const clampPos = useCallback(
    (nextScale: number, nextX: number, nextY: number) => {
      const container = containerRef.current;
      const wrapper = mapWrapperRef.current;
      if (!container || !wrapper) return { x: nextX, y: nextY };

      const cw = container.clientWidth;
      const ch = container.clientHeight;
      const img = wrapper.querySelector('img');
      const nw = img ? img.naturalWidth : 2388;
      const nh = img ? img.naturalHeight : 1544;
      const ratio = Math.min(cw / nw, ch / nh);
      const bw = nw * ratio * nextScale;
      const bh = nh * ratio * nextScale;

      const minX = Math.min(0, cw - bw);
      const maxX = Math.max(0, cw - bw);
      const minY = Math.min(0, ch - bh);
      const maxY = Math.max(0, ch - bh);

      return {
        x: Math.max(minX, Math.min(maxX, nextX)),
        y: Math.max(minY, Math.min(maxY, nextY)),
      };
    },
    []
  );

  // Pointer 拖拽
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if ((e.target as HTMLElement).closest('.landmark-marker')) return;
      (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
      dragState.current = {
        isDragging: true,
        startX: e.clientX,
        startY: e.clientY,
        startPosX: pos.x,
        startPosY: pos.y,
      };
    },
    [pos]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragState.current.isDragging) return;
      const dx = e.clientX - dragState.current.startX;
      const dy = e.clientY - dragState.current.startY;
      const next = clampPos(scale, dragState.current.startPosX + dx, dragState.current.startPosY + dy);
      setPos(next);
    },
    [scale, clampPos]
  );

  const handlePointerUp = useCallback(() => {
    dragState.current.isDragging = false;
  }, []);

  // 滚轮缩放
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      const nextScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale + delta));
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const ratio = nextScale / scale;
      const nextX = cx - (cx - pos.x) * ratio;
      const nextY = cy - (cy - pos.y) * ratio;
      setScale(nextScale);
      setPos(clampPos(nextScale, nextX, nextY));
    },
    [scale, pos, clampPos]
  );

  // 手势缩放（双指）
  const pinchRef = useRef({ active: false, startDist: 0, startScale: 1 });

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchRef.current = {
          active: true,
          startDist: Math.sqrt(dx * dx + dy * dy),
          startScale: scale,
        };
      }
    },
    [scale]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2 && pinchRef.current.active) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ratio = dist / (pinchRef.current.startDist || 1);
        const nextScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, pinchRef.current.startScale * ratio));
        setScale(nextScale);
      }
    },
    []
  );

  const handleTouchEnd = useCallback(() => {
    pinchRef.current.active = false;
  }, []);

  const handleLandmarkClick = (lmId: string, chapterId: ChapterId, locked: boolean) => {
    if (!locked) {
      startChapter(chapterId);
      return;
    }

    // 演示模式：三连击
    const count = recordDemoTap(lmId);
    if (count >= 3) {
      startChapter(chapterId);
      clearDemoTap(lmId);
      addToast('演示模式：跳过定位，直接进入剧情', 'info');
      return;
    }

    // 设置清除计时器
    if (demoTimers.current[lmId]) {
      window.clearTimeout(demoTimers.current[lmId]);
    }
    demoTimers.current[lmId] = window.setTimeout(() => {
      clearDemoTap(lmId);
    }, DEMO_TAP_WINDOW);
  };

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-[#c8b99a]">
      {/* 地图可拖拽区域 */}
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'none' }}
      >
        <div
          ref={mapWrapperRef}
          className="absolute top-0 left-0 will-change-transform"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            transformOrigin: '0 0',
            width: '100%',
            height: '100%',
          }}
        >
          {/* 地图底图 */}
          <img
            src="/assets/map.png"
            alt="西递地图"
            className="w-full h-full object-contain"
            draggable={false}
            style={{ maxHeight: 'none', maxWidth: 'none' }}
          />

          {/* 玩家小人 */}
          <motion.div
            className="absolute z-20"
            style={{ left: '48%', top: '82%' }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-8 h-8 rounded-full bg-dawn border-2 border-white shadow-lg flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-ink">
                <path d="M12 2a4 4 0 100 8 4 4 0 000-8zM6 14c0-2 2-3 6-3s6 1 6 3v1c0 2-2 3-6 3s-6-1-6-3v-1z" />
              </svg>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-black/20 rounded-full blur-[2px]" />
          </motion.div>

          {/* 地标标记 */}
          {landmarks.map((lm) => (
            <motion.button
              key={lm.id}
              className="absolute z-10 flex flex-col items-center landmark-marker"
              style={{ left: `${lm.x}%`, top: `${lm.y}%`, transform: 'translate(-50%, -50%)' }}
              onClick={() => handleLandmarkClick(lm.id, lm.chapterId, lm.locked)}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center border-2 transition-all ${
                  lm.locked
                    ? 'bg-white/40 border-white/30'
                    : lm.completed
                    ? 'bg-dawn border-white'
                    : 'bg-white/80 border-dawn animate-pulse-glow'
                }`}
                style={{ borderRadius: '50%' }}
              >
                <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
                  {lm.locked ? '🔒' : lm.name.charAt(0)}
                </span>
              </div>
              <span
                className={`mt-1 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap ${
                  lm.locked ? 'text-white/50 bg-black/30' : 'text-white bg-black/50'
                }`}
              >
                {lm.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* 常驻挂件 */}
      <Compass />
      <SideActions />

      {/* 顶部标题栏 */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-5 pointer-events-none">
        <div className="glass-panel px-5 py-2">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-serif)' }}>
            西递村导览图
          </h2>
        </div>
      </div>

      {/* Overlays */}
      <AnimatePresence>
        {activeOverlay === 'prologue' && <PrologueOverlay />}
        {activeOverlay === 'backpack' && <BackpackPanel />}
        {activeOverlay === 'encyclopedia' && <EncyclopediaPanel />}
        {activeOverlay === 'about' && <AboutOverlay />}
      </AnimatePresence>
    </div>
  );
}

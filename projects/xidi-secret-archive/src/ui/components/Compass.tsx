import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function requestOrientationPermission(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      (DeviceOrientationEvent as any).requestPermission()
        .then((response: string) => resolve(response === 'granted'))
        .catch(() => resolve(false));
    } else {
      resolve(true);
    }
  });
}

export function Compass() {
  const [heading, setHeading] = useState<number>(0);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const lastHeading = useRef(0);

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    let h = 0;
    const e = event as DeviceOrientationEvent & { webkitCompassHeading?: number };
    if (e.webkitCompassHeading != null) {
      h = e.webkitCompassHeading;
    } else if (event.alpha != null) {
      h = 360 - event.alpha;
    }
    // 平滑处理
    const diff = h - lastHeading.current;
    if (Math.abs(diff) > 180) {
      lastHeading.current += diff > 0 ? diff - 360 : diff + 360;
    } else {
      lastHeading.current = h;
    }
    setHeading(lastHeading.current);
  }, []);

  useEffect(() => {
    window.addEventListener('deviceorientationabsolute', handleOrientation as any, true);
    window.addEventListener('deviceorientation', handleOrientation as any, true);
    return () => {
      window.removeEventListener('deviceorientationabsolute', handleOrientation as any, true);
      window.removeEventListener('deviceorientation', handleOrientation as any, true);
    };
  }, [handleOrientation]);

  const handleClick = async () => {
    if (hasPermission === null) {
      const granted = await requestOrientationPermission();
      setHasPermission(granted);
    }
    setShowDetail((v) => !v);
  };

  const directions = ['北', '东北', '东', '东南', '南', '西南', '西', '西北'];
  const dirIndex = Math.round(heading / 45) % 8;
  const dirText = directions[dirIndex];

  return (
    <>
      <button
        className="absolute top-4 left-4 z-30 w-20 h-20 flex items-center justify-center"
        aria-label="罗盘"
        onClick={handleClick}
      >
        <div className="relative w-20 h-20">
          {/* 外圈 */}
          <div
            className="absolute inset-0 rounded-full border-2 border-[var(--border-strong)] bg-[var(--bg-glass)] backdrop-blur-sm"
            style={{
              boxShadow: 'inset 0 0 8px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.15)',
            }}
          >
            {/* 刻度 */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const isCardinal = i % 3 === 0;
              const x1 = 50 + 38 * Math.cos(angle);
              const y1 = 50 + 38 * Math.sin(angle);
              const x2 = 50 + (isCardinal ? 32 : 36) * Math.cos(angle);
              const y2 = 50 + (isCardinal ? 32 : 36) * Math.sin(angle);
              return (
                <svg
                  key={i}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                >
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={isCardinal ? '#8B0000' : 'var(--text-secondary)'}
                    strokeWidth={isCardinal ? 1.5 : 0.8}
                  />
                </svg>
              );
            })}
            {/* 方位字 */}
            <span
              className="absolute top-[3px] left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#8B0000]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              北
            </span>
            <span
              className="absolute bottom-[3px] left-1/2 -translate-x-1/2 text-[10px] font-bold text-[var(--text-secondary)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              南
            </span>
            <span
              className="absolute left-[3px] top-1/2 -translate-y-1/2 text-[10px] font-bold text-[var(--text-secondary)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              西
            </span>
            <span
              className="absolute right-[3px] top-1/2 -translate-y-1/2 text-[10px] font-bold text-[var(--text-secondary)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              东
            </span>
          </div>
          {/* 指针（随设备旋转） */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-linear"
            style={{ transform: `rotate(${-heading}deg)` }}
          >
            <div className="relative w-full h-full">
              <div
                className="absolute left-1/2 -translate-x-1/2 w-[2.5px]"
                style={{
                  top: '6px',
                  bottom: '50%',
                  background: 'linear-gradient(to top, #8B0000, #DC143C)',
                  borderRadius: '1px',
                }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 w-[2px]"
                style={{
                  top: '50%',
                  bottom: '6px',
                  background: 'linear-gradient(to bottom, #2A2F33, #5A6369)',
                  borderRadius: '1px',
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#8B0000] border border-white shadow-sm" />
            </div>
          </div>
        </div>
      </button>

      {/* 详情浮层 */}
      <AnimatePresence>
        {showDetail && (
          <motion.div
            className="absolute top-28 left-4 z-30 glass-panel px-4 py-3 min-w-[120px]"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm font-bold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-serif)' }}>
              {dirText} {Math.round(heading % 360)}°
            </p>
            <p className="text-[10px] text-[var(--text-secondary)] mt-1">
              {hasPermission === false ? '未获取方向权限，默认指向正北' : hasPermission === true ? '跟随设备方向' : '点击罗盘获取方向'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

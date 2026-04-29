import { useState, useEffect } from 'react';

export function useSafeArea() {
  const [safeArea, setSafeArea] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  useEffect(() => {
    const update = () => {
      const styles = getComputedStyle(document.documentElement);
      setSafeArea({
        top: parseInt(styles.getPropertyValue('--sat') || '0', 10),
        bottom: parseInt(styles.getPropertyValue('--sab') || '0', 10),
        left: parseInt(styles.getPropertyValue('--sal') || '0', 10),
        right: parseInt(styles.getPropertyValue('--sar') || '0', 10),
      });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return safeArea;
}

import { useGameStore } from '../../runtime/stores/gameStore';
import { AnimatePresence, motion } from 'framer-motion';

const toastStyles: Record<string, string> = {
  success: 'bg-[var(--accent-primary)] text-white',
  error: 'bg-alert text-white',
  info: 'bg-[var(--accent-mist)] text-[var(--text-primary)]',
  unlock: 'bg-dawn text-[var(--ink)]',
};

export function ToastContainer() {
  const toasts = useGameStore((s) => s.toasts);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 w-[90%] max-w-sm pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className={`px-4 py-3 text-sm font-medium text-center shadow-lg pointer-events-auto ${toastStyles[toast.type] || toastStyles.info}`}
          >
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

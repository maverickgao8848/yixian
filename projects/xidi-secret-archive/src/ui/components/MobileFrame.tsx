import type { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
  className?: string;
}

export function MobileFrame({ children, className = '' }: MobileFrameProps) {
  return (
    <div className="w-full min-h-[100dvh] flex justify-center bg-neutral-900">
      <div
        className={`mobile-frame w-full max-w-[430px] relative overflow-x-hidden ${className}`}
        data-theme="day"
      >
        {children}
      </div>
    </div>
  );
}

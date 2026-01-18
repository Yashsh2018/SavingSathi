// components/AdvancedLoader.tsx
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoaderProps {
  variant?: 'spinner' | 'dots' | 'pulse' | 'progress';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

/* tiny hook to avoid SSR flashes */
const useIsMounted = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return mounted;
};

const Loader: React.FC<LoaderProps> = ({
  variant = 'spinner',
  size = 'md',
  text = 'Loading...',
}) => {
  const isMounted = useIsMounted();
  const rootRef = useRef<HTMLDivElement>(null);

  /* ---------- size map (same as before) ---------- */
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  /* ---------- GSAP timelines per variant ---------- */
  useLayoutEffect(() => {
    if (!isMounted || !rootRef.current) return;

    const ctx = gsap.context(() => {
      switch (variant) {
        /* 3 dots stagger-bounce */
        case 'dots': {
          gsap.fromTo(
            '.dot',
            { y: 0 },
            {
              y: -24,
              duration: 0.4,
              stagger: 0.1,
              repeat: -1,
              yoyo: true,
              ease: 'power2.inOut',
            }
          );
          break;
        }

        /* pulse scale + opacity */
        case 'pulse': {
          gsap.fromTo(
            '.pulse',
            { scale: 0.85, opacity: 0.6 },
            {
              scale: 1.15,
              opacity: 1,
              duration: 1,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            }
          );
          break;
        }

        /* indeterminate progress bar */
        case 'progress': {
          const bar = gsap.utils.selector(rootRef.current)('.progress-bar');
          gsap.set(bar, { xPercent: -100 });
          gsap.to(bar, {
            xPercent: 100,
            duration: 1.5,
            repeat: -1,
            ease: 'none',
          });
          break;
        }

        /* rotating spinner */
        default: {
          gsap.to('.spinner-ring', {
            rotation: 360,
            duration: 1,
            repeat: -1,
            ease: 'none',
          });
        }
      }
    }, rootRef);

    /* cleanup on unmount or variant change */
    return () => ctx.revert();
  }, [variant, isMounted]);

  /* ---------- render helpers ---------- */
  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} bg-gradient-to-r from-rose-600 to-cyan-700 rounded-full dot`}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <div
            className={`${sizeClasses[size]} bg-gradient-to-r from-rose-600 to-cyan-700 rounded-full pulse`}
          />
        );

      case 'progress':
        return (
          <div className="w-48">
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-rose-600 to-cyan-700 rounded-full progress-bar" />
            </div>
          </div>
        );

      default:
        return (
          <div className="relative">
            <div className={`${sizeClasses[size]} border-4 border-gray-800 rounded-full`} />
            <div
              className={`${sizeClasses[size]} border-4 border-transparent rounded-full absolute top-0 left-0 border-t-rose-600 border-r-cyan-700 spinner-ring`}
            />
          </div>
        );
    }
  };

  return (
    <div ref={rootRef} className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        {renderLoader()}
        <p className="text-xl font-semibold bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Loader;
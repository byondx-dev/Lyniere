import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface WelcomeScreenProps {
  onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Counter animation - faster for shorter duration (~3.3 seconds total)
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800);
          }, 200);
          return 100;
        }
        return prev + 1;
      });
    }, 33); // Reduced from 50ms to 33ms (one third faster)

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
          {/* Minimal center content */}
          <div className="relative z-10 text-center">
            {/* Main logo text */}
            <div className="mb-20 overflow-hidden">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              >
                <h1 className="text-[clamp(4rem,15vw,16rem)] leading-none tracking-tighter">
                  LYNIÈRE
                </h1>
              </motion.div>
            </div>

            {/* Minimal progress indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col items-center gap-8"
            >
              {/* Counter */}
              <div className="text-xl tabular-nums tracking-[0.3em]" style={{ color: 'var(--color-text-muted)' }}>
                {String(count).padStart(2, '0')}
              </div>

              {/* Minimal line */}
              <div className="w-32 h-[1px] overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
                <motion.div
                  className="h-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${count}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Subtle fade overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: `radial-gradient(circle at center, transparent 0%, var(--color-bg-primary) 100%)`
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface WelcomeScreenProps {
  onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Block scrolling while welcome screen is active
    document.body.style.overflow = 'hidden';
    
    const startTime = performance.now();
    const DURATION = 5000; // 5 seconds exactly

    const updateProgress = () => {
      const now = performance.now();
      const elapsed = now - startTime;
      const newProgress = Math.min(100, (elapsed / DURATION) * 100);

      setProgress(newProgress);

      if (elapsed < DURATION) {
        requestAnimationFrame(updateProgress);
      } else {
        // Animation complete
        setIsComplete(true);
        setTimeout(() => {
          // Restore scrolling before unmounting/onComplete
          document.body.style.overflow = '';
          onComplete();
        }, 800); // Short exit buffer
      }
    };

    const animationFrame = requestAnimationFrame(updateProgress);
    return () => {
      cancelAnimationFrame(animationFrame);
      // Ensure scrolling is restored if component unmounts prematurely
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{
            backgroundColor: '#808080', // A neutral grey fallback
            backgroundImage: 'radial-gradient(circle, #a0a0a0 0%, #606060 100%)' // A matte-like gradient
          }}
        >
          <div className="relative z-10 flex flex-col items-center w-full max-w-[300px]">
            {/* Brand - Pure White */}
            <motion.h1 
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.2em", opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-light mb-12 tracking-[0.2em] text-center text-white"
            >
              LYNIÈRE
            </motion.h1>

            {/* Loading Line - White Track */}
            <div className="w-full h-[2px] bg-white/20 relative overflow-hidden rounded-full">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage - White/Opacity */}
            <div className="w-full flex justify-between mt-3 text-[10px] uppercase tracking-widest text-white/60">
              <span>Initializing System</span>
              <span className="tabular-nums">{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

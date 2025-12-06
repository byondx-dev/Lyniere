import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { TechnicalDrawing } from "./TechnicalDrawing";
import { ScrollTextFill } from "./ScrollTextFill";
import { AnimatedBackground } from "./AnimatedBackground";

interface ModernHeroProps {
  onNavigate: (page: string) => void;
}

export function ModernHero({ onNavigate }: ModernHeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Images */}
      <AnimatedBackground />

      {/* Technical Architectural Drawings */}
      <TechnicalDrawing />

      {/* Nano Particles behind text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => {
          const randomDelay = Math.random() * 5;
          const randomDuration = 3 + Math.random() * 4;
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomSize = 1 + Math.random() * 3;
          const moveRange = 50 + Math.random() * 100;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                backgroundColor: 'var(--color-accent)',
                filter: 'blur(1px)',
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0.3, 0.6, 0],
                scale: [0.5, 1.5, 1, 1.5, 0.5],
                x: [0, Math.sin(i) * moveRange, 0],
                y: [0, Math.cos(i) * moveRange, 0],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                repeatType: "loop",
                delay: randomDelay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <motion.div className="mb-12 overflow-hidden">
            <h1 className="leading-none">
              <motion.span
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="block"
              >
                INTELLIGENT
              </motion.span>
            </h1>
            <h1 className="leading-none">
              <motion.span
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ delay: 1.4, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="block text-stroke-fill"
              >
                Smart Home
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-sm md:text-base max-w-md mx-auto mb-16 tracking-wider"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Where smart architecture dissolves into a better life
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-4"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
              className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-accent)] to-transparent"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 opacity-10"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full" style={{ border: '1px solid var(--color-accent)' }} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-48 h-48 opacity-5"
        animate={{
          y: [0, 40, 0],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        <div className="w-full h-full" style={{ border: '1px solid var(--color-accent)', clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }} />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}
      />
    </section>
  );
}
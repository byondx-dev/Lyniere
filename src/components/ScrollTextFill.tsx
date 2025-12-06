import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef, ReactNode } from "react";

interface ScrollTextFillProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollTextFill({ children, className = "", delay = 0 }: ScrollTextFillProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"]
  });

  // Transform scroll progress to fill percentage with delay
  const fillProgress = useTransform(
    scrollYProgress,
    [0 + delay, 1],
    [0, 100]
  );

  return (
    <motion.span ref={ref} className={`relative inline-block ${className}`}>
      {/* Base text - outline/muted */}
      <span
        className="relative"
        style={{
          color: 'var(--color-text-muted)',
          WebkitTextStroke: '1px var(--color-text-muted)',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {children}
      </span>

      {/* Fill text - colored overlay */}
      <motion.span
        className="absolute top-0 left-0 overflow-hidden"
        style={{
          width: '100%',
          clipPath: useTransform(fillProgress, (v) => `inset(0 ${100 - v}% 0 0)`),
        }}
      >
        <span
          style={{
            color: 'var(--color-text-primary)',
            background: 'linear-gradient(90deg, var(--color-accent), var(--color-text-primary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {children}
        </span>
      </motion.span>
    </motion.span>
  );
}

interface ScrollParagraphFillProps {
  text: string;
  className?: string;
}

export function ScrollParagraphFill({ text, className = "" }: ScrollParagraphFillProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"]
  });

  const words = text.split(' ');

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => {
        const wordDelay = index / words.length;
        const wordProgress = useTransform(
          scrollYProgress,
          [wordDelay, wordDelay + 0.3],
          [0, 1]
        );

        return (
          <motion.span
            key={index}
            className="inline-block mr-[0.3em]"
            style={{
              opacity: wordProgress,
              color: useTransform(
                wordProgress,
                [0, 1],
                ['var(--color-text-muted)', 'var(--color-text-primary)']
              ) as any,
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}
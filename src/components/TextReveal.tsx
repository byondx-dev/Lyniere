import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ScrollTextFill, ScrollParagraphFill } from "./ScrollTextFill";

export function TextReveal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 1, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [0, 1, 1]);

  const y1 = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.6], [100, 0]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.8], [100, 0]);

  return (
    <section ref={containerRef} className="relative py-60 overflow-hidden">
      <div className="container-luxury">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Statement 1 */}
          <motion.div
            style={{ y: y1 }}
            className="relative"
          >
            <h2 className="mb-8">
              <ScrollTextFill>Architecture that</ScrollTextFill>
              <br />
              <ScrollTextFill delay={0.1}>learns</ScrollTextFill>
            </h2>
            <ScrollParagraphFill 
              text="Every room understands context. Morning routines. Evening moods. The subtle shift between work and rest."
              className="text-2xl max-w-3xl"
            />
          </motion.div>

          {/* Statement 2 */}
          <motion.div
            style={{ y: y2 }}
            className="relative text-right"
          >
            <h2 className="mb-8">
              <ScrollTextFill>Technology that</ScrollTextFill>
              <br />
              <ScrollTextFill delay={0.1}>disappears</ScrollTextFill>
            </h2>
            <ScrollParagraphFill 
              text="No screens. No switches. No interruptions. Just pure, frictionless living."
              className="text-2xl max-w-3xl ml-auto"
            />
          </motion.div>

          {/* Statement 3 */}
          <motion.div
            style={{ y: y3 }}
            className="relative"
          >
            <h2 className="mb-8">
              <ScrollTextFill>Experiences that</ScrollTextFill>
              <br />
              <ScrollTextFill delay={0.1}>elevate</ScrollTextFill>
            </h2>
            <ScrollParagraphFill 
              text="This is luxury redefined. Not by what you own, but by how you feel."
              className="text-2xl max-w-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Animated line element */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[60%] w-[1px] bg-gradient-to-b from-transparent to-transparent"
        style={{ 
          opacity: scrollYProgress,
          background: 'linear-gradient(to bottom, transparent, var(--color-accent), transparent)'
        }}
      />
    </section>
  );
}
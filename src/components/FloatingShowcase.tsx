import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const showcaseItems = [
  {
    title: "Living Spaces",
    stat: "50+",
    label: "Installations",
    description: "Residences that breathe intelligence"
  },
  {
    title: "Global Reach",
    stat: "15",
    label: "Markets",
    description: "Redefining luxury worldwide"
  },
  {
    title: "Precision",
    stat: "100%",
    label: "Tailored",
    description: "Every detail, perfectly yours"
  }
];

export function FloatingShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={containerRef} className="relative py-60 overflow-hidden">
      {/* Background elements */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute left-1/4 top-1/4 w-96 h-96 opacity-5"
      >
        <div className="w-full h-full rounded-full" style={{ border: '1px solid var(--color-accent)' }} />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute right-1/4 bottom-1/4 w-64 h-64 opacity-5"
      >
        <div className="w-full h-full" style={{ border: '1px solid var(--color-accent)' }} />
      </motion.div>

      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Floating card */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Glass panel */}
                <div className="glass-panel p-12 relative overflow-hidden">
                  {/* Animated gradient on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'linear-gradient(135deg, var(--ambient-glow-1), transparent)' }}
                  />

                  <div className="relative z-10">
                    {/* Label */}
                    <motion.span 
                      className="text-xs tracking-[0.3em] uppercase block mb-8"
                      style={{ color: 'var(--color-text-muted)' }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.title}
                    </motion.span>

                    {/* Stat */}
                    <motion.div 
                      className="text-8xl md:text-9xl mb-4 leading-none"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-gradient-gold">{item.stat}</span>
                    </motion.div>

                    {/* Stat Label */}
                    <div className="text-2xl tracking-wider mb-8" style={{ color: 'var(--color-text-primary)' }}>
                      {item.label}
                    </div>

                    {/* Description */}
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      {item.description}
                    </p>

                    {/* Animated line */}
                    <motion.div
                      className="mt-8 h-[1px] bg-gradient-to-r from-[var(--color-accent)] to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      viewport={{ once: true }}
                      style={{ originX: 0 }}
                    />
                  </div>

                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      borderTop: '2px solid var(--color-accent)',
                      borderRight: '2px solid var(--color-accent)'
                    }}
                  />
                </div>

                {/* Floating number indicator */}
                <motion.div
                  className="absolute -top-8 -right-8 w-16 h-16 glass-panel rounded-full flex items-center justify-center text-2xl"
                  style={{ color: 'var(--color-accent)' }}
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.3
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
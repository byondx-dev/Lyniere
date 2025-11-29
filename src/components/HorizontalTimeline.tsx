import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const timelineData = [
  {
    year: "2021",
    title: "Foundation",
    description: "Following conversations with global leaders, it became clear that luxury living lacked the intelligence to support modern wellbeing on a holistic scale.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    year: "2022",
    title: "Vision Realized",
    description: "Initial visioning and feasibility work began - mapping opportunities for integrated systems, wellness architecture and stakeholder engagement.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    year: "2023",
    title: "First Installations",
    description: "Concept development and implementation across multiple residences - opportunities for seamless technology integration and adaptive environments.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Scaling intelligent luxury worldwide - establishing presence in key markets while maintaining our commitment to personalized excellence.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
  }
];

export function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [hasPlayedInitialAnimation, setHasPlayedInitialAnimation] = useState(false);

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && dragRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = dragRef.current.scrollWidth;
        const maxDrag = -(contentWidth - containerWidth + 100); // +100 for padding
        setDragConstraints({ left: maxDrag, right: 0 });
      }
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  return (
    <section className="relative py-40 overflow-hidden">
      <div className="container-luxury mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-[var(--color-text-muted)] block mb-8">
            Our History
          </span>
          <h2 className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="block"
            >
              Our project
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="block"
            >
              timeline
            </motion.span>
          </h2>
        </motion.div>
      </div>

      {/* Draggable Horizontal Scroll Container */}
      <div ref={containerRef} className="relative overflow-hidden cursor-grab active:cursor-grabbing py-20">
        <motion.div
          ref={dragRef}
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          initial={{ x: 0 }}
          animate={hasPlayedInitialAnimation ? {} : { x: -200 }}
          onAnimationComplete={() => setHasPlayedInitialAnimation(true)}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="flex items-center gap-8 pl-[clamp(2rem,8vw,8rem)] pr-[clamp(2rem,8vw,8rem)]"
        >
          {timelineData.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-shrink-0 w-[450px] md:w-[380px] sm:w-[320px] group"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ y: -15, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="relative h-full rounded-[2rem] overflow-hidden"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
                  }}
                >
                  {/* Image Container */}
                  <div 
                    className="relative overflow-hidden h-[380px] md:h-[320px] sm:h-[280px]"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

                    {/* Year Badge on Image */}
                    <motion.div
                      className="absolute top-6 left-6 px-6 py-2.5 rounded-full text-sm tracking-wider"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: 'white'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.year}
                    </motion.div>

                    {/* Number Badge */}
                    <motion.div
                      className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                      style={{
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-bg-primary)',
                        fontWeight: '600'
                      }}
                      animate={{
                        y: [0, -8, 0]
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
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-6 sm:p-5">
                    <h3 className="mb-3 text-2xl md:text-xl">{item.title}</h3>
                    <p 
                      className="text-sm leading-relaxed md:text-xs"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {item.description}
                    </p>

                    {/* Accent Line */}
                    <motion.div
                      className="mt-6 h-[2px] rounded-full"
                      style={{ 
                        background: `linear-gradient(to right, var(--color-accent), transparent)`,
                        originX: 0
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Hover Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                    style={{ 
                      border: `1px solid var(--color-accent)`,
                      boxShadow: `0 0 40px var(--color-accent)20`
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}

          {/* End padding */}
          <div className="flex-shrink-0 w-[100px]" />
        </motion.div>
      </div>

      {/* Drag indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        viewport={{ once: true }}
        className="container-luxury mt-16 flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)]"
      >
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
          className="w-16 h-[1px] bg-[var(--color-accent)]"
        />
        <span>Drag to explore timeline</span>
      </motion.div>
    </section>
  );
}
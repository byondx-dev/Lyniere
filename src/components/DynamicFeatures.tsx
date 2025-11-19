import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Circle, Waves, Eye, Fingerprint, Zap } from "lucide-react";

const features = [
  {
    icon: Circle,
    number: "01",
    title: "Adaptive Environment",
    description: "Your space learns, adjusts, anticipates"
  },
  {
    icon: Waves,
    number: "02", 
    title: "Atmospheric Control",
    description: "Light, sound, climate orchestrated as one"
  },
  {
    icon: Eye,
    number: "03",
    title: "Invisible Interface",
    description: "Technology that fades into architecture"
  },
  {
    icon: Fingerprint,
    number: "04",
    title: "Biometric Flow",
    description: "Recognition without interruption"
  },
  {
    icon: Zap,
    number: "05",
    title: "Predictive Systems",
    description: "Needs met before you know them"
  }
];

export function DynamicFeatures() {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="relative py-40 overflow-hidden">
      <div className="container-luxury">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] uppercase block mb-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Capabilities
          </motion.span>
          <h2 className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="block"
            >
              Beyond
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="block text-stroke"
            >
              Interface
            </motion.span>
          </h2>
        </motion.div>

        {/* Features List */}
        <div className="relative">
          {/* Floating transparent bubble elements - Awwards style */}
          <motion.div
            className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, var(--color-accent)08 0%, transparent 70%)',
              border: '1px solid var(--color-accent)15',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, var(--color-accent)06 0%, transparent 70%)',
              border: '1px solid var(--color-accent)12',
              backdropFilter: 'blur(60px)',
              WebkitBackdropFilter: 'blur(60px)',
            }}
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isHovered = hoveredIndex === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative"
                >
                  <motion.div
                    className="relative p-8 lg:p-12 rounded-[2.5rem] overflow-hidden"
                    style={{
                      background: 'var(--color-bg-secondary)95',
                      border: '1px solid var(--color-border)60',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                    }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.01
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    {/* Subtle gradient orb on hover */}
                    <motion.div
                      className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, var(--color-accent)15, transparent 70%)`,
                      }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Minimalist floating number badge */}
                    <motion.div
                      className="absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-sm tracking-wider"
                      style={{
                        backgroundColor: 'var(--color-accent)10',
                        border: '1px solid var(--color-accent)30',
                        color: 'var(--color-accent)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                      }}
                      animate={{
                        y: isHovered ? -4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.number}
                    </motion.div>

                    {/* Clean icon with minimal container */}
                    <motion.div
                      className="mb-8 inline-flex"
                      animate={{
                        scale: isHovered ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="p-5 rounded-full"
                        style={{
                          backgroundColor: 'var(--color-accent)08',
                          border: '1px solid var(--color-accent)20',
                        }}
                      >
                        <Icon 
                          className="w-8 h-8"
                          style={{ 
                            color: 'var(--color-accent)',
                          }}
                          strokeWidth={1.5}
                        />
                      </div>
                    </motion.div>

                    {/* Content with generous spacing */}
                    <div className="relative z-10 space-y-4">
                      <h3 className="text-2xl">
                        {feature.title}
                      </h3>
                      
                      <p 
                        className="text-base leading-relaxed max-w-md"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {feature.description}
                      </p>

                      {/* Minimal accent line */}
                      <motion.div
                        className="h-[1px] w-16 rounded-full mt-6"
                        style={{ 
                          backgroundColor: 'var(--color-accent)',
                        }}
                        animate={{
                          width: isHovered ? '80px' : '40px',
                          opacity: isHovered ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Subtle border glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                      style={{
                        border: '1px solid var(--color-accent)40',
                      }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Floating transparent pills inside cards */}
                    <motion.div
                      className="absolute bottom-8 left-8 w-32 h-8 rounded-full pointer-events-none"
                      style={{
                        background: 'var(--color-accent)05',
                        border: '1px solid var(--color-accent)15',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                      }}
                      animate={{
                        x: isHovered ? 10 : 0,
                        opacity: isHovered ? 0.8 : 0.3,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    <motion.div
                      className="absolute top-1/2 right-12 w-20 h-20 rounded-full pointer-events-none"
                      style={{
                        background: 'var(--color-accent)03',
                        border: '1px solid var(--color-accent)10',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                      }}
                      animate={{
                        scale: isHovered ? 1.2 : 1,
                        opacity: isHovered ? 0.6 : 0.2,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom border */}
        <div style={{ borderTop: '1px solid var(--color-border)', marginTop: '4px' }} />
      </div>

      {/* Floating element */}
      <motion.div
        className="absolute right-0 top-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full" style={{ border: '1px solid var(--color-accent)' }} />
      </motion.div>
    </section>
  );
}
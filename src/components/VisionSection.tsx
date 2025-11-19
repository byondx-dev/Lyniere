import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const visionStatements = [
    {
      text: "Where intelligence becomes invisible",
      subtitle: "Technology that adapts to you, not the other way around"
    },
    {
      text: "Architecture that breathes with purpose",
      subtitle: "Every surface, every light, every moment — orchestrated"
    },
    {
      text: "Tomorrow's living, refined today",
      subtitle: "The future of luxury is not what you see, but what you feel"
    }
  ];

  return (
    <section id="vision" ref={ref} className="relative py-32 md:py-40 bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a]">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-[#00d4ff] mb-6 block">
            Vision
          </span>
          <h2 className="text-gradient-platinum">
            A New Era of Living
          </h2>
        </motion.div>

        {/* Vision Statements */}
        <div className="grid grid-cols-1 gap-32">
          {visionStatements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2, duration: 1 }}
              className="relative"
            >
              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.2, duration: 1.5 }}
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#00d4ff] to-transparent origin-top"
              />

              <div className="max-w-4xl mx-auto text-center">
                <h3 className="mb-6">
                  {statement.text}
                </h3>
                <p className="text-xl md:text-2xl text-[#a8d8ea] tracking-wide">
                  {statement.subtitle}
                </p>
              </div>

              {/* Ambient glow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.2, duration: 1.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[rgba(0,212,255,0.03)] blur-[100px] rounded-full pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Architectural Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="mt-32 relative"
        >
          <div className="relative overflow-hidden group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1738666830238-68874364293d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGFyayUyMGludGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzI4MzEyMnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Futuristic architecture"
              className="w-full h-[600px] object-cover"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Border glow effect */}
            <div className="absolute inset-0 border border-[rgba(255,255,255,0.1)] group-hover:border-[rgba(0,212,255,0.3)] transition-colors duration-700" />
          </div>

          {/* Quote overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.8, duration: 1 }}
            className="absolute bottom-12 left-12 right-12 glass-panel p-8 md:p-12"
          >
            <p className="text-xl md:text-2xl tracking-wide text-center italic">
              "Luxury is not what you own. It's what owns your attention."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

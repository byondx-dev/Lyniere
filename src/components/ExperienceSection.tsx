import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-40 md:py-56 bg-[#0a0a0a] overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[rgba(0,212,255,0.05)] blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[rgba(247,231,206,0.03)] blur-[150px] rounded-full" />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="glass-panel p-12 md:p-20 relative"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[rgba(0,212,255,0.3)]" />
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[rgba(0,212,255,0.3)]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[rgba(0,212,255,0.3)]" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[rgba(0,212,255,0.3)]" />

            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xs tracking-[0.5em] uppercase text-[#00d4ff] mb-8 block"
            >
              Ready to Experience the Future?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-gradient-platinum mb-8"
            >
              Request Your Private Tour
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 1 }}
              className="text-xl md:text-2xl text-[#a8d8ea] mb-12 tracking-wide leading-relaxed"
            >
              Experience Lynière in person. Our design consultants will guide you through 
              a curated journey of intelligent luxury tailored to your vision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="glass-panel px-12 py-5 border-glow group relative overflow-hidden"
              >
                <span className="relative z-10 text-sm tracking-[0.25em] uppercase">
                  Schedule Experience
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 via-[#00d4ff]/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="glass-panel px-12 py-5 border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-colors group relative overflow-hidden"
              >
                <span className="relative z-10 text-sm tracking-[0.25em] uppercase text-[#c0c0c0] group-hover:text-white transition-colors">
                  Download Brochure
                </span>
              </motion.button>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3, duration: 1 }}
              className="mt-12 text-sm text-[#808080] tracking-widest uppercase"
            >
              Available in Select Global Markets
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {[
              { number: "50+", label: "Luxury Installations" },
              { number: "15", label: "Global Markets" },
              { number: "100%", label: "Custom Tailored" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.8 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-gradient-gold mb-3">
                  {stat.number}
                </div>
                <div className="text-sm tracking-[0.2em] uppercase text-[#c0c0c0]">
                  {stat.label}
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 2 + index * 0.1, duration: 0.8 }}
                  className="mt-4 h-[1px] w-20 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const materials = [
  {
    name: "Polished Marble",
    description: "Timeless elegance, digitally enhanced",
    image: "https://images.unsplash.com/photo-1760742841729-bd7e10dac897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpc2hlZCUyMG1hcmJsZSUyMHN1cmZhY2UlMjBjbG9zZXVwfGVufDF8fHx8MTc2MzI4MzEyNHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Brushed Metal",
    description: "Industrial precision, refined luxury",
    image: "https://images.unsplash.com/photo-1662826323790-47114fdb8c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzaGVkJTIwbWV0YWwlMjB0ZXh0dXJlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MzI4MzEyNnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Smoked Glass",
    description: "Transparency reimagined",
    image: "https://images.unsplash.com/photo-1594383826312-1caed424fbbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9rZWQlMjBnbGFzcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjMyODMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function MaterialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-40 bg-[#0a0a0a]">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-[#00d4ff] mb-6 block">
            Materials & Architecture
          </span>
          <h2 className="text-gradient-platinum mb-8">
            Crafted Perfection
          </h2>
          <p className="text-xl md:text-2xl text-[#c0c0c0] max-w-3xl mx-auto tracking-wide mb-12">
            Technology disappears into architecture
          </p>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="group relative"
            >
              {/* Material Image */}
              <div className="relative h-[500px] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={material.image}
                    alt={material.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                {/* Border with glow */}
                <div className="absolute inset-0 border border-[rgba(255,255,255,0.05)] group-hover:border-[rgba(0,212,255,0.3)] transition-colors duration-700" />

                {/* Material info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.8 }}
                  >
                    <h4 className="mb-3">
                      {material.name}
                    </h4>
                    <p className="text-[#a8d8ea] tracking-wide">
                      {material.description}
                    </p>

                    {/* Hover line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                      className="mt-4 h-[1px] w-full bg-gradient-to-r from-[#00d4ff] via-[#00d4ff]/50 to-transparent origin-left"
                    />
                  </motion.div>
                </div>

                {/* Scanline effect on hover */}
                <motion.div
                  initial={{ y: "-100%" }}
                  whileHover={{ y: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-32 relative"
        >
          <div className="glass-panel p-12 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden">
            {/* Ambient glow background */}
            <div className="absolute inset-0 bg-gradient-radial from-[rgba(0,212,255,0.05)] to-transparent opacity-50" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 1 }}
              className="relative z-10"
            >
              <h3 className="mb-8">
                Where Form Meets Function
              </h3>
              <p className="text-xl md:text-2xl text-[#a8d8ea] tracking-wide leading-relaxed">
                Every surface is a canvas. Every texture a dialogue between tradition and innovation. 
                Lynière doesn't add technology to luxury — it weaves intelligence into the very fabric of design.
              </p>

              {/* Decorative elements */}
              <div className="flex justify-center gap-4 mt-12">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                    className="h-[2px] w-16 bg-gradient-to-r from-[#00d4ff] to-transparent origin-left"
                  />
                ))}
              </div>
            </motion.div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-[rgba(0,212,255,0.3)]" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-[rgba(0,212,255,0.3)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

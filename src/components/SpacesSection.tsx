import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const spaces = [
  {
    title: "Living Sanctuary",
    subtitle: "Where comfort meets consciousness",
    image: "https://images.unsplash.com/photo-1759774310455-80dba1348cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwZGFya3xlbnwxfHx8fDE3NjMyODMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Wellness Suite",
    subtitle: "Restoration as ritual",
    image: "https://images.unsplash.com/photo-1714648775477-a15cc5aed21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWxsbmVzcyUyMHNwYSUyMGRhcmt8ZW58MXx8fHwxNzYzMjgzMTIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Private Cinema",
    subtitle: "Immersion without distraction",
    image: "https://images.unsplash.com/photo-1710131459450-7c384b8be18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwaG9tZSUyMGNpbmVtYSUyMGx1eHVyeXxlbnwxfHx8fDE3NjMyODMxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Sky Penthouse",
    subtitle: "The city at your feet, the stars in reach",
    image: "https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjMyODMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function SpacesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="spaces" ref={ref} className="relative py-32 md:py-40 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-[#00d4ff] mb-6 block">
            Spaces
          </span>
          <h2 className="text-gradient-platinum mb-8">
            Environments Enhanced
          </h2>
          <p className="text-xl md:text-2xl text-[#c0c0c0] max-w-3xl mx-auto tracking-wide">
            Every room tells a story. Lynière writes the next chapter.
          </p>
        </motion.div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          {spaces.map((space, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group cursor-pointer overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-[600px] overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-t from-[rgba(0,212,255,0.2)] to-transparent"
                />

                {/* Border */}
                <div className="absolute inset-0 border border-[rgba(255,255,255,0.05)] group-hover:border-[rgba(0,212,255,0.3)] transition-colors duration-700" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.div
                    animate={{
                      y: hoveredIndex === index ? -10 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="mb-4">
                      {space.title}
                    </h3>
                    <p className="text-lg md:text-xl text-[#a8d8ea] tracking-wide">
                      {space.subtitle}
                    </p>

                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.6 }}
                      className="mt-6 h-[2px] w-24 bg-gradient-to-r from-[#00d4ff] to-transparent origin-left"
                    />
                  </motion.div>

                  {/* Glass info panel - appears on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20
                    }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="glass-panel mt-6 p-6"
                  >
                    <p className="text-sm tracking-wider uppercase text-[#c0c0c0]">
                      Explore This Space
                    </p>
                  </motion.div>
                </div>

                {/* Corner accents */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#00d4ff]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="glass-panel px-12 py-4 border-glow group relative overflow-hidden"
          >
            <span className="relative z-10 text-sm tracking-[0.25em] uppercase">
              View All Projects
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

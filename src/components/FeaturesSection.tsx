import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Lightbulb, Thermometer, Volume2, Eye, Fingerprint } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Lightbulb,
    title: "Adaptive Ambient Light",
    description: "Your space reads the moment. Dawn. Dusk. Focus. Rest.",
    image: "https://images.unsplash.com/photo-1758607009840-d1f10bd4c799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhbWJpZW50JTIwbGlnaHRpbmclMjByb29tfGVufDF8fHx8MTc2MzI4MzEyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-[#00d4ff]/20 to-transparent"
  },
  {
    icon: Thermometer,
    title: "Context-Aware Climate",
    description: "Temperature, humidity, air quality. Invisible precision.",
    image: "https://images.unsplash.com/photo-1661099548744-6533e04eb6de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzbWFydCUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMyODMxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-[#d4af37]/20 to-transparent"
  },
  {
    icon: Volume2,
    title: "Invisible Audio",
    description: "Sound that follows you. Silence that protects you.",
    image: "https://images.unsplash.com/photo-1710131459450-7c384b8be18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwaG9tZSUyMGNpbmVtYSUyMGx1eHVyeXxlbnwxfHx8fDE3NjMyODMxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-[#a8d8ea]/20 to-transparent"
  },
  {
    icon: Eye,
    title: "Smart Privacy Glass",
    description: "Transparency on demand. Your world, your terms.",
    image: "https://images.unsplash.com/photo-1594383826312-1caed424fbbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9rZWQlMjBnbGFzcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjMyODMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-[#ffffff]/10 to-transparent"
  },
  {
    icon: Fingerprint,
    title: "Biometric Access",
    description: "Recognition without gesture. Entry without friction.",
    image: "https://images.unsplash.com/photo-1740030325891-c8cf49628acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwZW50aG91c2UlMjBjaXR5c2NhcGUlMjBuaWdodHxlbnwxfHx8fDE3NjMyODMxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-[#f7e7ce]/20 to-transparent"
  }
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="relative py-32 md:py-40 bg-[#0a0a0a] overflow-hidden">
      {/* Background ambient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212] to-transparent opacity-50" />

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-[#00d4ff] mb-6 block">
            Intelligent Luxury
          </span>
          <h2 className="text-gradient-platinum mb-8">
            Beyond Technology
          </h2>
          <p className="text-xl md:text-2xl text-[#c0c0c0] max-w-3xl mx-auto tracking-wide">
            Experience over interface. Intuition over instruction.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-24 md:gap-32 mt-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 1 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:flex-row-reverse"}`}
              >
                {/* Image */}
                <div className={`relative group ${isEven ? "md:order-2" : "md:order-1"}`}>
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-[500px] object-cover"
                      />
                    </motion.div>

                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-${isEven ? "r" : "l"} ${feature.gradient}`} />
                    
                    {/* Border */}
                    <div className="absolute inset-0 border border-[rgba(255,255,255,0.05)] group-hover:border-[rgba(0,212,255,0.2)] transition-colors duration-700" />

                    {/* Animated corner accents */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00d4ff] transition-opacity"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#00d4ff] transition-opacity"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.2, duration: 1 }}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-block mb-8 p-4 glass-panel border-glow"
                    >
                      <Icon className="w-8 h-8 text-[#00d4ff]" strokeWidth={1.5} />
                    </motion.div>

                    <h3 className="mb-6">
                      {feature.title}
                    </h3>
                    
                    <p className="text-xl md:text-2xl text-[#a8d8ea] tracking-wide leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                      className="mt-8 h-[1px] w-32 bg-gradient-to-r from-[#00d4ff] to-transparent origin-left"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

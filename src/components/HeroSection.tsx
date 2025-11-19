import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1744000311067-32352920a834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBuaWdodCUyMGludGVyaW9yfGVufDF8fHx8MTc2MzI4MzEyMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Lynière luxury penthouse interior"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        {/* Ambient glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-[rgba(0,212,255,0.08)] via-transparent to-transparent" />
      </motion.div>

      {/* Glass UI Overlay - Top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-0 left-0 right-0 z-10"
      >
        <div className="container-luxury py-8 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-gradient-platinum tracking-[0.3em] cursor-pointer"
          >
            LYNIÈRE
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-12">
            {["Vision", "Features", "Spaces", "Experience"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-sm tracking-[0.2em] uppercase text-[#c0c0c0] hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <h1 className="mb-8 glow-text">
              Lynière
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-2xl md:text-4xl tracking-[0.2em] uppercase mb-12 text-[#a8d8ea]"
            >
              Live Tomorrow. Today.
            </motion.p>

            {/* Glass CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel px-12 py-4 rounded-none border-glow group relative overflow-hidden"
            >
              <span className="relative z-10 text-sm tracking-[0.25em] uppercase">
                Request Private Experience
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
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-[#c0c0c0]">Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-[#00d4ff]" />
        </motion.div>
      </motion.div>

      {/* Ambient animated lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.3)] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.2)] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2, duration: 2 }}
        />
      </div>
    </section>
  );
}
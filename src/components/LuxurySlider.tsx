import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const SLIDER_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbHV4dXJ5JTIwaG9tZSUyMGludGVyaW9yfGVufDF8fHx8MTc2MzM3MTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Futuristic Living",
    subtitle: "Where luxury meets technology"
  },
  {
    url: "https://images.unsplash.com/photo-1616632821499-61ac29f49ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydCUyMGhvbWUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYzMzcxMzkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Smart Architecture",
    subtitle: "Designed for tomorrow"
  },
  {
    url: "https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbHV4dXJ5JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzYzMzcxMzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Minimal Elegance",
    subtitle: "Refined to perfection"
  },
  {
    url: "https://images.unsplash.com/photo-1576425992375-833883be0039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwYXBhcnRtZW50JTIwbmlnaHR8ZW58MXx8fHwxNzYzMzcxMzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Urban Sanctuary",
    subtitle: "Elevated living experience"
  }
];

export function LuxurySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return SLIDER_IMAGES.length - 1;
      if (next >= SLIDER_IMAGES.length) return 0;
      return next;
    });
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-20"
        >
          <span 
            className="text-xs tracking-[0.4em] uppercase block mb-4"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Our Spaces
          </span>
          <h2 className="text-4xl lg:text-5xl">Experience Lynière</h2>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div 
            className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden"
            style={{
              height: '60vh',
              minHeight: '500px',
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={SLIDER_IMAGES[currentIndex].url}
                  alt={SLIDER_IMAGES[currentIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                  }}
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <h3 className="text-3xl lg:text-5xl mb-3 text-white">
                      {SLIDER_IMAGES[currentIndex].title}
                    </h3>
                    <p className="text-lg lg:text-xl text-white/80">
                      {SLIDER_IMAGES[currentIndex].subtitle}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center z-10 group"
              style={{
                backgroundColor: 'var(--color-bg-secondary)90',
                border: '1px solid var(--color-border)60',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1, backgroundColor: 'var(--color-accent)20' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft 
                className="w-6 h-6 group-hover:text-[var(--color-accent)] transition-colors"
                style={{ color: 'var(--color-text-primary)' }}
              />
            </motion.button>

            <motion.button
              className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center z-10 group"
              style={{
                backgroundColor: 'var(--color-bg-secondary)90',
                border: '1px solid var(--color-border)60',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1, backgroundColor: 'var(--color-accent)20' }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight 
                className="w-6 h-6 group-hover:text-[var(--color-accent)] transition-colors"
                style={{ color: 'var(--color-text-primary)' }}
              />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {SLIDER_IMAGES.map((_, index) => (
              <motion.button
                key={index}
                className="relative"
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === currentIndex 
                      ? 'var(--color-accent)' 
                      : 'var(--color-border)',
                    width: index === currentIndex ? '2rem' : '0.5rem',
                  }}
                />
              </motion.button>
            ))}
          </div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, var(--color-accent)08 0%, transparent 70%)',
              border: '1px solid var(--color-accent)10',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </section>
  );
}
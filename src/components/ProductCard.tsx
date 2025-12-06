import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Home, Maximize2, Zap, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductImage {
  url: string;
  type: "interface" | "hardware";
  caption: string;
}

interface ProductFeature {
  icon: typeof Home;
  title: string;
  description: string;
}

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  price: string;
  images: ProductImage[];
  features: ProductFeature[];
  specs: {
    size: string;
    rooms: string;
    automation: string;
  };
  index: number;
}

export function ProductCard({
  name,
  tagline,
  description,
  price,
  images,
  features,
  specs,
  index
}: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageDirection, setImageDirection] = useState(0);

  const nextImage = () => {
    setImageDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImageDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Image Slider */}
        <motion.div
          className="relative rounded-[2.5rem] overflow-hidden order-2 lg:order-1"
          style={{
            aspectRatio: '4/3',
            backgroundColor: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
          }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
        >
          <AnimatePresence initial={false} custom={imageDirection}>
            <motion.div
              key={currentImageIndex}
              custom={imageDirection}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="absolute inset-0"
            >
              {images[currentImageIndex].url === "SECTION_PLACEHOLDER" ? (
                <div className="w-full h-full flex items-center justify-center bg-[var(--color-bg-secondary)] relative overflow-hidden group/placeholder">
                  {/* Diagonal patterns */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(45deg, var(--color-accent) 25%, transparent 25%, transparent 50%, var(--color-accent) 50%, var(--color-accent) 75%, transparent 75%, transparent)',
                      backgroundSize: '24px 24px'
                    }}
                  />

                  {/* Center Content */}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center mx-auto mb-4 bg-[var(--color-bg-primary)]/50 backdrop-blur-sm group-hover/placeholder:scale-110 transition-transform duration-500">
                      <Home className="w-6 h-6 text-[var(--color-accent)] opacity-60" />
                    </div>
                    <span className="text-sm tracking-[0.2em] uppercase text-[var(--color-text-muted)] font-light">
                      Visualization
                    </span>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-[var(--color-accent)]/40" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-[var(--color-accent)]/40" />
                </div>
              ) : (
                <ImageWithFallback
                  src={images[currentImageIndex].url}
                  alt={`${name} - ${images[currentImageIndex].type}`}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Type Badge */}
              <motion.div
                className="absolute top-6 left-6 px-4 py-2 rounded-full text-xs tracking-wider uppercase"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)90',
                  border: '1px solid var(--color-border)60',
                  color: 'var(--color-accent)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {images[currentImageIndex].type}
              </motion.div>

              {/* Caption */}
              <motion.div
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p
                  className="text-sm px-4 py-2 rounded-full inline-block"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)90',
                    border: '1px solid var(--color-border)60',
                    color: 'var(--color-text-secondary)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  {images[currentImageIndex].caption}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 group"
            style={{
              backgroundColor: 'var(--color-bg-secondary)90',
              border: '1px solid var(--color-border)60',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <ChevronLeft
              className="w-5 h-5 group-hover:text-[var(--color-accent)] transition-colors"
              style={{ color: 'var(--color-text-primary)' }}
            />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 group"
            style={{
              backgroundColor: 'var(--color-bg-secondary)90',
              border: '1px solid var(--color-border)60',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <ChevronRight
              className="w-5 h-5 group-hover:text-[var(--color-accent)] transition-colors"
              style={{ color: 'var(--color-text-primary)' }}
            />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setImageDirection(idx > currentImageIndex ? 1 : -1);
                  setCurrentImageIndex(idx);
                }}
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: idx === currentImageIndex
                    ? 'var(--color-accent)'
                    : 'var(--color-border)',
                  width: idx === currentImageIndex ? '1.5rem' : '0.375rem',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="order-1 lg:order-2 space-y-6">
          {/* Header */}
          <div>
            <motion.span
              className="text-xs tracking-[0.4em] uppercase block mb-3"
              style={{ color: 'var(--color-text-muted)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {tagline}
            </motion.span>

            <motion.h3
              className="text-4xl lg:text-5xl mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {name}
            </motion.h3>

            <motion.p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
          </div>

          {/* Specs Grid */}
          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            {Object.entries(specs).map(([key, value], idx) => (
              <div
                key={key}
                className="p-4 rounded-2xl text-center"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)50',
                  border: '1px solid var(--color-border)40',
                }}
              >
                <div className="text-sm uppercase tracking-wider mb-1" style={{ color: 'var(--color-text-muted)' }}>
                  {key}
                </div>
                <div className="text-lg" style={{ color: 'var(--color-accent)' }}>
                  {value}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)30',
                    border: '1px solid var(--color-border)30',
                  }}
                >
                  <div
                    className="p-2 rounded-full shrink-0"
                    style={{
                      backgroundColor: 'var(--color-accent)10',
                      border: '1px solid var(--color-accent)20',
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <h4 className="text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Price & CTA */}
          <motion.div
            className="flex items-center justify-between pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--color-text-muted)' }}>
                Starting from
              </div>
              <div className="text-3xl" style={{ color: 'var(--color-accent)' }}>
                {price}
              </div>
            </div>

            <motion.button
              className="px-8 py-4 rounded-full text-sm tracking-wider uppercase"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-bg-primary)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute -top-10 -right-10 w-[150px] h-[150px] rounded-full pointer-events-none hidden lg:block"
        style={{
          background: 'radial-gradient(circle, var(--color-accent)06 0%, transparent 70%)',
          border: '1px solid var(--color-accent)10',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      />
    </motion.article>
  );
}
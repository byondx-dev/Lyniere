import { motion } from "motion/react";
import { Star, CircleDot, Sparkles, Globe, Palette, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { CulturalFeaturesDrawer } from "./CulturalFeaturesDrawer";

// ========================================
// IMAGE CONFIGURATION
// ========================================
// Um neue Bilder hinzuzufügen:
// 1. Füge ein neues Objekt mit url und caption hinzu
// 2. Das erste Bild im Array wird als Hauptbild (groß) angezeigt
// 3. Alle weiteren Bilder werden im Grid (klein) angezeigt
// ========================================

const dojoImages = [
  {
    url: "https://images.unsplash.com/photo-1685948698888-40dc2cd43f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbW9kZXJuJTIwYXNpYW4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYzMzc4ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Minimalist zen architecture"
  },
  {
    url: "https://images.unsplash.com/photo-1594286474728-b306b1170823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwamFwYW5lc2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjMzNzg4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Futuristic Asian interior"
  },
  {
    url: "https://images.unsplash.com/photo-1715163792252-4a29d2d956f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBtaW5pbWFsaXN0JTIwcm9vbXxlbnwxfHx8fDE3NjMzNzg4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Cyber-minimalist living space"
  }
];

const barakahImages = [
  {
    url: "https://images.unsplash.com/photo-1630585608801-d051be0e67c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmFiaWMlMjBpbnRlcmlvciUyMGdvbGR8ZW58MXx8fHwxNjMzNzg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Luxury Arabian interior"
  },
  {
    url: "https://images.unsplash.com/photo-1683490486118-f62a0c623025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmFiaWMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNjMzNzg4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Modern Arabic architecture"
  },
  {
    url: "https://images.unsplash.com/photo-1759177715489-74112089de1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtaWRkbGUlMjBlYXN0ZXJuJTIwZGVzaWdufGVufDF8fHx8MTc2MzM3ODgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Premium Middle Eastern design"
  }
];

const culturalEditions = [
  {
    name: "Dojo Living",
    tagline: "Ancient Wisdom Meets Future Intelligence",
    description: "A bespoke smart home experience celebrating East Asian cultural aesthetics. Seamlessly integrating Japanese wabi-sabi minimalism, Chinese feng shui principles, and Korean hanok elegance—featuring tatami room automation, tea ceremony presets, meditation spaces, zen garden lighting, and cultural calendar integration. Technology that honors tradition.",
    price: "€220,900",
    images: dojoImages, // Reference to image array
    features: [
      {
        icon: Sparkles,
        title: "Cultural Harmony",
        description: "Japanese, Chinese & Korean design integration"
      },
      {
        icon: CircleDot,
        title: "Feng Shui Intelligence",
        description: "AI-optimized energy flow & spatial balance"
      },
      {
        icon: Palette,
        title: "Invisible Technology",
        description: "Hidden behind natural materials & traditional screens"
      }
    ],
    specs: {
      automation: "Heritage AI",
      size: "Scalable"
    }
  },
  {
    name: "Barakah Living",
    tagline: "Opulence with Intelligence",
    description: "Luxurious smart home system tailored for Arabic architectural beauty. Features majlis room automation, ornate lighting control, prayer time notifications, oud fragrance diffusion, fountain integration, and premium gold-accent hardware—celebrating timeless Arabian elegance.",
    price: "€549,500",
    images: barakahImages, // Reference to image array
    features: [
      {
        icon: Star,
        title: "Majlis Automation",
        description: "Perfect climate & lighting for Arabian hospitality"
      },
      {
        icon: Sparkles,
        title: "Luxury Materials",
        description: "24k gold accents on all control surfaces"
      },
      {
        icon: Globe,
        title: "Cultural Intelligence",
        description: "Prayer times, oud diffusion & fountain control"
      }
    ],
    specs: {
      automation: "Luxury AI",
      size: "Unlimited"
    }
  }
];

export function CulturalEditionsSection() {
  // Color schemes for each edition
  const dojoColor = '#2DD4BF'; // Cyan-Green for Cyber-Zen
  const barakahColor = '#C9A677'; // Sandy beige-gold

  // State to manage the open feature drawer
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState<"dojo" | "barakah" | null>(null);

  return (
    <div className="mt-48 lg:mt-64 space-y-32 lg:space-y-48">
      {/* Section Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8"
          style={{
            backgroundColor: 'var(--color-accent)10',
            border: '2px solid var(--color-accent)',
            boxShadow: '0 0 40px var(--color-accent)20',
          }}
        >
          <Star className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
          <span className="text-sm tracking-[0.3em] uppercase" style={{ color: 'var(--color-accent)' }}>
            Special Cultural Editions
          </span>
          <Star className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl mb-6"
        >
          Heritage <span style={{ color: 'var(--color-accent)' }}>Meets</span> Innovation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Bespoke smart home systems celebrating rich cultural traditions. Where ancient wisdom meets cutting-edge intelligence.
        </motion.p>
      </div>

      {/* DOJO LIVING - Cyberpunk Asian Edition */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden rounded-[4rem]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(${dojoColor}20 1px, transparent 1px), linear-gradient(90deg, ${dojoColor}20 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Main Container */}
        <div
          className="relative overflow-hidden rounded-[4rem] p-1"
          style={{
            background: `linear-gradient(135deg, ${dojoColor}, ${dojoColor}60)`,
          }}
        >
          <div
            className="relative overflow-hidden rounded-[3.8rem] p-6 lg:p-20"
            style={{
              backgroundColor: 'var(--color-bg-primary)',
            }}
          >
            {/* Animated Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, ${dojoColor}, ${dojoColor} 1px, transparent 1px, transparent 2px)`,
                }}
              />
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
              {/* Left: Images */}
              <div className="space-y-6 flex flex-col items-center lg:items-start">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative group w-full"
                >
                  <div
                    className="absolute inset-0 rounded-3xl blur-2xl opacity-60"
                    style={{ backgroundColor: dojoColor }}
                  />
                  <ImageWithFallback
                    src={culturalEditions[0].images[0].url}
                    alt={culturalEditions[0].images[0].caption}
                    className="relative w-full h-[400px] object-cover object-center rounded-3xl"
                  />
                  <div
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl backdrop-blur-md"
                    style={{
                      backgroundColor: 'var(--color-bg-primary)80',
                      border: `1px solid ${dojoColor}40`,
                    }}
                  >
                    <p className="text-xs tracking-wide" style={{ color: dojoColor }}>
                      {culturalEditions[0].images[0].caption}
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-6 w-full">
                  {culturalEditions[0].images.slice(1).map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      <ImageWithFallback
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-[200px] object-cover object-center rounded-2xl"
                      />
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(to top, var(--color-bg-primary), transparent)`,
                        }}
                      >
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-xs" style={{ color: dojoColor }}>
                            {img.caption}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 self-start"
                  style={{
                    backgroundColor: `${dojoColor}20`,
                    border: `2px solid ${dojoColor}`,
                    boxShadow: `0 0 20px ${dojoColor}40`,
                  }}
                >
                  <CircleDot className="w-4 h-4" style={{ color: dojoColor }} />
                  <span className="text-xs tracking-widest uppercase" style={{ color: dojoColor }}>
                    Cyber-Zen Edition
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl lg:text-6xl mb-4"
                  style={{ color: dojoColor }}
                >
                  Dojo Living
                </motion.h3>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xl mb-8 tracking-wide"
                >
                  Ancient Wisdom Meets Future Intelligence
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-base lg:text-lg leading-relaxed mb-10"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {culturalEditions[0].description}
                </motion.p>

                {/* Features */}
                <div className="space-y-4 mb-10">
                  {culturalEditions[0].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-2xl group hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundColor: 'var(--color-bg-secondary)40',
                        border: `1px solid ${dojoColor}30`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${dojoColor}20`,
                          border: `2px solid ${dojoColor}`,
                          boxShadow: `0 0 20px ${dojoColor}30`,
                        }}
                      >
                        <feature.icon className="w-6 h-6" style={{ color: dojoColor }} />
                      </div>
                      <div>
                        <h4 className="mb-1 text-lg">{feature.title}</h4>
                        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Price */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 md:p-8 rounded-3xl mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${dojoColor}15, ${dojoColor}05)`,
                    border: `2px solid ${dojoColor}`,
                    boxShadow: `0 0 40px ${dojoColor}20`,
                  }}
                >
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>
                      Starting at
                    </p>
                    <p className="text-3xl lg:text-6xl" style={{ color: dojoColor }}>
                      {culturalEditions[0].price}
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-xs tracking-wide mb-1" style={{ color: 'var(--color-text-muted)' }}>
                      {culturalEditions[0].specs.automation}
                    </p>
                    <p className="text-xs tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                      {culturalEditions[0].specs.size}
                    </p>
                  </div>
                </motion.div>

                {/* Features Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    setSelectedEdition("dojo");
                    setOpenDrawer(true);
                  }}
                  className="w-full py-5 px-8 rounded-2xl group flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: dojoColor,
                    color: 'var(--color-bg-primary)',
                    boxShadow: `0 10px 40px ${dojoColor}40`,
                  }}
                >
                  <span className="tracking-wide uppercase">Alle Features ansehen</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>

            {/* Cyber Accents */}
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-[120px] pointer-events-none"
              style={{ backgroundColor: dojoColor }}
            />
            <div
              className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-[120px] pointer-events-none"
              style={{ backgroundColor: dojoColor }}
            />
          </div>
        </div>
      </motion.div>

      {/* BARAKAH LIVING - Arabian Luxury Edition */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Ornate Pattern Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden rounded-[4rem]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, var(--color-accent) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        {/* Main Container */}
        <div
          className="relative overflow-hidden rounded-[4rem] p-1"
          style={{
            background: `linear-gradient(135deg, ${barakahColor}, ${barakahColor}80, ${barakahColor}60)`,
          }}
        >
          <div
            className="relative overflow-hidden rounded-[3.8rem] p-6 lg:p-20"
            style={{
              backgroundColor: 'var(--color-bg-primary)',
            }}
          >
            {/* Luxury Gradient Overlay */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 30% 50%, ${barakahColor}, transparent 60%)`,
              }}
            />

            {/* Content Grid (Reversed) */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
              {/* Left: Content */}
              <div className="flex flex-col justify-center lg:order-1 order-2">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 self-start"
                  style={{
                    background: `linear-gradient(135deg, #D4AF3720, var(--color-accent)20)`,
                    border: '2px solid #D4AF37',
                    boxShadow: '0 0 30px #D4AF3740',
                  }}
                >
                  <Star className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  <span className="text-xs tracking-widest uppercase" style={{ color: '#D4AF37' }}>
                    Premium Luxury Edition
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl lg:text-6xl mb-4"
                  style={{ color: '#D4AF37' }}
                >
                  Barakah Living
                </motion.h3>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xl mb-8 tracking-wide"
                >
                  Opulence with Intelligence
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-base lg:text-lg leading-relaxed mb-10"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {culturalEditions[1].description}
                </motion.p>

                {/* Features */}
                <div className="space-y-4 mb-10">
                  {culturalEditions[1].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-2xl group hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundColor: 'var(--color-bg-secondary)40',
                        border: '1px solid #D4AF3730',
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: '#D4AF3720',
                          border: '2px solid #D4AF37',
                          boxShadow: '0 0 20px #D4AF3730',
                        }}
                      >
                        <feature.icon className="w-6 h-6" style={{ color: '#D4AF37' }} />
                      </div>
                      <div>
                        <h4 className="mb-1 text-lg">{feature.title}</h4>
                        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Price */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 md:p-8 rounded-3xl mb-6"
                  style={{
                    background: `linear-gradient(135deg, #D4AF3715, #D4AF3705)`,
                    border: '2px solid #D4AF37',
                    boxShadow: '0 0 40px #D4AF3720',
                  }}
                >
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>
                      Starting at
                    </p>
                    <p className="text-3xl lg:text-6xl" style={{ color: '#D4AF37' }}>
                      {culturalEditions[1].price}
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-xs tracking-wide mb-1" style={{ color: 'var(--color-text-muted)' }}>
                      {culturalEditions[1].specs.automation}
                    </p>
                    <p className="text-xs tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                      {culturalEditions[1].specs.size}
                    </p>
                  </div>
                </motion.div>

                {/* Features Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                  onClick={() => {
                    setSelectedEdition("barakah");
                    setOpenDrawer(true);
                  }}
                  className="w-full py-5 px-8 rounded-2xl group flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: barakahColor,
                    color: 'var(--color-bg-primary)',
                    boxShadow: `0 10px 40px ${barakahColor}40`,
                  }}
                >
                  <span className="tracking-wide uppercase">Alle Features ansehen</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Right: Images */}
              <div className="space-y-6 lg:order-2 order-1 flex flex-col items-center lg:items-start">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative group w-full"
                >
                  <div
                    className="absolute inset-0 rounded-3xl blur-2xl opacity-40"
                    style={{ backgroundColor: '#D4AF37' }}
                  />
                  <ImageWithFallback
                    src={culturalEditions[1].images[0].url}
                    alt={culturalEditions[1].images[0].caption}
                    className="relative w-full h-[400px] object-cover object-center rounded-3xl"
                  />
                  <div
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl backdrop-blur-md"
                    style={{
                      backgroundColor: 'var(--color-bg-primary)80',
                      border: '1px solid #D4AF3740',
                    }}
                  >
                    <p className="text-xs tracking-wide" style={{ color: '#D4AF37' }}>
                      {culturalEditions[1].images[0].caption}
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-6 w-full">
                  {culturalEditions[1].images.slice(1).map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      <ImageWithFallback
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-[200px] object-cover object-center rounded-2xl"
                      />
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(to top, var(--color-bg-primary), transparent)`,
                        }}
                      >
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-xs" style={{ color: '#D4AF37' }}>
                            {img.caption}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gold Glow Accents */}
            <div
              className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-[120px] pointer-events-none"
              style={{ backgroundColor: '#D4AF37' }}
            />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-[120px] pointer-events-none"
              style={{ backgroundColor: '#D4AF37' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center p-8 rounded-full"
        style={{
          backgroundColor: 'var(--color-bg-secondary)30',
          border: '1px solid var(--color-accent)30',
        }}
      >
        <p className="text-sm tracking-wide" style={{ color: 'var(--color-text-secondary)' }}>
          <span style={{ color: 'var(--color-accent)' }}>✦</span> Each Cultural Edition is custom-designed with our heritage specialists{' '}
          <span style={{ color: 'var(--color-accent)' }}>✦</span> Limited availability{' '}
          <span style={{ color: 'var(--color-accent)' }}>✦</span> Bespoke configurations available
        </p>
      </motion.div>

      {/* Cultural Features Drawer */}
      <CulturalFeaturesDrawer
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
        edition={selectedEdition as "dojo" | "barakah"}
      />
    </div>
  );
}
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Brain, Shield, Leaf, Zap, Crown, Sparkles, ArrowRight, Check } from "lucide-react";

const products = [
  {
    id: "kaizen",
    name: "KAIZEN",
    tagline: "Harmony Through Intelligence",
    culture: "Japanese Minimalism",
    description: "Inspired by the philosophy of continuous improvement. Perfect balance between technology and zen aesthetics.",
    icon: Sparkles,
    color: "#E63946",
    features: ["Adaptive Zen Lighting", "Biometric Harmony", "Minimal Interface", "Energy Flow Optimization"],
    price: "From €2.4M",
    gradient: "from-red-500/20 to-pink-500/20"
  },
  {
    id: "azura",
    name: "AZURA",
    tagline: "Opulence Reimagined",
    culture: "Arabian Luxury",
    description: "Celestial intelligence meets timeless Arabian elegance. Experience luxury beyond imagination.",
    icon: Crown,
    color: "#F77F00",
    features: ["Golden Touch Controls", "Majlis Integration", "Celestial Automation", "Premium Concierge AI"],
    price: "From €3.2M",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "nexus",
    name: "NEXUS",
    tagline: "Neural Architecture",
    culture: "AI-First Design",
    description: "The home that learns and evolves. Powered by advanced neural networks predicting your every need.",
    icon: Brain,
    color: "#06FFA5",
    features: ["Predictive AI Engine", "Neural Interface", "Self-Learning Automation", "Quantum Processing"],
    price: "From €2.8M",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "sovereign",
    name: "SOVEREIGN",
    tagline: "Fortress of Privacy",
    culture: "Military-Grade Security",
    description: "Uncompromising protection with invisible defense. Your sanctuary, completely secured.",
    icon: Shield,
    color: "#3A86FF",
    features: ["Multi-Layer Defense", "Biometric Vault", "Signal Isolation", "24/7 AI Surveillance"],
    price: "From €2.6M",
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: "aurora",
    name: "AURORA",
    tagline: "Nature's Intelligence",
    culture: "Eco-Conscious Living",
    description: "Sustainable luxury powered by nature. Zero-carbon living without compromise.",
    icon: Leaf,
    color: "#06D6A0",
    features: ["Solar Neural Grid", "Air Purification AI", "Water Recycling", "Carbon-Negative Design"],
    price: "From €2.2M",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: "zenith",
    name: "ZENITH",
    tagline: "The Apex Collection",
    culture: "Ultimate Integration",
    description: "Every feature, every innovation, every luxury. The pinnacle of smart living.",
    icon: Zap,
    color: "#8338EC",
    features: ["All Systems Unified", "Unlimited Customization", "Holographic Interface", "Quantum Security"],
    price: "From €4.5M",
    gradient: "from-purple-500/20 to-violet-500/20"
  }
];

export function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section ref={sectionRef} className="relative py-40 overflow-hidden">
      <motion.div style={{ opacity, scale }}>
        <div className="container-luxury">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-32 text-center"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.4em] uppercase block mb-8" 
              style={{ color: 'var(--color-text-muted)' }}
            >
              Our Collections
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              Choose Your
              <span className="block text-stroke-fill">Universe</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm md:text-base max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Six distinctive visions of intelligent living, each crafted for those who demand excellence
            </motion.p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isSelected = selectedProduct === product.id;

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ y: -15 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="relative h-full"
                  >
                    {/* Main Card */}
                    <div 
                      className="glass-panel rounded-[3rem] p-10 lg:p-12 relative overflow-hidden h-full flex flex-col cursor-pointer"
                      onClick={() => setSelectedProduct(isSelected ? null : product.id)}
                    >
                      {/* Gradient Background on Hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                      />

                      {/* Animated Border */}
                      <motion.div
                        className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ 
                          border: `1px solid ${product.color}40`,
                          boxShadow: `0 0 60px ${product.color}20`
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Header Section */}
                        <div className="flex items-start justify-between mb-8">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.8 }}
                            className="w-20 h-20 rounded-full glass-panel flex items-center justify-center"
                          >
                            <Icon 
                              className="w-10 h-10" 
                              style={{ color: product.color }} 
                              strokeWidth={1.5} 
                            />
                          </motion.div>

                          {/* Culture Tag */}
                          <motion.div
                            className="glass-panel rounded-full px-6 py-2 text-xs tracking-wider"
                            style={{ color: product.color }}
                          >
                            {product.culture}
                          </motion.div>
                        </div>

                        {/* Product Name */}
                        <h3 className="mb-3 text-5xl tracking-tight">
                          {product.name}
                        </h3>

                        {/* Tagline */}
                        <p 
                          className="text-lg mb-6 tracking-wide"
                          style={{ color: product.color }}
                        >
                          {product.tagline}
                        </p>

                        {/* Description */}
                        <p 
                          className="mb-8 leading-relaxed"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          {product.description}
                        </p>

                        {/* Features */}
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: isSelected ? 'auto' : '0',
                            opacity: isSelected ? 1 : 0,
                            marginBottom: isSelected ? '2rem' : '0'
                          }}
                          transition={{ duration: 0.5 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {product.features.map((feature, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: isSelected ? 1 : 0, x: isSelected ? 0 : -20 }}
                                transition={{ delay: i * 0.1, duration: 0.3 }}
                                className="flex items-center gap-2 glass-panel rounded-full px-4 py-2"
                              >
                                <Check className="w-4 h-4" style={{ color: product.color }} />
                                <span className="text-xs">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Spacer */}
                        <div className="flex-1" />

                        {/* Bottom Section */}
                        <div className="flex items-end justify-between mt-8">
                          {/* Price */}
                          <div>
                            <div 
                              className="text-xs tracking-wider uppercase mb-2" 
                              style={{ color: 'var(--color-text-muted)' }}
                            >
                              Starting at
                            </div>
                            <div className="text-2xl tracking-tight">
                              {product.price}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-panel rounded-full p-6 group/btn relative overflow-hidden"
                          >
                            <motion.div
                              className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                              style={{ backgroundColor: product.color }}
                            />
                            <ArrowRight 
                              className="w-6 h-6 relative z-10 group-hover/btn:text-[var(--color-bg-primary)] transition-colors duration-300" 
                              style={{ color: product.color }}
                            />
                          </motion.button>
                        </div>

                        {/* Accent Line */}
                        <motion.div
                          className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent"
                          style={{
                            background: isSelected 
                              ? `linear-gradient(to right, transparent, ${product.color}, transparent)`
                              : undefined
                          }}
                        />
                      </div>

                      {/* Corner Badge */}
                      <motion.div
                        className="absolute top-8 right-8 w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm"
                        style={{ color: product.color }}
                        animate={{
                          y: [0, -8, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "loop",
                          delay: index * 0.3
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-panel rounded-full px-12 py-5 text-sm tracking-wider inline-flex items-center gap-4 group hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-primary)] transition-colors duration-500"
            >
              <span>Schedule Private Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute left-0 top-1/3 w-[500px] h-[500px] opacity-[0.02] pointer-events-none"
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1]
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

      <motion.div
        className="absolute right-0 bottom-1/4 w-[400px] h-[400px] opacity-[0.02] pointer-events-none"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        <div 
          className="w-full h-full" 
          style={{ 
            border: '1px solid var(--color-accent)',
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          }} 
        />
      </motion.div>
    </section>
  );
}
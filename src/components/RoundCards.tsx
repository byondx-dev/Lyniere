import { motion } from "motion/react";
import { Home, Zap, Shield, Sparkles } from "lucide-react";

const cardData = [
  {
    icon: Home,
    title: "Smart Living",
    description: "Adaptive environments that respond to your presence and preferences",
    color: "var(--color-accent)"
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Seamless automation that anticipates your needs in real-time",
    color: "var(--ambient-glow-1)"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Military-grade encryption protecting your home and data",
    color: "var(--ambient-glow-2)"
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Unparalleled luxury crafted for the most discerning residents",
    color: "var(--color-accent)"
  }
];

interface RoundCardsProps {
  onNavigate: (page: string) => void;
}

export function RoundCards({ onNavigate }: RoundCardsProps) {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-xs tracking-[0.4em] uppercase block mb-8" style={{ color: 'var(--color-text-muted)' }}>
            Core Features
          </span>
          <h2 className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="block"
            >
              Experience
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="block text-stroke"
            >
              Redefined
            </motion.span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-full"
                >
                  {/* Round card with glass effect */}
                  <div className="glass-panel rounded-[3rem] p-12 relative overflow-hidden h-full flex flex-col">
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]"
                      style={{ background: `radial-gradient(circle at top left, ${card.color}15, transparent)` }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <motion.div
                        className="mb-8"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <div 
                          className="w-20 h-20 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                        >
                          <Icon className="w-10 h-10" style={{ color: card.color }} strokeWidth={1.5} />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="mb-6 text-3xl">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="flex-1" style={{ color: 'var(--color-text-secondary)' }}>
                        {card.description}
                      </p>

                      {/* Bottom accent line */}
                      <motion.div
                        className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent group-hover:from-[var(--color-accent)] group-hover:to-transparent transition-all duration-700"
                      />

                      {/* Hover arrow - now clickable */}
                      <motion.button
                        onClick={() => onNavigate('homes')}
                        className="mt-6 flex items-center gap-3 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ color: card.color }}
                      >
                        <span>Explore Homes</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5 }}
                          className="w-8 h-[1px]"
                          style={{ backgroundColor: card.color }}
                        />
                      </motion.button>
                    </div>

                    {/* Border glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                        border: `1px solid ${card.color}`,
                        boxShadow: `0 0 40px ${card.color}20`
                      }}
                    />
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-14 h-14 glass-panel rounded-full flex items-center justify-center text-lg"
                    style={{ color: card.color }}
                    animate={{
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: index * 0.2
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative floating element */}
      <motion.div
        className="absolute right-0 top-1/2 w-[400px] h-[400px] opacity-[0.03] pointer-events-none"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full" style={{ border: '1px solid var(--color-accent)' }} />
      </motion.div>
    </section>
  );
}
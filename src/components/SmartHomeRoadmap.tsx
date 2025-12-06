import { motion, useScroll, useTransform } from "motion/react";
import { Brain, Zap, Home, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const roadmapSteps = [
  {
    icon: Brain,
    number: "01",
    title: "Was ist ein Smart Home?",
    description: "Ein intelligentes Ökosystem, das durch KI und Automatisierung Ihr Zuhause in einen lebendigen Partner verwandelt – der lernt, antizipiert und sich perfekt an Ihren Alltag anpasst.",
    color: "#2DD4BF"
  },
  {
    icon: Zap,
    number: "02",
    title: "Effektivität neu definiert",
    description: "Nicht Faulheit, sondern intelligente Optimierung: Energie sparen durch prädiktive Klimasteuerung, Zeit gewinnen durch automatisierte Routinen, Ressourcen schonen durch präzises Management.",
    color: "#3B82F6"
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Neue Möglichkeiten",
    description: "Gesundheitsmonitoring in Echtzeit, personalisierte Wellness-Szenarien, präventive Wartung, erweiterte Sicherheit – Funktionen, die gestern unmöglich waren, heute selbstverständlich.",
    color: "#8B5CF6"
  },
  {
    icon: Home,
    number: "04",
    title: "Die Zukunft beginnt jetzt",
    description: "Smart Homes sind keine Vision mehr – sie sind der neue Standard des bewussten Lebens. Eine Investition in Lebensqualität, Nachhaltigkeit und die Art, wie wir wohnen werden.",
    color: "#EC4899"
  }
];

export function SmartHomeRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Track if section is in viewport
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Section is in view when scrollYProgress is between 0 and 1
      setIsInView(latest > 0 && latest < 1);

      const stepIndex = Math.min(
        Math.floor(latest * roadmapSteps.length),
        roadmapSteps.length - 1
      );
      setActiveStep(stepIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="relative py-24 lg:py-32">
      {/* Section Header */}
      <div className="text-center mb-32 px-6">



      </div>

      {/* Main Roadmap Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Fixed Progress Bar - Left Side (Desktop) */}
        <motion.div
          className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -20,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Progress Line */}
            <div className="relative w-[2px] h-[400px]" style={{ backgroundColor: 'var(--color-border)' }}>
              <motion.div
                className="absolute top-0 left-0 w-full origin-top"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  scaleY: scrollYProgress,
                }}
              />
            </div>

            {/* Step Dots */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-[122px]">
              {roadmapSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center justify-center cursor-pointer group"
                  animate={{
                    scale: activeStep === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Outer Ring */}
                  <div
                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500"
                    style={{
                      borderColor: activeStep >= index ? step.color : 'var(--color-border)',
                      backgroundColor: activeStep >= index ? `${step.color}20` : 'var(--color-bg-primary)',
                    }}
                  >
                    {/* Inner Dot */}
                    <motion.div
                      className="rounded-full"
                      animate={{
                        width: activeStep >= index ? '10px' : '0px',
                        height: activeStep >= index ? '10px' : '0px',
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ backgroundColor: step.color }}
                    />
                  </div>

                  {/* Glow Effect */}
                  {activeStep === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.4, scale: 1.5 }}
                      className="absolute inset-0 rounded-full blur-xl pointer-events-none"
                      style={{ backgroundColor: step.color }}
                    />
                  )}

                  {/* Step Number Tooltip */}
                  <div
                    className="absolute left-8 px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: `1px solid ${step.color}`,
                      color: step.color,
                    }}
                  >
                    {step.number}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Progress Bar - Top */}
        <motion.div
          className="lg:hidden fixed left-4 top-1/2 -translate-y-1/2 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -20,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Vertical Progress Line */}
          <div className="relative w-[3px] h-[300px] rounded-full" style={{ backgroundColor: 'var(--color-border)' }}>
            <motion.div
              className="absolute top-0 left-0 w-full origin-top rounded-full"
              style={{
                backgroundColor: 'var(--color-accent)',
                scaleY: scrollYProgress,
              }}
            />
          </div>

          {/* Step Dots */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col justify-between h-full">
            {roadmapSteps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center"
              >
                {/* Dot */}
                <motion.div
                  className="w-3 h-3 rounded-full border-2 transition-all duration-300"
                  style={{
                    borderColor: activeStep >= index ? step.color : 'var(--color-border)',
                    backgroundColor: activeStep >= index ? step.color : 'var(--color-bg-primary)',
                    boxShadow: activeStep === index ? `0 0 12px ${step.color}` : 'none',
                  }}
                  animate={{
                    scale: activeStep === index ? 1.3 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Active Glow */}
                {activeStep === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.5, scale: 2 }}
                    className="absolute inset-0 rounded-full blur-md pointer-events-none"
                    style={{ backgroundColor: step.color }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Steps Content */}
        <div className="space-y-[40vh]">
          {roadmapSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.5, once: false }}
                transition={{ duration: 0.8 }}
                className="relative min-h-[60vh] flex items-center"
              >
                <div className="w-full lg:ml-32">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ amount: 0.5, once: false }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="space-y-8"
                    >
                      {/* Number Badge */}
                      <div className="flex items-center gap-6">
                        <motion.div
                          whileInView={{ rotate: 360 }}
                          viewport={{ amount: 0.5, once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="w-20 h-20 rounded-full flex items-center justify-center relative"
                          style={{
                            backgroundColor: `${step.color}20`,
                            border: `2px solid ${step.color}`,
                          }}
                        >
                          <Icon className="w-9 h-9" style={{ color: step.color }} />

                          {/* Animated Ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ border: `2px solid ${step.color}` }}
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>

                        <div
                          className="text-8xl lg:text-9xl opacity-20 tracking-tighter"
                          style={{ color: step.color }}
                        >
                          {step.number}
                        </div>
                      </div>

                      {/* Title */}
                      <div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '80px' }}
                          viewport={{ amount: 0.5, once: false }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="h-1 mb-6 rounded-full"
                          style={{ backgroundColor: step.color }}
                        />
                        <h3
                          className="text-3xl lg:text-5xl mb-6 leading-tight"
                          style={{ color: step.color }}
                        >
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p
                        className="text-lg lg:text-xl leading-relaxed"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {step.description}
                      </p>

                      {/* Checkpoint Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5, once: false }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="inline-flex items-center gap-3 px-5 py-3 rounded-full"
                        style={{
                          backgroundColor: `${step.color}15`,
                          border: `1px solid ${step.color}`,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{ backgroundColor: step.color }}
                        />
                        <span
                          className="text-sm tracking-wide"
                          style={{ color: step.color }}
                        >
                          Checkpoint {step.number}
                        </span>
                      </motion.div>
                    </motion.div>

                    {/* Right: Visual Element */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ amount: 0.5, once: false }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="relative aspect-square rounded-3xl overflow-hidden"
                      style={{
                        backgroundColor: `${step.color}10`,
                        border: `1px solid ${step.color}40`,
                      }}
                    >
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 overflow-hidden">
                        {/* Grid Pattern */}
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: `linear-gradient(${step.color}40 1px, transparent 1px),
                                             linear-gradient(90deg, ${step.color}40 1px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                          }}
                        />

                        {/* Radial Gradient */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{
                            background: [
                              `radial-gradient(circle at 30% 30%, ${step.color}40, transparent 50%)`,
                              `radial-gradient(circle at 70% 70%, ${step.color}40, transparent 50%)`,
                              `radial-gradient(circle at 30% 30%, ${step.color}40, transparent 50%)`,
                            ],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Floating Icon */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Icon
                            className="w-32 h-32 lg:w-48 lg:h-48 opacity-30"
                            style={{ color: step.color }}
                          />
                        </motion.div>

                        {/* Glow Effect */}
                        <div
                          className="absolute inset-0 opacity-40 blur-3xl"
                          style={{
                            background: `radial-gradient(circle at center, ${step.color}60, transparent 70%)`,
                          }}
                        />
                      </div>

                      {/* Corner Accent */}
                      <div
                        className="absolute bottom-6 right-6 text-6xl opacity-10 tracking-tighter"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Background Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.15 }}
                  viewport={{ amount: 0.5, once: false }}
                  transition={{ duration: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none -z-10"
                  style={{ backgroundColor: step.color }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full"
            style={{
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div className="flex -space-x-3">
              {roadmapSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
                  style={{
                    backgroundColor: step.color,
                    borderColor: 'var(--color-bg-secondary)',
                  }}
                >
                  <step.icon className="w-5 h-5 text-white" />
                </motion.div>
              ))}
            </div>
            <p className="text-sm tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
              4 Prinzipien · Eine Revolution
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
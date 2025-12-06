import { useRef } from "react";
import { motion } from "framer-motion";
import { Home, Maximize2, Zap, Shield, Leaf, Waves, Sparkles, Eye, Heart, Baby, Users, Briefcase, ShoppingBag, Book, Tv, Coffee, Moon, Sun, Thermometer, Wind, Droplets, Lock, Camera, Bell, Star, Wand2, Globe, Palette, CircleDot, Infinity, Wrench, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { CulturalEditionsSection } from "./CulturalEditionsSection";
import { SmartHomeRoadmap } from "./SmartHomeRoadmap";

const smartHomeConcepts = [
  {
    name: "Eco Home",
    tagline: "Living in Harmony with Nature",
    description: "Transform your home into a sustainable sanctuary. Advanced solar integration, AI-powered energy optimization, carbon tracking, water recycling, and smart climate control work together to create a zero-carbon living space that gives back to nature while providing ultimate comfort.",
    price: "€22,900",
    images: [
      {
        url: "SECTION_PLACEHOLDER",
        type: "interface" as const,
        caption: "Smart energy management system"
      },
      {
        url: "SECTION_PLACEHOLDER",
        type: "hardware" as const,
        caption: "Solar-powered LED system"
      },
      {
        url: "SECTION_PLACEHOLDER",
        type: "interface" as const,
        caption: "Real-time carbon tracking dashboard"
      }
    ],
    features: [
      {
        icon: Leaf,
        title: "Solar Neural Grid",
        description: "AI-optimized solar panels with predictive energy storage"
      },
      {
        icon: Droplets,
        title: "Water Intelligence",
        description: "Recycling systems reducing water consumption by 60%"
      },
      {
        icon: Wind,
        title: "Air Quality AI",
        description: "Smart ventilation maintaining perfect air composition"
      }
    ],
    specs: {
      size: "Scalable",
      rooms: "All Areas",
      automation: "Eco AI"
    }
  },
  {
    name: "Secure Home",
    tagline: "Beyond Military Standard",
    description: "Experience unprecedented protection with our military-grade+ security ecosystem. AI threat detection, facial recognition, 360° surveillance, biometric access, signal isolation, and instant emergency response create an impenetrable fortress while remaining completely invisible in your daily life.",
    price: "€34,900",
    images: [
      {
        url: "SECTION_PLACEHOLDER",
        type: "hardware" as const,
        caption: "AI-powered security cameras"
      },
      {
        url: "SECTION_PLACEHOLDER",
        type: "interface" as const,
        caption: "Security command center"
      },
      {
        url: "SECTION_PLACEHOLDER",
        type: "hardware" as const,
        caption: "Biometric access control"
      }
    ],
    features: [
      {
        icon: Shield,
        title: "AI Threat Detection",
        description: "Real-time monitoring with predictive threat analysis"
      },
      {
        icon: Camera,
        title: "360° Surveillance",
        description: "Complete coverage with facial & behavioral recognition"
      },
      {
        icon: Lock,
        title: "Multi-Layer Defense",
        description: "7 security levels exceeding military standards"
      }
    ],
    specs: {
      size: "Unlimited",
      rooms: "All Areas",
      automation: "Security+"
    }
  },
  {
    name: "Family SmartHome",
    tagline: "Supporting Every Family Member",
    description: "A comprehensive smart home system designed for modern families. Over 30 intelligent features supporting father, mother, son, and daughter—from morning routines to bedtime. Each family member gets personalized automation, safety features, and convenience tools that make daily life effortless.",
    price: "€42,900",
    images: [
      {
        url: "SECTION_PLACEHOLDER",
        type: "interface" as const,
        caption: "Family dashboard with individual profiles"
      },
      {
        url: "SECTION_PLACEHOLDER",
        type: "interface" as const,
        caption: "Mobile control for all family members"
      },
      {
        url: "SECTION_PLACEHOLDER",
        type: "hardware" as const,
        caption: "Voice assistants in every room"
      }
    ],
    features: [
      {
        icon: Users,
        title: "30+ Family Features",
        description: "Personalized automation for father, mother, son & daughter"
      },
      {
        icon: Heart,
        title: "Health Monitoring",
        description: "Track wellness, sleep quality, and activity for everyone"
      },
      {
        icon: Bell,
        title: "Smart Scheduling",
        description: "Coordinate family calendars, reminders & routines"
      }
    ],
    specs: {
      size: "Scalable",
      rooms: "All Areas",
      automation: "Family AI"
    }
  },
  {
    name: "Zenith Complete",
    tagline: "Everything. Everywhere. All at Once.",
    description: "The ultimate smart home experience combining Eco, Security, Family, and Cultural features in one seamless platform. Choose individual modules or get everything—unlimited customization, lifetime updates, quantum security, and complete home intelligence with no compromises.",
    price: "€89,900",
    images: [
      {
        url: "SECTION_PLACEHOLDER",
        type: "interface" as const,
        caption: "Complete system integration"
      },
      {
        url: "SECTION_PLACEHOLDER",
        type: "hardware" as const,
        caption: "Central quantum hub"
      },
      {
        url: "SECTION_PLACEHOLDER",
        type: "interface" as const,
        caption: "Master control interface"
      }
    ],
    features: [
      {
        icon: Infinity,
        title: "All Systems Unified",
        description: "Eco + Security + Family + Cultural in one platform"
      },
      {
        icon: Wand2,
        title: "Infinite Customization",
        description: "Build your perfect system or get everything"
      },
      {
        icon: Zap,
        title: "Lifetime Evolution",
        description: "Forever access to all new features & technologies"
      }
    ],
    specs: {
      size: "Unlimited",
      rooms: "All Areas",
      automation: "Ultimate"
    }
  }
];

interface HomesPageProps {
  onNavigate?: (page: string) => void;
}

export function HomesPage({ onNavigate }: HomesPageProps) {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-32 lg:py-40 overflow-hidden">
      <div className="container-luxury">
        {/* Tagline */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl tracking-wide" style={{ color: 'var(--color-accent)' }}>
            You live longer. You live better.
          </h2>
        </div>

        {/* Smart Home Roadmap - NEW */}
        <SmartHomeRoadmap />

        {/* Header */}
        <div className="mb-20 lg:mb-32">
          <span
            className="text-xs tracking-[0.4em] uppercase block mb-6"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Our Collections
          </span>

          <h1 className="text-5xl lg:text-7xl mb-8">
            Smart Home
            <span className="block" style={{ color: 'var(--color-accent)' }}>Systems</span>
          </h1>

          <p
            className="text-lg lg:text-xl max-w-3xl leading-relaxed mb-16"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Six intelligent automation packages designed for the future. From minimalist control to complete neural integration—find the perfect smart home system tailored to your lifestyle.
          </p>

          {/* Retrofit vs New Build Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mt-20"
          >
            {/* Section Title */}
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xs tracking-[0.4em] uppercase block mb-4"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Installation Options
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl"
              >
                Choose Your <span style={{ color: 'var(--color-accent)' }}>Journey</span>
              </motion.h2>
            </div>

            {/* Cards Container */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 relative">
              {/* Connecting Line (Desktop only) */}
              <div
                className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 z-0"
                style={{
                  background: 'linear-gradient(to bottom, transparent, var(--color-accent)40, transparent)',
                }}
              />

              {/* Retrofit Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative p-8 lg:p-12 rounded-[2.5rem] overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)60',
                  border: '1px solid var(--color-border)80',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)',
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, var(--color-accent)08, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl"
                    style={{
                      backgroundColor: 'var(--color-accent)15',
                      border: '1px solid var(--color-accent)40',
                    }}
                  >
                    <Wrench className="w-8 h-8" style={{ color: 'var(--color-accent)' }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    Retrofit Your Home
                  </h3>

                  {/* Divider */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '4rem' }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-[2px] mb-6"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />

                  {/* Description */}
                  <p className="text-base lg:text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                    Already have a home? Our professional installation team seamlessly integrates Lynière systems into your existing space. A dedicated technical manager oversees every detail—from initial assessment to final calibration.
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: CheckCircle2, text: 'Professional assessment & planning' },
                      { icon: CheckCircle2, text: 'Dedicated technical manager' },
                      { icon: CheckCircle2, text: 'Zero disruption guarantee' },
                      { icon: CheckCircle2, text: 'Full calibration & testing' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: 'var(--color-accent)20' }}
                        >
                          <item.icon className="w-3 h-3" style={{ color: 'var(--color-accent)' }} />
                        </div>
                        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Timeline Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{
                      backgroundColor: 'var(--color-bg-primary)40',
                      border: '1px solid var(--color-border)60',
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
                    <span className="text-xs tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                      Installation: 2-4 weeks
                    </span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, var(--color-accent), transparent)`,
                  }}
                />
              </motion.div>

              {/* New Build Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative p-8 lg:p-12 rounded-[2.5rem] overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)60',
                  border: '1px solid var(--color-border)80',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)',
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, var(--color-accent)08, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl"
                    style={{
                      backgroundColor: 'var(--color-accent)15',
                      border: '1px solid var(--color-accent)40',
                    }}
                  >
                    <Building2 className="w-8 h-8" style={{ color: 'var(--color-accent)' }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    Build with Intelligence
                  </h3>

                  {/* Divider */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '4rem' }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="h-[2px] mb-6"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />

                  {/* Description */}
                  <p className="text-base lg:text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                    Designing or building a new home? Integrate Lynière from the ground up. Our architects and engineers collaborate with your team during planning, optimizing every aspect for seamless integration.
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: CheckCircle2, text: 'Architectural planning integration' },
                      { icon: CheckCircle2, text: 'Infrastructure optimization' },
                      { icon: CheckCircle2, text: 'Future-proof foundation' },
                      { icon: CheckCircle2, text: 'Invisible technology placement' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: 'var(--color-accent)20' }}
                        >
                          <item.icon className="w-3 h-3" style={{ color: 'var(--color-accent)' }} />
                        </div>
                        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Timeline Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{
                      backgroundColor: 'var(--color-bg-primary)40',
                      border: '1px solid var(--color-border)60',
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
                    <span className="text-xs tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                      Planning phase integration
                    </span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, var(--color-accent), transparent)`,
                  }}
                />
              </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <p className="text-sm tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                Not sure which option is right for you?{' '}
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="inline-flex items-center gap-1 group/link"
                  style={{ color: 'var(--color-accent)' }}
                >
                  <span className="underline-offset-4 hover:underline">Schedule a consultation</span>
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </p>
            </motion.div>
          </motion.div>

          {/* AI Assistant Add-on */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-8 p-6 lg:p-8 rounded-[2rem] relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, var(--color-accent)15, var(--color-accent)08)`,
              border: '2px solid var(--color-accent)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              boxShadow: '0 0 60px var(--color-accent)20',
            }}
          >
            {/* Animated gradient background */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 50%, var(--color-accent)20, transparent 70%)`,
              }}
            />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              {/* Icon Badge - Centered & Smaller */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1, type: "spring" }}
                viewport={{ once: true }}
                className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full mx-auto"
                style={{
                  backgroundColor: 'var(--color-accent)30',
                  border: '2px solid var(--color-accent)',
                  boxShadow: '0 0 30px var(--color-accent)40',
                }}
              >
                <Zap className="w-7 h-7" style={{ color: 'var(--color-accent)' }} />
              </motion.div>

              {/* Title - Centered & Smaller */}
              <div className="mb-4">
                <h3 className="text-2xl lg:text-3xl mb-2" style={{ color: 'var(--color-accent)' }}>
                  AI Assistant Add-on
                </h3>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '4rem' }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                  className="h-[2px] mx-auto"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              </div>

              {/* Celebrity Hook */}
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-accent)' }}>
                Trusted by Icons Who Value Absolute Discretion
              </p>

              {/* Privacy-First Description */}
              <div className="mb-6 p-4 rounded-2xl" style={{
                backgroundColor: 'var(--color-bg-secondary)30',
                border: '1px solid var(--color-accent)20',
              }}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Lock className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-sm tracking-wide uppercase" style={{ color: 'var(--color-accent)' }}>
                    Your Private AI. Your Data. Your Control.
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  Powered by GPT 5.1, running <span style={{ color: 'var(--color-accent)' }}>100% on-premise</span> in your home. Zero cloud connections. Zero data sharing. Your conversations, preferences, and personal information never leave your property. This is your personal AI—truly yours.
                </p>
              </div>

              {/* Features Grid - Compact */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {[
                  { icon: Lock, text: 'Own AI Model' },
                  { icon: Globe, text: 'Every Room' },
                  { icon: Sparkles, text: 'Context-Aware' },
                  { icon: Bell, text: 'Proactive' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)40',
                      border: '1px solid var(--color-accent)30',
                    }}
                  >
                    <item.icon className="w-4 h-4 shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-xs">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Price - Compact */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
                style={{
                  backgroundColor: 'var(--color-accent)20',
                  border: '2px solid var(--color-accent)',
                  boxShadow: '0 0 40px var(--color-accent)30',
                }}
              >
                <span className="text-xs tracking-wider uppercase" style={{ color: 'var(--color-text-muted)' }}>
                  Add-on
                </span>
                <span className="text-3xl" style={{ color: 'var(--color-accent)' }}>
                  +€44,500
                </span>
                <span className="text-xs tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                  / system
                </span>
              </motion.div>
            </div>

            {/* Corner glow effects - Smaller */}
            <div
              className="absolute -top-10 -left-10 w-24 h-24 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <div
              className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
          </motion.div>

          {/* HomeClean & HomeWellcare Notice */}
          <div
            className="mt-12 text-center p-6 rounded-full"
            style={{
              backgroundColor: 'var(--color-bg-secondary)30',
              border: '1px solid var(--color-border)40',
            }}
          >
            <p className="text-sm tracking-wide" style={{ color: 'var(--color-text-secondary)' }}>
              <span style={{ color: 'var(--color-accent)' }}>✓ All systems include</span> HomeClean & HomeWellcare Package
              <span className="mx-2">•</span>
              Automated vacuum systems, air purifiers, climate control & wellness monitoring
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="space-y-32 lg:space-y-48">
          {smartHomeConcepts.map((concept, index) => (
            <ProductCard
              key={concept.name}
              {...concept}
              index={index}
            />
          ))}
        </div>

        {/* Special Cultural Editions Section */}
        <CulturalEditionsSection />

        {/* CTA Section */}
        <div className="mt-32 lg:mt-48 text-center">
          <h2 className="text-4xl lg:text-5xl mb-6">
            Ready to Transform
            <span className="block" style={{ color: 'var(--color-accent)' }}>Your Living Space?</span>
          </h2>

          <p
            className="text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Schedule a consultation with our smart home architects and discover how Lynière can elevate your lifestyle.
          </p>

          <button
            onClick={() => onNavigate?.('contact')}
            className="group px-10 py-5 rounded-full text-sm tracking-wider uppercase inline-flex items-center gap-3"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-bg-primary)',
            }}
          >
            <span>Get Started</span>
            <div>
              →
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
import { motion } from "motion/react";
import { Cpu, Wind, Layers, Maximize } from "lucide-react";

export function ArchitecturalDetails() {
    const features = [
        {
            icon: Cpu,
            title: "Invisible Intelligence",
            description: "Sensors and processors embedded within structural elements, maintaining aesthetic purity while providing full automation.",
            gradient: "from-blue-500/20 to-purple-500/20",
            accent: "#3B82F6"
        },
        {
            icon: Wind,
            title: "Adaptive Climate",
            description: "Airflow systems that learn your preferences and adjust micro-climates room by room, ensuring perfect comfort.",
            gradient: "from-emerald-500/20 to-teal-500/20",
            accent: "#10B981"
        },
        {
            icon: Layers,
            title: "Smart Materials",
            description: "Self-healing surfaces and dynamic opacity glass that responds to sunlight intensity and privacy needs.",
            gradient: "from-orange-500/20 to-red-500/20",
            accent: "#F97316"
        },
        {
            icon: Maximize,
            title: "Spatial Audio",
            description: "Wall-integrated sound systems that follow you, creating an immersive acoustic environment without visible speakers.",
            gradient: "from-violet-500/20 to-pink-500/20",
            accent: "#8B5CF6"
        }
    ];

    return (
        <section className="relative py-32 lg:py-48 overflow-hidden">
            <div className="container-luxury">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-xs tracking-[0.4em] uppercase block mb-6" style={{ color: 'var(--color-text-muted)' }}>
                        Integrated Systems
                    </span>
                    <h2 className="text-4xl lg:text-7xl mb-8">
                        Architecture that
                        <span className="block text-stroke-fill mt-2">Learns & Adapts</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-[2.5rem] p-10 lg:p-14 min-h-[300px] flex flex-col justify-end"
                            style={{ backgroundColor: 'var(--color-bg-secondary)' }}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                            />

                            <div className="relative z-10">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: 'var(--color-bg-primary)', border: `1px solid ${feature.accent}40` }}
                                >
                                    <feature.icon className="w-7 h-7" style={{ color: feature.accent }} />
                                </div>

                                <h3 className="text-2xl mb-4 font-light tracking-wide">{feature.title}</h3>
                                <p className="text-base leading-relaxed max-w-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative line */}
                            <div
                                className="absolute bottom-0 left-0 h-1 transition-all duration-700 w-0 group-hover:w-full"
                                style={{ backgroundColor: feature.accent }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

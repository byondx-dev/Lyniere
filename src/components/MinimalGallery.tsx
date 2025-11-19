import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    location: "Manhattan",
    type: "Penthouse",
    year: "2024",
    image: "https://images.unsplash.com/photo-1740030325891-c8cf49628acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwZW50aG91c2UlMjBjaXR5c2NhcGUlMjBuaWdodHxlbnwxfHx8fDE3NjMyODMxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    location: "Singapore",
    type: "Residence",
    year: "2024",
    image: "https://images.unsplash.com/photo-1759774310455-80dba1348cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwZGFya3xlbnwxfHx8fDE3NjMyODMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    location: "London",
    type: "Suite",
    year: "2024",
    image: "https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjMyODMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function MinimalGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-40">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <span className="text-xs tracking-[0.4em] uppercase block mb-8" style={{ color: 'var(--color-text-muted)' }}>
            Selected Projects
          </span>
          <h2>
            Recent
            <br />
            <span className="text-stroke">Work</span>
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                {/* Project Info */}
                <motion.div 
                  className="md:col-span-4 space-y-6"
                  animate={{
                    x: hoveredId === project.id ? 20 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-8xl" style={{ color: 'var(--color-bg-tertiary)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div>
                    <h3 className="mb-4">{project.location}</h3>
                    <div className="flex gap-8" style={{ color: 'var(--color-text-secondary)' }}>
                      <span>{project.type}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <motion.div
                    className="flex items-center gap-4 text-sm tracking-wider uppercase"
                    style={{ color: 'var(--color-text-muted)' }}
                    animate={{
                      x: hoveredId === project.id ? 10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    View Project
                    <motion.div
                      animate={{
                        width: hoveredId === project.id ? 40 : 20
                      }}
                      transition={{ duration: 0.3 }}
                      className="h-[1px]"
                      style={{ backgroundColor: 'var(--color-text-muted)' }}
                    />
                  </motion.div>
                </motion.div>

                {/* Project Image */}
                <motion.div 
                  className="md:col-span-8 relative group"
                  animate={{
                    scale: hoveredId === project.id ? 1.02 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.div
                      animate={{
                        scale: hoveredId === project.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.7 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={`${project.location} ${project.type}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Gradient overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(to top, var(--color-bg-primary) 0%, transparent 50%)' }}
                    />

                    {/* Border */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        border: hoveredId === project.id 
                          ? '1px solid var(--color-accent)' 
                          : '1px solid var(--color-border)'
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Corner accent - only on hover */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-32 h-32 glass-panel"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                      scale: hoveredId === project.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
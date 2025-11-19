import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1759774310455-80dba1348cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwZGFya3xlbnwxfHx8fDE3NjMyODMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Residential Penthouse",
    location: "Manhattan, New York"
  },
  {
    url: "https://images.unsplash.com/photo-1740030325891-c8cf49628acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwZW50aG91c2UlMjBjaXR5c2NhcGUlMjBuaWdodHxlbnwxfHx8fDE3NjMyODMxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Sky Residence",
    location: "Dubai Marina"
  },
  {
    url: "https://images.unsplash.com/photo-1714648775477-a15cc5aed21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWxsbmVzcyUyMHNwYSUyMGRhcmt8ZW58MXx8fHwxNzYzMjgzMTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Private Wellness",
    location: "Singapore"
  },
  {
    url: "https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjMyODMxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Master Suite",
    location: "London"
  },
  {
    url: "https://images.unsplash.com/photo-1758607009840-d1f10bd4c799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhbWJpZW50JTIwbGlnaHRpbmclMjByb29tfGVufDF8fHx8MTc2MzI4MzEyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Living Experience",
    location: "Hong Kong"
  },
  {
    url: "https://images.unsplash.com/photo-1738666830238-68874364293d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGFyayUyMGludGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzI4MzEyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Architectural Vision",
    location: "Tokyo"
  }
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-32 md:py-40 bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a]">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-[#00d4ff] mb-6 block">
            Portfolio
          </span>
          <h2 className="text-gradient-platinum">
            Recent Projects
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => setSelectedImage(index)}
              className="relative group cursor-pointer overflow-hidden h-[400px]"
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Hover glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-t from-[rgba(0,212,255,0.2)] to-transparent"
              />

              {/* Border */}
              <div className="absolute inset-0 border border-[rgba(255,255,255,0.05)] group-hover:border-[rgba(0,212,255,0.4)] transition-colors duration-500" />

              {/* Content */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="mb-2">
                  {image.title}
                </h4>
                <p className="text-sm text-[#a8d8ea] tracking-wider uppercase">
                  {image.location}
                </p>
              </motion.div>

              {/* Corner accent */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#00d4ff]"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 glass-panel p-3 border-glow z-10 hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Image info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-panel p-6 mt-6"
            >
              <h3 className="mb-2">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-[#a8d8ea] tracking-wider uppercase">
                {galleryImages[selectedImage].location}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

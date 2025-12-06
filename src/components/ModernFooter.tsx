import { motion } from "motion/react";

export function ModernFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-32" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12">
              Let's Create
              <br />
              <span className="text-stroke-fill">Together</span>
            </h2>

            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-6 text-xl tracking-wider mb-16"
            >
              <span>Start Your Journey</span>
              <motion.div
                className="w-12 h-[1px]"
                style={{ backgroundColor: 'var(--color-accent)' }}
                whileHover={{ width: 60 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <div className="space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
              <p>contact@lyniere.com</p>
              <p>+1 (555) 000-0000</p>
              <p>New York · London · Tokyo</p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Links */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="text-xs tracking-[0.3em] uppercase block mb-6" style={{ color: 'var(--color-text-muted)' }}>
                  Explore
                </span>
                {['Homes', 'Contact'].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="block transition-colors"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>

              <div className="space-y-4">
                <span className="text-xs tracking-[0.3em] uppercase block mb-6" style={{ color: 'var(--color-text-muted)' }}>
                  Connect
                </span>
                {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="block transition-colors"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <span className="text-xs tracking-[0.3em] uppercase block mb-6" style={{ color: 'var(--color-text-muted)' }}>
                Stay Updated
              </span>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent pb-3 focus:outline-none transition-colors"
                  style={{
                    borderBottom: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)'
                  }}
                />
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm tracking-wider uppercase"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <div className="text-9xl tracking-wider select-none" style={{ color: 'var(--color-text-muted)', opacity: 0.1 }}>
            LYNIÈRE
          </div>

          <div className="flex gap-12 text-xs tracking-wider uppercase" style={{ color: 'var(--color-text-muted)' }}>
            <span>© {currentYear}</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </motion.div>
      </div>

      {/* Floating element */}
      <motion.div
        className="absolute right-1/4 bottom-1/4 w-64 h-64 opacity-15 pointer-events-none"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full" style={{ border: '1px solid var(--color-accent)' }} />
      </motion.div>
    </footer>
  );
}
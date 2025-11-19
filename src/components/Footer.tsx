import { motion } from "motion/react";
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    experience: ["Vision", "Features", "Spaces", "Materials"],
    company: ["About", "Careers", "Press", "Partners"],
    support: ["Contact", "Documentation", "Privacy", "Terms"]
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Twitter, label: "Twitter" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-[#000000] border-t border-[rgba(255,255,255,0.05)]">
      {/* Ambient top glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.3)] to-transparent" />

      <div className="container-luxury py-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-gradient-platinum mb-6">
                Lynière
              </h3>
              <p className="text-[#c0c0c0] mb-8 leading-relaxed max-w-md">
                The future of intelligent luxury living. Where technology disappears and experience remains.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#c0c0c0]">
                  <Mail className="w-4 h-4 text-[#00d4ff]" strokeWidth={1.5} />
                  <span className="tracking-wider">contact@lyniere.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#c0c0c0]">
                  <Phone className="w-4 h-4 text-[#00d4ff]" strokeWidth={1.5} />
                  <span className="tracking-wider">+1 (555) 000-0000</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#c0c0c0]">
                  <MapPin className="w-4 h-4 text-[#00d4ff]" strokeWidth={1.5} />
                  <span className="tracking-wider">New York, NY</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 text-sm tracking-[0.2em] uppercase text-[#e5e5e5]">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-[#c0c0c0] hover:text-[#00d4ff] transition-colors tracking-wide block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-sm text-[#808080] tracking-wider"
          >
            © {currentYear} Lynière. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass-panel p-3 border-[rgba(255,255,255,0.05)] hover:border-[rgba(0,212,255,0.3)] transition-colors group"
              >
                <Icon className="w-4 h-4 text-[#c0c0c0] group-hover:text-[#00d4ff] transition-colors" strokeWidth={1.5} />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs tracking-[0.3em] uppercase text-[#c0c0c0] hover:text-[#00d4ff] transition-colors"
          >
            Back to Top ↑
          </motion.button>
        </div>

        {/* Signature tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[#606060]">
            Live Tomorrow. Today.
          </p>
        </motion.div>
      </div>

      {/* Bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[rgba(0,212,255,0.02)] blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
}

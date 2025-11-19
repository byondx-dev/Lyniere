import { motion } from "motion/react";
import { useState } from "react";
import { Send, MapPin, Phone, Mail, Check, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "kaizen"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "kaizen"
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      interest: value
    });
  };

  const products = [
    { id: "kaizen", name: "KAIZEN - Harmony Through Intelligence" },
    { id: "azura", name: "AZURA - Opulence Reimagined" },
    { id: "nexus", name: "NEXUS - Neural Architecture" },
    { id: "sovereign", name: "SOVEREIGN - Fortress of Privacy" },
    { id: "aurora", name: "AURORA - Nature's Intelligence" },
    { id: "zenith", name: "ZENITH - The Apex Collection" }
  ];

  return (
    <section className="relative min-h-screen py-40 overflow-hidden">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-32 text-center"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.4em] uppercase block mb-8" 
            style={{ color: 'var(--color-text-muted)' }}
          >
            Let's Connect
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            Begin Your
            <span className="block text-stroke-fill">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Experience the future of intelligent luxury. Our experts are ready to guide you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glass-panel rounded-[3rem] p-10 lg:p-12 relative overflow-hidden">
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-50" />
              
              <div className="relative z-10">
                <h3 className="mb-8 text-3xl">Get In Touch</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm tracking-wider uppercase mb-3"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full glass-panel rounded-2xl px-6 py-4 bg-transparent border-[var(--glass-border)] focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300"
                      style={{ color: 'var(--color-text-primary)' }}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm tracking-wider uppercase mb-3"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full glass-panel rounded-2xl px-6 py-4 bg-transparent border-[var(--glass-border)] focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300"
                      style={{ color: 'var(--color-text-primary)' }}
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-sm tracking-wider uppercase mb-3"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full glass-panel rounded-2xl px-6 py-4 bg-transparent border-[var(--glass-border)] focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300"
                      style={{ color: 'var(--color-text-primary)' }}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label 
                      className="block text-sm tracking-wider uppercase mb-3"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      Interested In
                    </label>
                    <Select
                      value={formData.interest}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger 
                        className="w-full glass-panel rounded-2xl px-6 py-4 bg-transparent border-[var(--glass-border)] focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        <SelectValue style={{ color: 'var(--color-text-primary)' }}>
                          {products.find((product) => product.id === formData.interest)?.name}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent 
                        className="glass-panel rounded-2xl border-[var(--glass-border)] backdrop-blur-xl" 
                        style={{ 
                          backgroundColor: 'var(--color-bg-secondary)',
                          color: 'var(--color-text-primary)'
                        }}
                      >
                        {products.map((product) => (
                          <SelectItem 
                            key={product.id} 
                            value={product.id}
                            className="cursor-pointer hover:bg-[var(--color-accent)]/10 focus:bg-[var(--color-accent)]/10 rounded-xl px-4 py-3 transition-colors duration-200"
                            style={{ color: 'var(--color-text-primary)' }}
                          >
                            {product.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm tracking-wider uppercase mb-3"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full glass-panel rounded-2xl px-6 py-4 bg-transparent border-[var(--glass-border)] focus:border-[var(--color-accent)] focus:outline-none transition-colors duration-300 resize-none"
                      style={{ color: 'var(--color-text-primary)' }}
                      placeholder="Tell us about your vision..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full glass-panel rounded-full px-8 py-5 relative overflow-hidden group"
                    disabled={isSubmitted}
                  >
                    <motion.div
                      className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[var(--color-bg-primary)] transition-colors duration-500">
                      {isSubmitted ? (
                        <>
                          <Check className="w-5 h-5" />
                          <span className="tracking-wider">Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <span className="tracking-wider">Send Message</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            {/* Showroom */}
            <div className="glass-panel rounded-[3rem] p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8" style={{ color: 'var(--color-accent)' }} />
                </div>
                <h4 className="mb-4">Flagship Showroom</h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  One Hyde Park<br />
                  100 Knightsbridge<br />
                  London SW1X 7LJ<br />
                  United Kingdom
                </p>
                <motion.div
                  className="mt-6 text-sm tracking-wider"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Visit by Appointment
                </motion.div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-panel rounded-[3rem] p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8" style={{ color: 'var(--color-accent)' }} />
                </div>
                <h4 className="mb-4">Phone</h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  +44 (0) 20 7123 4567<br />
                  Available 24/7
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="glass-panel rounded-[3rem] p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8" style={{ color: 'var(--color-accent)' }} />
                </div>
                <h4 className="mb-4">Email</h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  concierge@lyniere.com<br />
                  partnerships@lyniere.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute left-0 top-1/4 w-[500px] h-[500px] opacity-[0.02] pointer-events-none"
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
    </section>
  );
}
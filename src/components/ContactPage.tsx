import { motion } from "motion/react";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
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
    { id: "kaizen", name: "KAIZEN" },
    { id: "azura", name: "AZURA" },
    { id: "nexus", name: "NEXUS" },
    { id: "sovereign", name: "SOVEREIGN" },
    { id: "aurora", name: "AURORA" },
    { id: "zenith", name: "ZENITH" }
  ];

  return (
    <section className="relative min-h-screen py-24 lg:py-48 bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="container-luxury px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-40 items-start">

          {/* Left Column: Status & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-16 lg:space-y-24"
          >
            {/* Header */}
            <div>
              <span className="text-xs tracking-[0.4em] uppercase block mb-6 lg:mb-8 text-[var(--color-accent)]">
                Private Commission
              </span>
              <h1 className="text-5xl lg:text-8xl font-light tracking-tight leading-none mb-6 lg:mb-8">
                Initiate<br />
                <span className="opacity-50">Dialogue</span>
              </h1>
              <p className="text-xs lg:text-sm tracking-widest uppercase max-w-sm leading-loose border-l border-[var(--color-accent)] pl-6" style={{ color: 'var(--color-text-secondary)' }}>
                For those who seek to shape their environment. A bespoke consultation with our senior architects.
              </p>
            </div>

            {/* Global Concierge Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase mb-6 opacity-40">Global Concierge</h3>
                <div className="space-y-4 text-xl lg:text-2xl font-light tracking-wide break-words">
                  <p>support@lyniere.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Minimal Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="pt-8 lg:pt-12"
          >
            <form onSubmit={handleSubmit} className="space-y-12 lg:space-y-16">
              {/* Name */}
              <div className="relative group cursor-text">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  id="field-name"
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 lg:py-6 text-lg lg:text-xl tracking-widest uppercase placeholder:opacity-50 group-hover:border-[var(--color-accent)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-500 peer"
                />
                <label htmlFor="field-name" className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 peer-focus:opacity-100 -translate-x-4 group-hover:translate-x-0 peer-focus:translate-x-0 transition-all duration-500 pointer-events-none text-[var(--color-accent)] hidden sm:block">
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </label>
              </div>

              {/* Email */}
              <div className="relative group cursor-text">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  id="field-email"
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 lg:py-6 text-lg lg:text-xl tracking-widest uppercase placeholder:opacity-50 group-hover:border-[var(--color-accent)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-500 peer"
                />
                <label htmlFor="field-email" className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 peer-focus:opacity-100 -translate-x-4 group-hover:translate-x-0 peer-focus:translate-x-0 transition-all duration-500 pointer-events-none text-[var(--color-accent)] hidden sm:block">
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </label>
              </div>

              {/* Interest */}
              <div className="relative group cursor-pointer z-50">
                <label className="block text-xs uppercase mb-4 opacity-40 tracking-[0.3em]">
                  Focus
                </label>
                <Select value={formData.interest} onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full bg-transparent border-b border-[var(--color-border)] py-4 lg:py-6 px-0 text-lg lg:text-xl tracking-widest uppercase focus:outline-none focus:border-[var(--color-accent)] group-hover:border-[var(--color-accent)] border-t-0 border-l-0 border-r-0 rounded-none h-auto shadow-none truncate">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent
                    className="bg-white border border-[var(--color-border)] rounded-none p-0 max-w-[90vw] z-[60]"
                    style={{ backgroundColor: '#ffffff', opacity: 1 }}
                  >
                    {products.map((product) => (
                      <SelectItem
                        key={product.id}
                        value={product.id}
                        className="text-xs lg:text-sm tracking-widest uppercase py-3 lg:py-4 px-4 lg:px-6 hover:bg-[var(--color-bg-secondary)] focus:bg-[var(--color-bg-secondary)] cursor-pointer rounded-none transition-colors whitespace-normal"
                      >
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="absolute right-0 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none text-[var(--color-accent)] hidden sm:block">
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 rotate-90" />
                </div>
              </div>

              {/* Message */}
              <div className="relative group cursor-text">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  id="field-message"
                  rows={1}
                  placeholder="VISION"
                  className="w-full bg-transparent border-b border-[var(--color-border)] py-4 lg:py-6 text-lg lg:text-xl tracking-widest uppercase placeholder:opacity-50 group-hover:border-[var(--color-accent)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-500 resize-none peer"
                  style={{ minHeight: '80px' }}
                />
                <label htmlFor="field-message" className="absolute right-0 top-8 opacity-0 group-hover:opacity-100 peer-focus:opacity-100 -translate-x-4 group-hover:translate-x-0 peer-focus:translate-x-0 transition-all duration-500 pointer-events-none text-[var(--color-accent)] hidden sm:block">
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </label>
              </div>

              {/* Minimal Submit */}
              <div className="pt-8 lg:pt-12 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="group flex items-center gap-6 text-xs lg:text-sm tracking-[0.3em] uppercase relative"
                  style={{ color: isSubmitted ? 'var(--color-accent)' : 'var(--color-text-primary)' }}
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-[var(--color-accent)]">
                    {isSubmitted ? "Request Received" : "Request Consultation"}
                  </span>
                  <div className="w-12 h-[1px] bg-[var(--color-border)] group-hover:bg-[var(--color-accent)] group-hover:w-20 transition-all duration-500" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}
      />
    </section>
  );
}
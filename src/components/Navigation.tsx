import { motion } from "motion/react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="fixed top-6 left-0 right-0 z-50"
    >
      <div className="container-luxury flex justify-center">
        <motion.div 
          className="rounded-full px-6 py-2.5 flex items-center gap-4"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
          whileHover={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Navigation Links */}
          {[
            { label: 'Start', page: 'start' },
            { label: 'Homes', page: 'homes' },
            { label: 'Contact', page: 'contact' }
          ].map((item, index) => (
            <motion.button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05 
              }}
              className="text-xs tracking-wider transition-all duration-300 px-4 py-1.5 rounded-full relative"
              style={{ 
                color: currentPage === item.page ? 'var(--color-bg-primary)' : 'var(--color-text-primary)',
                backgroundColor: currentPage === item.page ? 'var(--color-text-primary)' : 'transparent'
              }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
}
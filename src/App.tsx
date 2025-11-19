import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { CustomCursor } from "./components/CustomCursor";
import { ThemeToggle } from "./components/ThemeToggle";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { HomesPage } from "./components/HomesPage";
import { ContactPage } from "./components/ContactPage";
import { ModernFooter } from "./components/ModernFooter";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentPage, setCurrentPage] = useState<'start' | 'homes' | 'contact'>('start');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as 'start' | 'homes' | 'contact');
    // Smooth scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      {/* Welcome Screen */}
      {showWelcome && <WelcomeScreen onComplete={() => setShowWelcome(false)} />}

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Global Navigation */}
      {!showWelcome && <Navigation currentPage={currentPage} onNavigate={handleNavigate} />}

      {/* Animated Background Elements */}
      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Render current page */}
        {currentPage === 'start' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'homes' && <HomesPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}

        {/* Footer */}
        <ModernFooter />
      </div>
    </ThemeProvider>
  );
}
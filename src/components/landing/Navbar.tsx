import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import intentLogo from "/assets/intent-logo.jpg";
import { useResponsive } from "@/contexts/ResponsiveContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Mobile Layout - Optimized for touch targets and readability
  if (isMobile) {
    return (
      <>
        {/* Mobile Top Bar - Logo + Hamburger */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-xl border-b border-[#3B82F6] safe-area-top"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="touch-target w-12 h-12 border border-[#3B82F6] rounded-full overflow-hidden bg-white shadow-lg flex-shrink-0 hover:shadow-xl transition-shadow active:scale-95"
          >
            <img
              src={intentLogo}
              alt="INTENT"
              className="w-full h-full object-cover"
            />
          </a>
          
          {/* Hamburger Button */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="touch-target w-12 h-12 flex items-center justify-center border border-[#3B82F6] rounded-full bg-white hover:bg-[#3B82F6] transition-all duration-300 active:scale-95"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <motion.span
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold leading-none"
              >
                {mobileMenuOpen ? "✕" : "☰"}
              </motion.span>
            </button>
          </div>
        </motion.div>

        {/* Mobile Full-Screen Menu - Slide-in Overlay */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 pt-20"
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-20 right-0 bottom-0 w-full max-w-xs z-40 bg-white/98 backdrop-blur-xl border-l border-[#3B82F6] shadow-2xl overflow-y-auto pt-2 pb-24 px-4 space-y-3"
            >
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="touch-target w-full px-6 py-4 text-left font-mono text-lg font-bold text-[#1A1A1A] hover:bg-[#3B82F6] hover:text-white rounded-xl transition-all duration-300 active:scale-95"
              >
                {t('navbar.explore')}
              </button>

              <div className="h-px bg-[#E5E5E0]" />

              <button
                onClick={() => scrollToSection("why-matters")}
                className="touch-target w-full px-6 py-4 text-left font-mono text-lg font-bold text-[#1A1A1A] hover:bg-[#3B82F6] hover:text-white rounded-xl transition-all duration-300 active:scale-95"
              >
                {t('navbar.build')}
              </button>

              <div className="h-px bg-[#E5E5E0]" />

              <button
                onClick={() => scrollToSection("ecosystem")}
                className="touch-target w-full px-6 py-4 text-left font-mono text-lg font-bold text-[#1A1A1A] hover:bg-[#3B82F6] hover:text-white rounded-xl transition-all duration-300 active:scale-95"
              >
                {t('navbar.integrate')}
              </button>

              <div className="h-px bg-[#E5E5E0] mt-4" />

              <button
                disabled
                className="touch-target w-full mt-4 px-6 py-4 bg-[#3B82F6] hover:bg-[#4A90FF] text-white font-mono text-lg font-bold rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg active:scale-95"
              >
                {t('navbar.launchApp')}
              </button>
            </motion.nav>
          </>
        )}
      </>
    );
  }

  // Desktop Layout
  return (
    <>
      {/* Logo - Fixed Top Left */}
      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("hero");
        }}
        className="fixed top-8 left-8 z-50 flex items-center gap-4 group"
      >
        <div className="w-16 h-16 border-2 border-[#3B82F6] rounded-full overflow-hidden bg-white shadow-lg">
          <img
            src={intentLogo}
            alt="INTENT"
            className="w-full h-full object-cover"
          />
        </div>
        <span 
          className="font-black text-2xl uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#3B82F6] transition-colors duration-300"
          style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}
        >
          INTENT
        </span>
      </motion.a>

      {/* Center Navigation Pill */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? "shadow-2xl" : "shadow-lg"
        }`}
      >
        <div
          className="flex items-center gap-2 px-8 py-4 bg-white/95 backdrop-blur-xl border-2 border-[#3B82F6] rounded-full"
          style={{ backdropFilter: "blur(24px)" }}
        >
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="px-6 py-3 font-mono text-base font-bold text-[#1A1A1A] hover:text-white hover:bg-[#3B82F6] rounded-full transition-all duration-300"
          >
            {t('navbar.explore')}
          </button>

          <div className="w-px h-6 bg-[#E5E5E0]" />

          <button
            onClick={() => scrollToSection("why-matters")}
            className="px-6 py-3 font-mono text-base font-bold text-[#1A1A1A] hover:text-white hover:bg-[#3B82F6] rounded-full transition-all duration-300"
          >
            {t('navbar.integrate')}
          </button>

          <div className="w-px h-6 bg-[#E5E5E0]" />

          <button
            onClick={() => scrollToSection("ecosystem")}
            className="px-6 py-3 font-mono text-base font-bold text-[#1A1A1A] hover:text-white hover:bg-[#3B82F6] rounded-full transition-all duration-300"
          >
            {t('navbar.build')}
          </button>

          <div className="w-px h-6 bg-[#E5E5E0]" />

          <button
            disabled
            className="px-8 py-3 bg-[#3B82F6] hover:bg-[#4A90FF] text-white font-mono text-base font-bold rounded-full transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
          >
            {t('navbar.launchApp')}
          </button>
        </div>
      </motion.nav>

      {/* Language Switcher - Fixed Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="fixed top-8 right-8 z-50"
      >
        <LanguageSwitcher />
      </motion.div>
    </>
  );
};

export default Navbar;
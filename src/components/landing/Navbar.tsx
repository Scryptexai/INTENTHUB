import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import intentLogo from "/assets/intent-logo.jpg";
import { useResponsive } from "@/contexts/ResponsiveContext";

// 7-day countdown target
const LAUNCH_DATE = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

const Navbar = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
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

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = LAUNCH_DATE.getTime() - now.getTime();
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setCountdown({ days, hours, minutes });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  // Mobile Layout - Optimized for touch targets and readability
  if (isMobile) {
    return (
      <>
        {/* Mobile Top Bar - Logo + Hamburger */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-xl border-b border-[#FF6B35] safe-area-top"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="touch-target w-12 h-12 border border-[#FF6B35] rounded-full overflow-hidden bg-white shadow-lg flex-shrink-0 hover:shadow-xl transition-shadow active:scale-95"
          >
            <img
              src={intentLogo}
              alt="INTENT"
              className="w-full h-full object-cover"
            />
          </a>
          
          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="touch-target w-12 h-12 flex items-center justify-center border border-[#FF6B35] rounded-full bg-white hover:bg-[#FF6B35] transition-all duration-300 active:scale-95"
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
              className="fixed top-20 right-0 bottom-0 w-full max-w-xs z-40 bg-white/98 backdrop-blur-xl border-l border-[#FF6B35] shadow-2xl overflow-y-auto pt-2 pb-24 px-4 space-y-3"
            >
              <button
                onClick={() => scrollToSection("problem")}
                className="touch-target w-full px-6 py-4 text-left font-mono text-lg font-bold text-[#1A1A1A] hover:bg-[#FF6B35] hover:text-white rounded-xl transition-all duration-300 active:scale-95"
              >
                Explore
              </button>

              <div className="h-px bg-[#E5E5E0]" />

              <button
                onClick={() => scrollToSection("how-it-works")}
                className="touch-target w-full px-6 py-4 text-left font-mono text-lg font-bold text-[#1A1A1A] hover:bg-[#FF6B35] hover:text-white rounded-xl transition-all duration-300 active:scale-95"
              >
                Build
              </button>

              <div className="h-px bg-[#E5E5E0]" />

              <button
                onClick={() => scrollToSection("dapps")}
                className="touch-target w-full px-6 py-4 text-left font-mono text-lg font-bold text-[#1A1A1A] hover:bg-[#FF6B35] hover:text-white rounded-xl transition-all duration-300 active:scale-95"
              >
                Integrate
              </button>

              <div className="h-px bg-[#E5E5E0] mt-4" />

              <button
                disabled
                className="touch-target w-full mt-4 px-6 py-4 bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-mono text-lg font-bold rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg active:scale-95"
              >
                Launch App →
              </button>
            </motion.nav>
          </>
        )}

        {/* Mobile Bottom Countdown Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#FF6B35] safe-area-bottom"
        >
          <div className="flex items-center justify-center gap-4 px-4 py-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#9B9B9B] uppercase">Launch In</span>
              <div className="flex items-center gap-1 font-mono font-bold text-[#1A1A1A]">
                <span>{formatNumber(countdown.days)}</span>
                <span className="text-[#9B9B9B] text-xs">d</span>
                <span className="text-[#E5E5E0] mx-1">:</span>
                <span>{formatNumber(countdown.hours)}</span>
                <span className="text-[#9B9B9B] text-xs">h</span>
                <span className="text-[#E5E5E0] mx-1">:</span>
                <span>{formatNumber(countdown.minutes)}</span>
                <span className="text-[#9B9B9B] text-xs">m</span>
              </div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }

  // Desktop Layout (unchanged)
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
        <div className="w-16 h-16 border-2 border-[#FF6B35] rounded-full overflow-hidden bg-white shadow-lg">
          <img
            src={intentLogo}
            alt="INTENT"
            className="w-full h-full object-cover"
          />
        </div>
        <span 
          className="font-black text-2xl uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#FF6B35] transition-colors duration-300"
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
          className="flex items-center gap-2 px-8 py-4 bg-white/95 backdrop-blur-xl border-2 border-[#FF6B35] rounded-full"
          style={{ backdropFilter: "blur(24px)" }}
        >
          <button
            onClick={() => scrollToSection("problem")}
            className="px-6 py-3 font-mono text-base font-bold text-[#1A1A1A] hover:text-white hover:bg-[#FF6B35] rounded-full transition-all duration-300"
          >
            Explore
          </button>
          
          <div className="w-px h-6 bg-[#E5E5E0]" />
          
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="px-6 py-3 font-mono text-base font-bold text-[#1A1A1A] hover:text-white hover:bg-[#FF6B35] rounded-full transition-all duration-300"
          >
            Integrate
          </button>
          
          <div className="w-px h-6 bg-[#E5E5E0]" />
          
          <button
            onClick={() => scrollToSection("dapps")}
            className="px-6 py-3 font-mono text-base font-bold text-[#1A1A1A] hover:text-white hover:bg-[#FF6B35] rounded-full transition-all duration-300"
          >
            Build
          </button>
          
          <div className="w-px h-6 bg-[#E5E5E0]" />
          
          <button
            disabled
            className="px-8 py-3 bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-mono text-base font-bold rounded-full transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
          >
            Launch App →
          </button>
        </div>
      </motion.nav>

      {/* Countdown - Fixed Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="fixed top-8 right-8 z-50"
      >
        <div className="flex items-center gap-4 px-6 py-4 bg-white/95 backdrop-blur-xl border-2 border-[#FF6B35] rounded-full shadow-lg">
          <span className="font-mono text-sm font-bold text-[#9B9B9B] uppercase tracking-wider">
            Launch in
          </span>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="font-mono text-2xl font-black text-[#1A1A1A]">
                {formatNumber(countdown.days)}
              </span>
              <span className="font-mono text-[10px] text-[#9B9B9B] uppercase">
                Days
              </span>
            </div>
            <span className="font-mono text-2xl font-black text-[#E5E5E0]">:</span>
            <div className="flex flex-col items-center">
              <span className="font-mono text-2xl font-black text-[#1A1A1A]">
                {formatNumber(countdown.hours)}
              </span>
              <span className="font-mono text-[10px] text-[#9B9B9B] uppercase">
                Hours
              </span>
            </div>
            <span className="font-mono text-2xl font-black text-[#E5E5E0]">:</span>
            <div className="flex flex-col items-center">
              <span className="font-mono text-2xl font-black text-[#1A1A1A]">
                {formatNumber(countdown.minutes)}
              </span>
              <span className="font-mono text-[10px] text-[#9B9B9B] uppercase">
                Mins
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
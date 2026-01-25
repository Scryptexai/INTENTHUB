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

  // Mobile Layout
  if (isMobile) {
    return (
      <>
        {/* Mobile Logo + Hamburger */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between"
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="w-12 h-12 border-2 border-[#1A1A1A] rounded-full overflow-hidden bg-white shadow-lg flex-shrink-0"
          >
            <img
              src={intentLogo}
              alt="INTENT"
              className="w-full h-full object-cover"
            />
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-12 h-12 flex items-center justify-center border-2 border-[#1A1A1A] rounded-full bg-white shadow-lg hover:bg-[#FF6B35] transition-all"
          >
            <span className="text-2xl font-bold">{mobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </motion.div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 bg-white/95 backdrop-blur-xl border-2 border-[#1A1A1A] rounded-2xl shadow-2xl p-4 space-y-2"
          >
            <button
              onClick={() => scrollToSection("problem")}
              className="w-full px-4 py-3 text-left font-mono font-bold text-[#1A1A1A] hover:bg-[#FF6B35] hover:text-white rounded-lg transition-all"
            >
              Explore
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="w-full px-4 py-3 text-left font-mono font-bold text-[#1A1A1A] hover:bg-[#FF6B35] hover:text-white rounded-lg transition-all"
            >
              Build
            </button>
            <button
              onClick={() => scrollToSection("dapps")}
              className="w-full px-4 py-3 text-left font-mono font-bold text-[#1A1A1A] hover:bg-[#FF6B35] hover:text-white rounded-lg transition-all"
            >
              Integrate
            </button>
            <button
              disabled
              className="w-full px-4 py-3 bg-[#FF6B35] text-white font-mono font-bold rounded-lg disabled:opacity-70"
            >
              Launch App →
            </button>
          </motion.div>
        )}

        {/* Mobile Bottom Navigation - Mini Version */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 z-40"
        >
          <div className="flex items-center justify-between gap-2 px-4 py-2 bg-white/95 backdrop-blur-xl border-2 border-[#1A1A1A] rounded-full shadow-2xl text-[10px]">
            <div className="flex items-center gap-1">
              <span className="font-mono font-bold text-[#9B9B9B]">In</span>
              <span className="font-mono font-bold text-[#1A1A1A]">
                {formatNumber(countdown.days)}d
              </span>
            </div>
            <div className="w-px h-4 bg-[#E5E5E0]" />
            <span className="font-mono text-[#9B9B9B]">
              {formatNumber(countdown.hours)}:{formatNumber(countdown.minutes)}
            </span>
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
        <div className="w-16 h-16 border-4 border-[#1A1A1A] rounded-full overflow-hidden bg-white shadow-lg">
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
          className="flex items-center gap-2 px-8 py-4 bg-white/95 backdrop-blur-xl border-4 border-[#1A1A1A] rounded-full"
          style={{ backdropFilter: "blur(24px)" }}
        >
          <button
            onClick={() => scrollToSection("problem")}
            className="px-6 py-3 font-mono text-base font-bold text-[#1A1A1A] hover:text-white hover:bg-[#1A1A1A] rounded-full transition-all duration-300"
          >
            Explore
          </button>
          
          <div className="w-px h-6 bg-[#E5E5E0]" />
          
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="px-6 py-3 font-mono text-base font-bold text-[#1A1A1A] hover:text-white hover:bg-[#1A1A1A] rounded-full transition-all duration-300"
          >
            Integrate
          </button>
          
          <div className="w-px h-6 bg-[#E5E5E0]" />
          
          <button
            onClick={() => scrollToSection("dapps")}
            className="px-6 py-3 font-mono text-base font-bold text-[#1A1A1A] hover:text-white hover:bg-[#1A1A1A] rounded-full transition-all duration-300"
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
        <div className="flex items-center gap-4 px-6 py-4 bg-white/95 backdrop-blur-xl border-4 border-[#1A1A1A] rounded-full shadow-lg">
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
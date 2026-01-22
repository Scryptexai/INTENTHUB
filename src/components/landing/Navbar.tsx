import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "dApps", href: "#dapps" },
];

// 7-day countdown target
const LAUNCH_DATE = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = LAUNCH_DATE.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, "#hero")}
              className="font-display text-xl font-bold text-foreground tracking-wider"
            >
              INTENT
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA - Launch App with Countdown */}
            <div className="hidden md:flex items-center gap-4">
              {/* Countdown */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">Launch:</span>
                <div className="flex gap-1">
                  <span className="px-2 py-1 rounded bg-white/5 text-foreground font-mono">{formatNumber(countdown.days)}d</span>
                  <span className="px-2 py-1 rounded bg-white/5 text-foreground font-mono">{formatNumber(countdown.hours)}h</span>
                  <span className="px-2 py-1 rounded bg-white/5 text-foreground font-mono">{formatNumber(countdown.minutes)}m</span>
                </div>
              </div>
              
              {/* Launch App Button - Blurred */}
              <div className="relative group">
                <button 
                  disabled
                  className="btn-primary text-sm px-6 py-3 opacity-60 cursor-not-allowed relative overflow-hidden"
                >
                  <span className="blur-[1px]">Launch App</span>
                </button>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-xs font-bold text-white/80">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-background"
          >
            <nav className="pt-24 px-4">
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block text-lg font-medium text-foreground py-4 px-4 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Countdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 p-4 glass-card"
              >
                <p className="text-xs text-muted-foreground uppercase mb-3">Launch Countdown</p>
                <div className="flex gap-2">
                  <span className="px-3 py-2 rounded bg-white/5 text-foreground font-mono text-sm">{formatNumber(countdown.days)}d</span>
                  <span className="px-3 py-2 rounded bg-white/5 text-foreground font-mono text-sm">{formatNumber(countdown.hours)}h</span>
                  <span className="px-3 py-2 rounded bg-white/5 text-foreground font-mono text-sm">{formatNumber(countdown.minutes)}m</span>
                  <span className="px-3 py-2 rounded bg-white/5 text-foreground font-mono text-sm">{formatNumber(countdown.seconds)}s</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <button 
                  disabled
                  className="btn-primary w-full opacity-60 cursor-not-allowed relative"
                >
                  <span className="blur-[1px]">Launch App</span>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white/80">Coming Soon</span>
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
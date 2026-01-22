import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Our Ecosystem", href: "#ecosystem", hasDropdown: true },
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
            ? "bg-background border-b border-foreground"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, "#hero")}
              className="font-display text-xl font-bold text-foreground uppercase tracking-wider"
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
                  className="flex items-center gap-1 px-4 py-2 text-sm font-mono font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </a>
              ))}
            </nav>

            {/* Desktop CTA - Launch App with Countdown */}
            <div className="hidden md:flex items-center gap-3">
              {/* Countdown */}
              <div className="flex items-center gap-1 font-mono text-xs">
                <span className="text-muted-foreground">Launch in:</span>
                <div className="flex gap-1">
                  <span className="px-2 py-1 bg-foreground text-background">{formatNumber(countdown.days)}d</span>
                  <span className="px-2 py-1 bg-foreground text-background">{formatNumber(countdown.hours)}h</span>
                  <span className="px-2 py-1 bg-foreground text-background">{formatNumber(countdown.minutes)}m</span>
                  <span className="px-2 py-1 bg-foreground text-background">{formatNumber(countdown.seconds)}s</span>
                </div>
              </div>
              
              {/* Launch App Button - Blurred */}
              <div className="relative group">
                <button 
                  disabled
                  className="btn-primary text-xs px-6 py-3 inline-flex items-center gap-2 opacity-70 cursor-not-allowed relative overflow-hidden"
                >
                  <span className="blur-[2px]">LAUNCH APP</span>
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-primary-foreground bg-foreground/80 px-2 py-1">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 border border-foreground flex items-center justify-center"
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
            <nav className="pt-20 px-4">
              <div className="border border-foreground">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block text-lg font-mono font-bold text-foreground py-4 px-4 border-b border-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
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
                className="mt-4 p-4 border border-foreground"
              >
                <p className="font-mono text-xs text-muted-foreground uppercase mb-2">Launch Countdown</p>
                <div className="flex gap-2 font-mono text-sm">
                  <span className="px-3 py-2 bg-foreground text-background">{formatNumber(countdown.days)}d</span>
                  <span className="px-3 py-2 bg-foreground text-background">{formatNumber(countdown.hours)}h</span>
                  <span className="px-3 py-2 bg-foreground text-background">{formatNumber(countdown.minutes)}m</span>
                  <span className="px-3 py-2 bg-foreground text-background">{formatNumber(countdown.seconds)}s</span>
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
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 opacity-70 cursor-not-allowed relative overflow-hidden"
                >
                  <span className="blur-[2px]">LAUNCH APP</span>
                  <span className="absolute font-mono text-xs font-bold">COMING SOON</span>
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

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero3DElement from "./Hero3DElement";
import WaitlistForm from "./WaitlistForm";
import { Button } from "@/components/ui/button";
import { useResponsive } from "@/contexts/ResponsiveContext";
import { MOBILE_CONFIG } from "@/config/mobileConfig";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const runningTextRef = useRef<HTMLDivElement>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { isMobile, width } = useResponsive();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Responsive 3D animation - slower on mobile
      gsap.to(".hero-3d-element", {
        y: 20,
        rotation: 5,
        duration: 6, // Slightly slower for mobile
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Running text scroll animation with responsive speed
      if (runningTextRef.current) {
        const duration = isMobile ? MOBILE_CONFIG.animations.tickerSpeed.mobile : MOBILE_CONFIG.animations.tickerSpeed.desktop;
        gsap.to(runningTextRef.current, {
          x: "-50%",
          duration: duration,
          ease: "none",
          repeat: -1,
        });
      }

      // Stats counter animation
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        gsap.to(stat, {
          textContent: target,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, width]);

  return (
    <>
      {/* Desktop Hero Layout */}
      {!isMobile && (
        <section 
          id="hero" 
          ref={sectionRef} 
          className="relative w-full h-screen bg-[#FAFAF8] overflow-hidden"
        >
          {/* LAYER 2: Running Text (BEHIND 3D) - Top 1/3 of hero */}
          <div className="absolute top-0 left-0 w-full h-[33.33vh] flex items-center overflow-hidden z-10 pointer-events-none">
            <div
              ref={runningTextRef}
              className="flex whitespace-nowrap"
              style={{ willChange: 'transform' }}
            >
              {[...Array(4)].map((_, index) => (
                <span
                  key={index}
                  className="inline-block px-12 text-[80px] font-normal text-[#000000] opacity-10 uppercase tracking-tight select-none"
                  style={{ 
                    fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif',
                    fontWeight: 400
                  }}
                >
                  BEYOND ONCHAIN
                </span>
              ))}
            </div>
          </div>

          {/* LAYER 3: 3D Animation - FULL HERO SIZE */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="hero-3d-element w-full h-full max-w-full max-h-full">
              <Hero3DElement />
            </div>
          </div>

          {/* LAYER 4: Headline + Tagline Overlay - Left Bottom Desktop */}
          <div className="absolute bottom-[33.33vh] left-[8.33vw] z-30 w-[33.33vw] max-w-[450px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Thick Grid Border */}
              <div className="absolute -inset-5 border-2 border-[#FF6B35] pointer-events-none" />

              {/* Content */}
              <div className="relative p-6 space-y-4">
                {/* Headline - Orange */}
                <h1 
                  className="text-[56px] font-black leading-[0.85] tracking-tight text-[#FF6B35] uppercase"
                  style={{ 
                    fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif',
                    fontWeight: 900
                  }}
                >
                  PROOF OF<br />
                  PARTICIPATION
                </h1>

                {/* Small Orange Line Divider */}
                <div className="w-16 h-1 bg-[#FF6B35]" />

                {/* Tagline - Black */}
                <p 
                  className="text-lg font-normal text-[#1A1A1A] leading-tight"
                  style={{ 
                    fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
                  }}
                >
                  Verify on-chain actions.<br />
                  Generate unique content.<br />
                  Build portable reputation.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button
                    onClick={() => setIsWaitlistOpen(true)}
                    className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-mono text-base uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
                  >
                    JOIN WAITLIST →
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Mobile Hero Layout - Optimized for small screens */}
      {isMobile && (
        <section 
          id="hero" 
          ref={sectionRef} 
          className="relative w-full min-h-screen bg-[#FAFAF8] overflow-hidden pt-16 pb-8 px-4 flex flex-col justify-between"
        >
          {/* Top Section: Tagline + CTA - Compact & Clean */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-3 pt-4"
          >
            {/* Tagline */}
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#9B9B9B] font-bold">
              On-chain verification
            </p>

            {/* CTA Button - Centered, not full width */}
            <Button
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-mono text-sm font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition-all duration-300 active:scale-95"
            >
              JOIN WAITLIST →
            </Button>
          </motion.div>

          {/* Middle Section: Headline - Center Focused */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 flex flex-col items-center justify-center gap-4 py-4 min-h-[180px]"
          >
            {/* Main Headline */}
            <h1 
              className="text-[36px] font-black leading-[1.1] tracking-tight text-[#FF6B35] uppercase text-center"
              style={{ 
                fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif',
                fontWeight: 900
              }}
            >
              PROOF OF<br />
              PARTICIPATION
            </h1>

            {/* Orange Divider */}
            <div className="w-10 h-0.5 bg-[#FF6B35]" />

            {/* Description */}
            <p 
              className="text-[15px] font-normal leading-[1.5] text-[#1A1A1A] text-center max-w-xs"
              style={{ 
                fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
              }}
            >
              Verify on-chain actions. Generate content. Build reputation.
            </p>
          </motion.div>

          {/* Bottom Section: Animation + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-6 pb-4"
          >
            {/* 3D Animation - Compact Size */}
            <div className="hero-3d-element w-56 h-64 max-w-full flex-shrink-0">
              <Hero3DElement />
            </div>

            {/* Stats - 2 Column Layout */}
            <div className="w-full grid grid-cols-2 gap-4">
              {/* Stat 1: Campaigns */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-2xl font-black text-[#FF6B35] font-mono">
                  <span className="stat-number" data-target="50">0</span>+
                </div>
                <p className="text-[11px] uppercase tracking-widest text-[#9B9B9B] font-mono font-bold mt-1">
                  Campaigns
                </p>
              </motion.div>

              {/* Stat 2: Proofs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl font-black text-[#FF6B35] font-mono">
                  <span className="stat-number" data-target="500">0</span>K
                </div>
                <p className="text-[11px] uppercase tracking-widest text-[#9B9B9B] font-mono font-bold mt-1">
                  Proofs
                </p>
              </motion.div>
            </div>

            {/* Stat 3: Transactions - Centered Below */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <div className="text-2xl font-black text-[#FF6B35] font-mono">
                <span className="stat-number" data-target="2">0</span>M+
              </div>
              <p className="text-[11px] uppercase tracking-widest text-[#9B9B9B] font-mono font-bold mt-1">
                Transactions
              </p>
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* Waitlist Modal */}
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
};

export default HeroSection;
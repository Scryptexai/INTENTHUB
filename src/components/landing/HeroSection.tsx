import { useEffect, useRef, useState } from "react";
import { motion } from "f                {[...Array(4)].map((_, index) => (
                <span
                  key={index}
                  className="inline-block px-12 text-[48px] font-normal text-[#000000] opacity-10 uppercase tracking-tight select-none"
                  style={{ 
                    fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif',
                    fontWeight: 400
                  }}
                >
                  BEYOND ONCHAIN
                </span>
              ))}";
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
          <div className="absolute bottom-[33.33vh] left-[8.33vw] z-30 w-[28vw] max-w-[380px]">
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
                  className="text-[40px] font-black leading-[0.85] tracking-tight text-[#FF6B35] uppercase"
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

      {/* Mobile Hero Layout - Fullwidth Animation with Overlay */}
      {isMobile && (
        <section 
          id="hero" 
          ref={sectionRef} 
          className="relative w-screen h-screen bg-[#FAFAF8] overflow-hidden"
        >
          {/* FULLWIDTH BACKGROUND ANIMATION */}
          <div className="hero-3d-element absolute inset-0 w-full h-full">
            <Hero3DElement />
          </div>

          {/* OVERLAY: Tagline + Headline + CTA + Description (No Background) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF6B35] font-bold mb-2"
            >
              On-chain verification
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              <Button
                onClick={() => setIsWaitlistOpen(true)}
                className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-mono text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-lg transition-all duration-300 active:scale-95 shadow-lg"
              >
                JOIN WAITLIST →
              </Button>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[40px] font-black leading-[1.0] tracking-tight text-white text-center uppercase mb-3 drop-shadow-lg"
              style={{ 
                fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif',
                fontWeight: 900,
                textShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
            >
              PROOF OF<br />
              PARTICIPATION
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[14px] font-normal leading-[1.4] text-white text-center max-w-xs drop-shadow-md"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}
            >
              Verify on-chain actions. Generate content. Build reputation.
            </motion.p>
          </div>
        </section>
      )}

      {/* Waitlist Modal */}
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
};

export default HeroSection;
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero3DElement from "./Hero3DElement";
import WaitlistForm from "./WaitlistForm";
import { Button } from "@/components/ui/button";
import { useResponsive } from "@/contexts/ResponsiveContext";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const runningTextRef = useRef<HTMLDivElement>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { isMobile, isTablet } = useResponsive();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Element slow float animation
      gsap.to(".hero-3d-element", {
        y: 20,
        rotation: 5,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Running text scroll animation (behind 3D)
      if (runningTextRef.current) {
        gsap.to(runningTextRef.current, {
          x: "-50%",
          duration: 50,
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
  }, []);

  return (
    <>
      <section 
        id="hero" 
        ref={sectionRef} 
        className="relative w-full min-h-screen md:h-screen bg-[#00000] overflow-hidden pt-20 md:pt-0"
      >
        {/* LAYER 1: Background Base */}

        {/* LAYER 2: Running Text (BEHIND 3D) - Hidden on mobile */}
        {!isMobile && (
          <div className="absolute top-0 left-0 w-full h-[33.33vh] flex items-center overflow-hidden z-10 pointer-events-none">
            <div
              ref={runningTextRef}
              className="flex whitespace-nowrap"
              style={{ willChange: 'transform' }}
            >
              {/* Repeat for seamless loop */}
              {[...Array(4)].map((_, index) => (
                <span
                  key={index}
                  className="inline-block px-12 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-normal text-[#00000] opacity-10 uppercase tracking-tight select-none"
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
        )}

        {/* LAYER 3: 3D Animation - Adjusted for mobile */}
        <div className={`absolute inset-0 z-20 flex items-center justify-center ${isMobile ? 'h-[40vh]' : ''}`}>
          <div className={`hero-3d-element w-full ${isMobile ? 'h-full' : 'h-full'} max-w-full max-h-full`}>
            {!isMobile && <Hero3DElement />}
          </div>
        </div>

        {/* LAYER 4: Headline + Tagline Overlay - Unified Responsive */}
        <div className={`absolute z-30 w-full ${
          isMobile 
            ? 'bottom-0 left-0 right-0 p-6 bg-[#FAFAF8]/95 backdrop-blur-sm border-t-2 border-[#1A1A1A]' 
            : 'bottom-[33.33vh] left-[8.33vw] w-[33.33vw] max-w-[500px]'
        }`}>
          {/* Content Card with Grid Border (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`relative ${isMobile ? '' : ''}`}
          >
            {/* Thick Grid Border (Desktop only) */}
            {!isMobile && (
              <div className="absolute -inset-5 border-4 border-[#1A1A1A] pointer-events-none" />
            )}

            {/* Content */}
            <div className={`relative space-y-4 ${isMobile ? 'px-0 py-0' : 'p-6'}`}>
              
              {/* Headline - Orange */}
              <h1 
                className={`font-black leading-[0.85] tracking-tight text-[#FF6B35] uppercase ${
                  isMobile 
                    ? 'text-3xl' 
                    : 'text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]'
                }`}
                style={{ 
                  fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif',
                  fontWeight: 900
                }}
              >
                PROOF OF<br />
                PARTICIPATION
              </h1>

              {/* Small Orange Line Divider */}
              <div className={`bg-[#FF6B35] ${isMobile ? 'w-8 h-0.5' : 'w-16 h-1'}`} />

              {/* Tagline - Black */}
              <p 
                className={`font-normal text-[#1A1A1A] leading-tight ${
                  isMobile ? 'text-sm' : 'text-lg lg:text-xl'
                }`}
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
                  className={`bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-mono uppercase tracking-wider rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                    isMobile 
                      ? 'w-full text-sm py-3 px-4' 
                      : 'text-base px-8 py-4'
                  }`}
                >
                  {isMobile ? 'APPLY NOW →' : 'JOIN WAITLIST →'}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
};

export default HeroSection;
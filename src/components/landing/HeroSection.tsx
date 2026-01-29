import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import WaitlistForm from "./WaitlistForm";
import { Button } from "@/components/ui/button";
import { useResponsive } from "@/contexts/ResponsiveContext";
import { MOBILE_CONFIG } from "@/config/mobileConfig";
import Hero3DElement from "./Hero3DElement";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const runningTextRef = useRef<HTMLDivElement>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { isMobile, width } = useResponsive();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Running text scroll animation with responsive speed
      if (runningTextRef.current) {
        const duration = isMobile ? MOBILE_CONFIG.animations.tickerSpeed.mobile : MOBILE_CONFIG.animations.tickerSpeed.desktop;
        gsap.fromTo(runningTextRef.current,
          { x: "0%" },
          {
            x: "-50%",
            duration: duration,
            ease: "none",
            repeat: -1,
          }
        );
      }
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
          className="relative w-full h-screen overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFE8DC 30%, #FFD4BD 70%, #FF6B35 100%)'
          }}
        >
          {/* 3D Wave Animation Layer */}
          <Hero3DElement />

          {/* Running Text Background */}
          <div className="absolute top-0 left-0 w-full h-[30vh] flex items-center overflow-hidden z-10 pointer-events-none">
            <div
              ref={runningTextRef}
              className="flex whitespace-nowrap"
              style={{ willChange: 'transform' }}
            >
              {[...Array(4)].map((_, index) => (
                <span
                  key={index}
                  className="inline-block px-12 text-[40px] font-normal text-[#1A1A1A] opacity-10 uppercase tracking-tight select-none"
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

          {/* Hero Content Overlay - Centered */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="w-full max-w-[1400px] px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full text-center"
              >
                {/* Orange Accent Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35]/20 border border-[#FF6B35]/30 rounded-full mb-5 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B35] font-bold">
                    {t('hero.badge')}
                  </span>
                </div>

                {/* Main Headline */}
                <h1
                  className="text-[48px] lg:text-[64px] xl:text-[72px] font-black leading-[1.1] tracking-tight text-[#FF6B35] uppercase mb-6 drop-shadow-lg"
                  style={{
                    fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif',
                    fontWeight: 900
                  }}
                  dangerouslySetInnerHTML={{ __html: t('hero.headline').replace('. ', '.<br />') }}
                />

                {/* Orange Accent Line */}
                <div className="w-20 h-1.5 bg-[#FF6B35] mb-6 shadow-lg mx-auto" />

                {/* Subheadline */}
                <p
                  className="text-xl lg:text-2xl text-[#1A1A1A] leading-relaxed mb-8 mx-auto max-w-3xl font-semibold drop-shadow-md"
                  style={{
                    fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
                  }}
                >
                  {t('hero.subheadline')}
                </p>

                {/* CTA Button */}
                <Button
                  onClick={() => setIsWaitlistOpen(true)}
                  className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-mono text-base lg:text-lg uppercase tracking-wider px-12 py-5 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 active:translate-y-0 active:scale-95"
                >
                  {t('hero.cta')}
                  <span className="ml-2">→</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Mobile Hero Layout */}
      {isMobile && (
        <section
          id="hero"
          ref={sectionRef}
          className="relative w-screen h-screen overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFE8DC 30%, #FFD4BD 70%, #FF6B35 100%)'
          }}
        >
          {/* 3D Wave Animation Layer - Mobile optimized */}
          <div className="absolute bottom-0 left-0 right-0 h-[40vh] pointer-events-none">
            <Hero3DElement />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full text-center"
            >
              {/* Orange Accent Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FF6B35]/20 border border-[#FF6B35]/30 rounded-full mb-4 backdrop-blur-sm"
              >
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FF6B35] font-bold">
                  Proof of Participation
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[32px] lg:text-[40px] font-black leading-[1.1] tracking-tight text-[#FF6B35] uppercase mb-5 drop-shadow-lg"
                style={{
                  fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif',
                  fontWeight: 900
                }}
              >
                Stop Farming Blind.<br />
                Start Using ARC<br />
                the Right Way.
              </motion.h1>

              {/* Orange Accent Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-1.5 bg-[#FF6B35] mb-5 origin-left shadow-lg"
              />

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg lg:text-xl text-[#1A1A1A] leading-relaxed mb-6 font-semibold drop-shadow-md"
                style={{
                  fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
                }}
              >
                INTENT bantu kamu fokus ke aktivitas on-chain yang beneran dipakai tim ARC.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  onClick={() => setIsWaitlistOpen(true)}
                  className="w-full bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-mono text-sm uppercase tracking-wider px-10 py-4 rounded-xl transition-all duration-300 shadow-2xl active:scale-95"
                >
                  Start Daily ARC Activities
                  <span className="ml-2">→</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Waitlist Modal */}
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
};

export default HeroSection;
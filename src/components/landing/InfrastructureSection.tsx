import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, Palette, Loader2, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "@/contexts/ResponsiveContext";
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const InfrastructureSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile } = useResponsive();

  const steps = [
    {
      number: "01",
      icon: Search,
      headline: t('infrastructure.steps.0.title'),
      text: t('infrastructure.steps.0.description'),
      tech: t('infrastructure.steps.0.tech')
    },
    {
      number: "02",
      icon: CheckCircle,
      headline: t('infrastructure.steps.1.title'),
      text: t('infrastructure.steps.1.description'),
      tech: t('infrastructure.steps.1.tech')
    },
    {
      number: "03",
      icon: Palette,
      headline: t('infrastructure.steps.2.title'),
      text: t('infrastructure.steps.2.description'),
      tech: t('infrastructure.steps.2.tech')
    },
    {
      number: "04",
      icon: Loader2,
      headline: t('infrastructure.steps.3.title'),
      text: t('infrastructure.steps.3.description'),
      tech: t('infrastructure.steps.3.tech')
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Disable ornament animations on mobile for performance
      if (!isMobile) {
        // Floating ornaments - desktop only
        gsap.to(".infra-ornament-1", {
          y: 15,
          rotation: 5,
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to(".infra-ornament-2", {
          x: -10,
          y: 10,
          duration: 5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to(".infra-ornament-rotate", {
          rotation: 360,
          duration: 25,
          ease: "none",
          repeat: -1,
        });
      }

      // Cards cascade animation
      gsap.to(".infra-step-card", {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".infra-cards-container",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Connecting lines animation - desktop only
      if (!isMobile) {
        gsap.to(".infra-connecting-line", {
          scaleX: 1,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".infra-cards-container",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className={`relative w-full min-h-screen bg-white overflow-hidden transition-all ${
        isMobile ? 'py-16' : 'py-20 lg:py-32'
      }`}
    >
      {/* Background Grid Pattern - Desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-[20%] w-px h-full bg-[#1A1A1A]" />
          <div className="absolute top-0 left-[40%] w-px h-full bg-[#1A1A1A]" />
          <div className="absolute top-0 left-[60%] w-px h-full bg-[#1A1A1A]" />
          <div className="absolute top-0 left-[80%] w-px h-full bg-[#1A1A1A]" />
          <div className="absolute top-[25%] left-0 w-full h-px bg-[#1A1A1A]" />
          <div className="absolute top-[50%] left-0 w-full h-px bg-[#1A1A1A]" />
          <div className="absolute top-[75%] left-0 w-full h-px bg-[#1A1A1A]" />
        </div>
      )}

      {/* Decorative Ornaments - Desktop only */}
      {!isMobile && (
        <>
          <div className="absolute top-32 left-20 w-40 h-40 infra-ornament-1 pointer-events-none">
            <div className="w-full h-full border-2 border-[#FF6B35] opacity-5" />
            <div className="absolute inset-8 border-2 border-[#FF6B35] opacity-10" />
          </div>

          <div className="absolute bottom-40 right-24 w-32 h-32 infra-ornament-2 pointer-events-none">
            <div className="w-full h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FF6B35" strokeWidth="2" opacity="0.1" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="#FF6B35" strokeWidth="1" opacity="0.15" />
              </svg>
            </div>
          </div>

          <div className="absolute top-1/3 right-1/3 infra-ornament-rotate pointer-events-none">
            <div className="w-20 h-20 border-2 border-[#FF6B35] opacity-5 rotate-45" />
          </div>
        </>
      )}

      <div className={`${isMobile ? 'px-6' : 'max-w-[1400px] mx-auto px-6 lg:px-12'} relative z-10`}>

        {/* Section Header */}
        <div className={`text-center space-y-8 ${isMobile ? 'mb-16' : 'mb-24 lg:mb-32'}`}>

          {/* Orange Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35]/10 border border-[#FF6B35] rounded-full"
          >
            <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B35] font-bold">
              {t('infrastructure.badge')}
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              className="font-mono text-[#9B9B9B] uppercase tracking-[0.3em]"
            >
              {t('infrastructure.subtitle')}
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={isMobile ? '' : 'max-w-4xl mx-auto'}
          >
            <h2
              className={`font-black leading-[1.2] text-[#1A1A1A] uppercase ${
                isMobile ? 'text-xl' : 'text-[32px] lg:text-[38px] xl:text-[42px]'
              }`}
              style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}
            >
              {t('infrastructure.headline')}
            </h2>
          </motion.div>

          {/* Orange Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1.5 bg-[#FF6B35] mx-auto"
          />
        </div>

        {/* 4-Step Cards with Connecting Lines */}
        <div className="infra-cards-container relative">

          {/* Cards Grid - Responsive */}
          <div className={`grid gap-8 lg:gap-10 relative ${
            isMobile ? 'grid-cols-1' : 'lg:grid-cols-4'
          }`}>

            {/* Connecting Lines - Desktop only */}
            {!isMobile && (
              <>
                <div className="infra-connecting-line hidden lg:block absolute top-[20%] left-[25%] w-[12.5%] h-0.5 bg-[#FF6B35] z-0 opacity-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-transparent border-l-[#FF6B35]" />
                </div>
                <div className="infra-connecting-line hidden lg:block absolute top-[20%] left-[50%] w-[12.5%] h-0.5 bg-[#FF6B35] z-0 opacity-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-transparent border-l-[#FF6B35]" />
                </div>
                <div className="infra-connecting-line hidden lg:block absolute top-[20%] left-[75%] w-[12.5%] h-0.5 bg-[#FF6B35] z-0 opacity-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-transparent border-l-[#FF6B35]" />
                </div>
              </>
            )}

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="infra-step-card relative z-10 group opacity-0"
                style={{ y: 100 }}
              >
                <div className="bg-[#FAFAF8] border-2 border-[#E5E5E0] p-6 lg:p-10 h-full hover:border-[#FF6B35] hover:shadow-xl transition-all duration-500 relative overflow-hidden rounded-lg">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/0 via-[#FF6B35]/0 to-[#FF6B35]/5 group-hover:from-[#FF6B35]/5 group-hover:via-[#FF6B35]/0 group-hover:to-[#FF6B35]/10 transition-all duration-500 pointer-events-none" />

                  {/* Number Badge - Top Left */}
                  <div className={`absolute bg-[#FF6B35] border-4 border-white flex items-center justify-center shadow-lg ${
                    isMobile ? '-top-3 -left-3 w-12 h-12' : '-top-4 -left-4 w-16 h-16 lg:w-20 lg:h-20'
                  }`}>
                    <span className={`font-mono font-black text-white ${
                      isMobile ? 'text-sm' : 'text-xl lg:text-2xl'
                    }`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className={`mb-6 lg:mb-8 ${isMobile ? 'pt-4' : 'pt-6'}`}>
                    <div className={`border-2 border-[#FF6B35] bg-white rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#FF6B35] ${
                      isMobile ? 'w-16 h-16' : 'w-20 h-20 lg:w-24 lg:h-24'
                    }`}>
                      <step.icon className={`text-[#FF6B35] group-hover:text-white transition-colors duration-500 ${
                        isMobile ? 'w-8 h-8' : 'w-10 h-10 lg:w-12 lg:h-12'
                      }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 lg:space-y-5 relative z-10">
                    {/* Tech Badge */}
                    <div className="inline-block">
                      <span className={`font-mono uppercase tracking-wider text-[#9B9B9B] bg-[#FAFAF8] border border-[#E5E5E0] rounded-full ${
                        isMobile ? 'text-[10px] px-3 py-1.5' : 'text-xs px-4 py-2'
                      }`}>
                        {step.tech}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3
                      className={`font-black text-[#1A1A1A] uppercase leading-tight transition-colors duration-500 ${
                        isMobile ? 'text-base' : 'text-xl lg:text-2xl'
                      }`}
                      style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}
                    >
                      {step.headline}
                    </h3>

                    {/* Divider */}
                    <div className={`bg-[#FF6B35] transition-all duration-500 ${
                        isMobile ? 'w-12 h-0.5' : 'w-16 h-1 group-hover:w-24'
                      }`} />

                    {/* Description */}
                    <p className={`font-mono text-[#6B6B6B] leading-relaxed ${
                      isMobile ? 'text-xs' : 'text-sm lg:text-base'
                    }`}>
                      {step.text}
                    </p>

                    {/* Arrow Icon on Hover - Hide on mobile */}
                    {!isMobile && (
                      <div className="flex items-center gap-2 text-[#FF6B35] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider">Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Decorative Corner Element */}
                  <div className={`border-t-2 border-l-2 border-[#FF6B35] opacity-0 group-hover:opacity-20 transition-all duration-500 absolute bottom-0 right-0 ${
                    isMobile ? 'w-12 h-12' : 'w-16 h-16 lg:w-20 lg:h-20'
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className={`text-center ${isMobile ? 'mt-12' : 'mt-20'}`}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#FAFAF8] border-2 border-[#FF6B35] rounded-lg">
              <p className={`font-mono text-[#1A1A1A] font-bold uppercase tracking-wider ${
                isMobile ? 'text-sm' : 'text-lg lg:text-xl'
              }`}>
                {t('infrastructure.summary')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E5E0]" />
    </section>
  );
};

export default InfrastructureSection;

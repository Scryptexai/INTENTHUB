import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, Palette, Loader2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "@/contexts/ResponsiveContext";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: Search,
    headline: "ACTIVITY INDEXING",
    text: "Reads wallet interactions with supported protocols in real-time. No manual submission required.",
    tech: "RPC Monitoring"
  },
  {
    number: "02",
    icon: CheckCircle,
    headline: "PROTOCOL-LEVEL VALIDATION",
    text: "Confirms real contract-level actions through RPC verification. Not UI clicks—actual on-chain execution.",
    tech: "Smart Contract Events"
  },
  {
    number: "03",
    icon: Palette,
    headline: "PROOF & CONTENT GENERATION",
    text: "Mints structured proof NFT and generates verifiable campaign content. Portable across ecosystems.",
    tech: "AI + Blockchain"
  },
];

const InfrastructureSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile } = useResponsive();

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
        stagger: 0.2,
        duration: 1,
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
          stagger: 0.2,
          duration: 0.8,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".infra-cards-container",
            start: "top 70%",
            toggleActions: "play none none reverse",
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
        isMobile ? 'py-12' : 'py-20 lg:py-32'
      }`}
    >
      {/* Background Grid Pattern - Desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
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
            <div className="w-20 h-20 border-4 border-[#FF6B35] opacity-5 rotate-45" />
          </div>

          {/* Large Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            <p 
              className="text-[180px] lg:text-[240px] font-black text-[#1A1A1A] opacity-[0.02] uppercase whitespace-nowrap"
              style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}
            >
              INTENT
            </p>
          </div>
        </>
      )}

      <div className={`${isMobile ? 'px-4' : 'max-w-[1400px] mx-auto px-6 lg:px-12'} relative z-10`}>
        
        {/* Section Header */}
        <div className={`text-center space-y-8 ${isMobile ? 'mb-12' : 'mb-20 lg:mb-28'}`}>
          
          {/* Eyebrow with Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex items-center justify-center gap-6 ${isMobile ? 'gap-3' : ''}`}
          >
            <div className={`${isMobile ? 'w-6 h-px' : 'w-12 h-px'} bg-[#FF6B35]`} />
            <p className={`font-mono uppercase tracking-[0.25em] text-[#FF6B35] font-bold ${
              isMobile ? 'text-[10px]' : 'text-xs'
            }`}>
              INFRASTRUCTURE LAYER
            </p>
            <div className={`${isMobile ? 'w-6 h-px' : 'w-12 h-px'} bg-[#FF6B35]`} />
          </motion.div>

          {/* Subtitle - Spaced Letters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p 
              className={`font-mono text-[#9B9B9B] uppercase tracking-[0.3em] ${
                isMobile ? 'text-[11px]' : 'text-sm lg:text-base'
              }`}
            >
              B E Y O N D · O N C H A I N
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
                isMobile ? 'text-2xl' : 'text-[26px] lg:text-[48px] xl:text-[56px]'
              }`}
              style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", mastertext plain' }}
            >
              INTENT IS A BEHAVIOR VERIFICATION LAYER
            </h2>
          </motion.div>

          {/* Orange Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${isMobile ? 'w-16 h-0.5' : 'w-24 h-1'} bg-[#FF6B35] mx-auto`}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`font-mono text-[#6B6B6B] leading-relaxed ${
              isMobile ? 'text-sm max-w-sm mx-auto' : 'text-base lg:text-lg max-w-3xl mx-auto'
            }`}
          >
            It indexes protocol interactions, validates real usage, 
            and issues structured proofs across campaigns and ecosystems.
          </motion.p>
        </div>

        {/* 3-Step Cards with Connecting Lines */}
        <div className="infra-cards-container relative">
          
          {/* Cards Grid - Responsive */}
          <div className={`grid gap-8 lg:gap-6 relative ${
            isMobile ? 'grid-cols-1' : 'lg:grid-cols-3'
          }`}>
            
            {/* Connecting Lines - Desktop only, hidden on mobile */}
            {!isMobile && (
              <>
                {/* Line between card 1 and 2 */}
                <div className="infra-connecting-line hidden lg:block absolute top-1/2 left-[33.33%] w-[8.33%] h-0.5 bg-[#FF6B35] -translate-y-1/2 z-0 opacity-0" style={{ transform: 'translateY(-50%) scaleX(0)' }}>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-[#FF6B35]" />
                </div>

                {/* Line between card 2 and 3 */}
                <div className="infra-connecting-line hidden lg:block absolute top-1/2 left-[58.33%] w-[8.33%] h-0.5 bg-[#FF6B35] -translate-y-1/2 z-0 opacity-0" style={{ transform: 'translateY(-50%) scaleX(0)' }}>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-[#FF6B35]" />
                </div>
              </>
            )}

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="infra-step-card relative z-10 group opacity-0"
                style={{ y: 80 }}
              >
                <div className="bg-[#FAFAF8] border-4 border-[#FF6B35] p-6 lg:p-8 h-full hover:bg-[#FF6B35] transition-all duration-500 relative overflow-hidden">
                  {/* Loading Animation Overlay */}
                  <div className="absolute inset-0 bg-[#FAFAF8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-30">
                    <Loader2 className="w-8 h-8 text-[#FF6B35] animate-spin" />
                  </div>
                  
                  {/* Number Badge - Top Left Corner */}
                  <div className="absolute -top-4 -left-4 w-14 h-14 lg:w-16 lg:h-16 bg-[#FF6B35] group-hover:bg-white border-4 border-white group-hover:border-[#FF6B35] flex items-center justify-center transition-all duration-500 z-10">
                    <span className="font-mono text-lg lg:text-xl font-black text-white group-hover:text-[#FF6B35]">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="mb-6 pt-6 lg:pt-8">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 border-4 border-[#FF6B35] group-hover:border-white bg-white group-hover:bg-transparent flex items-center justify-center transition-all duration-500">
                      <step.icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#FF6B35] group-hover:text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Tech Badge */}
                    <div className="inline-block">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#9B9B9B] group-hover:text-white/70 bg-white group-hover:bg-white/10 px-3 py-1 border border-[#E5E5E0] group-hover:border-white/30">
                        {step.tech}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3
                      className={`font-black text-[#1A1A1A] group-hover:text-white uppercase leading-tight transition-colors duration-500 ${
                        isMobile ? 'text-lg' : 'text-xl lg:text-2xl'
                      }`}
                      style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}
                    >
                      {step.headline}
                    </h3>

                    {/* Divider */}
                    <div className="w-12 h-0.5 lg:w-16 lg:h-1 bg-[#FF6B35] group-hover:bg-white transition-colors duration-500" />

                    {/* Description */}
                    <p className={`font-mono text-[#6B6B6B] group-hover:text-white/90 leading-relaxed transition-colors duration-500 ${
                      isMobile ? 'text-xs' : 'text-sm lg:text-base'
                    }`}>
                      {step.text}
                    </p>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 lg:w-20 lg:h-20 border-t-4 border-l-4 border-[#FF6B35] group-hover:border-white opacity-10 group-hover:opacity-30 transition-all duration-500" />

                  {/* Background Pattern on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                    <div className="w-full h-full" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, white 10px, white 11px)`
                    }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`text-center ${isMobile ? 'mt-8' : 'mt-16'}`}
          >
            <p className={`font-mono text-[#1A1A1A] font-bold uppercase tracking-wider ${
              isMobile ? 'text-sm' : 'text-lg lg:text-xl'
            }`}>
              Infrastructure <span className="text-[#FF6B35]">&gt;</span> Manual Tasks
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E5E0]" />
    </section>
  );
};

export default InfrastructureSection;
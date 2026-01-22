import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero3DElement from "./Hero3DElement";
import WaitlistForm from "./WaitlistForm";
import aaveLogo from "@/assets/logos/aave.svg";
import curveLogo from "@/assets/logos/curve.svg";
import acrossLogo from "@/assets/logos/across.svg";

gsap.registerPlugin(ScrollTrigger);

const dapps = [
  { name: "Aave", logo: aaveLogo },
  { name: "Curve", logo: curveLogo },
  { name: "Across", logo: acrossLogo },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on 3D element
      gsap.to(".hero-3d-container", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade out headline on scroll
      gsap.to(headlineRef.current, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% top",
          end: "50% top",
          scrub: true,
        },
      });

      // Partners slide in
      if (partnersRef.current) {
        gsap.from(partnersRef.current.querySelectorAll('.partner-item'), {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="hero" ref={sectionRef} className="min-h-screen relative overflow-hidden grid-pattern">
        {/* Grid Lines Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-foreground/10" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-foreground/10" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-foreground/10" />
        </div>

        {/* 3D Element */}
        <div className="hero-3d-container absolute right-0 top-0 w-full lg:w-1/2 h-full">
          <Hero3DElement />
        </div>

        {/* Content */}
        <div className="container-custom pt-32 pb-16 relative z-10">
          <div ref={headlineRef} className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
            {/* Left Column - Text Content */}
            <div>
              {/* Orange Square Decorator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="orange-square mb-8"
              />

              {/* Main Headline - Stacked Typography */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] tracking-tight uppercase">
                  BACKING
                </h1>
                <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] tracking-tight uppercase">
                  TOMORROW
                </h1>
              </motion.div>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed"
              >
                Backing the very best web3 builders - transforming visionary ideas into real-world growth.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="btn-primary inline-flex items-center gap-3 group"
                >
                  JOIN WAITLIST
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </div>

            {/* Right Column - Space for 3D */}
            <div className="hidden lg:block" />
          </div>

          {/* Bottom Section - Live dApps */}
          <div ref={partnersRef} className="mt-16 border-t border-foreground pt-8">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "hsl(142, 76%, 36%)" }} />
              Live on Arc Network
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {dapps.map((dapp) => (
                <div
                  key={dapp.name}
                  className="partner-item px-4 py-2 border border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-mono text-sm cursor-pointer flex items-center gap-3"
                >
                  <img src={dapp.logo} alt={dapp.name} className="w-5 h-5" />
                  {dapp.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links - Fixed Right */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-2">
          {["X", "TG", "M", "IN"].map((social) => (
            <a
              key={social}
              href="#"
              className="w-10 h-10 border border-foreground bg-background flex items-center justify-center font-mono text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
      </section>

      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
};

export default HeroSection;

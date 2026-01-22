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
      <section id="hero" ref={sectionRef} className="min-h-screen relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-background" />
        <div className="hero-gradient-overlay" />
        
        {/* Grid Lines Overlay */}
        <div className="absolute inset-0 pointer-events-none grid-pattern opacity-50" />

        {/* 3D Element */}
        <div className="hero-3d-container absolute right-0 top-0 w-full lg:w-1/2 h-full">
          <Hero3DElement />
        </div>

        {/* Content */}
        <div className="container-custom pt-32 pb-16 relative z-10">
          <div ref={headlineRef} className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
            {/* Left Column - Text Content */}
            <div>
              {/* Tagline - Beyond Farming */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <p className="eyebrow-accent mb-4">Beyond Farming</p>
                <div className="cyan-line lg:mx-0" />
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <h1 className="section-headline text-center lg:text-left">
                  Verify Real
                  <br />
                  Protocol Usage
                </h1>
              </motion.div>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed text-center lg:text-left mx-auto lg:mx-0"
              >
                INTENT is more than testnet farming—it's proof infrastructure. We verify real protocol usage, not just transaction counts.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button 
                  onClick={() => setIsWaitlistOpen(true)}
                  className="btn-primary inline-flex items-center justify-center gap-3 group"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="btn-secondary inline-flex items-center justify-center gap-3">
                  Learn More
                </button>
              </motion.div>
            </div>

            {/* Right Column - Space for 3D */}
            <div className="hidden lg:block" />
          </div>

          {/* Bottom Section - Live dApps */}
          <div ref={partnersRef} className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-500" />
              Live on Arc Network
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {dapps.map((dapp) => (
                <div
                  key={dapp.name}
                  className="partner-item glass-card px-5 py-3 flex items-center gap-3 cursor-pointer"
                >
                  <img src={dapp.logo} alt={dapp.name} className="w-5 h-5" />
                  <span className="text-sm font-medium">{dapp.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
};

export default HeroSection;
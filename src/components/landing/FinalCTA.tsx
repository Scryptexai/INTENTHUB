import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation
      gsap.from(contentRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // X markers animation
      gsap.from(".cta-x-marker", {
        scale: 0,
        rotation: 180,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding-sm relative overflow-hidden bg-foreground text-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div ref={contentRef}>
          {/* Orange Square */}
          <div className="flex justify-center mb-8">
            <div className="w-4 h-4 bg-primary" />
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-background/60 mb-6">
            GET STARTED TODAY
          </p>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 uppercase leading-tight">
            Start Building
            <br />
            Verifiable On-Chain
            <br />
            <span className="text-primary">Reputation</span>
          </h2>
          
          <p className="text-xl text-background/70 mb-10 max-w-xl mx-auto">
            Every action you take can become proof.
          </p>

          <button className="inline-flex items-center gap-3 bg-primary text-primary-foreground border-2 border-primary px-12 py-5 font-mono text-sm font-bold uppercase tracking-wider hover:bg-transparent hover:text-primary transition-colors group">
            LAUNCH APP
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-8 font-mono text-xs text-background/50 uppercase tracking-wider">
            Free. No credit card. Just connect wallet.
          </p>
        </div>
      </div>

      {/* Corner X Markers */}
      <span className="cta-x-marker x-marker absolute top-8 left-8 text-primary text-2xl">×</span>
      <span className="cta-x-marker x-marker absolute top-8 right-8 text-primary text-2xl">×</span>
      <span className="cta-x-marker x-marker absolute bottom-8 left-8 text-primary text-2xl">×</span>
      <span className="cta-x-marker x-marker absolute bottom-8 right-8 text-primary text-2xl">×</span>
    </section>
  );
};

export default FinalCTA;

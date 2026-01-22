import { useEffect, useRef } from "react";
import { Search, CheckCircle, Palette } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: Search,
    headline: "Activity Indexing",
    text: "Reads wallet interactions with supported protocols",
  },
  {
    number: "02",
    icon: CheckCircle,
    headline: "Protocol-Level Validation",
    text: "Confirms real contract-level actions (not UI clicks)",
  },
  {
    number: "03",
    icon: Palette,
    headline: "Proof & Content Generation",
    text: "Mints proof + generates verifiable campaign content",
  },
];

const InfrastructureSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Cards animation with connecting lines
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.step-card');
        const lines = cardsRef.current.querySelectorAll('.connecting-line');

        gsap.from(cards, {
          scale: 0.8,
          opacity: 0,
          stagger: 0.3,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(lines, {
          scaleX: 0,
          stagger: 0.3,
          duration: 0.6,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-20">
          <p className="eyebrow-accent mb-6">Infrastructure Layer</p>
          
          {/* Spaced Letters Title */}
          <h2 className="text-lg md:text-xl text-muted-foreground tracking-[0.3em] uppercase mb-4 font-display">
            beyond farming
          </h2>
          
          <h3 className="section-headline">
            INTENT is an On-Chain
            <br />
            Behavior Verification Layer
          </h3>
        </div>

        {/* 3-Step System */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting Lines */}
          <div className="connecting-line hidden md:block absolute top-1/2 left-[30%] w-[10%] h-px bg-gradient-to-r from-primary/50 to-transparent -translate-y-1/2 z-0 origin-left" />
          <div className="connecting-line hidden md:block absolute top-1/2 right-[30%] w-[10%] h-px bg-gradient-to-l from-primary/50 to-transparent -translate-y-1/2 z-0 origin-right" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="step-card relative z-10"
            >
              <div className="glass-card p-8 h-full">
                {/* Number Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-primary text-sm font-bold tracking-wider">
                    {step.number}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="card-headline">
                  {step.headline}
                </h3>
                <p className="card-description">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
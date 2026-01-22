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
      // Title animation - split text effect
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
    <section id="how-it-works" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="orange-square" />
            <p className="eyebrow-accent">INFRASTRUCTURE LAYER</p>
            <span className="orange-square" />
          </div>
          
          {/* Spaced Letters Title */}
          <h2 className="font-display text-lg md:text-xl text-muted-foreground spaced-letters uppercase mb-4">
            b e y o n d &nbsp;&nbsp; C a p i t a l
          </h2>
          
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase">
            INTENT is an On-Chain
            <br />
            Behavior Verification Layer
          </h3>
        </div>

        {/* 3-Step System - Brutalist Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 relative">
          {/* Connecting Lines */}
          <div className="connecting-line hidden md:block absolute top-1/2 left-[33%] w-[17%] h-px bg-foreground -translate-y-1/2 z-0 origin-left">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-foreground" />
          </div>
          <div className="connecting-line hidden md:block absolute top-1/2 right-[33%] w-[17%] h-px bg-foreground -translate-y-1/2 z-0 origin-left">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-foreground" />
          </div>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="step-card relative z-10 p-6"
            >
              <div className="border border-foreground bg-card p-8 h-full hover:bg-primary hover:text-primary-foreground group transition-colors cursor-pointer">
                {/* Number Badge */}
                <div className="inline-block bg-primary text-primary-foreground group-hover:bg-foreground group-hover:text-background px-4 py-2 font-mono text-xl font-bold mb-6 border border-foreground">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 border border-foreground group-hover:border-primary-foreground flex items-center justify-center mb-6 bg-background-secondary group-hover:bg-transparent">
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary-foreground mb-3 uppercase">
                  {step.headline}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed">
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

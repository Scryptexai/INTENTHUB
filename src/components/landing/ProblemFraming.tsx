import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, FileText, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: X,
    number: "01",
    headline: "Fake Participation",
    text: "Tasks can be completed without real protocol usage. Bots game the system.",
  },
  {
    icon: FileText,
    number: "02",
    headline: "Manual Proof",
    text: "Screenshots, forms, self-reported activity. No verification layer.",
  },
  {
    icon: User,
    number: "03",
    headline: "No Portable Reputation",
    text: "Your actions don't build long-term on-chain identity.",
  },
];

const ProblemFraming = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Cards stagger animation
      if (cardsRef.current) {
        gsap.from(cardsRef.current.querySelectorAll('.problem-card'), {
          y: 100,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding border-b border-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="orange-square" />
            <p className="eyebrow-accent">THE SYSTEM FAILURE</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase leading-tight">
            Traditional Participation
            <br />
            <span className="text-muted">Doesn't Scale Trust</span>
          </h2>
        </div>

        {/* Problem Cards - Brutalist Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-3 border border-foreground">
          {problems.map((problem, index) => (
            <div
              key={problem.headline}
              className={`problem-card p-8 md:p-10 ${
                index < problems.length - 1 ? "border-b md:border-b-0 md:border-r border-foreground" : ""
              } hover:bg-primary hover:text-primary-foreground group transition-colors cursor-pointer`}
            >
              {/* Number */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-4xl font-bold text-muted-foreground group-hover:text-primary-foreground/60">
                  {problem.number}
                </span>
                <span className="x-marker group-hover:text-primary-foreground">×</span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 border border-foreground group-hover:border-primary-foreground flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary-foreground mb-3 uppercase">
                {problem.headline}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemFraming;

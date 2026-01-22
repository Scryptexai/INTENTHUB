import { useEffect, useRef } from "react";
import { Link2, Target, RefreshCw, Ban } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Link2,
    number: "01",
    headline: "Protocol-Level Validation",
    text: "Verifies contract interactions, not UI clicks. Anti-sybil by design.",
  },
  {
    icon: Target,
    number: "02",
    headline: "Anti-Sybil by Behavior",
    text: "No captchas. No forms. Behavioral verification impossible to fake.",
  },
  {
    icon: RefreshCw,
    number: "03",
    headline: "Cross-Campaign Reusable Proofs",
    text: "Proof minted once, usable across multiple campaigns and ecosystems.",
  },
  {
    icon: Ban,
    number: "04",
    headline: "No Off-Chain Task System",
    text: "Everything verifiable on-chain. No manual submission trust required.",
  },
];

const TechnicalEdge = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header slide in from left
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

      // Grid cards animation
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.feature-card');
        
        gsap.from(cards, {
          y: 80,
          opacity: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16">
          <p className="eyebrow-accent mb-6">Technical Edge</p>
          <h2 className="section-headline">
            Built on Verification
            <br />
            <span className="text-muted-foreground">Not Task Forms</span>
          </h2>
        </div>

        {/* Feature Cards - 2x2 Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.headline}
              className="feature-card glass-card p-8 md:p-10"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-3xl font-bold text-white/10">
                  {feature.number}
                </span>
              </div>
              <h3 className="card-headline">
                {feature.headline}
              </h3>
              <p className="card-description">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalEdge;
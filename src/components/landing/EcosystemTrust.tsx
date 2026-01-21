import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  "Arc Network",
  "ArcFlow Finance",
  "Aave",
  "Across Protocol",
  "Alchemy",
  "Chainlink",
  "thirdweb",
  "Blockdaemon",
];

const EcosystemTrust = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll('.partner-card');
        
        gsap.from(items, {
          scale: 0.5,
          opacity: 0,
          stagger: {
            from: "center",
            amount: 0.5,
          },
          duration: 0.6,
          ease: "back.out(1.7)",
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
    <section id="ecosystem" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="orange-square" />
            <p className="eyebrow-accent">BUILT WITH THE ECOSYSTEM</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase">
            Trusted By Arc
            <br />
            Network Partners
          </h2>
        </div>

        {/* Logo Grid - Brutalist */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 border border-foreground max-w-4xl mx-auto mb-10"
        >
          {partners.map((partner, index) => (
            <div
              key={partner}
              className={`partner-card p-6 flex items-center justify-center cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground group ${
                index < partners.length - (partners.length <= 4 ? 0 : 4) ? "border-b border-foreground" : ""
              } ${(index + 1) % 4 !== 0 ? "border-r border-foreground" : ""}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-foreground group-hover:border-primary-foreground flex items-center justify-center bg-background-secondary group-hover:bg-transparent">
                  <span className="font-display font-bold text-sm">
                    {partner.charAt(0)}
                  </span>
                </div>
                <span className="font-mono text-sm font-medium text-foreground group-hover:text-primary-foreground">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-sm font-bold text-foreground border-b-2 border-foreground hover:text-primary hover:border-primary transition-colors"
          >
            VERIFIED CONTRACTS ON ARC EXPLORER
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EcosystemTrust;

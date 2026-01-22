import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import logos
import arcNetworkLogo from "@/assets/logos/arc-network.svg";
import aaveLogo from "@/assets/logos/aave.svg";
import curveLogo from "@/assets/logos/curve.svg";
import acrossLogo from "@/assets/logos/across.svg";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: "Arc Network", logo: arcNetworkLogo },
  { name: "ArcFlow Finance", logo: null },
  { name: "Aave", logo: aaveLogo },
  { name: "Across Protocol", logo: acrossLogo },
  { name: "Alchemy", logo: null },
  { name: "Chainlink", logo: null },
  { name: "thirdweb", logo: null },
  { name: "Blockdaemon", logo: null },
];

const OurEcosystem = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".ecosystem-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Grid items stagger
      if (gridRef.current) {
        gsap.from(gridRef.current.querySelectorAll('.logo-item'), {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="ecosystem" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="ecosystem-header text-center mb-16">
          <p className="eyebrow-accent mb-6">Built With The Ecosystem</p>
          
          <h2 className="section-headline mb-6">Our Ecosystem</h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Partnered with leading Arc Network protocols and infrastructure providers to build the future of verifiable on-chain participation.
          </p>
        </div>

        {/* Logo Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              whileHover={{ scale: 1.05 }}
              className="logo-item logo-grid-item h-28 cursor-pointer"
            >
              {partner.logo ? (
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-8 w-auto max-w-full object-contain"
                />
              ) : (
                <span className="font-display font-bold text-sm text-muted-foreground text-center px-2">
                  {partner.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>View all partners</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurEcosystem;
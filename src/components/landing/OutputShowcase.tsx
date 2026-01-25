import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import proofNftMockup from "@/assets/proof-nft-mockup.jpg";
import campaignContentMockup from "@/assets/campaign-content-mockup.jpg";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

gsap.registerPlugin(ScrollTrigger);

const outputs = [
  {
    image: proofNftMockup,
    title: "Proof NFT",
    description: "Structured participation record",
    number: "01",
  },
  {
    image: campaignContentMockup,
    title: "Campaign Content",
    description: "Auto-generated post per verified action",
    number: "02",
  },
  {
    image: dashboardMockup,
    title: "Activity Dashboard",
    description: "Your on-chain reputation timeline",
    number: "03",
  },
];

const OutputShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.output-card');
        
        cards.forEach((card, index) => {
          gsap.from(card, {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });

          // Parallax effect on images
          const image = card.querySelector('.output-image');
          if (image) {
            gsap.to(image, {
              yPercent: -10,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding-sm bg-card border-y border-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="orange-square" />
            <p className="eyebrow-accent">THE DELIVERABLES</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase">
            What You Actually Get
          </h2>
        </motion.div>

        {/* Output Cards - Brutalist */}
        <div ref={cardsRef} className="grid md:grid-cols-3 border border-foreground">
          {outputs.map((output, index) => (
            <div
              key={output.title}
              className={`output-card group ${
                index < outputs.length - 1 ? "border-b md:border-b-0 md:border-r border-foreground" : ""
              }`}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden border-b border-foreground relative">
                <img
                  src={output.image}
                  alt={output.title}
                  className="output-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Number Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 font-mono text-sm font-bold border border-foreground">
                  {output.number}
                </div>
                {/* X Marker */}
                <span className="x-marker absolute top-4 right-4 text-primary">×</span>
              </div>

              {/* Content */}
              <div className="p-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary-foreground mb-2 uppercase">
                  {output.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80">
                  {output.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutputShowcase;

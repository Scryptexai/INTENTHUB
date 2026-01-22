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
    <section ref={sectionRef} className="section-padding relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow-accent mb-6">The Deliverables</p>
          <h2 className="section-headline">
            What You Actually Get
          </h2>
        </motion.div>

        {/* Output Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {outputs.map((output) => (
            <div
              key={output.title}
              className="output-card glass-card overflow-hidden group"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={output.image}
                  alt={output.title}
                  className="output-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Number Badge */}
                <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-sm text-primary px-3 py-1 rounded-lg text-sm font-bold">
                  {output.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="card-headline">
                  {output.title}
                </h3>
                <p className="card-description">
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
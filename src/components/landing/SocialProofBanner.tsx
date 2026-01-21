import { motion } from "framer-motion";

const partners = [
  "Chainlink", "Tron", "BNB", "OKX", "Certik", "Kucoin", 
  "Bitget", "Bybit", "Mexc", "Gate.io", "Polygon", "Solana"
];

const SocialProofBanner = () => {
  return (
    <section className="border-y border-foreground bg-card overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-6"
      >
        {/* Marquee Container */}
        <div className="relative">
          <div className="flex animate-marquee">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex items-center gap-2 px-8 shrink-0"
              >
                <span className="orange-square animate-pulse-dot" />
                <span className="font-mono text-sm font-medium text-foreground whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SocialProofBanner;

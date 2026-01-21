import { motion } from "framer-motion";
import aaveLogo from "@/assets/logos/aave.svg";
import curveLogo from "@/assets/logos/curve.svg";
import acrossLogo from "@/assets/logos/across.svg";
import arcNetworkLogo from "@/assets/logos/arc-network.svg";

const partners = [
  { name: "Arc Network", logo: arcNetworkLogo, isPrimary: true },
  { name: "Aave", logo: aaveLogo },
  { name: "Curve", logo: curveLogo },
  { name: "Across", logo: acrossLogo },
];

const SocialProofBanner = () => {
  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section className="border-y border-foreground bg-card overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-6"
      >
        {/* Header */}
        <div className="container-custom mb-4">
          <div className="flex items-center gap-3">
            <span className="orange-square animate-pulse-dot" />
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              Live on Arc Network
            </span>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          <div className="flex animate-marquee">
            {allPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className={`flex items-center gap-3 px-8 shrink-0 ${
                  partner.isPrimary ? "text-primary" : ""
                }`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-8 h-8 object-contain"
                />
                <span className={`font-mono text-sm font-medium whitespace-nowrap ${
                  partner.isPrimary ? "text-primary" : "text-foreground"
                }`}>
                  {partner.name}
                </span>
                {partner.isPrimary && (
                  <span className="badge-live text-[10px]">LIVE</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SocialProofBanner;

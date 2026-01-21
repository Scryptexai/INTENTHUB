import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="orange-square" />
            <p className="eyebrow-accent">BUILT WITH THE ECOSYSTEM</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase">
            Trusted By Arc
            <br />
            Network Partners
          </h2>
        </motion.div>

        {/* Logo Grid - Brutalist */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 border border-foreground max-w-4xl mx-auto mb-10"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-6 flex items-center justify-center cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground group ${
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
            </motion.div>
          ))}
        </motion.div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-sm font-bold text-foreground border-b-2 border-foreground hover:text-primary hover:border-primary transition-colors"
          >
            VERIFIED CONTRACTS ON ARC EXPLORER
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemTrust;

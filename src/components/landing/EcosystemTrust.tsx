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
          <p className="eyebrow mb-4">BUILT WITH THE ECOSYSTEM</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Trusted By Arc Network Partners
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-10"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`glass-card p-6 flex items-center justify-center cursor-pointer transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110 ${
                index === 0 ? "grayscale-0 col-span-2 md:col-span-1" : "opacity-60 hover:opacity-100"
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-lg font-display font-bold text-primary-foreground">
                  {partner.charAt(0)}
                </span>
              </div>
              <span className="ml-3 font-medium text-foreground hidden sm:inline">
                {partner}
              </span>
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
            className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
          >
            Verified Contracts on Arc Explorer
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemTrust;

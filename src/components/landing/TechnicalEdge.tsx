import { motion } from "framer-motion";
import { Link2, Target, RefreshCw, Ban } from "lucide-react";

const features = [
  {
    icon: Link2,
    headline: "Protocol-Level Validation",
    text: "Verifies contract interactions, not UI clicks. Anti-sybil by design.",
  },
  {
    icon: Target,
    headline: "Anti-Sybil by Behavior",
    text: "No captchas. No forms. Behavioral verification impossible to fake.",
  },
  {
    icon: RefreshCw,
    headline: "Cross-Campaign Reusable Proofs",
    text: "Proof minted once, usable across multiple campaigns and ecosystems.",
  },
  {
    icon: Ban,
    headline: "No Off-Chain Task System",
    text: "Everything verifiable on-chain. No manual submission trust required.",
  },
];

const TechnicalEdge = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">TECHNICAL EDGE</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Built on Verification Infrastructure,
            <br />
            <span className="gradient-text">Not Task Forms</span>
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.headline}
              </h3>
              <p className="text-muted leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalEdge;

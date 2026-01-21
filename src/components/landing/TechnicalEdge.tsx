import { motion } from "framer-motion";
import { Link2, Target, RefreshCw, Ban } from "lucide-react";

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
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="orange-square" />
            <p className="eyebrow-accent">TECHNICAL EDGE</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase leading-tight">
            Built on Verification
            <br />
            <span className="text-muted">Not Task Forms</span>
          </h2>
        </motion.div>

        {/* Feature Cards - 2x2 Grid Brutalist */}
        <div className="grid sm:grid-cols-2 border border-foreground">
          {features.map((feature, index) => (
            <motion.div
              key={feature.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 md:p-10 group hover:bg-primary hover:text-primary-foreground transition-colors ${
                index === 0 ? "border-b border-r border-foreground" :
                index === 1 ? "border-b border-foreground" :
                index === 2 ? "border-r border-foreground" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 border border-foreground group-hover:border-primary-foreground flex items-center justify-center bg-background-secondary group-hover:bg-transparent">
                  <feature.icon className="w-7 h-7" />
                </div>
                <span className="font-mono text-3xl font-bold text-muted-foreground group-hover:text-primary-foreground/50">
                  {feature.number}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary-foreground mb-3 uppercase">
                {feature.headline}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalEdge;

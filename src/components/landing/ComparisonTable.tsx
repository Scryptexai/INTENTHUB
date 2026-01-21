import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Verification method", traditional: "Self-reported", intent: "Protocol-level" },
  { feature: "Proof portability", traditional: "None", intent: "Cross-campaign" },
  { feature: "Sybil resistance", traditional: "Forms/captcha", intent: "Behavioral" },
  { feature: "Time per action", traditional: "30+ min", intent: "2 min" },
  { feature: "Content quality", traditional: "Generic", intent: "AI-unique" },
  { feature: "dApp attribution", traditional: "None", intent: "2-3 links" },
  { feature: "Future-proof signal", traditional: "Low", intent: "High" },
];

const ComparisonTable = () => {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow-purple mb-4">THE DIFFERENCE</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Traditional Farming vs Verified Proof
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card overflow-hidden max-w-4xl mx-auto"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-border bg-foreground/5">
            <div className="font-display font-semibold text-foreground">Feature</div>
            <div className="font-display font-semibold text-muted text-center">Traditional</div>
            <div className="font-display font-semibold text-primary text-center">INTENT</div>
          </div>

          {/* Table Rows */}
          {comparisons.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 gap-4 p-6 ${
                index < comparisons.length - 1 ? "border-b border-border" : ""
              } ${index % 2 === 1 ? "bg-foreground/2" : ""}`}
            >
              <div className="text-foreground font-medium">{row.feature}</div>
              <div className="flex items-center justify-center gap-2 text-muted">
                <X className="w-4 h-4 text-destructive" />
                <span className="text-sm">{row.traditional}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{row.intent}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 font-display text-2xl md:text-3xl gradient-text font-semibold"
        >
          Infrastructure {">"} Manual Tasks
        </motion.p>
      </div>
    </section>
  );
};

export default ComparisonTable;

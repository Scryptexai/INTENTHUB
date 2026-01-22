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
    <section className="section-padding border-y border-foreground bg-card">
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
            <p className="eyebrow-accent">THE DIFFERENCE</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase">
            Traditional Farming
            <br />
            vs Verified Proof
          </h2>
        </motion.div>

        {/* Comparison Table - Brutalist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto border border-foreground overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-0 bg-foreground text-background">
            <div className="p-4 md:p-6 font-mono text-sm font-bold uppercase border-r border-background/20">
              Feature
            </div>
            <div className="p-4 md:p-6 font-mono text-sm font-bold uppercase text-center border-r border-background/20">
              Traditional
            </div>
            <div className="p-4 md:p-6 font-mono text-sm font-bold uppercase text-center bg-primary">
              INTENT
            </div>
          </div>

          {/* Table Rows */}
          {comparisons.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 gap-0 ${
                index < comparisons.length - 1 ? "border-b border-foreground" : ""
              }`}
            >
              <div className="p-4 md:p-6 font-medium text-foreground border-r border-foreground bg-background-secondary">
                {row.feature}
              </div>
              <div className="p-4 md:p-6 flex items-center justify-center gap-2 text-muted-foreground border-r border-foreground">
                <X className="w-4 h-4 text-destructive" />
                <span className="text-sm">{row.traditional}</span>
              </div>
              <div className="p-4 md:p-6 flex items-center justify-center gap-2 bg-primary/10">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-foreground">{row.intent}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <span className="inline-block bg-foreground text-background px-8 py-4 font-display text-xl md:text-2xl font-bold uppercase">
            Infrastructure {">"} Manual Tasks
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;

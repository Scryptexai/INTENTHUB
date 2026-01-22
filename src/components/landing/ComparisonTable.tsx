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
    <section className="section-padding relative">
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
          <p className="eyebrow-accent mb-6">The Difference</p>
          <h2 className="section-headline">
            Traditional Farming
            <br />
            vs Verified Proof
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto glass-card overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-0 bg-white/5">
            <div className="p-4 md:p-6 font-display text-sm font-bold uppercase border-r border-white/5">
              Feature
            </div>
            <div className="p-4 md:p-6 font-display text-sm font-bold uppercase text-center border-r border-white/5 text-muted-foreground">
              Traditional
            </div>
            <div className="p-4 md:p-6 font-display text-sm font-bold uppercase text-center bg-primary/10 text-primary">
              INTENT
            </div>
          </div>

          {/* Table Rows */}
          {comparisons.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 gap-0 ${
                index < comparisons.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <div className="p-4 md:p-6 font-medium text-foreground border-r border-white/5">
                {row.feature}
              </div>
              <div className="p-4 md:p-6 flex items-center justify-center gap-2 text-muted-foreground border-r border-white/5">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-sm">{row.traditional}</span>
              </div>
              <div className="p-4 md:p-6 flex items-center justify-center gap-2 bg-primary/5">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{row.intent}</span>
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
          <span className="inline-block btn-primary text-xl md:text-2xl">
            Infrastructure {">"} Manual Tasks
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
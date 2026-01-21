import { motion } from "framer-motion";
import { Search, CheckCircle, Palette } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    headline: "Activity Indexing",
    text: "Reads wallet interactions with supported protocols",
  },
  {
    number: "02",
    icon: CheckCircle,
    headline: "Protocol-Level Validation",
    text: "Confirms real contract-level actions (not UI clicks)",
  },
  {
    number: "03",
    icon: Palette,
    headline: "Proof & Content Generation",
    text: "Mints proof + generates verifiable campaign content",
  },
];

const InfrastructureSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial grid-pattern" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">INFRASTRUCTURE LAYER</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            INTENT is an On-Chain Behavior
            <br />
            <span className="gradient-text">Verification Layer</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            It indexes protocol interactions, validates real usage, and issues structured proofs.
          </p>
        </motion.div>

        {/* 3-Step System */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting Lines (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 -translate-y-1/2 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-full bg-gradient-to-r from-primary/50 to-secondary/50 origin-left"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 8px, transparent 8px, transparent 16px)`,
              }}
            />
          </div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 -translate-y-1/2 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-full origin-left"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--secondary)) 0px, hsl(var(--secondary)) 8px, transparent 8px, transparent 16px)`,
              }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card-hover p-8 md:p-12 text-center relative z-10"
            >
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6">
                <span className="font-display text-2xl font-bold text-primary-foreground">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {step.headline}
              </h3>
              <p className="text-muted leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;

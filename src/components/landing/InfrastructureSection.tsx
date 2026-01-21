import { motion } from "framer-motion";
import { Search, CheckCircle, Palette, ArrowRight } from "lucide-react";

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
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="orange-square" />
            <p className="eyebrow-accent">INFRASTRUCTURE LAYER</p>
            <span className="orange-square" />
          </div>
          
          {/* Spaced Letters Title */}
          <h2 className="font-display text-lg md:text-xl text-muted-foreground spaced-letters uppercase mb-4">
            b e y o n d &nbsp;&nbsp; C a p i t a l
          </h2>
          
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase">
            INTENT is an On-Chain
            <br />
            Behavior Verification Layer
          </h3>
        </motion.div>

        {/* 3-Step System - Brutalist Cards */}
        <div className="grid md:grid-cols-3 relative">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-1/2 left-[33%] w-[17%] h-px bg-foreground -translate-y-1/2 z-0">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-foreground" />
          </div>
          <div className="hidden md:block absolute top-1/2 right-[33%] w-[17%] h-px bg-foreground -translate-y-1/2 z-0">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-foreground" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative z-10 p-6"
            >
              <div className="border border-foreground bg-card p-8 h-full hover:bg-primary hover:text-primary-foreground group transition-colors">
                {/* Number Badge */}
                <div className="inline-block bg-primary text-primary-foreground group-hover:bg-foreground group-hover:text-background px-4 py-2 font-mono text-xl font-bold mb-6 border border-foreground">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 border border-foreground group-hover:border-primary-foreground flex items-center justify-center mb-6 bg-background-secondary group-hover:bg-transparent">
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary-foreground mb-3 uppercase">
                  {step.headline}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;

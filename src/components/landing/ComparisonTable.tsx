import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { useResponsive } from "@/contexts/ResponsiveContext";

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
  const { isMobile } = useResponsive();
  const [mobileTab, setMobileTab] = useState<'all' | 'traditional' | 'intent'>('all');

  return (
    <section className={`section-padding-sm border-y border-foreground bg-card ${
      isMobile ? 'px-4' : ''
    }`}>
      <div className={`${isMobile ? 'w-full' : 'container-custom'}`}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center ${isMobile ? 'mb-8' : 'mb-16'}`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="orange-square" />
            <p className={`eyebrow-accent ${isMobile ? 'text-xs' : ''}`}>THE DIFFERENCE</p>
          </div>
          <h2 className={`font-display font-bold text-foreground uppercase ${
            isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'
          }`}>
            Traditional Farming
            <br />
            vs Verified Proof
          </h2>
        </motion.div>

        {/* Desktop Table Version */}
        {!isMobile && (
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
        )}

        {/* Mobile Tab Version */}
        {isMobile && (
          <div className="space-y-4">
            {/* Tab Buttons */}
            <div className="flex gap-2 mb-6 sticky top-4 z-10">
              <button
                onClick={() => setMobileTab('traditional')}
                className={`flex-1 py-3 px-3 text-sm font-mono font-bold uppercase transition-all ${
                  mobileTab === 'traditional'
                    ? 'bg-foreground text-background border border-foreground'
                    : 'bg-background text-foreground border border-foreground hover:bg-foreground/5'
                }`}
              >
                Traditional
              </button>
              <button
                onClick={() => setMobileTab('intent')}
                className={`flex-1 py-3 px-3 text-sm font-mono font-bold uppercase transition-all ${
                  mobileTab === 'intent'
                    ? 'bg-primary text-background border border-primary'
                    : 'bg-background text-foreground border border-foreground hover:bg-primary/5'
                }`}
              >
                INTENT
              </button>
            </div>

            {/* Single Column View */}
            <div className="space-y-3">
              {comparisons.map((row, index) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="border border-foreground overflow-hidden"
                >
                  {/* Feature Name */}
                  <div className="bg-foreground text-background p-3 font-mono text-xs font-bold uppercase">
                    {row.feature}
                  </div>

                  {/* Traditional or INTENT - Single Column */}
                  {mobileTab === 'traditional' ? (
                    <div className="bg-background p-4 flex items-start gap-3">
                      <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-foreground font-medium">{row.traditional}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-primary/10 p-4 flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-bold text-foreground">{row.intent}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-center ${isMobile ? 'mt-8' : 'mt-12'}`}
        >
          <span className={`inline-block bg-foreground text-background px-6 py-3 font-display font-bold uppercase ${
            isMobile ? 'text-lg' : 'text-xl md:text-2xl px-8 py-4'
          }`}>
            Infrastructure {">"} Manual Tasks
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;

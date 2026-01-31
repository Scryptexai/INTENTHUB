import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useResponsive } from "@/contexts/ResponsiveContext";

const WhyVerificationMatters = () => {
  const { isMobile } = useResponsive();

  const withoutPoints = [
    "You get flagged as sybil without proof",
    "Teams block you - no appeal process",
    "Your activity history counts for nothing",
    "Built reputation gets destroyed overnight",
  ];

  const withPoints = [
    "Verified proof you're a real human",
    "Teams see your actual usage context",
    "Your history becomes your asset",
    "Fair access based on real activity",
  ];

  return (
    <section
      id="why-matters"
      className="relative w-full min-h-[80vh] bg-[#F5F5F2] overflow-hidden py-16 lg:py-24"
    >
      <div className={`${isMobile ? 'px-6' : 'max-w-[1400px] mx-auto px-6 lg:px-12'} relative z-10`}>

        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          {/* Orange Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6] rounded-full"
          >
            <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
              Why It Matters
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-black leading-[1.2] text-[#1A1A1A] uppercase max-w-4xl mx-auto"
            style={{
              fontSize: isMobile ? '2rem' : '3rem lg:text-[3.5rem]',
              fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
            }}
          >
            The Real Problem:<br/>False Sybil Flags
          </motion.h2>

          {/* Orange Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1.5 bg-[#3B82F6] mx-auto"
          />
        </div>

        {/* Comparison Grid */}
        <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} mb-16`}>
          {/* Left: Without Verification */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-[#E5E5E0] rounded-2xl p-8 lg:p-10"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#E5E5E0] rounded-xl flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-[#6B6B6B]" />
              </div>
              <h3 className="font-black text-[#1A1A1A] uppercase text-xl lg:text-2xl">
                Without Proof
              </h3>
            </div>

            {/* Divider */}
            <div className="w-16 h-1 bg-[#E5E5E0] mb-8" />

            {/* Points */}
            <div className="space-y-4">
              {withoutPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#E5E5E0] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4 text-[#6B6B6B]" />
                  </div>
                  <p className={`font-mono text-[#6B6B6B] leading-relaxed ${
                    isMobile ? 'text-sm' : 'text-base'
                  }`}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: With INTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#3B82F6]/5 to-white border-2 border-[#3B82F6] rounded-2xl p-8 lg:p-10 shadow-xl relative overflow-hidden"
          >
            {/* Decorative gradient overlay */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#3B82F6]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-16 h-16 bg-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-black text-[#1A1A1A] uppercase text-xl lg:text-2xl">
                With INTENT
              </h3>
            </div>

            {/* Divider */}
            <div className="w-16 h-1 bg-[#3B82F6] mb-8 relative z-10" />

            {/* Points */}
            <div className="space-y-4 relative z-10">
              {withPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                  </div>
                  <p className={`font-mono text-[#1A1A1A] leading-relaxed font-medium ${
                    isMobile ? 'text-sm' : 'text-base'
                  }`}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E5E0]" />
    </section>
  );
};

export default WhyVerificationMatters;

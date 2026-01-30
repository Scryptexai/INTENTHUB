import { motion } from "framer-motion";
import { useResponsive } from "@/contexts/ResponsiveContext";
import { Wallet, Shield, FileText } from "lucide-react";

const WhatYouDo = () => {
  const { isMobile } = useResponsive();

  const steps = [
    {
      number: "01",
      icon: Wallet,
      title: "Use Your Wallet Normally",
      description: "Swap. Bridge. Farm. Whatever you already do. Your activities get tracked automatically.",
    },
    {
      number: "02",
      icon: Shield,
      title: "Get Verified Proof",
      description: "Your on-chain history becomes evidence that you're a real human, not a bot.",
    },
    {
      number: "03",
      icon: FileText,
      title: "Share & Get Recognized",
      description: "Teams see your verified activity. You get access. Your history works for you.",
    },
  ];

  return (
    <section
      id="how-it-works"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35]/10 border border-[#FF6B35] rounded-full"
          >
            <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B35] font-bold">
              How It Works
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
            Your Activities = Your<br/>Reputation
          </motion.h2>

          {/* Orange Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1.5 bg-[#FF6B35] mx-auto"
          />
        </div>

        {/* Steps Grid */}
        <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-3'}`}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-2 border-[#E5E5E0] rounded-2xl p-8 lg:p-10 hover:border-[#FF6B35] transition-all duration-300 group"
            >
              {/* Step Number */}
              <div className="font-mono text-[#FF6B35] text-5xl lg:text-6xl font-black mb-4">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6B35] group-hover:scale-110 transition-all duration-300">
                <step.icon className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="font-black text-[#1A1A1A] text-xl lg:text-2xl mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B6B6B] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatYouDo;

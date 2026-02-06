import { useState } from "react";
import { motion } from "framer-motion";
import { useResponsive } from "@/contexts/ResponsiveContext";
import WaitlistForm from "./WaitlistForm";

const FinalCTA = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <>
      <section className="relative w-full min-h-[60vh] bg-[#1A1A1A] overflow-hidden py-16 lg:py-24">
        <div className={`${isMobile ? 'px-6' : 'max-w-[1400px] mx-auto px-6 lg:px-12'} relative z-10 text-center`}>
          <div className="space-y-8">

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-black leading-[1.15] text-white uppercase"
              style={{
                fontSize: isMobile ? '2rem' : '3rem lg:text-[3.5rem]',
                fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
              }}
            >
              Understand Your<br/>On-Chain Activity.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg lg:text-xl text-[#B0B0B0] leading-relaxed max-w-2xl mx-auto font-mono"
            >
              Connect your wallet. See your activities organized.<br/>
              No scores. No judgment. Just your data, clearly presented.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`flex flex-col ${isMobile ? 'gap-4' : 'sm:flex-row gap-6'} justify-center items-center pt-6`}
            >
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="bg-[#3B82F6] hover:bg-[#4A90FF] text-white font-mono text-sm uppercase tracking-wider px-12 py-5 rounded-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 active:translate-y-0 active:scale-95"
              >
                Start Journey
              </button>
              <a
                href="/docs"
                className="bg-white hover:bg-[#F5F5F2] text-[#1A1A1A] font-mono text-sm uppercase tracking-wider px-12 py-5 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95"
              >
                Read Docs
              </a>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`flex ${isMobile ? 'flex-col gap-3' : 'items-center justify-center gap-6'} pt-8`}
            >
              <div className="flex items-center gap-2 text-sm text-[#B0B0B0]">
                <div className="w-5 h-5 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-mono uppercase tracking-wider">Free forever</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#B0B0B0]">
                <div className="w-5 h-5 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="font-mono uppercase tracking-wider">Your data stays yours</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
      </section>

      {/* Waitlist Modal */}
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
};

export default FinalCTA;

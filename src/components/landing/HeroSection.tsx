import { useState } from "react";
import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";
import { useResponsive } from "@/contexts/ResponsiveContext";
import Hero3DElement from "./Hero3DElement";

const HeroSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <>
      {/* Desktop Hero Layout */}
      {!isMobile && (
        <section
          id="hero"
          className="relative w-full h-screen overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 30%, #E0F2FE 70%, #3B82F6 100%)'
          }}
        >
          {/* Running Text Background */}
          <div className="absolute top-0 left-0 w-full h-[30vh] flex items-center overflow-hidden z-10 pointer-events-none">
            <div
              className="flex whitespace-nowrap"
              style={{ willChange: 'transform' }}
            >
              {[...Array(4)].map((_, index) => (
                <span
                  key={index}
                  className="inline-block px-12 text-[40px] font-normal text-[#1A1A1A] opacity-10 uppercase tracking-tight select-none"
                  style={{
                    fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif',
                    fontWeight: 400
                  }}
                >
                  BEYOND ONCHAIN
                </span>
              ))}
            </div>
          </div>

          {/* 3D Wave Animation Layer */}
          <Hero3DElement />

          {/* Hero Content Overlay - Centered */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="w-full max-w-[1400px] px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full text-center"
              >
                {/* Orange Accent Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full mb-5 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
                    Your Activity, Your Proof
                  </span>
                </div>

                {/* Main Headline */}
                <h1
                  className="text-[48px] lg:text-[64px] xl:text-[72px] font-black leading-[1.1] tracking-tight text-[#3B82F6] uppercase mb-6 drop-shadow-lg"
                  style={{
                    fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif',
                    fontWeight: 900
                  }}
                  dangerouslySetInnerHTML={{ __html: 'Don\'t Get Flagged.<br />Build Your History.' }}
                />

                {/* Orange Accent Line */}
                <div className="w-20 h-1.5 bg-[#3B82F6] mb-6 shadow-lg mx-auto" />

                {/* Subheadline */}
                <p
                  className="text-xl lg:text-2xl text-[#1A1A1A] leading-relaxed mb-8 mx-auto max-w-3xl font-semibold drop-shadow-md"
                  style={{
                    fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
                  }}
                >
                  Your wallet activities tell your story.<br />
                  Turn them into verifiable proof that you're a real user.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => setIsWaitlistOpen(true)}
                    className="bg-[#3B82F6] hover:bg-[#4A90FF] text-white font-mono text-base lg:text-lg uppercase tracking-wider px-12 py-5 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 active:translate-y-0 active:scale-95"
                  >
                    Start Journey
                  </button>
                  <a
                    href="/docs"
                    className="bg-white hover:bg-[#F5F5F2] text-[#1A1A1A] border-2 border-[#1A1A1A]/20 font-mono text-base lg:text-lg uppercase tracking-wider px-12 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95"
                  >
                    Read Docs
                  </a>
                </div>

                {/* Explanation Below Fold */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-8 font-mono text-sm text-[#1A1A1A] max-w-2xl mx-auto leading-relaxed"
                >
                  Stop getting flagged as sybil. Your real activity becomes your strongest asset.<br />
                  Build proof that you're genuine.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Mobile Hero Layout */}
      {isMobile && (
        <section
          id="hero"
          className="relative w-screen h-screen overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 30%, #E0F2FE 70%, #3B82F6 100%)'
          }}
        >
          {/* 3D Wave Animation Layer - Mobile optimized */}
          <Hero3DElement />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full text-center"
            >
              {/* Orange Accent Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full mb-4 backdrop-blur-sm"
              >
                <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#3B82F6] font-bold">
                  Your Activity, Your Proof
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[32px] lg:text-[40px] font-black leading-[1.1] tracking-tight text-[#3B82F6] uppercase mb-5 drop-shadow-lg"
                style={{
                  fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif',
                  fontWeight: 900
                }}
              >
                Don't Get Flagged.<br />
                Build Your History.
              </motion.h1>

              {/* Orange Accent Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-1.5 bg-[#3B82F6] mb-5 origin-left shadow-lg"
              />

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg lg:text-xl text-[#1A1A1A] leading-relaxed mb-6 font-semibold drop-shadow-md"
                style={{
                  fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
                }}
              >
                Your activities get tracked automatically.<br />
                Your history becomes your strongest asset.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-3 w-full"
              >
                <button
                  onClick={() => setIsWaitlistOpen(true)}
                  className="w-full bg-[#3B82F6] hover:bg-[#4A90FF] text-white font-mono text-sm uppercase tracking-wider px-10 py-4 rounded-xl transition-all duration-300 shadow-2xl active:scale-95"
                >
                  Start Journey
                </button>
                <a
                  href="/docs"
                  className="w-full bg-white hover:bg-[#F5F5F2] text-[#1A1A1A] border-2 border-[#1A1A1A]/20 font-mono text-sm uppercase tracking-wider px-10 py-4 rounded-xl transition-all duration-300 shadow-lg active:scale-95 text-center"
                >
                  Read Docs
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Waitlist Modal */}
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
};

export default HeroSection;

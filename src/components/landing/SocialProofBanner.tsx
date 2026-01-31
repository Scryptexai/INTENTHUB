import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useResponsive } from "@/contexts/ResponsiveContext";
import intentLogo from "/assets/intent-logo.jpg";

// Ecosystem protocols being monitored & verified
const ecosystemNodes = [
  { id: 1, name: "ArcFlow", logo: "/assets/logos/arc/arcflow-finance.jpg", angle: 0 },
  { id: 2, name: "Curve", logo: "/assets/logos/arc/curve.jpg", angle: 60 },
  { id: 3, name: "Across", logo: "/assets/logos/arc/accros.jpg", angle: 120 },
  { id: 4, name: "Aave", logo: "/assets/logos/arc/aave.jpg", angle: 180 },
  { id: 5, name: "Axelar", logo: "/assets/logos/arc/axelar.jpg", angle: 240 },
  { id: 6, name: "OnChain", logo: "/assets/logos/arc/onchaingm.jpg", angle: 300 },
];

const SocialProofBanner = () => {
  const [verifyingNode, setVerifyingNode] = useState<number | null>(null);
  const [stats, setStats] = useState({
    activities: 47283,
    protocols: 6,
    verifications: 0
  });
  const { isMobile } = useResponsive() as { isMobile: boolean };

  // Dynamic orbit radius - tighter layout for professional look
  const orbitRadius = isMobile ? 95 : 130;

  // Verification pulse system
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNode = ecosystemNodes[Math.floor(Math.random() * ecosystemNodes.length)];
      setVerifyingNode(randomNode.id);

      setStats(prev => ({
        ...prev,
        verifications: prev.verifications + 1
      }));

      setTimeout(() => setVerifyingNode(null), 1500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Real-time stats ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        activities: prev.activities + Math.floor(Math.random() * 3)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden py-16 lg:py-20 border-y border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Two Column Layout */}
        <div className={`grid gap-12 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} items-center`}>

          {/* Left Column - Headline & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F0F9FF] border border-[#FFE5D9] rounded-full">
              <div className="relative">
                <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-[#3B82F6] rounded-full"
                />
              </div>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-[#3B82F6]">
                Live Verification
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-black text-[#1A1A1A] uppercase leading-[1.15]"
                style={{
                  fontSize: isMobile ? '2rem' : '2.5rem',
                  fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
                }}>
              On-Chain Activity<br/>Intelligence
            </h2>

            {/* Description */}
            <p className="text-[#6B6B6B] leading-relaxed max-w-md"
               style={{ fontSize: isMobile ? '0.95rem' : '1rem' }}>
              Interpreting, contextualizing, and verifying ecosystem activity in real-time across {stats.protocols} major protocols.
            </p>

            {/* Live Stats */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div>
                <div className="font-mono text-2xl lg:text-3xl font-black text-[#1A1A1A]">
                  {stats.activities.toLocaleString()}+
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#6B6B6B] mt-1">
                  Activities Tracked
                </div>
              </div>
              <div>
                <div className="font-mono text-2xl lg:text-3xl font-black text-[#3B82F6]">
                  {stats.verifications}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#6B6B6B] mt-1">
                  Verifications
                </div>
              </div>
            </div>

            {/* Status Line */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                />
                <span className="font-mono text-[10px] text-[#6B6B6B] uppercase tracking-wide">
                  System Active
                </span>
              </div>
              <div className="w-px h-3 bg-[#E5E5E5]" />
              <span className="font-mono text-[10px] text-[#6B6B6B]">
                CHAIN: ARC_MAINNET
              </span>
            </div>
          </motion.div>

          {/* Right Column - Professional dApp Grid Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Container */}
            <div
              className="relative mx-auto bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] rounded-2xl overflow-hidden shadow-2xl p-6"
              style={{
                width: isMobile ? '340px' : '420px',
                height: isMobile ? '340px' : '420px'
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#3B82F6]">
                    Verified Protocols
                  </span>
                </div>
                <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-600">
                    {stats.protocols} Active
                  </span>
                </div>
              </div>

              {/* dApp Grid */}
              <div className="grid grid-cols-3 gap-3">
                {ecosystemNodes.map((node, index) => {
                  const isActive = verifyingNode === node.id;

                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        repeat: isActive ? Infinity : 0,
                        repeatDelay: 3
                      }}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="relative bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-2"
                      style={{
                        borderColor: isActive ? '#10B981' : 'rgba(255,107,53,0.2)'
                      }}
                    >
                      {/* Status Indicator */}
                      <div className="absolute top-2 right-2">
                        <motion.div
                          animate={isActive ? {
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1]
                          } : {}}
                          transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: isActive ? '#10B981' : '#3B82F6'
                          }}
                        />
                      </div>

                      {/* Logo */}
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-10 h-10 rounded-lg bg-[#F0F9FF] flex items-center justify-center overflow-hidden">
                          <img
                            src={node.logo}
                            alt={node.name}
                            className="w-full h-full object-cover p-1"
                          />
                        </div>
                      </div>

                      {/* Name */}
                      <p className="font-mono text-[9px] font-bold text-[#1A1A1A] text-center truncate">
                        {node.name}
                      </p>

                      {/* Status */}
                      <p className="font-mono text-[8px] text-center mt-1" style={{
                        color: isActive ? '#10B981' : '#6B6B6B'
                      }}>
                        {isActive ? 'VERIFYING' : 'CONFIRMED'}
                      </p>

                      {/* Active Glow */}
                      {isActive && (
                        <motion.div
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0 rounded-xl bg-emerald-500/20 -z-10"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Activity Feed */}
              <div className="mt-4 pt-4 border-t border-[#3B82F6]/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#6B6B6B]">
                    Recent Verifications
                  </span>
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                  />
                </div>

                {/* Scrolling verification list */}
                <div className="space-y-1.5 max-h-20 overflow-hidden">
                  {ecosystemNodes.slice(0, 3).map((node, index) => (
                    <motion.div
                      key={node.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15,
                        repeat: Infinity,
                        repeatDelay: 8
                      }}
                      className="flex items-center gap-2 px-2 py-1.5 bg-white/50 rounded-lg"
                    >
                      <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                      <span className="font-mono text-[8px] text-[#1A1A1A] flex-1">
                        {node.name} verified
                      </span>
                      <span className="font-mono text-[7px] text-[#6B6B6B]">
                        just now
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-[#3B82F6]/20">
                <div className="flex items-center gap-1.5">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-1 bg-emerald-500 rounded-full"
                  />
                  <span className="font-mono text-[8px] text-[#1A1A1A]/70 uppercase tracking-wider">
                    Live
                  </span>
                </div>
                <span className="font-mono text-[8px] text-[#1A1A1A]/50 uppercase tracking-wider">
                  {stats.activities.toLocaleString()}+ Checks
                </span>
              </div>
            </div>

            {/* Bottom Label */}
            <div className="text-center mt-4">
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#AAAAAA]">
                Observer Mode • Non-Intrusive • Proof-Based
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBanner;

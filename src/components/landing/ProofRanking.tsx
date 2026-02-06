import { motion } from "framer-motion";
import { useResponsive } from "@/contexts/ResponsiveContext";

const ProofRanking = () => {
  const { isMobile } = useResponsive() as { isMobile: boolean };

  const rankings = [
    {
      tier: "Snapshot",
      color: "#9CA3AF",
      bgColor: "from-gray-50 to-gray-100",
      description: "Basic activity report - transactions organized by type",
      icon: "◇"
    },
    {
      tier: "Summary",
      color: "#3B82F6",
      bgColor: "from-[#F0F9FF] to-[#E0F2FE]",
      description: "Detailed report with timeline and context grouping",
      icon: "◆"
    },
    {
      tier: "Analysis",
      color: "#8B5CF6",
      bgColor: "from-[#F5F3FF] to-[#EDE9FE]",
      description: "Pattern insights - understand your activity behavior",
      icon: "★"
    },
    {
      tier: "Complete",
      color: "#F59E0B",
      bgColor: "from-[#FFFBEB] to-[#FEF3C7]",
      description: "Full cross-protocol report with historical tracking",
      icon: "★★"
    },
    {
      tier: "Archive",
      color: "#10B981",
      bgColor: "from-[#ECFDF5] to-[#D1FAE5]",
      description: "Timestamped, immutable record of your on-chain history",
      icon: "★★★"
    }
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
              Report Levels
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#1A1A1A] uppercase mb-6"
              style={{
                fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
              }}>
            5 Levels of Report Detail
          </h2>

          {/* Description */}
          <p className="text-lg text-[#6B6B6B] max-w-3xl mx-auto leading-relaxed">
            Choose your report depth. From basic snapshots to complete archives. Not a ranking — just organization.
          </p>
        </motion.div>

        {/* Rankings Grid */}
        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-5'} items-stretch`}>
          {rankings.map((ranking, index) => (
            <motion.div
              key={ranking.tier}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Card */}
              <div className={`h-full bg-gradient-to-br ${ranking.bgColor} rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                   style={{
                     borderColor: `${ranking.color}20`
                   }}>
                {/* Tier Header */}
                <div className="text-center mb-4">
                  {/* Icon */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="text-4xl lg:text-5xl mb-3"
                    style={{ color: ranking.color }}
                  >
                    {ranking.icon}
                  </motion.div>

                  {/* Tier Name */}
                  <h3 className="text-xl lg:text-2xl font-black text-[#1A1A1A] uppercase mb-2"
                      style={{
                        fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif',
                        color: ranking.color
                      }}>
                    {ranking.tier}
                  </h3>

                  {/* Color Bar */}
                  <div className="w-full h-1 rounded-full mb-4"
                       style={{ backgroundColor: ranking.color }} />
                </div>

                {/* Description */}
                <p className="text-sm text-[#6B6B6B] text-center leading-relaxed">
                  {ranking.description}
                </p>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                     style={{ backgroundColor: ranking.color }}>
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-start gap-3 px-6 py-4 bg-[#F0F9FF] border border-[#3B82F6]/20 rounded-xl max-w-3xl">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center mt-0.5">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div className="text-left">
              <p className="text-sm text-[#1A1A1A] font-semibold mb-1">
                Mint at Any Level — Your Choice
              </p>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                These are report depth levels, not quality rankings. Mint a snapshot anytime, or build a complete archive over time.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProofRanking;

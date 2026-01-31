import { motion } from "framer-motion";
import { Activity, Users, Network, Zap } from "lucide-react";
import { useResponsive } from "@/contexts/ResponsiveContext";

const EcosystemTrust = () => {
  const { isMobile } = useResponsive();

  const ecosystemStats = [
    { icon: Activity, label: "Verified Activities", value: "47,000+", color: "text-[#3B82F6]" },
    { icon: Network, label: "Protocol Integrations", value: "12", color: "text-purple-500" },
    { icon: Zap, label: "Uptime", value: "99.2%", color: "text-green-500" },
  ];

  const dApps = [
    { name: "ArcFlow Finance", logo: "/assets/logos/arc/arcflow-finance.jpg" },
    { name: "Across", logo: "/assets/logos/arc/accros.jpg" },
    { name: "Aave ARC", logo: "/assets/logos/arc/aave.jpg" },
    { name: "Curve", logo: "/assets/logos/arc/curve.jpg" },
    { name: "Axelar", logo: "/assets/logos/arc/axelar.jpg" },
    { name: "Oku", logo: "/assets/logos/arc/oku.jpg" },
    { name: "Hinkal", logo: "/assets/logos/arc/hinkal.jpg" },
    { name: "Crossmint", logo: "/assets/logos/arc/crossmint.jpg" },
    { name: "Superface", logo: "/assets/logos/arc/superface.jpg" },
  ];

  return (
    <section
      id="ecosystem"
      className="relative w-full min-h-[80vh] bg-white overflow-hidden py-16 lg:py-24"
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
              Ecosystem Coverage
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
            Verified Activity Detection<br />Across Major Protocols
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

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={`grid gap-6 ${isMobile ? 'grid-cols-3' : 'grid-cols-9'} max-w-6xl mx-auto mb-16`}
        >
          {dApps.map((dapp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="aspect-square bg-transparent border-2 border-[#E5E5E0] hover:border-[#3B82F6] rounded-xl flex items-center justify-center p-4 transition-all duration-300"
            >
              <img
                src={dapp.logo}
                alt={dapp.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/64?text=" + dapp.name.substring(0, 2).toUpperCase();
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-3'} max-w-4xl mx-auto`}
        >
          {ecosystemStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-[#F5F5F2] border-2 border-[#E5E5E0] rounded-xl hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-white border-2 border-[#3B82F6] mb-4">
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <p className="font-mono text-3xl lg:text-4xl font-black text-[#1A1A1A] mb-2">
                  {stat.value}
                </p>
                <p className="font-mono text-sm text-[#6B6B6B] uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="font-mono text-sm text-[#6B6B6B] uppercase tracking-wider">
            Direct RPC Connection. No Third-Party Data Aggregation.
          </p>
        </motion.div>

      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E5E0]" />
    </section>
  );
};

export default EcosystemTrust;

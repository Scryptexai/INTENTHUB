import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Database, Zap, Shield, Verified, Activity, Users, Network } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "@/contexts/ResponsiveContext";
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const EcosystemTrust = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile } = useResponsive();

  const ecosystemStats = [
    { icon: Activity, label: t('ecosystem.stats.transactions'), value: "150K+", color: "text-[#FF6B35]" },
    { icon: Users, label: t('ecosystem.stats.users'), value: "5,200+", color: "text-[#00D9FF]" },
    { icon: Network, label: t('ecosystem.stats.protocols'), value: "12+", color: "text-purple-500" },
    { icon: Shield, label: t('ecosystem.stats.rate'), value: "99.9%", color: "text-green-500" },
  ];

  const protocols = [
    { name: "ArcFlow Finance", category: "DEX Aggregator" },
    { name: "Across Protocol", category: "Bridging" },
    { name: "Aave ARC", category: "Lending" },
    { name: "Uniswap ARC", category: "DEX" },
    { name: "Balancer", category: "AMM" },
    { name: "Curve", category: "DEX & AMM" },
    { name: "Axelar", category: "Bridging" },
    { name: "Crossmint", category: "NFT Infrastructure" },
    { name: "Oku", category: "DEX Aggregator" },
    { name: "Hinkal", category: "Privacy" },
    { name: "MintAura", category: "NFT Platform" },
    { name: "Superface", category: "Identity" },
    { name: "Synthra", category: "Derivatives" },
    { name: "OnchainGM", category: "Gaming" },
    { name: "Watchoor", category: "Analytics" },
    { name: "ZKCodex", category: "Developer Tools" },
    { name: "BlockRadar", category: "Analytics" },
    { name: "Infinity Name", category: "Naming Service" },
    { name: "Para", category: "DeFi" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate trust cards
      const cards = document.querySelectorAll('.trust-card');
      cards.forEach((card, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.7,
          delay: index * 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="trust"
      ref={sectionRef}
      className="relative w-full min-h-[80vh] bg-[#F5F5F2] overflow-hidden py-16 lg:py-24"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 opacity-10 pointer-events-none"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full border-2 border-[#FF6B35] rounded-full" />
        <div className="absolute inset-6 border border-[#FF6B35] rounded-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-16 w-24 h-24 opacity-10 pointer-events-none"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-[#FF6B35] rotate-45" />
      </motion.div>

      <div className={`${isMobile ? 'w-full px-6' : 'max-w-[1400px] mx-auto px-6 lg:px-12'} relative z-10`}>

        {/* Section Header */}
        <div className={`text-center space-y-8 ${isMobile ? 'mb-16' : 'mb-24 lg:mb-32'}`}>

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
              {t('ecosystem.badge')}
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={isMobile ? '' : 'max-w-4xl mx-auto'}
          >
            <h2
              className="font-black leading-[1.15] text-[#1A1A1A] uppercase"
              style={{
                fontSize: isMobile ? '2.5rem' : '3.5rem lg:[4rem] xl:[4.5rem]',
                fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
              }}
            >
              {t('ecosystem.headline')}
            </h2>
          </motion.div>

          {/* Orange Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-24 h-1.5 bg-[#FF6B35] mx-auto origin-left"
          />
        </div>

        {/* Ecosystem Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={`grid gap-6 ${isMobile ? 'grid-cols-2' : 'lg:grid-cols-4'} mt-16`}
        >
          {ecosystemStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="trust-card p-6 bg-white border-2 border-[#E5E5E0] rounded-xl hover:border-[#FF6B35] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-[#FF6B35]/10 mb-4">
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <p className="font-mono text-2xl lg:text-3xl font-black text-[#1A1A1A] mb-2">
                  {stat.value}
                </p>
                <p className="font-mono text-xs text-[#6B6B6B] uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Protocols Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 p-8 lg:p-10 bg-white border-2 border-[#E5E5E0] rounded-xl max-w-5xl mx-auto"
        >
          <h4 className="font-black text-xl lg:text-2xl text-[#1A1A1A] mb-6 uppercase text-center">
            {t('ecosystem.protocolsTitle')}
          </h4>
          <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'}`}>
            {protocols.map((protocol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-center gap-4 p-4 border-2 border-[#E5E5E0] rounded-lg hover:border-[#FF6B35] hover:bg-[#FF6B35]/5 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-sm font-bold text-[#1A1A1A] uppercase">
                    {protocol.name}
                  </p>
                  <p className="font-mono text-xs text-[#6B6B6B]">
                    {protocol.category}
                  </p>
                </div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Points Grid */}
        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} mt-16`}>
          {(t('ecosystem.trustPoints', { returnObjects: true }) as any[]).map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="trust-card group"
            >
              <div className="p-8 border-2 border-[#E5E5E0] rounded-xl bg-white hover:border-[#FF6B35] hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/0 via-[#FF6B35]/0 to-[#FF6B35]/5 group-hover:from-[#FF6B35]/5 group-hover:to-[#FF6B35]/10 transition-all duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-[#FF6B35]/10 group-hover:bg-[#FF6B35] transition-all duration-500 relative z-10">
                  <CheckCircle className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="font-black text-lg text-[#1A1A1A] mb-3 uppercase leading-tight relative z-10">
                  {point.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-1 bg-[#FF6B35] group-hover:w-16 transition-all duration-500 mb-3 relative z-10" />

                {/* Description */}
                <p className="font-mono text-sm text-[#6B6B6B] leading-relaxed relative z-10">
                  {point.description}
                </p>

                {/* Checkmark badge on hover */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 lg:p-10 bg-white border-2 border-[#FF6B35] rounded-xl shadow-lg max-w-3xl mx-auto relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Verified Icon */}
            <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-lg relative z-10">
              <Verified className="w-8 h-8 text-white" />
            </div>

            <p className="font-mono text-lg text-[#1A1A1A] leading-relaxed relative z-10">
              INTENT bukan multi-chain farming tool.<br />
              Saat ini fokus penuh bantu user aktif di ARC.
            </p>

            {/* Badge */}
            <div className="px-6 py-2 bg-[#FF6B35]/10 border border-[#FF6B35] rounded-full relative z-10">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF6B35]">
                ARC Ecosystem Exclusive
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E5E0]" />
    </section>
  );
};

export default EcosystemTrust;

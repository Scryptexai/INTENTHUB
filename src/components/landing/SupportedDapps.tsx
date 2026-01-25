import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Loader2, TrendingUp, Users, Activity, ChevronLeft, ChevronRight } from "lucide-react";
import { useResponsive } from "@/contexts/ResponsiveContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./Logo";

gsap.registerPlugin(ScrollTrigger);

const networks = [
  {
    id: "arc",
    name: "Arc Network",
    active: true,
    stats: { tvl: "$12M", txs: "2.5M+", users: "180K" },
    badge: "LIVE",
    logo: "/assets/logos/chains/arc-network.jpg"
  },
  {
    id: "rise",
    name: "Rise Chain",
    active: false,
    stats: { tvl: "$23M", txs: "3M+", users: "180K" },
    badge: "SOON",
    logo: "/assets/logos/chains/risechain.jpg"
  },
  {
    id: "pharos",
    name: "Pharos",
    active: false,
    stats: { tvl: "$45M", txs: "68+", users: "326K" },
    badge: "SOON",
    logo: "/assets/logos/chains/PharosNetwork.jpg"
  },
  {
    id: "sonelium",
    name: "Sonelium",
    active: false,
    stats: { tvl: "TBA", txs: "TBA", users: "TBA" },
    badge: "SOON",
    logo: "/assets/logos/chains/soneium.jpg"
  },
  {
    id: "base",
    name: "Base",
    active: false,
    stats: { tvl: "TBA", txs: "TBA", users: "TBA" },
    badge: "SOON",
    logo: "/assets/logos/chains/base.jpg"
  },
];

const arcDapps = [
  {
    name: "ArcFlow Finance",
    category: "DEX",
    description: "Native DEX & liquidity hub",
    logo: "/assets/logos/arc/arcflow-finance.jpg"
  },
  {
    name: "Curve",
    category: "Stablecoin DEX",
    description: "Deep liquidity for stables",
    logo: "/assets/logos/arc/curve.jpg"
  },
  {
    name: "MintAura",
    category: "NFT",
    description: "NFT Marketplace",
    logo: "/assets/logos/arc/mintaura.jpg"
  },
  {
    name: "Infinity Name",
    category: "Domains",
    description: "Web3 Domain Service",
    logo: "/assets/logos/arc/infinity-name.jpg"
  },
  {
    name: "Watchoor",
    category: "Analytics",
    description: "Portfolio Tracker",
    logo: "/assets/logos/arc/watchoor.jpg"
  },
  {
    name: "Synthra",
    category: "DeFi",
    description: "Synthetic Assets",
    logo: "/assets/logos/arc/synthra.jpg"
  },
  {
    name: "Superface",
    category: "Social",
    description: "Social Platform",
    logo: "/assets/logos/arc/superface.jpg"
  },
  {
    name: "Para",
    category: "Wallet",
    description: "Wallet Infrastructure",
    logo: "/assets/logos/arc/para.jpg"
  },
  {
    name: "Crossmint",
    category: "Payments",
    description: "NFT Checkout",
    logo: "/assets/logos/arc/crossmint.jpg"
  },
  {
    name: "ArcDex",
    category: "DEX",
    description: "Decentralized Exchange",
    logo: "/assets/logos/arc/arcdex.jpg"
  },
  {
    name: "Aave",
    category: "Lending",
    description: "Decentralized Lending Protocol",
    logo: "/assets/logos/arc/aave.jpg"
  },
  {
    name: "Across",
    category: "Bridge",
    description: "Cross-chain Bridge Protocol",
    logo: "/assets/logos/arc/accros.jpg"
  }
];

const riseDapps = [
  { name: "B3X", category: "DeFi", description: "Decentralized Exchange", logo: "/assets/logos/rise/B3X.jpg" },
  { name: "Boom", category: "Gaming", description: "Gaming Platform", logo: "/assets/logos/rise/boom.jpg" },
  { name: "Centauri", category: "DeFi", description: "Lending Protocol", logo: "/assets/logos/rise/centuari.jpg" },
  { name: "For The Kingdom", category: "Gaming", description: "Strategy Game", logo: "/assets/logos/rise/for the kingdom.jpg" },
  { name: "GasPump", category: "Tools", description: "Gas Optimization", logo: "/assets/logos/rise/gaspump.jpg" },
  { name: "Haifu", category: "NFT", description: "NFT Marketplace", logo: "/assets/logos/rise/haifu.jpg" },
  { name: "Icarus", category: "DeFi", description: "Yield Optimization", logo: "/assets/logos/rise/icarus.jpg" },
  { name: "Inari", category: "DeFi", description: "Lending Protocol", logo: "/assets/logos/rise/inari.jpg" },
  { name: "Meteoro", category: "Gaming", description: "GameFi Platform", logo: "/assets/logos/rise/meteoro.jpg" }
];

const pharosDapps = [
  { name: "Aquaflux", category: "DeFi", description: "Liquidity Protocol", logo: "/assets/logos/pharos/aquaflux.jpg" },
  { name: "Aseto", category: "DeFi", description: "Asset Management", logo: "/assets/logos/pharos/aseto.jpg" },
  { name: "GrandLine", category: "Trading", description: "Trading Platform", logo: "/assets/logos/pharos/grandline.jpg" },
  { name: "Paraswap", category: "DEX", description: "DEX Aggregator", logo: "/assets/logos/pharos/paroswap.jpg" },
  { name: "PNS", category: "Domains", description: "Domain Service", logo: "/assets/logos/pharos/pns.jpg" },
  { name: "Porto", category: "DeFi", description: "Yield Farming", logo: "/assets/logos/pharos/porto.jpg" },
  { name: "Spout", category: "DeFi", description: "Liquid Staking", logo: "/assets/logos/pharos/spout.jpg" },
  { name: "TopNod", category: "Infrastructure", description: "Node Operations", logo: "/assets/logos/pharos/topnod.jpg" },
  { name: "ZAN", category: "Tools", description: "Analytics Platform", logo: "/assets/logos/pharos/zan.jpg" }
];

const soneliumDapps = [
  { name: "2P2E", category: "Gaming", description: "Play-to-Earn Game", logo: "/assets/logos/sonieum/2P2E.jpg" },
  { name: "Evermoon", category: "Gaming", description: "RPG Game", logo: "/assets/logos/sonieum/Evermoon.jpg" },
  { name: "Kyo Finance", category: "DeFi", description: "DeFi Platform", logo: "/assets/logos/sonieum/KyoFinance.jpg" },
  { name: "Layer3", category: "Infrastructure", description: "Layer 3 Solution", logo: "/assets/logos/sonieum/layer3.jpg" },
  { name: "MorphoVaults", category: "DeFi", description: "Vault Strategy", logo: "/assets/logos/sonieum/MorphoVaults.jpg" },
  { name: "RubyScore", category: "Tools", description: "Reputation System", logo: "/assets/logos/sonieum/RubyScore.jpg" },
  { name: "SakeFinance", category: "DeFi", description: "Lending Protocol", logo: "/assets/logos/sonieum/SakeFinance.jpg" },
  { name: "SoneFi", category: "DeFi", description: "DeFi Protocol", logo: "/assets/logos/sonieum/SoneFi.jpg" },
  { name: "SoneX", category: "NFT", description: "NFT Marketplace", logo: "/assets/logos/sonieum/SoneX.jpg" },
  { name: "UntitledBank", category: "DeFi", description: "DeFi Banking", logo: "/assets/logos/sonieum/UntitledBank.jpg" }
];

const baseDapps = [
  { name: "Aerodrome", category: "DEX", description: "Decentralized Exchange", logo: "/assets/logos/base/Aerodrome.jpg" },
  { name: "BasePaint", category: "NFT", description: "NFT Art Platform", logo: "/assets/logos/base/BasePaint.jpg" },
  { name: "Drakula", category: "DeFi", description: "DeFi Protocol", logo: "/assets/logos/base/Drakula.jpg" },
  { name: "Farcaster", category: "Social", description: "Social Protocol", logo: "/assets/logos/base/Farcaster.jpg" },
  { name: "Moonwell", category: "DeFi", description: "Lending Protocol", logo: "/assets/logos/base/Moonwell.jpg" },
  { name: "Seamless", category: "DeFi", description: "Cross-chain Protocol", logo: "/assets/logos/base/Seamless.jpg" },
  { name: "Uniswap", category: "DEX", description: "DEX Protocol", logo: "/assets/logos/base/uniswap.jpg" },
  { name: "Aave", category: "Lending", description: "Lending Protocol", logo: "/assets/logos/base/aave.jpg" }
];

const SupportedDapps = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile } = useResponsive();
  const [activeNetwork, setActiveNetwork] = useState("arc");
  const [mobileDappIndex, setMobileDappIndex] = useState(0);

  useEffect(() => {
    // Reset mobile dApp index when network changes
    setMobileDappIndex(0);
  }, [activeNetwork]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating ornaments
      gsap.to(".dapps-ornament-1", {
        y: 20,
        rotation: 10,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".dapps-ornament-2", {
        x: 15,
        y: -15,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Rotating chain logos around center
      gsap.to(".chain-logo", {
        rotation: 360,
        duration: 15,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%"
      });

      // Add pulsing effect to chain logos
      gsap.to(".chain-logo", {
        scale: 1.1,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getActiveDapps = () => {
    switch (activeNetwork) {
      case "arc": return arcDapps;
      case "rise": return riseDapps;
      case "pharos": return pharosDapps;
      case "sonelium": return soneliumDapps;
      case "base": return baseDapps;
      default: return arcDapps;
    }
  };

  const activeDapps = getActiveDapps();
  const activeNetworkData = networks.find(n => n.id === activeNetwork);

  return (
    <section 
      id="dapps" 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#FAFAF8] overflow-hidden py-12 lg:py-32"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-[#1A1A1A]" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-[#1A1A1A]" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#1A1A1A]" />
      </div>

      {/* Decorative Ornaments */}
      <div className="absolute top-40 right-32 w-40 h-40 dapps-ornament-1 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#FF6B35" strokeWidth="1" opacity="0.1" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#FF6B35" strokeWidth="1" opacity="0.15" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="#FF6B35" strokeWidth="2" opacity="0.2" />
        </svg>
      </div>

      <div className="absolute bottom-40 left-24 w-32 h-32 dapps-ornament-2 pointer-events-none">
        <div className="w-full h-full border-4 border-[#FF6B35] opacity-5 rotate-12" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header - Simplified for Arc Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-6"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <span className="orange-square" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B9B9B] font-bold">
              VERIFIED INTERACTIONS
            </p>
          </div>

          {/* Large Headline */}
          <h2 
            className="text-[48px] lg:text-[64px] xl:text-[72px] font-black leading-[0.9] tracking-tight text-[#1A1A1A] uppercase max-w-3xl mx-auto"
            style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}
          >
            dApps Interactions
          </h2>

          {/* Orange Divider */}
          <div className="w-20 h-1 bg-[#FF6B35] mx-auto" />

          {/* Description */}
          <p className="font-mono text-base lg:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto">
            Verify your on-chain activity across Arc dApps. Every interaction is automatically indexed and transformed into verifiable proof.
          </p>
        </motion.div>

        {/* No Network Selection - Arc Only - Skip straight to dApps */}

        {/* Desktop: dApps Grid */}
        {!isMobile && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNetwork}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
            >
              {activeDapps.map((dapp, index) => (
                <motion.div
                  key={dapp.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group bg-gradient-to-br from-white to-[#FFF8F5] border-2 border-[#E5E5E0] p-6 hover:border-[#FF6B35] hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Logo */}
                  <div className="w-16 h-16 border border-[#FF6B35] group-hover:border-[#FF6B35] bg-[#FAFAF8] flex items-center justify-center mb-4 overflow-hidden transition-all duration-300">
                    {dapp.logo ? (
                      <Logo
                        src={dapp.logo}
                        alt={dapp.name}
                        fallback={dapp.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-black text-[#1A1A1A]">
                        {dapp.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="inline-block mb-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#9B9B9B] group-hover:text-[#FF6B35] bg-[#F5F5F2] group-hover:bg-[#FF6B35]/10 px-2 py-1 border border-[#E5E5E0] group-hover:border-[#FF6B35] transition-all duration-300">
                      {dapp.category}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 
                    className="text-lg font-black text-[#1A1A1A] group-hover:text-[#FF6B35] mb-2 uppercase transition-colors duration-300"
                    style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}
                  >
                    {dapp.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#6B6B6B] font-mono leading-relaxed mb-4">
                    {dapp.description}
                  </p>

                  {/* Action */}
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1A1A1A] group-hover:text-[#FF6B35] transition-colors duration-300">
                    <span>USE</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}

              {/* More Coming Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: activeDapps.length * 0.05 }}
                className="bg-[#F5F5F2] border-2 border-[#E5E5E0] border-dashed p-6 flex flex-col items-center justify-center text-center"
              >
                <Loader2 className="w-8 h-8 text-[#FF6B35] animate-spin mb-3" />
                <h3 className="text-lg font-black text-[#1A1A1A] uppercase mb-1">+ More</h3>
                <p className="text-xs text-[#9B9B9B] font-mono">Coming Soon</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Mobile: Carousel View */}
        {isMobile && (
          <div className="space-y-4">
            {/* Featured Card - Current dApp */}
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileDappIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="group bg-gradient-to-br from-white to-[#FFF8F5] border-2 border-[#FF6B35] p-6"
              >
                {/* Logo Large */}
                <div className="w-20 h-20 border-2 border-[#FF6B35] bg-[#FAFAF8] flex items-center justify-center mb-4 mx-auto overflow-hidden">
                  {activeDapps[mobileDappIndex]?.logo ? (
                    <Logo
                      src={activeDapps[mobileDappIndex].logo}
                      alt={activeDapps[mobileDappIndex].name}
                      fallback={activeDapps[mobileDappIndex].name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl font-black text-[#1A1A1A]">
                      {activeDapps[mobileDappIndex]?.name.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Category Badge */}
                <div className="text-center mb-3">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#FF6B35] bg-[#FF6B35]/10 px-3 py-1 border border-[#FF6B35]">
                    {activeDapps[mobileDappIndex]?.category}
                  </span>
                </div>

                {/* Name */}
                <h3 
                  className="text-xl font-black text-[#1A1A1A] mb-2 uppercase text-center"
                  style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}
                >
                  {activeDapps[mobileDappIndex]?.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#6B6B6B] font-mono leading-relaxed mb-4 text-center">
                  {activeDapps[mobileDappIndex]?.description}
                </p>

                {/* Use Button */}
                <button className="w-full border border-[#FF6B35] bg-[#FF6B35] text-white py-2 px-4 font-mono text-xs font-bold uppercase hover:bg-[#1A1A1A] hover:border-[#1A1A1A] transition-all">
                  <div className="flex items-center justify-center gap-2">
                    <span>USE</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => setMobileDappIndex((prev) => (prev - 1 + activeDapps.length) % activeDapps.length)}
                className="w-10 h-10 border border-[#FF6B35] flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all"
                aria-label="Previous dApp"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-1.5 flex-1">
                {activeDapps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setMobileDappIndex(index)}
                    className={`transition-all ${
                      index === mobileDappIndex
                        ? 'w-3 h-3 bg-[#FF6B35] rounded-full'
                        : 'w-2 h-2 bg-[#D0D0CB] rounded-full hover:bg-[#FF6B35]'
                    }`}
                    aria-label={`Go to dApp ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setMobileDappIndex((prev) => (prev + 1) % activeDapps.length)}
                className="w-10 h-10 border border-[#FF6B35] flex items-center justify-center hover:bg-[#FF6B35] hover:text-white transition-all"
                aria-label="Next dApp"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* dApp Counter */}
            <div className="text-center">
              <p className="font-mono text-xs text-[#9B9B9B]">
                {mobileDappIndex + 1} / {activeDapps.length} dApps
              </p>
            </div>

            {/* View All Button */}
            <button className="w-full border border-[#E5E5E0] bg-[#F5F5F2] py-3 px-4 font-mono text-xs font-bold uppercase hover:border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-all">
              View All {activeDapps.length} {activeNetworkData?.name} dApps
            </button>
          </div>
        )}

        {/* Bottom Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center border-t-2 border-[#E5E5E0] pt-8"
        >
          <p className="font-mono text-sm text-[#6B6B6B] max-w-2xl mx-auto">
            These interactions are automatically indexed and verified by INTENT. 
            <span className="text-[#FF6B35] font-bold"> No manual submission required.</span>
          </p>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E5E0]" />
    </section>
  );
};

export default SupportedDapps;
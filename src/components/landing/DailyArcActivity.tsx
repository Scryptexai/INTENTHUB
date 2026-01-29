import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "@/contexts/ResponsiveContext";
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const activities = [
  {
    day: "Today",
    dayNumber: "01",
    icon: ArrowRight,
    title: "Swap via ArcFlow",
    description: "Execute a swap transaction on ArcFlow Finance",
    status: "active",
    difficulty: "Easy",
    time: "5 min"
  },
  {
    day: "Tomorrow",
    dayNumber: "02",
    icon: ArrowRight,
    title: "Provide Liquidity",
    description: "Add liquidity to XYZ Pool",
    status: "upcoming",
    difficulty: "Medium",
    time: "10 min"
  },
  {
    day: "Day 3",
    dayNumber: "03",
    icon: ArrowRight,
    title: "Bridge Small Amount",
    description: "Bridge tokens via Across Protocol",
    status: "upcoming",
    difficulty: "Easy",
    time: "3 min"
  },
  {
    day: "Day 4",
    dayNumber: "04",
    icon: ArrowRight,
    title: "Governance Vote",
    description: "Participate in ARC governance",
    status: "upcoming",
    difficulty: "Medium",
    time: "5 min"
  },
];

const DailyArcActivity = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile } = useResponsive();
  const [dappStartIndex, setDappStartIndex] = useState(0);
  const [isDappAutoPlaying, setIsDappAutoPlaying] = useState(true);

  const dApps = [
    {
      name: "ArcFlow Finance",
      logo: "/assets/logos/arc/arcflow-finance.jpg",
      description: "DEX Aggregator",
      color: "text-blue-600"
    },
    {
      name: "Across",
      logo: "/assets/logos/arc/accros.jpg",
      description: "Bridging Protocol",
      color: "text-purple-600"
    },
    {
      name: "Aave ARC",
      logo: "/assets/logos/arc/aave.jpg",
      description: "Lending Protocol",
      color: "text-purple-500"
    },
    {
      name: "Curve",
      logo: "/assets/logos/arc/curve.jpg",
      description: "DEX & AMM",
      color: "text-pink-600"
    },
    {
      name: "Axelar",
      logo: "/assets/logos/arc/axelar.jpg",
      description: "Cross-chain Bridging",
      color: "text-blue-500"
    },
    {
      name: "Oku",
      logo: "/assets/logos/arc/oku.jpg",
      description: "DEX Aggregator",
      color: "text-cyan-600"
    },
    {
      name: "Hinkal",
      logo: "/assets/logos/arc/hinkal.jpg",
      description: "Privacy Protocol",
      color: "text-green-600"
    },
    {
      name: "Crossmint",
      logo: "/assets/logos/arc/crossmint.jpg",
      description: "NFT Infrastructure",
      color: "text-orange-600"
    },
    {
      name: "Superface",
      logo: "/assets/logos/arc/superface.jpg",
      description: "Identity Protocol",
      color: "text-indigo-600"
    },
  ];

  // Calculate visible dApps (3 cards on desktop, 1 on mobile)
  const visibleDAppsCount = isMobile ? 1 : 3;
  const maxStartIndex = dApps.length - visibleDAppsCount;

  // Auto-rotate dApps carousel
  useEffect(() => {
    if (!isDappAutoPlaying) return;

    const interval = setInterval(() => {
      setDappStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isDappAutoPlaying, maxStartIndex]);

  const handlePrev = () => {
    setIsDappAutoPlaying(false);
    setDappStartIndex((prev) => (prev <= 0 ? maxStartIndex : prev - 1));
  };

  const handleNext = () => {
    setIsDappAutoPlaying(false);
    setDappStartIndex((prev) => (prev >= maxStartIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating ornaments animation
      gsap.to(".activity-ornament-1", {
        y: 20,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="daily-activity"
      ref={sectionRef}
      className="relative w-full min-h-[80vh] bg-[#F5F5F2] overflow-hidden py-16 lg:py-24"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-24 h-24 opacity-10 pointer-events-none activity-ornament-1"
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
      </motion.div>

      <div className={`${isMobile ? 'w-full px-6' : 'max-w-[1400px] mx-auto px-6 lg:px-12'} relative z-10`}>

        {/* Section Header */}
        <div className={`text-center space-y-6 ${isMobile ? 'mb-12' : 'mb-20'}`}>

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
              {t('dailyActivity.badge')}
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={isMobile ? '' : 'max-w-5xl mx-auto'}
          >
            <h2
              className="font-black leading-[1.1] text-[#1A1A1A] uppercase"
              style={{
                fontSize: isMobile ? '2rem' : '3rem lg:text-[3.5rem]',
                fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
              }}
            >
              {t('dailyActivity.headline')}
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

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-mono text-base lg:text-lg text-[#6B6B6B] uppercase tracking-[0.15em] leading-relaxed">
              {t('dailyActivity.subheadline')}
            </p>
          </motion.div>
        </div>

        {/* Activity Cards */}
        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-4'} mt-12`}>
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`activity-card relative p-6 border-2 rounded-xl transition-all duration-300 overflow-hidden ${
                activity.status === 'active'
                  ? 'border-[#FF6B35] bg-white shadow-xl active-pulse'
                  : 'border-[#E5E5E0] bg-white hover:border-[#FF6B35] hover:shadow-lg'
              }`}
            >
              {/* Status Badge */}
              {activity.status === 'active' && (
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
                  <span className="font-mono text-xs font-bold text-[#FF6B35] uppercase tracking-wider">
                    {t('dailyActivity.active')}
                  </span>
                </div>
              )}

              {/* Day Number Badge */}
              <div className="absolute top-4 left-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activity.status === 'active'
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-[#F5F5F2] text-[#6B6B6B]'
                }`}>
                  <span className="font-mono text-sm font-bold">{activity.dayNumber}</span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-12 space-y-4">
                {/* Day Label */}
                <div>
                  <span className={`font-mono text-sm font-bold uppercase tracking-wider ${
                    activity.status === 'active' ? 'text-[#FF6B35]' : 'text-[#6B6B6B]'
                  }`}>
                    {activity.day}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  activity.status === 'active'
                    ? 'bg-[#FF6B35]/20 text-[#FF6B35]'
                    : 'bg-[#F5F5F2] text-[#6B6B6B]'
                }`}>
                  <activity.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-black text-lg text-[#1A1A1A] uppercase leading-tight">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-sm text-[#6B6B6B] leading-relaxed">
                  {activity.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#E5E5E0]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#6B6B6B]" />
                    <span className="font-mono text-xs text-[#6B6B6B]">{activity.time}</span>
                  </div>
                  <div className="w-1 h-1 bg-[#E5E5E0] rounded-full" />
                  <div>
                    <span className={`font-mono text-xs font-medium ${
                      activity.difficulty === 'Easy' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {activity.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Indicator Bar */}
              {activity.status === 'active' && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A]" />
              )}
            </motion.div>
          ))}
        </div>

        {/* dApps Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="font-mono text-sm lg:text-base text-[#6B6B6B] uppercase tracking-[0.2em] mb-2">
              {t('dailyActivity.dappsHeadline')}
            </h3>
            <div className="w-20 h-1 bg-[#FF6B35] mx-auto" />
          </div>

          {/* dApps Carousel - 3 Cards Visible */}
          <div
            className="relative max-w-6xl mx-auto"
            onMouseEnter={() => setIsDappAutoPlaying(false)}
            onMouseLeave={() => setIsDappAutoPlaying(true)}
          >
            <div className="flex gap-6 items-center">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="w-12 h-12 border-2 border-[#FF6B35] rounded-lg flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all group flex-shrink-0"
              >
                <ChevronLeft className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
              </button>

              {/* Cards Container - Show 3 cards on desktop, 1 on mobile */}
              <div className="flex-1 overflow-hidden">
                <div
                  className="flex gap-6 transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${dappStartIndex * (100 / visibleDAppsCount)}%)` }}
                >
                  {dApps.map((dapp, index) => (
                    <motion.div
                      key={`${dappStartIndex}-${index}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (index - dappStartIndex) * 0.1 }}
                      className={`relative flex-shrink-0 bg-white border-2 border-[#E5E5E0] hover:border-[#FF6B35] rounded-xl shadow-lg hover:shadow-xl transition-all ${
                        isMobile
                          ? 'w-full p-6'
                          : 'w-[calc(33.333%-16px)] p-6 lg:p-8'
                      }`}
                    >
                      {/* Number Badge */}
                      <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#FF6B35] border-2 border-[#FF6B35] flex items-center justify-center rounded-lg">
                        <span className="font-mono text-sm font-black text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Logo */}
                      <div className="w-20 h-20 bg-[#F5F5F2] rounded-lg flex items-center justify-center border-2 border-[#FF6B35]/30 mb-4">
                        <img
                          src={dapp.logo}
                          alt={dapp.name}
                          className="w-16 h-16 object-contain"
                          onError={(e) => {
                            e.currentTarget.src = "https://via.placeholder.com/64";
                          }}
                        />
                      </div>

                      {/* Name */}
                      <h4 className={`font-black text-xl lg:text-2xl text-[#1A1A1A] uppercase mb-1 ${dapp.color}`}>
                        {dapp.name}
                      </h4>

                      {/* Description */}
                      <p className="font-mono text-sm text-[#6B6B6B] mb-3">
                        {dapp.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div key={star} className="w-3 h-3 bg-[#FFD700] rounded-full" />
                          ))}
                        </div>
                        <span className="font-mono text-xs text-[#6B6B6B]">Verified</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-12 h-12 border-2 border-[#FF6B35] rounded-lg flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all group flex-shrink-0"
              >
                <ChevronRight className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxStartIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsDappAutoPlaying(false);
                    setDappStartIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === dappStartIndex ? 'bg-[#FF6B35] w-6' : 'bg-[#E5E5E0] hover:bg-[#FF6B35]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center gap-3 bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-mono text-sm uppercase tracking-wider px-10 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0">
            <CalendarIcon className="w-5 h-5" />
            {t('dailyActivity.viewAllDapps')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center font-mono text-xs text-[#9B9B9B] mt-6 uppercase tracking-wider"
        >
          (akan terus berkembang sesuai ecosystem)
        </motion.p>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E5E0]" />
    </section>
  );
};

export default DailyArcActivity;

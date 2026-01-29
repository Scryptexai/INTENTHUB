import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, User, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { useResponsive } from "@/contexts/ResponsiveContext";
import { useTranslation } from 'react-i18next';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Problem data will be populated using translations

const ProblemFraming = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile } = useResponsive();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Get problems from translations
  const problems = [
    {
      icon: X,
      number: "01",
      headline: t('problem.problems.0.title'),
      text: t('problem.problems.0.description'),
    },
    {
      icon: FileText,
      number: "02",
      headline: t('problem.problems.1.title'),
      text: t('problem.problems.1.description'),
    },
    {
      icon: AlertCircle,
      number: "03",
      headline: t('problem.problems.2.title'),
      text: t('problem.problems.2.description'),
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating ornaments animation
      gsap.to(".ornament-float-1", {
        y: 20,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".ornament-float-2", {
        y: -15,
        x: 10,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".ornament-rotate", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-rotate carousel - faster speed
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % problems.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % problems.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + problems.length) % problems.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative w-full min-h-[80vh] bg-[#F5F5F2] overflow-hidden py-16 lg:py-24"
    >
      {/* Decorative Ornaments */}
      <div className="absolute top-20 right-20 w-32 h-32 ornament-float-1 pointer-events-none">
        <div className="w-full h-full border-2 border-[#FF6B35] opacity-10 rounded-full" />
        <div className="absolute inset-4 border border-[#FF6B35] opacity-20 rounded-full" />
      </div>

      <div className="absolute bottom-40 left-16 w-24 h-24 ornament-float-2 pointer-events-none">
        <div className="w-full h-full bg-[#FF6B35] opacity-5 rotate-45" />
      </div>

      <div className="absolute top-1/2 right-1/4 w-16 h-16 ornament-rotate pointer-events-none">
        <div className="w-full h-full border border-[#FF6B35] opacity-5" />
      </div>

      <div className={`mx-auto px-6 ${isMobile ? 'w-full' : 'max-w-[1400px]'}`}>

        {/* Desktop: 2-Column Layout */}
        {!isMobile && (
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN - Fixed Content */}
            <div className="lg:col-span-5 space-y-8 sticky top-24">

              {/* Orange Accent Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35]/10 border border-[#FF6B35] rounded-full"
              >
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B35] font-bold">
                  {t('problem.badge')}
                </p>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2
                  className="text-[40px] lg:text-[48px] font-black leading-[0.95] tracking-tight text-[#1A1A1A] uppercase"
                  style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}
                >
                  {t('problem.headline')}
                </h2>
              </motion.div>

              {/* Orange Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-1.5 bg-[#FF6B35] origin-left"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-mono text-lg text-[#6B6B6B] leading-relaxed max-w-md border-l-4 border-[#FF6B35] pl-6"
              >
                {t('problem.subtitle')}
              </motion.p>

              {/* Carousel Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6 pt-4"
              >
                {/* Dot Indicators */}
                <div className="flex gap-3">
                  {problems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === activeIndex
                          ? "w-8 h-2 bg-[#FF6B35]"
                          : "w-2 h-2 bg-[#D0D0CB] hover:bg-[#FF6B35]/50"
                      }`}
                      aria-label={`Go to problem ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex gap-4">
                  <button
                    onClick={handlePrev}
                    className="w-14 h-14 border-2 border-[#FF6B35] rounded-lg flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all duration-300 group"
                    aria-label="Previous problem"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-14 h-14 border-2 border-[#FF6B35] rounded-lg flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all duration-300 group"
                    aria-label="Next problem"
                  >
                    <ChevronRight className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN - Carousel Cards */}
            <div className="lg:col-span-7 relative min-h-[550px]">

              {/* Card Container */}
              <div
                className="relative"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-white border-3 border-[#FF6B35] p-12 lg:p-16 relative shadow-2xl"
                  >
                    {/* Number Badge - Top Left */}
                    <div className="absolute -top-7 -left-7 w-20 h-20 bg-[#FF6B35] border-3 border-[#FF6B35] flex items-center justify-center shadow-lg">
                      <span className="font-mono text-3xl font-black text-white">
                        {problems[activeIndex].number}
                      </span>
                    </div>

                    {/* Icon - Top Right */}
                    <div className="absolute -top-7 -right-7 w-24 h-24 bg-white border-3 border-[#FF6B35] flex items-center justify-center shadow-lg">
                      {activeIndex === 0 && <X className="w-12 h-12 text-[#FF6B35]" />}
                      {activeIndex === 1 && <FileText className="w-12 h-12 text-[#FF6B35]" />}
                      {activeIndex === 2 && <AlertCircle className="w-12 h-12 text-[#FF6B35]" />}
                      {activeIndex === 3 && <User className="w-12 h-12 text-[#FF6B35]" />}
                    </div>

                    {/* Content */}
                    <div className="pt-8 space-y-6">
                      {/* Headline */}
                      <h3
                        className="text-3xl lg:text-4xl font-black text-[#1A1A1A] uppercase leading-tight"
                        style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}
                      >
                        {problems[activeIndex].headline}
                      </h3>

                      {/* Divider */}
                      <div className="w-24 h-1.5 bg-[#FF6B35]" />

                      {/* Description */}
                      <p className="font-mono text-lg text-[#6B6B6B] leading-relaxed">
                        {problems[activeIndex].text}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-t-4 border-l-4 border-[#FF6B35] opacity-20" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Bar */}
              <div className="mt-10 flex gap-2">
                {problems.map((_, index) => (
                  <div
                    key={index}
                    className="h-2 flex-1 bg-[#E5E5E0] overflow-hidden rounded-full"
                  >
                    <motion.div
                      className="h-full bg-[#FF6B35] rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: index === activeIndex && isAutoPlaying ? "100%" : index < activeIndex ? "100%" : "0%"
                      }}
                      transition={{
                        duration: index === activeIndex && isAutoPlaying ? 3.5 : 0,
                        ease: "linear"
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile: Compact Card Stack */}
        {isMobile && (
          <div className="space-y-5">
            {/* Orange Badge + Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FF6B35]/10 border border-[#FF6B35] rounded-full">
                <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full animate-pulse" />
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#FF6B35] font-bold">
                  {t('problem.badge')}
                </p>
              </div>
              <h2 className="text-2xl font-black text-[#1A1A1A] uppercase leading-tight">
                {t('problem.headline')}
              </h2>
            </motion.div>

            {/* Problem Cards Vertical Stack */}
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <motion.button
                  key={problem.number}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(index);
                  }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`w-full text-left transition-all ${
                    activeIndex === index
                      ? 'bg-white border-2 border-[#FF6B35] shadow-lg'
                      : 'border border-[#E5E5E0] hover:border-[#FF6B35]'
                  } rounded-lg overflow-hidden`}
                >
                  <div className="p-5 space-y-4">
                    {/* Header: Number + Icon + Headline */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#FF6B35] flex items-center justify-center flex-shrink-0 rounded-lg font-mono font-black text-white text-sm">
                        {problem.number}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                          <h3 className="font-bold text-sm uppercase text-[#1A1A1A] leading-tight">
                            {problem.headline}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Expanded: Description + Details */}
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 border-t border-[#E5E5E0] pt-4"
                      >
                        <p className="font-mono text-sm text-[#6B6B6B] leading-relaxed">
                          {problem.text}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}

            {/* Navigation Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center gap-2 mt-6"
            >
              {problems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(index);
                  }}
                  className={`transition-all ${
                    index === activeIndex
                      ? 'w-8 h-2 bg-[#FF6B35] rounded-full'
                      : 'w-2 h-2 bg-[#D0D0CB] rounded-full hover:bg-[#FF6B35]'
                  }`}
                  aria-label={`Go to problem ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>
        )}
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E5E0]" />
    </section>
  );
};

export default ProblemFraming;

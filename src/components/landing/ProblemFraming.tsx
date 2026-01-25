import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, User, ChevronLeft, ChevronRight } from "lucide-react";
import { useResponsive } from "@/contexts/ResponsiveContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: X,
    number: "01",
    headline: "FAKE PARTICIPATION",
    text: "Tasks completed without real protocol usage. Bots and wash trading create noise instead of meaningful signal.",
    details: [
      "Screenshot farming",
      "Bot activity",
      "No verification layer"
    ]
  },
  {
    icon: FileText,
    number: "02",
    headline: "MANUAL PROOF",
    text: "Screenshots, forms, and self-reported activity. No verification layer. Ecosystems forced to trust unverified claims.",
    details: [
      "Time-consuming (30+ min)",
      "Easily faked",
      "No standardization"
    ]
  },
  {
    icon: User,
    number: "03",
    headline: "NO PORTABLE REPUTATION",
    text: "Your actions don't build long-term on-chain identity. Each campaign starts from zero. No cumulative proof of expertise.",
    details: [
      "Zero continuity",
      "Repeated verification",
      "Lost participation history"
    ]
  },
];

const ProblemFraming = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isMobile } = useResponsive();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % problems.length);
    }, 5000);

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
      className="relative w-full min-h-[60vh] bg-[#F5F5F2] overflow-hidden py-12 lg:py-16"
    >
          {/* Grid Background Pattern - REMOVED */}
      {/* Decorative Ornaments - KEPT */}
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

      <div className={`mx-auto px-6 ${isMobile ? 'w-full' : 'container max-w-[1200px] lg:px-12'}`}>
        
        {/* Desktop: 2-Column Layout */}
        {!isMobile && (
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* LEFT COLUMN - Fixed Content (40% width) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-b-2 border-[#FF6B35] pb-4"
              >
                <p 
                  className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B9B9B] font-bold"
                >
                  THE CHALLENGE
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
                  className="text-[36px] lg:text-[40px] xl:text-[48px] font-black leading-[0.9] tracking-tight text-[#1A1A1A] uppercase"
                  style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}
                >
                  TRADITIONAL<br />
                  PARTICIPATION<br />
                  FAILS
                </h2>
              </motion.div>

              {/* Orange Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-1 bg-[#FF6B35] origin-left"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-mono text-base lg:text-lg text-[#6B6B6B] leading-relaxed max-w-md border-b-2 border-[#E5E5E0] pb-6"
              >
                Ecosystems can't reward what they can't verify.
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
                          ? "w-6 h-6 bg-[#FF6B35]"
                          : "w-4 h-4 bg-[#D0D0CB] hover:bg-[#FF6B35]/50"
                      }`}
                      aria-label={`Go to problem ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex gap-4">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 border border-[#FF6B35] rounded-full flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all duration-300 group"
                    aria-label="Previous problem"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 border border-[#FF6B35] rounded-full flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35] transition-all duration-300 group"
                    aria-label="Next problem"
                  >
                    <ChevronRight className="w-6 h-6 text-[#FF6B35] group-hover:text-white" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN - Carousel Cards (60% width) */}
            <div className="lg:col-span-7 relative min-h-[500px]">
              
              {/* Card Container */}
              <div 
                className="relative"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-white border-2 border-[#FF6B35] p-10 lg:p-12 relative"
                  >
                    {/* Number Badge - Top Left */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#FF6B35] border-2 border-[#FF6B35] flex items-center justify-center">
                      <span className="font-mono text-2xl font-black text-white">
                        {problems[activeIndex].number}
                      </span>
                    </div>

                    {/* Icon - Top Right */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-white border-2 border-[#FF6B35] flex items-center justify-center">
                      {activeIndex === 0 && <X className="w-10 h-10 text-[#FF6B35]" />}
                      {activeIndex === 1 && <FileText className="w-10 h-10 text-[#FF6B35]" />}
                      {activeIndex === 2 && <User className="w-10 h-10 text-[#FF6B35]" />}
                    </div>

                    {/* Content */}
                    <div className="pt-8 space-y-6">
                      {/* Headline */}
                      <h3 
                        className="text-3xl lg:text-4xl font-black text-[#1A1A1A] uppercase"
                        style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}
                      >
                        {problems[activeIndex].headline}
                      </h3>

                      {/* Divider */}
                      <div className="w-20 h-1 bg-[#FF6B35]" />

                      {/* Description */}
                      <p className="font-mono text-base lg:text-lg text-[#6B6B6B] leading-relaxed">
                        {problems[activeIndex].text}
                      </p>

                      {/* Details List */}
                      <div className="pt-4 space-y-3 border-t-2 border-[#E5E5E0]">
                        {problems[activeIndex].details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0" />
                            <p className="font-mono text-sm text-[#6B6B6B]">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-t-4 border-l-4 border-[#FF6B35] opacity-20" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Bar */}
              <div className="mt-8 flex gap-2">
                {problems.map((_, index) => (
                  <div
                    key={index}
                    className="h-1 flex-1 bg-[#E5E5E0] overflow-hidden"
                  >
                    <motion.div
                      className="h-full bg-[#FF6B35]"
                      initial={{ width: 0 }}
                      animate={{
                        width: index === activeIndex && isAutoPlaying ? "100%" : index < activeIndex ? "100%" : "0%"
                      }}
                      transition={{
                        duration: index === activeIndex && isAutoPlaying ? 5 : 0,
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
          <div className="space-y-4">
            {/* Eyebrow + Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3 mb-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B9B9B] font-bold border-b border-[#FF6B35] pb-2">
                THE CHALLENGE
              </p>
              <h2 className="text-2xl font-black text-[#1A1A1A] uppercase leading-tight">
                Traditional Participation Fails
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
                      ? 'bg-white border-2 border-[#FF6B35]'
                      : 'border border-[#E5E5E0] hover:border-[#FF6B35]'
                  }`}
                >
                  <div className="p-4 space-y-3">
                    {/* Header: Number + Icon + Headline */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#FF6B35] flex items-center justify-center flex-shrink-0 font-mono font-black text-white text-sm">
                        {problem.number}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                          <h3 className="font-bold text-sm uppercase text-[#1A1A1A]">
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
                        className="space-y-3 border-t border-[#E5E5E0] pt-3"
                      >
                        <p className="font-mono text-xs text-[#6B6B6B] leading-relaxed">
                          {problem.text}
                        </p>
                        <div className="space-y-2">
                          {problem.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-1.5 flex-shrink-0" />
                              <p className="font-mono text-xs text-[#6B6B6B]">{detail}</p>
                            </div>
                          ))}
                        </div>
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
              className="flex justify-center gap-2 mt-4"
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
                      ? 'w-3 h-3 bg-[#FF6B35] rounded-full'
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
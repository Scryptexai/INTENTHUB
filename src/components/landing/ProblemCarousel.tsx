import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, FileText, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: "❌",
    headline: "Fake Participation",
    description: "Tasks can be completed without real protocol usage. Screenshot farming and bot activity cannot be distinguished from genuine exploration.",
  },
  {
    icon: "📋",
    headline: "Manual Proof",
    description: "Screenshots, forms, self-reported activity. No verification layer. Ecosystems forced to trust user submissions without on-chain validation.",
  },
  {
    icon: "👤",
    headline: "No Portable Reputation",
    description: "Your actions don't build long-term on-chain identity. Each campaign starts from zero. No cumulative proof of expertise or participation.",
  },
];

const ProblemCarousel = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % problems.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.from(".problem-left-content", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".problem-carousel-container", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + problems.length) % problems.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % problems.length);
  };

  return (
    <section 
      ref={sectionRef} 
      className="section-padding relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[rgba(0,217,255,0.03)]" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Side - Fixed Content (40%) */}
          <div className="problem-left-content lg:col-span-2">
            <p className="eyebrow-accent mb-6">The System Failure</p>
            
            <h2 className="section-headline mb-6">
              Traditional Participation Doesn't Scale Trust
            </h2>
            
            <p className="card-description mb-10 max-w-md">
              Current testnet farming methods create noise, not signal. Ecosystems need verifiable proof of real protocol usage.
            </p>

            {/* Carousel Controls */}
            <div className="flex items-center gap-6">
              {/* Dot Indicators */}
              <div className="flex items-center gap-3">
                {problems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      activeIndex === index
                        ? "w-3 h-3 bg-primary shadow-[0_0_12px_rgba(0,217,255,0.6)]"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrev}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Carousel (60%) */}
          <div className="problem-carousel-container lg:col-span-3 relative min-h-[400px] md:min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass-card p-10 md:p-12 min-h-[400px] relative"
              >
                {/* Large Icon */}
                <div className="absolute top-8 right-8 text-6xl opacity-50">
                  {problems[activeIndex].icon}
                </div>

                {/* Card Number */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-primary text-sm font-bold tracking-wider">
                    0{activeIndex + 1}
                  </span>
                  <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
                </div>

                {/* Content */}
                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  {problems[activeIndex].headline}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {problems[activeIndex].description}
                </p>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden rounded-b-2xl">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isPaused ? (activeIndex + 1) / problems.length : 1 }}
                    transition={{ 
                      duration: isPaused ? 0 : 5, 
                      ease: "linear" 
                    }}
                    className="h-full bg-gradient-to-r from-primary to-purple-500 origin-left"
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemCarousel;
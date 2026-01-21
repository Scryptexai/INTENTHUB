import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 1247, label: "Campaigns Created" },
    { value: 847, label: "Proofs Minted" },
    { value: 12543, label: "Transactions Verified" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Blockchain network visualization"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-radial" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          ON-CHAIN BEHAVIOR VERIFICATION LAYER
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight text-glow mb-6"
        >
          Your On-Chain Activity.
          <br />
          <span className="gradient-text">Verified. Structured. Shareable.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          INTENT reads what you actually do across dApps, verifies each interaction,
          and turns it into portable proof and campaign-ready content.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="btn-primary inline-flex items-center gap-2 group">
            Launch App
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="btn-secondary">
            See How Proof Works
          </button>
        </motion.div>

        {/* Live Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex items-center gap-8 md:gap-0"
            >
              <div className="text-center px-8">
                <div className="text-3xl md:text-5xl font-display font-bold text-primary mb-2">
                  {statsInView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      delay={0.2}
                    />
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-sm font-mono text-muted-foreground">
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-border" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs font-mono text-muted-foreground">
          Scroll to explore
        </span>
        <ChevronDown className="w-5 h-5 text-primary animate-scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

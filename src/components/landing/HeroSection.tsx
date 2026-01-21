import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden grid-pattern">
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-foreground/10" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-foreground/10" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-foreground/10" />
      </div>

      {/* Content */}
      <div className="container-custom pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div>
            {/* Orange Square Decorator */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="orange-square mb-8"
            />

            {/* Main Headline - Stacked Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] tracking-tight uppercase">
                BACKING
              </h1>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] tracking-tight uppercase">
                TOMORROW
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed"
            >
              Backing the very best web3 builders - transforming visionary ideas into real-world growth.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button className="btn-primary inline-flex items-center gap-3 group">
                APPLY FOR INCUBATION
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Column - Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main Visual Box */}
            <div className="relative w-full aspect-square border border-foreground bg-card">
              {/* Corner Brackets */}
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-tr" />
              <div className="corner-bracket-bl" />
              <div className="corner-bracket-br" />

              {/* Inner Grid */}
              <div className="absolute inset-8 grid grid-cols-3 grid-rows-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`border border-foreground/20 ${
                      i === 4 ? "bg-primary" : ""
                    }`}
                  />
                ))}
              </div>

              {/* X Markers */}
              <span className="x-marker absolute top-4 right-4">×</span>
              <span className="x-marker absolute bottom-4 left-4">×</span>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 font-mono text-xs font-bold border border-foreground">
                VERIFICATION LAYER
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Partners */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 border-t border-foreground pt-8"
        >
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-6">
            Our Partners:
          </p>
          <div className="flex flex-wrap items-center gap-8">
            {["Chainlink", "Tron", "BNB", "OKX", "Certik", "Polygon"].map((partner) => (
              <div
                key={partner}
                className="px-4 py-2 border border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition-colors font-mono text-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Social Links - Fixed Right */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-2">
        {["X", "TG", "M", "IN"].map((social) => (
          <a
            key={social}
            href="#"
            className="w-10 h-10 border border-foreground bg-background flex items-center justify-center font-mono text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {social}
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

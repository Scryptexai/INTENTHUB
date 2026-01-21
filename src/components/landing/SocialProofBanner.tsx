import { motion } from "framer-motion";

const SocialProofBanner = () => {
  const logos = [
    { name: "Arc Network", live: true },
    { name: "ArcFlow Finance", live: false },
    { name: "Aave", live: false },
    { name: "Across", live: false },
  ];

  return (
    <section className="py-6 bg-background-secondary border-y border-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <p className="text-sm font-mono text-muted">
            Live on Arc Ecosystem • Used across multiple dApps
          </p>
          <div className="flex items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div
                key={logo.name}
                className="relative group cursor-pointer"
              >
                <div
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    logo.live ? "" : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                  } group-hover:scale-110`}
                >
                  {/* Logo placeholder - using styled text */}
                  <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">
                      {logo.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-foreground hidden sm:inline">
                    {logo.name}
                  </span>
                </div>
                {logo.live && (
                  <span className="absolute -top-2 -right-2 badge-live text-[10px]">
                    LIVE
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofBanner;

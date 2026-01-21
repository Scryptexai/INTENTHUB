import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-foreground text-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Orange Square */}
          <div className="flex justify-center mb-8">
            <div className="w-4 h-4 bg-primary" />
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-background/60 mb-6">
            GET STARTED TODAY
          </p>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 uppercase leading-tight">
            Start Building
            <br />
            Verifiable On-Chain
            <br />
            <span className="text-primary">Reputation</span>
          </h2>
          
          <p className="text-xl text-background/70 mb-10 max-w-xl mx-auto">
            Every action you take can become proof.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground border-2 border-primary px-12 py-5 font-mono text-sm font-bold uppercase tracking-wider hover:bg-transparent hover:text-primary transition-colors group"
          >
            LAUNCH APP
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <p className="mt-8 font-mono text-xs text-background/50 uppercase tracking-wider">
            Free. No credit card. Just connect wallet.
          </p>
        </motion.div>
      </div>

      {/* Corner X Markers */}
      <span className="x-marker absolute top-8 left-8 text-primary text-2xl">×</span>
      <span className="x-marker absolute top-8 right-8 text-primary text-2xl">×</span>
      <span className="x-marker absolute bottom-8 left-8 text-primary text-2xl">×</span>
      <span className="x-marker absolute bottom-8 right-8 text-primary text-2xl">×</span>
    </section>
  );
};

export default FinalCTA;

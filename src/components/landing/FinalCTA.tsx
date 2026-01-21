import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">GET STARTED TODAY</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Start Building Verifiable
            <br />
            <span className="gradient-text">On-Chain Reputation</span>
          </h2>
          <p className="text-xl text-muted mb-10 max-w-xl mx-auto">
            Every action you take can become proof.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-3 text-xl px-12 py-5 group"
          >
            Launch App
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <p className="mt-6 text-sm font-mono text-muted-foreground">
            Free. No credit card. Just connect wallet.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

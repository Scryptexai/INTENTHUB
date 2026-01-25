import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Sparkles, Globe } from "lucide-react";

const features = [
  { icon: Zap, label: "Real-time Verification" },
  { icon: Sparkles, label: "AI Caption Generation" },
  { icon: Globe, label: "Multi-chain Support" },
];

const VideoDemo = () => {
  return (
    <section className="section-padding-sm border-y border-foreground bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="orange-square" />
            <p className="eyebrow-accent">SEE IT IN ACTION</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase">
            From Transaction to
            <br />
            Verified Proof in 4 Steps
          </h2>
        </motion.div>

        {/* Video Container - Brutalist */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative aspect-video border-2 border-foreground bg-background">
            {/* Corner Brackets */}
            <div className="corner-bracket-tl" />
            <div className="corner-bracket-tr" />
            <div className="corner-bracket-bl" />
            <div className="corner-bracket-br" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-primary border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors group">
                <Play className="w-8 h-8 text-primary-foreground group-hover:text-background ml-1" fill="currentColor" />
              </button>
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-4 right-4 bg-foreground text-background px-3 py-1 font-mono text-xs">
              00:38
            </div>

            {/* X Markers */}
            <span className="x-marker absolute top-2 left-4 text-primary">×</span>
            <span className="x-marker absolute top-2 right-4 text-primary">×</span>
          </div>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-3 px-6 py-3 border border-foreground bg-card hover:bg-foreground hover:text-background transition-colors"
            >
              <feature.icon className="w-4 h-4" />
              <span className="font-mono text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <button className="btn-primary inline-flex items-center gap-3 group">
            TRY IT YOURSELF
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemo;

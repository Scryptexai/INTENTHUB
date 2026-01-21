import { motion } from "framer-motion";
import { ArrowRight, Zap, Sparkles, Globe } from "lucide-react";

const features = [
  { icon: Zap, label: "Real-time Verification" },
  { icon: Sparkles, label: "AI Caption Generation" },
  { icon: Globe, label: "Multi-chain Support" },
];

const VideoDemo = () => {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="eyebrow mb-4">SEE IT IN ACTION</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            From Transaction to Verified Proof
            <br />
            <span className="gradient-text">in 4 Steps</span>
          </h2>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-elevation-high border border-primary/20">
            {/* Video Placeholder - Replace with actual video */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 cursor-pointer hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-primary-foreground ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-muted font-mono text-sm">38-second demo</p>
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
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
            <div key={feature.label} className="feature-badge">
              <feature.icon className="w-4 h-4 text-primary" />
              <span className="text-sm">{feature.label}</span>
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
          <button className="btn-primary inline-flex items-center gap-2 group">
            Try It Yourself
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemo;

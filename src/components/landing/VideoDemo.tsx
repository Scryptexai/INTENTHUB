import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Sparkles, Globe } from "lucide-react";

const features = [
  { icon: Zap, label: "Real-time Verification" },
  { icon: Sparkles, label: "AI Caption Generation" },
  { icon: Globe, label: "Multi-chain Support" },
];

const VideoDemo = () => {
  return (
    <section id="how-it-works" className="section-padding relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow-accent mb-6">See It In Action</p>
          <h2 className="section-headline mb-6">
            From Transaction to
            <br />
            Verified Proof in 4 Steps
          </h2>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative aspect-video glass-card overflow-hidden animate-glow-pulse">
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition-all group">
                <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
              </button>
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm text-foreground px-3 py-1 rounded-lg text-sm">
              00:38
            </div>
          </div>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {features.map((feature) => (
            <div
              key={feature.label}
              className="glass-card flex items-center gap-3 px-6 py-3"
            >
              <feature.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{feature.label}</span>
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
            Try It Yourself
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemo;
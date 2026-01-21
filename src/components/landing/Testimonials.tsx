import { motion } from "framer-motion";
import { Twitter } from "lucide-react";

const testimonials = [
  {
    handle: "@crypto_builder",
    quote:
      "Finally a way to stand out from airdrop farmers. INTENT makes my Arc testnet activity actually meaningful. The AI-generated content is 🔥",
    avatar: "CB",
  },
  {
    handle: "@defi_researcher",
    quote:
      "Saved me 2+ hours this week. No more manual screenshots and boring 'gm I swapped' posts.",
    avatar: "DR",
  },
  {
    handle: "@arc_early_adopter",
    quote:
      "Arc Foundation can now actually see I'm a real user, not a bot. Quality > quantity finally matters.",
    avatar: "AE",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="eyebrow mb-4">COMMUNITY VOICES</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Builders Using INTENT
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.handle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-8"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="font-display font-bold text-primary-foreground">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-mono text-sm text-foreground">
                    {testimonial.handle}
                  </p>
                  <Twitter className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* Quote */}
              <p className="text-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

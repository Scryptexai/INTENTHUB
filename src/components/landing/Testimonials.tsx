import { motion } from "framer-motion";

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
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="orange-square" />
            <p className="eyebrow-accent">COMMUNITY VOICES</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase">
            Builders Using INTENT
          </h2>
        </motion.div>

        {/* Testimonial Cards - Brutalist */}
        <div className="grid md:grid-cols-3 border border-foreground">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.handle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 group hover:bg-primary hover:text-primary-foreground transition-colors ${
                index < testimonials.length - 1 ? "border-b md:border-b-0 md:border-r border-foreground" : ""
              }`}
            >
              {/* Quote */}
              <div className="mb-8">
                <span className="x-marker text-3xl">×</span>
              </div>
              
              <p className="text-foreground group-hover:text-primary-foreground leading-relaxed mb-8 text-lg">
                "{testimonial.quote}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-foreground group-hover:border-primary-foreground flex items-center justify-center bg-background-secondary group-hover:bg-transparent">
                  <span className="font-mono font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-foreground group-hover:text-primary-foreground">
                    {testimonial.handle}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground group-hover:text-primary-foreground/60 uppercase">
                    Twitter/X
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

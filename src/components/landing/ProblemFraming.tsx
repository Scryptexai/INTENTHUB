import { motion } from "framer-motion";
import { XCircle, ClipboardList, User } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    headline: "Fake Participation",
    text: "Tasks can be completed without real protocol usage. Bots game the system.",
  },
  {
    icon: ClipboardList,
    headline: "Manual Proof",
    text: "Screenshots, forms, self-reported activity. No verification layer.",
  },
  {
    icon: User,
    headline: "No Portable Reputation",
    text: "Your actions don't build long-term on-chain identity.",
  },
];

const ProblemFraming = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow-purple mb-4">THE SYSTEM FAILURE</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Traditional Participation Doesn't Scale Trust
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Ecosystems can't reward what they can't verify.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.headline}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-hover p-10"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {problem.headline}
              </h3>
              <p className="text-muted leading-relaxed">
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemFraming;

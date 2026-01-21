import { motion } from "framer-motion";
import { X, FileText, User } from "lucide-react";

const problems = [
  {
    icon: X,
    number: "01",
    headline: "Fake Participation",
    text: "Tasks can be completed without real protocol usage. Bots game the system.",
  },
  {
    icon: FileText,
    number: "02",
    headline: "Manual Proof",
    text: "Screenshots, forms, self-reported activity. No verification layer.",
  },
  {
    icon: User,
    number: "03",
    headline: "No Portable Reputation",
    text: "Your actions don't build long-term on-chain identity.",
  },
];

const ProblemFraming = () => {
  return (
    <section className="section-padding border-b border-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="orange-square" />
            <p className="eyebrow-accent">THE SYSTEM FAILURE</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase leading-tight">
            Traditional Participation
            <br />
            <span className="text-muted">Doesn't Scale Trust</span>
          </h2>
        </motion.div>

        {/* Problem Cards - Brutalist Grid */}
        <div className="grid md:grid-cols-3 border border-foreground">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.headline}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 md:p-10 ${
                index < problems.length - 1 ? "border-b md:border-b-0 md:border-r border-foreground" : ""
              } hover:bg-primary hover:text-primary-foreground group transition-colors`}
            >
              {/* Number */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-4xl font-bold text-muted-foreground group-hover:text-primary-foreground/60">
                  {problem.number}
                </span>
                <span className="x-marker group-hover:text-primary-foreground">×</span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 border border-foreground group-hover:border-primary-foreground flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary-foreground mb-3 uppercase">
                {problem.headline}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 leading-relaxed">
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

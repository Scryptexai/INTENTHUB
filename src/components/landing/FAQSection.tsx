import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is verification automatic?",
    answer:
      "Yes. Once you complete an on-chain action, INTENT automatically indexes and verifies it via RPC. No manual submission needed.",
  },
  {
    question: "How does protocol-level validation work?",
    answer:
      "We query blockchain directly for contract interactions (function calls, events). Not just checking tx hash, but validating actual protocol usage.",
  },
  {
    question: "Can I use proofs across different campaigns?",
    answer:
      "Yes. Proof NFTs are portable. Once minted, they can be referenced in multiple campaigns and ecosystems.",
  },
  {
    question: "Is my wallet data private?",
    answer:
      "We only read public on-chain data (transactions, contract interactions). Never access private keys or off-chain data.",
  },
  {
    question: "What if I want to edit content?",
    answer:
      "You can edit AI-generated captions before posting. Just keep @ArcFlowFinance mention for platform integrity.",
  },
  {
    question: "Is this only for airdrops?",
    answer:
      "No. INTENT builds verifiable reputation regardless of airdrops. Portfolio proof, network building, and technical learning all have value.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          <p className="eyebrow mb-4">COMMON QUESTIONS</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Everything You Need to Know
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-foreground/5 transition-colors"
              >
                <span className="font-display text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-primary" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

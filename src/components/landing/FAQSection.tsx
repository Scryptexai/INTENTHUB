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
    <section id="features" className="section-padding border-y border-foreground bg-card">
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
            <p className="eyebrow-accent">COMMON QUESTIONS</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase">
            Everything You Need to Know
          </h2>
        </motion.div>

        {/* FAQ Accordion - Brutalist */}
        <div className="max-w-3xl mx-auto border border-foreground">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={index < faqs.length - 1 ? "border-b border-foreground" : ""}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                  openIndex === index ? "bg-primary text-primary-foreground" : "hover:bg-foreground hover:text-background"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg font-bold uppercase">
                    {faq.question}
                  </span>
                </div>
                <div className={`shrink-0 w-8 h-8 border flex items-center justify-center ${
                  openIndex === index ? "border-primary-foreground" : "border-foreground"
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
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
                    className="overflow-hidden bg-primary"
                  >
                    <div className="px-6 pb-6 pt-0 text-primary-foreground/90 leading-relaxed pl-16">
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

import { motion } from "framer-motion";
import proofNftMockup from "@/assets/proof-nft-mockup.jpg";
import campaignContentMockup from "@/assets/campaign-content-mockup.jpg";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const outputs = [
  {
    image: proofNftMockup,
    title: "Proof NFT",
    description: "Structured participation record",
  },
  {
    image: campaignContentMockup,
    title: "Campaign Content",
    description: "Auto-generated post per verified action",
  },
  {
    image: dashboardMockup,
    title: "Activity Dashboard",
    description: "Your on-chain reputation timeline",
  },
];

const OutputShowcase = () => {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">THE DELIVERABLES</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What You Actually Get
          </h2>
        </motion.div>

        {/* Output Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {outputs.map((output, index) => (
            <motion.div
              key={output.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card-hover overflow-hidden group"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={output.image}
                  alt={output.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {output.title}
                </h3>
                <p className="text-muted">{output.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutputShowcase;

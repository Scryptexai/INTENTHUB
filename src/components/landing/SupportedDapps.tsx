import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";

const networks = [
  { id: "arc", name: "Arc Network", active: true },
  { id: "rise", name: "Rise Chain", active: false },
  { id: "pharos", name: "Pharos", active: false },
  { id: "sonelium", name: "Sonelium", active: false },
  { id: "base", name: "Base", active: false },
];

const arcDapps = [
  { name: "ArcFlow Finance", category: "DEX", description: "Native DEX & liquidity hub" },
  { name: "Curve", category: "Stablecoin DEX", description: "Deep liquidity for stables" },
  { name: "MintAura", category: "NFT", description: "NFT Marketplace" },
  { name: "Infinity Name", category: "Domains", description: "Web3 Domain Service" },
  { name: "Watchoor", category: "Analytics", description: "Portfolio Tracker" },
  { name: "Synthra", category: "DeFi", description: "Synthetic Assets" },
  { name: "Superface", category: "Social", description: "Social Platform" },
  { name: "Para", category: "Wallet", description: "Wallet Infrastructure" },
  { name: "Crossmint", category: "Payments", description: "NFT Checkout" },
];

const SupportedDapps = () => {
  const [activeNetwork, setActiveNetwork] = useState("arc");

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
            <p className="eyebrow-accent">ECOSYSTEM INTEGRATION</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase">
            Supported dApps
            <br />
            Across Networks
          </h2>
        </motion.div>

        {/* Network Tabs - Brutalist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center border border-foreground mb-12 overflow-hidden"
        >
          {networks.map((network, index) => (
            <button
              key={network.id}
              onClick={() => setActiveNetwork(network.id)}
              className={`px-6 py-4 font-mono text-sm font-medium transition-colors ${
                index < networks.length - 1 ? "border-r border-foreground" : ""
              } ${
                activeNetwork === network.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              {network.name}
              {!network.active && (
                <span className="ml-2 text-xs opacity-60">(SOON)</span>
              )}
            </button>
          ))}
        </motion.div>

        {/* dApps Grid - Brutalist */}
        {activeNetwork === "arc" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 border border-foreground"
          >
            {arcDapps.map((dapp, index) => (
              <motion.div
                key={dapp.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`p-6 group cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors ${
                  index < arcDapps.length - (arcDapps.length % 3 === 0 ? 3 : arcDapps.length % 3)
                    ? "border-b border-foreground"
                    : ""
                } ${(index + 1) % 3 !== 0 ? "lg:border-r border-foreground" : ""} ${
                  (index + 1) % 2 !== 0 ? "sm:border-r border-foreground lg:border-r-0" : ""
                }`}
              >
                {/* Logo Placeholder */}
                <div className="w-12 h-12 border border-foreground group-hover:border-primary-foreground bg-background-secondary group-hover:bg-transparent flex items-center justify-center mb-4">
                  <span className="font-display text-lg font-bold">
                    {dapp.name.charAt(0)}
                  </span>
                </div>

                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary-foreground uppercase">
                    {dapp.name}
                  </h3>
                  <span className="category-badge group-hover:bg-primary-foreground group-hover:text-primary group-hover:border-primary-foreground">
                    {dapp.category}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 mb-4">
                  {dapp.description}
                </p>

                <div className="flex items-center gap-2 font-mono text-xs font-bold group-hover:text-primary-foreground">
                  <span>USE →</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}

            {/* More Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="p-6 flex flex-col items-center justify-center text-center bg-background-secondary border-t border-l border-foreground"
            >
              <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-1 uppercase">
                + More
              </h3>
              <p className="text-sm text-muted-foreground">Coming soon</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="border border-foreground p-16 text-center bg-card"
          >
            <div className="w-20 h-20 mx-auto border border-foreground flex items-center justify-center mb-6">
              <span className="text-3xl font-display font-bold">
                {networks.find((n) => n.id === activeNetwork)?.name.charAt(0)}
              </span>
            </div>
            <span className="badge-auto mb-4 inline-block">AUTO</span>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2 uppercase">
              {networks.find((n) => n.id === activeNetwork)?.name}
            </h3>
            <p className="text-muted-foreground">Integration in progress</p>
          </motion.div>
        )}

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 flex items-center justify-center gap-4"
        >
          <span className="orange-square" />
          <p className="font-mono text-sm text-muted-foreground">
            These interactions are automatically indexed and verified by INTENT.
          </p>
          <span className="orange-square" />
        </motion.div>
      </div>
    </section>
  );
};

export default SupportedDapps;

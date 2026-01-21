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
          <p className="eyebrow mb-4">ECOSYSTEM INTEGRATION</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Supported dApps Across Networks
          </h2>
        </motion.div>

        {/* Network Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {networks.map((network) => (
            <button
              key={network.id}
              onClick={() => setActiveNetwork(network.id)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeNetwork === network.id
                  ? "bg-primary/10 text-primary border-b-2 border-primary"
                  : "text-muted hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {network.name}
              {!network.active && (
                <span className="ml-2 text-xs opacity-60">(Soon)</span>
              )}
            </button>
          ))}
        </motion.div>

        {/* dApps Grid */}
        {activeNetwork === "arc" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {arcDapps.map((dapp, index) => (
              <motion.div
                key={dapp.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card-hover p-6 group cursor-pointer"
              >
                {/* Logo Placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary mb-4 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-primary-foreground">
                    {dapp.name.charAt(0)}
                  </span>
                </div>

                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {dapp.name}
                  </h3>
                  <span className="category-badge">{dapp.category}</span>
                </div>

                <p className="text-sm text-muted mb-4">{dapp.description}</p>

                <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  <span>Use on {dapp.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}

            {/* More Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center"
            >
              <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                + More
              </h3>
              <p className="text-sm text-muted">Coming soon</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-16 text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
              <span className="text-3xl font-display font-bold text-secondary">
                {networks.find((n) => n.id === activeNetwork)?.name.charAt(0)}
              </span>
            </div>
            <span className="badge-auto mb-4 inline-block">AUTO</span>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              {networks.find((n) => n.id === activeNetwork)?.name}
            </h3>
            <p className="text-muted">Integration in progress</p>
          </motion.div>
        )}

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted text-sm mt-8"
        >
          These interactions are automatically indexed and verified by INTENT.
        </motion.p>
      </div>
    </section>
  );
};

export default SupportedDapps;

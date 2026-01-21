import { motion } from "framer-motion";

const networks = [
  {
    name: "Arc Network",
    status: "live",
    stats: { tvl: "$12M", txs: "2.5M+", users: "180K" },
    launch: null,
  },
  {
    name: "Rise Chain",
    status: "auto",
    stats: { tvl: "$23M", txs: "3M+", users: "180K" },
    launch: "Q2 2025",
  },
  {
    name: "Pharos",
    status: "auto",
    stats: { tvl: "$45M", txs: "68+", users: "326K" },
    launch: "Q2 2025",
  },
  {
    name: "Sonelium",
    status: "soon",
    stats: null,
    launch: "Q3 2025",
  },
  {
    name: "Base",
    status: "soon",
    stats: null,
    launch: "Q3 2025",
  },
];

const NetworkExpansion = () => {
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
          <p className="eyebrow mb-4">ROADMAP</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Expanding Verification Infrastructure
          </h2>
        </motion.div>

        {/* Network Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {networks.map((network, index) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 text-center relative"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={
                    network.status === "live"
                      ? "badge-live"
                      : network.status === "auto"
                      ? "badge-auto"
                      : "badge-soon"
                  }
                >
                  {network.status.toUpperCase()}
                </span>
              </div>

              {/* Logo */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-4">
                <span className="text-2xl font-display font-bold text-primary-foreground">
                  {network.name.charAt(0)}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {network.name}
              </h3>

              {/* Stats */}
              {network.stats ? (
                <div className="space-y-1 text-xs font-mono text-muted">
                  <p>TVL: {network.stats.tvl}</p>
                  <p>Txs: {network.stats.txs}</p>
                  <p>Users: {network.stats.users}</p>
                </div>
              ) : (
                <p className="text-sm text-muted">Launch: {network.launch}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkExpansion;

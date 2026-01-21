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
    <section className="section-padding border-y border-foreground bg-card">
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
            <p className="eyebrow-accent">ROADMAP</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase">
            Expanding Verification
            <br />
            Infrastructure
          </h2>
        </motion.div>

        {/* Network Cards - Brutalist */}
        <div className="grid grid-cols-2 md:grid-cols-5 border border-foreground">
          {networks.map((network, index) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 text-center relative group hover:bg-primary hover:text-primary-foreground transition-colors ${
                index < networks.length - (networks.length % 5 === 0 ? 5 : networks.length % 5)
                  ? "border-b border-foreground"
                  : ""
              } ${(index + 1) % 5 !== 0 ? "border-r border-foreground" : ""}`}
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
              <div className="w-16 h-16 mx-auto border border-foreground group-hover:border-primary-foreground flex items-center justify-center mb-4 bg-background-secondary group-hover:bg-transparent">
                <span className="text-2xl font-display font-bold">
                  {network.name.charAt(0)}
                </span>
              </div>

              <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary-foreground mb-3 uppercase">
                {network.name}
              </h3>

              {/* Stats */}
              {network.stats ? (
                <div className="space-y-1 text-xs font-mono text-muted-foreground group-hover:text-primary-foreground/80">
                  <p>TVL: {network.stats.tvl}</p>
                  <p>Txs: {network.stats.txs}</p>
                  <p>Users: {network.stats.users}</p>
                </div>
              ) : (
                <p className="text-xs font-mono text-muted-foreground group-hover:text-primary-foreground/80">
                  Launch: {network.launch}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkExpansion;

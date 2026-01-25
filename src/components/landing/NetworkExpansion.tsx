import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useResponsive } from "@/contexts/ResponsiveContext";
import Logo from "./Logo";

const networks = [
  {
    name: "Arc Network",
    status: "live",
    stats: { tvl: "$12M", txs: "2.5M+", users: "180K" },
    launch: null,
    logo: "/src/assets/logos/chains/arc-network.jpg",
    shortName: "Arc"
  },
  {
    name: "Rise Chain",
    status: "auto",
    stats: { tvl: "$23M", txs: "3M+", users: "180K" },
    launch: "Q2 2025",
    logo: "/src/assets/logos/chains/risechain.jpg",
    shortName: "Rise"
  },
  {
    name: "Pharos",
    status: "auto",
    stats: { tvl: "$45M", txs: "68+", users: "326K" },
    launch: "Q2 2025",
    logo: "/src/assets/logos/chains/PharosNetwork.jpg",
    shortName: "Pharos"
  },
  {
    name: "Sonelium",
    status: "soon",
    stats: null,
    launch: "Q3 2025",
    logo: "/src/assets/logos/chains/soneium.jpg",
    shortName: "Sonelium"
  },
  {
    name: "Base",
    status: "soon",
    stats: null,
    launch: "Q3 2025",
    logo: "/src/assets/logos/chains/base.jpg",
    shortName: "Base"
  },
];

const NetworkExpansion = () => {
  const { isMobile } = useResponsive();
  const [expandedNetwork, setExpandedNetwork] = useState("arc");

  return (
    <section className="section-padding-sm border-y border-foreground bg-card">
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase">
            Expanding Verification
            <br />
            Infrastructure
          </h2>
        </motion.div>

        {/* Desktop: 5-Column Grid */}
        {!isMobile && (
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
                <div className="w-16 h-16 mx-auto border border-foreground group-hover:border-primary-foreground flex items-center justify-center mb-4 bg-background-secondary group-hover:bg-transparent overflow-hidden">
                  {network.logo ? (
                    <Logo
                      src={network.logo}
                      alt={network.name}
                      fallback={network.shortName}
                      className="w-full h-full"
                    />
                  ) : (
                    <span className="text-2xl font-display font-bold">
                      {network.name.charAt(0)}
                    </span>
                  )}
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
        )}

        {/* Mobile: Accordion */}
        {isMobile && (
          <div className="space-y-2">
            {networks.map((network, index) => (
              <motion.div
                key={network.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-foreground overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedNetwork(expandedNetwork === network.name ? '' : network.name)}
                  className={`w-full p-4 flex items-center justify-between transition-colors ${
                    expandedNetwork === network.name
                      ? 'bg-foreground text-background'
                      : 'bg-background hover:bg-foreground/5'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 border border-foreground flex items-center justify-center bg-background-secondary flex-shrink-0">
                      {network.logo ? (
                        <Logo
                          src={network.logo}
                          alt={network.name}
                          fallback={network.shortName}
                          className="w-full h-full"
                        />
                      ) : (
                        <span className="font-display font-bold text-sm">
                          {network.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="text-left">
                      <h3 className="font-display text-sm font-bold uppercase leading-none">
                        {network.name}
                      </h3>
                      <span className="text-xs font-mono mt-1 inline-block">
                        {network.status === "live"
                          ? "🟢 LIVE"
                          : network.status === "auto"
                          ? "🟡 AUTO"
                          : "⚪ SOON"}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      expandedNetwork === network.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                {expandedNetwork === network.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-background-secondary p-4 border-t border-foreground"
                  >
                    {network.stats ? (
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <p className="text-xs font-mono text-muted-foreground">TVL</p>
                          <p className="font-mono font-bold text-foreground">{network.stats.tvl}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-mono text-muted-foreground">TRANSACTIONS</p>
                          <p className="font-mono font-bold text-foreground">{network.stats.txs}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-mono text-muted-foreground">USERS</p>
                          <p className="font-mono font-bold text-foreground">{network.stats.users}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <p className="text-xs font-mono text-muted-foreground">LAUNCH DATE</p>
                        <p className="font-mono font-bold text-foreground">{network.launch}</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NetworkExpansion;

import { motion } from "framer-motion";
import { Shield, ArrowUpRight } from "lucide-react";

const footerLinks = {
  product: ["Features", "How It Works", "dApps", "Roadmap"],
  resources: ["Documentation", "GitHub Repository", "Security Audit", "API Docs"],
  community: ["Twitter/X", "Discord", "Telegram", "Arc Network"],
};

const Footer = () => {
  return (
    <footer className="border-t border-foreground bg-background">
      <div className="container-custom py-16">
        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="orange-square" />
                <h3 className="font-display text-xl font-bold text-foreground uppercase">
                  INTENT
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Proof of Structured Participation on Arc Network
              </p>
              <div className="flex gap-2">
                {["X", "DC", "TG"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 border border-foreground flex items-center justify-center font-mono text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-mono text-xs font-bold text-foreground mb-4 uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-mono text-xs font-bold text-foreground mb-4 uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Community Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-mono text-xs font-bold text-foreground mb-4 uppercase tracking-wider">
                Community
              </h4>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-foreground p-4 flex items-center gap-3 text-center justify-center mb-8 bg-background-secondary"
        >
          <Shield className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-bold">
              INTENT will NEVER ask for your seed phrase or private keys.
            </span>{" "}
            Always verify you're on intent.sbs before connecting wallet.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground uppercase">
            © 2025 INTENT. Built on Arc Network.
          </p>
          <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground uppercase">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
          <p className="text-xs font-mono text-muted-foreground">
            Built with <span className="text-primary">♥</span> for Arc Ecosystem
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

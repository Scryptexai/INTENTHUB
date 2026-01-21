import { motion } from "framer-motion";
import { Twitter, MessageCircle, Send, Shield } from "lucide-react";

const footerLinks = {
  product: ["Features", "How It Works", "dApps", "Roadmap"],
  resources: ["Documentation", "GitHub Repository", "Security Audit", "API Docs"],
  community: ["Twitter/X", "Discord", "Telegram", "Arc Network"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-custom py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-2xl font-bold gradient-text mb-4">
                INTENT
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Proof of Structured Participation on Arc Network
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Send className="w-5 h-5" />
                </a>
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
              <h4 className="font-display font-semibold text-foreground mb-4">
                Product
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted hover:text-primary transition-colors text-sm"
                    >
                      {link}
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
              <h4 className="font-display font-semibold text-foreground mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted hover:text-primary transition-colors text-sm"
                    >
                      {link}
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
              <h4 className="font-display font-semibold text-foreground mb-4">
                Community
              </h4>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted hover:text-primary transition-colors text-sm"
                    >
                      {link}
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
          className="glass-card p-4 flex items-center gap-3 text-center justify-center mb-8"
        >
          <Shield className="w-5 h-5 text-accent shrink-0" />
          <p className="text-sm text-muted">
            <span className="text-foreground font-medium">
              INTENT will NEVER ask for your seed phrase or private keys.
            </span>{" "}
            Always verify you're on intent.sbs before connecting wallet.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 INTENT. Built on Arc Network.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
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
          <p className="text-sm text-muted-foreground">
            Built with ❤️ for Arc Ecosystem
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

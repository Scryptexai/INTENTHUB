import { useEffect } from "react";
import DocsLayout from "@/components/docs/DocsLayout";
import { motion } from "framer-motion";

const Docs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DocsLayout>
      <div className="space-y-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-4" style={{ fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif' }}>
            Welcome to INTENT
          </h1>
          <p className="text-lg text-[#6B6B6B] leading-relaxed">
            Your complete guide to building verifiable on-chain reputation and proof of genuine activity.
          </p>
        </motion.div>

        {/* Introduction Section */}
        <section id="introduction" className="scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3B82F6] text-white text-sm">1</span>
              Introduction
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#6B6B6B] leading-relaxed mb-4">
                INTENT is a decentralized protocol that transforms your on-chain activities into verifiable proof of genuine human behavior. In a world where false sybil accusations can destroy your reputation, INTENT gives you the tools to build and share undeniable evidence of your real activity.
              </p>
              <div className="bg-[#F0F9FF] border-l-4 border-[#3B82F6] p-4 rounded-r-lg my-6">
                <p className="font-mono text-sm text-[#1A1A1A]">
                  <strong>Core Mission:</strong> Empowering users with verifiable proof of their on-chain identity and activity history.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* What is INTENT Section */}
        <section id="what-is-intent" className="scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3B82F6] text-white text-sm">2</span>
              What is INTENT?
            </h2>
            <div className="space-y-4">
              <p className="text-[#6B6B6B] leading-relaxed">
                INTENT is a non-intrusive activity tracking and verification system designed specifically for Web3 users who need to prove they're real humans, not sybil or bots.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border-2 border-[#E5E5E0] rounded-xl p-5 hover:border-[#3B82F6] transition-colors">
                  <h3 className="font-mono font-bold text-[#1A1A1A] mb-2">🎯 User-Focused</h3>
                  <p className="text-sm text-[#6B6B6B]">Built for users, not builders. Your reputation belongs to you.</p>
                </div>
                <div className="bg-white border-2 border-[#E5E5E0] rounded-xl p-5 hover:border-[#3B82F6] transition-colors">
                  <h3 className="font-mono font-bold text-[#1A1A1A] mb-2">🔒 Privacy-First</h3>
                  <p className="text-sm text-[#6B6B6B]">Your data stays yours. We track, we don't store.</p>
                </div>
                <div className="bg-white border-2 border-[#E5E5E0] rounded-xl p-5 hover:border-[#3B82F6] transition-colors">
                  <h3 className="font-mono font-bold text-[#1A1A1A] mb-2">✓ Verifiable</h3>
                  <p className="text-sm text-[#6B6B6B]">Cryptographic proof of your genuine activity.</p>
                </div>
                <div className="bg-white border-2 border-[#E5E5E0] rounded-xl p-5 hover:border-[#3B82F6] transition-colors">
                  <h3 className="font-mono font-bold text-[#1A1A1A] mb-2">⚡ Non-Intrusive</h3>
                  <p className="text-sm text-[#6B6B6B]">Works in the background while you use your wallet normally.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Quick Start Section */}
        <section id="quick-start" className="scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3B82F6] text-white text-sm">3</span>
              Quick Start
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-mono font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-[#1A1A1A] mb-2">Connect Your Wallet</h3>
                  <p className="text-[#6B6B6B]">Simply connect your Web3 wallet. INTENT works with any EVM-compatible wallet.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-mono font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-[#1A1A1A] mb-2">Use Your Wallet Normally</h3>
                  <p className="text-[#6B6B6B]">Swap, bridge, farm, or whatever you usually do. INTENT tracks your activity automatically.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-mono font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-[#1A1A1A] mb-2">Build Your History</h3>
                  <p className="text-[#6B6B6B]">Your activities accumulate into a verifiable history that proves you're a real user.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-mono font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-[#1A1A1A] mb-2">Share Your Proof</h3>
                  <p className="text-[#6B6B6B]">Generate verifiable proof to share with teams, projects, or keep for your records.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Activity Verification Section */}
        <section id="activity-verification" className="scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3B82F6] text-white text-sm">4</span>
              Activity Verification
            </h2>
            <div className="space-y-4">
              <p className="text-[#6B6B6B] leading-relaxed">
                INTENT monitors your on-chain activity across multiple DeFi protocols to build a comprehensive picture of your genuine usage patterns.
              </p>
              <div className="bg-[#F5F5F2] rounded-xl p-6 my-6">
                <h3 className="font-mono font-bold text-[#1A1A1A] mb-4">Tracked Activities Include:</h3>
                <ul className="space-y-2">
                  {[
                    "Token swaps on DEXs",
                    "Liquidity provision",
                    "Cross-chain bridges",
                    "Lending and borrowing",
                    "Staking and yield farming",
                    "NFT interactions",
                    "Governance participation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#6B6B6B]">
                      <span className="text-[#3B82F6] mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Supported Protocols Section */}
        <section id="supported-protocols" className="scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3B82F6] text-white text-sm">5</span>
              Supported Protocols
            </h2>
            <div className="space-y-4">
              <p className="text-[#6B6B6B] leading-relaxed">
                INTENT currently supports activity tracking across 6 major DeFi protocols, with more being added regularly.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
                {["ArcFlow Finance", "Curve", "Across", "Aave", "Axelar", "OnChain GM"].map((protocol) => (
                  <div key={protocol} className="bg-white border border-[#E5E5E0] rounded-lg px-4 py-3 text-center">
                    <span className="font-mono text-sm font-medium text-[#1A1A1A]">{protocol}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3B82F6] text-white text-sm">6</span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is INTENT free to use?",
                  a: "Yes, INTENT is free forever. Your activity history is your data, and you should never have to pay to access it."
                },
                {
                  q: "Does INTENT store my data?",
                  a: "No. INTENT tracks and verifies your activity but doesn't store your personal data. Your history stays yours."
                },
                {
                  q: "How is this different from other verification systems?",
                  a: "INTENT is user-focused, not builder-focused. We help you prove you're genuine rather than helping projects filter users."
                },
                {
                  q: "Can I export my proof?",
                  a: "Yes, you can generate verifiable proof that you can share with teams or projects. The proof is cryptographically verifiable."
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-[#E5E5E0] rounded-xl p-5">
                  <h3 className="font-mono font-bold text-[#1A1A1A] mb-2">{faq.q}</h3>
                  <p className="text-[#6B6B6B]">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Get Started CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">Ready to Build Your Reputation?</h2>
          <p className="text-[#6B6B6B] mb-6">Start tracking your activity and building verifiable proof today.</p>
          <a
            href="/"
            className="inline-block bg-[#3B82F6] hover:bg-[#4A90FF] text-white font-mono text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </DocsLayout>
  );
};

export default Docs;

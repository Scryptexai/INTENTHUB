import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Twitter, CheckCircle2, Loader2, ArrowRight, ExternalLink } from "lucide-react";
import earlyAccessBadge from "@/assets/early-access-badge.png";

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistForm = ({ isOpen, onClose }: WaitlistFormProps) => {
  const [step, setStep] = useState<"tasks" | "address" | "minting" | "complete">("tasks");
  const [twitterFollowed, setTwitterFollowed] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isMinting, setIsMinting] = useState(false);

  const handleFollowTwitter = () => {
    window.open("https://twitter.com/intent_network", "_blank");
    setTimeout(() => setTwitterFollowed(true), 1000);
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (walletAddress.length >= 10) {
      setStep("minting");
      handleMintBadge();
    }
  };

  const handleMintBadge = () => {
    setIsMinting(true);
    // Simulate minting process
    setTimeout(() => {
      setIsMinting(false);
      setStep("complete");
    }, 3000);
  };

  const handleClose = () => {
    onClose();
    // Reset form after closing
    setTimeout(() => {
      setStep("tasks");
      setTwitterFollowed(false);
      setWalletAddress("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-foreground/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-card border-2 border-foreground p-6 relative">
              {/* Corner Brackets */}
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-tr" />
              <div className="corner-bracket-bl" />
              <div className="corner-bracket-br" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors font-mono text-sm"
              >
                ×
              </button>

              {/* Header */}
              <div className="mb-6">
                <div className="orange-square mb-4" />
                <h3 className="font-display text-2xl font-bold uppercase">
                  Join Waitlist
                </h3>
                <p className="text-sm text-muted-foreground mt-2 font-mono">
                  Complete tasks to mint your Early Access badge
                </p>
              </div>

              {/* Progress */}
              <div className="flex gap-2 mb-8">
                {["tasks", "address", "minting", "complete"].map((s, i) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 ${
                      ["tasks", "address", "minting", "complete"].indexOf(step) >= i
                        ? "bg-primary"
                        : "bg-foreground/20"
                    }`}
                  />
                ))}
              </div>

              {/* Step: Tasks */}
              {step === "tasks" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="space-y-4">
                    <div
                      className={`p-4 border ${
                        twitterFollowed ? "border-primary bg-primary/10" : "border-foreground"
                      } flex items-center gap-4 cursor-pointer hover:bg-foreground/5 transition-colors`}
                      onClick={handleFollowTwitter}
                    >
                      <div className={`w-10 h-10 flex items-center justify-center ${
                        twitterFollowed ? "bg-primary" : "bg-foreground"
                      }`}>
                        {twitterFollowed ? (
                          <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                        ) : (
                          <Twitter className="w-5 h-5 text-background" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-mono text-sm font-bold uppercase">
                          Follow on X (Twitter)
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          @intent_network
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>

                  <button
                    onClick={() => twitterFollowed && setStep("address")}
                    disabled={!twitterFollowed}
                    className={`mt-6 w-full btn-primary inline-flex items-center justify-center gap-2 ${
                      !twitterFollowed ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* Step: Address */}
              {step === "address" && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <form onSubmit={handleAddressSubmit}>
                    <label className="block">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        Wallet Address
                      </span>
                      <input
                        type="text"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        placeholder="0x..."
                        className="mt-2 w-full px-4 py-3 bg-background border-2 border-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </label>
                    <p className="text-xs text-muted-foreground mt-2">
                      Enter your EVM wallet address to receive your badge
                    </p>
                    <button
                      type="submit"
                      disabled={walletAddress.length < 10}
                      className={`mt-6 w-full btn-primary inline-flex items-center justify-center gap-2 ${
                        walletAddress.length < 10 ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      Mint Badge
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Step: Minting */}
              {step === "minting" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-primary border-t-transparent"
                    />
                    <img
                      src={earlyAccessBadge}
                      alt="Early Access Badge"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <p className="font-mono text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Minting your badge...
                  </p>
                </motion.div>
              )}

              {/* Step: Complete */}
              {step === "complete" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-40 h-40 mx-auto mb-6 relative"
                  >
                    <img
                      src={earlyAccessBadge}
                      alt="Early Access Badge"
                      className="w-full h-full object-contain"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute inset-0 bg-primary/30"
                    />
                  </motion.div>
                  
                  <div className="orange-square mx-auto mb-4" />
                  <h4 className="font-display text-xl font-bold uppercase mb-2">
                    Welcome to INTENT
                  </h4>
                  <p className="text-sm text-muted-foreground font-mono mb-6">
                    Your Early Access badge has been minted!
                  </p>

                  <div className="p-4 bg-background border border-foreground">
                    <p className="text-xs font-mono text-muted-foreground uppercase mb-2">
                      Your Address
                    </p>
                    <p className="font-mono text-sm break-all">{walletAddress}</p>
                  </div>

                  <button
                    onClick={handleClose}
                    className="mt-6 w-full btn-secondary"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WaitlistForm;

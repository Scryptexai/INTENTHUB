import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Twitter, CheckCircle2, Loader2, ArrowRight, ExternalLink } from "lucide-react";
import { useResponsive } from "@/contexts/ResponsiveContext";
import earlyAccessBadge from "@/assets/early-access-badge.png";

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistForm = ({ isOpen, onClose }: WaitlistFormProps) => {
  const { isMobile } = useResponsive();
  const [step, setStep] = useState<"tasks" | "address" | "minting" | "complete">("tasks");
  const [twitterFollowed, setTwitterFollowed] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isMinting, setIsMinting] = useState(false);

  // Debug log
  if (isOpen) {
    console.log('WaitlistForm is open, isMobile:', isMobile);
    console.log('Window dimensions:', { width: window.innerWidth, height: window.innerHeight });
  }

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

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-foreground/50"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9998,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 9999,
              width: isMobile ? 'min(calc(100vw - 32px), 90vw)' : '28rem',
            }}
          >
            <div className={`bg-card border-2 border-foreground relative ${
              isMobile ? 'p-4' : 'p-6'
            } max-h-[90vh] overflow-y-auto`}>
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
              <div className={isMobile ? 'mb-4' : 'mb-6'}>
                <div className="orange-square mb-3" />
                <h3 className={`font-display font-bold uppercase ${
                  isMobile ? 'text-lg' : 'text-2xl'
                }`}>
                  Join Waitlist
                </h3>
                <p className={`text-muted-foreground mt-1 font-mono ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>
                  Complete tasks to mint your Early Access badge
                </p>
              </div>

              {/* Progress */}
              <div className={`flex gap-2 ${isMobile ? 'mb-4' : 'mb-8'}`}>
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
                      } flex items-center gap-3 cursor-pointer hover:bg-foreground/5 transition-colors`}
                      onClick={handleFollowTwitter}
                    >
                      <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center ${
                        twitterFollowed ? "bg-primary" : "bg-foreground"
                      }`}>
                        {twitterFollowed ? (
                          <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                        ) : (
                          <Twitter className="w-5 h-5 text-background" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-mono font-bold uppercase ${
                          isMobile ? 'text-xs' : 'text-sm'
                        }`}>
                          Follow on X (Twitter)
                        </p>
                        <p className={`text-muted-foreground mt-0.5 ${
                          isMobile ? 'text-[10px]' : 'text-xs'
                        }`}>
                          @intent_network
                        </p>
                      </div>
                      <ExternalLink className={`text-muted-foreground flex-shrink-0 ${
                        isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'
                      }`} />
                    </div>
                  </div>

                  <button
                    onClick={() => twitterFollowed && setStep("address")}
                    disabled={!twitterFollowed}
                    className={`w-full btn-primary inline-flex items-center justify-center gap-2 ${
                      !twitterFollowed ? "opacity-50 cursor-not-allowed" : ""
                    } ${isMobile ? 'mt-4 py-2 text-xs' : 'mt-6 py-3'}`}
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
                      <span className={`font-mono text-muted-foreground uppercase tracking-wider ${
                        isMobile ? 'text-[10px]' : 'text-xs'
                      }`}>
                        Wallet Address
                      </span>
                      <input
                        type="text"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        placeholder="0x..."
                        className={`mt-2 w-full px-4 py-2 bg-background border-2 border-foreground font-mono focus:outline-none focus:border-primary transition-colors ${
                          isMobile ? 'text-xs' : 'text-sm'
                        }`}
                      />
                    </label>
                    <p className={`text-muted-foreground mt-2 ${
                      isMobile ? 'text-[10px]' : 'text-xs'
                    }`}>
                      Enter your EVM wallet address to receive your badge
                    </p>
                    <button
                      type="submit"
                      disabled={walletAddress.length < 10}
                      className={`w-full btn-primary inline-flex items-center justify-center gap-2 ${
                        walletAddress.length < 10 ? "opacity-50 cursor-not-allowed" : ""
                      } ${isMobile ? 'mt-4 py-2 text-xs' : 'mt-6 py-3'}`}
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
                  className={`text-center ${isMobile ? 'py-4' : 'py-8'}`}
                >
                  <div className={`relative mx-auto mb-6 ${
                    isMobile ? 'w-24 h-24' : 'w-32 h-32'
                  }`}>
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
                  <p className={`font-mono uppercase tracking-wider flex items-center justify-center gap-2 ${
                    isMobile ? 'text-xs' : 'text-sm'
                  }`}>
                    <Loader2 className={`animate-spin ${
                      isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'
                    }`} />
                    Minting your badge...
                  </p>
                </motion.div>
              )}

              {/* Step: Complete */}
              {step === "complete" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`text-center ${isMobile ? 'py-2' : 'py-4'}`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className={`mx-auto mb-4 relative ${
                      isMobile ? 'w-28 h-28' : 'w-40 h-40'
                    }`}
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
                  
                  <div className="orange-square mx-auto mb-3" />
                  <h4 className={`font-display font-bold uppercase mb-1 ${
                    isMobile ? 'text-lg' : 'text-xl'
                  }`}>
                    Welcome to INTENT
                  </h4>
                  <p className={`text-muted-foreground font-mono mb-4 ${
                    isMobile ? 'text-[10px]' : 'text-sm'
                  }`}>
                    Your Early Access badge has been minted!
                  </p>

                  <div className={`p-3 bg-background border border-foreground ${
                    isMobile ? 'text-xs' : 'text-sm'
                  }`}>
                    <p className={`font-mono text-muted-foreground uppercase mb-1 ${
                      isMobile ? 'text-[9px]' : 'text-xs'
                    }`}>
                      Your Address
                    </p>
                    <p className={`font-mono break-all ${
                      isMobile ? 'text-[10px]' : 'text-sm'
                    }`}>{walletAddress}</p>
                  </div>

                  <button
                    onClick={handleClose}
                    className={`w-full btn-secondary ${
                      isMobile ? 'mt-4 py-2 text-xs' : 'mt-6 py-3'
                    }`}
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default WaitlistForm;

import { useRef, useEffect } from "react";
import gsap from "gsap";

const arcDapps = [
  "aave.jpg",
  "accros.jpg",
  "arcdex.jpg",
  "arcflow-finance.jpg",
  "axelar.jpg",
  "BlockRadar.jpg",
  "caset.jpg",
  "CFI.jpg",
  "crossmint.jpg",
  "curve.jpg",
  "hinkal.jpg",
  "infinity-name.jpg",
  "mintaura.jpg",
  "oku.jpg",
  "onchaingm.jpg",
  "para.jpg",
  "superface.jpg",
  "synthra.jpg",
  "watchoor.jpg",
  "zkcodex.jpg"
];

const SocialProofBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.to(".arc-logos-scroll", {
          x: "-50%",
          duration: 60,
          ease: "none",
          repeat: -1,
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="relative border-t border-b border-[#FF6B35] bg-[#FAFAF8] py-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-[#FF6B35]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-[#FF6B35]" />
      </div>

      {/* Label */}
      <div className="container max-w-[1400px] mx-auto px-6 lg:px-12 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-[#FF6B35]" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B9B9B] font-bold">
            Live on Arc Network • Used across 20+ dApps
          </p>
          <div className="flex-1 h-px bg-[#E5E5E0]" />
        </div>
      </div>

      {/* Scrolling Logos */}
      <div ref={containerRef} className="overflow-hidden relative">
        <div className="arc-logos-scroll flex items-center" style={{ willChange: 'transform' }}>
          {/* Duplicate for seamless loop */}
          {arcDapps.concat(arcDapps).map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 lg:mx-6"
            >
              <div className="group relative">
                {/* Logo Container with Border */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-[#FF6B35] bg-white rounded-xl flex items-center justify-center p-2 transition-all duration-300 hover:border-[#FF6B35] hover:shadow-xl hover:-translate-y-1">
                  <img
                    src={`/assets/logos/arc/${logo}`}
                    alt={`Arc dApp ${index + 1}`}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Decorative Corner */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAF8] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAF8] to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default SocialProofBanner;
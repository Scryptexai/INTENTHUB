import { useEffect, useRef, useState } from "react";
import { ArrowRight, Wallet, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { useResponsive } from "@/contexts/ResponsiveContext";
import WaitlistForm from "./WaitlistForm";

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation
      gsap.from(contentRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // X markers animation
      gsap.from(".cta-x-marker", {
        scale: 0,
        rotation: 180,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative w-full min-h-[70vh] bg-[#1A1A1A] overflow-hidden py-16 lg:py-24">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Ornaments */}
        <div className="absolute top-20 right-20 w-40 h-40 opacity-20 pointer-events-none animate-spin-slow">
          <Sparkles className="w-full h-full text-[#FF6B35]" />
        </div>

        <div className="absolute bottom-20 left-20 w-32 h-32 opacity-20 pointer-events-none animate-float">
          <Sparkles className="w-full h-full text-[#FF6B35]" />
        </div>

        <div className={`${isMobile ? 'px-6' : 'max-w-[1400px] mx-auto px-6 lg:px-12'} relative z-10 text-center`}>
          <div ref={contentRef} className={`space-y-8 ${isMobile ? 'py-12' : 'py-20'}`}>

            {/* Orange Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35]/20 border border-[#FF6B35] rounded-full">
              <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B35] font-bold">
                FINAL CTA
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-black leading-[1.15] text-white uppercase"
              style={{
                fontSize: isMobile ? '2.5rem' : '4rem lg:[4.5rem] xl:[5rem]',
                fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
              }}
            >
              Kalau mau farming,<br />
              setidaknya lakukan<br />
              dengan cara yang benar.
            </h2>

            {/* Orange Accent Line */}
            <div className="w-24 h-1.5 bg-[#FF6B35] mx-auto" />

            {/* Subtitle */}
            <p className="text-xl text-[#D0D0CB] leading-relaxed max-w-2xl mx-auto font-mono">
              Pakai dApps, bangun history, dan biarkan INTENT urus verifikasi + bukti.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col ${isMobile ? 'gap-4' : 'sm:flex-row gap-6'} justify-center items-center pt-6`}>
              <Button
                onClick={() => setIsWaitlistOpen(true)}
                className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-mono text-sm uppercase tracking-wider px-12 py-5 rounded-lg transition-all duration-300 shadow-2xl hover:shadow-[#FF6B35]/50 hover:-translate-y-1 active:translate-y-0 active:scale-95"
              >
                Start Using ARC with INTENT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                className="border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white font-mono text-sm uppercase tracking-wider px-12 py-5 rounded-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <Wallet className="mr-2 w-5 h-5" />
                Connect Wallet
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-3 pt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-white/80 uppercase tracking-wider">
                  No Credit Card Required
                </span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#FF6B35]" />
                <span className="font-mono text-xs text-white/80 uppercase tracking-wider">
                  Free to Start
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Corner X Markers */}
        <span className="cta-x-marker absolute top-8 left-8 text-[#FF6B35] text-3xl font-bold opacity-50">✕</span>
        <span className="cta-x-marker absolute top-8 right-8 text-[#FF6B35] text-3xl font-bold opacity-50">✕</span>
        <span className="cta-x-marker absolute bottom-8 left-8 text-[#FF6B35] text-3xl font-bold opacity-50">✕</span>
        <span className="cta-x-marker absolute bottom-8 right-8 text-[#FF6B35] text-3xl font-bold opacity-50">✕</span>

        {/* Bottom Gradient Border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent" />
      </section>

      {/* Waitlist Modal */}
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-10deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default FinalCTA;

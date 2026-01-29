import { CheckCircle2, XCircle } from "lucide-react";
import { useResponsive } from "@/contexts/ResponsiveContext";

const WhyDifferentSection = () => {
  const { isMobile } = useResponsive();

  return (
    <section
      id="why-different"
      className="relative w-full min-h-[70vh] bg-[#FAFAF8] overflow-hidden py-16 lg:py-24"
    >
      <div className={`${isMobile ? 'w-full px-6' : 'max-w-[1400px] mx-auto px-6 lg:px-12'} relative z-10`}>

        {/* Section Header */}
        <div className={`text-center space-y-8 ${isMobile ? 'mb-16' : 'mb-24'}`}>

          {/* Orange Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35]/10 border border-[#FF6B35] rounded-full">
            <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B35] font-bold">
              WHY THIS IS DIFFERENT
            </p>
          </div>

          {/* Main Headline */}
          <div className={isMobile ? '' : 'max-w-4xl mx-auto'}>
            <h2
              className="font-black leading-[1.2] text-[#1A1A1A] uppercase"
              style={{
                fontSize: isMobile ? '2.2rem' : '3rem lg:text-[3.5rem]',
                fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
              }}
            >
              Ini bukan platform quest. Ini panduan aktivitas on-chain.
            </h2>
          </div>

          {/* Orange Divider */}
          <div className="w-24 h-1.5 bg-[#FF6B35] mx-auto" />
        </div>

        {/* Comparison Cards */}
        <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} mt-16`}>

          {/* Platform Quest Biasa */}
          <div>
            <div className="p-8 lg:p-10 border-3 border-[#E5E5E0] rounded-2xl bg-white hover:shadow-lg transition-all duration-300 h-full">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-[#E5E5E0] rounded-xl flex items-center justify-center">
                  <XCircle className="w-8 h-8 text-[#6B6B6B]" />
                </div>
                <h3 className="font-black text-xl lg:text-2xl text-[#1A1A1A] uppercase">
                  Platform Quest Biasa
                </h3>
              </div>

              {/* Divider */}
              <div className="w-16 h-1 bg-[#E5E5E0] mb-8" />

              {/* Points */}
              <div className="space-y-6">
                {[
                  { icon: XCircle, text: "Fokus ke checklist", detail: "Task yang sama untuk semua orang" },
                  { icon: XCircle, text: "Task sama untuk semua orang", detail: "Tidak ada personalisasi" },
                  { icon: XCircle, text: "Tujuan utama: claim reward", detail: "Orientasi ke reward, bukan penggunaan" }
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#E5E5E0] rounded-lg flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-[#6B6B6B]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-base text-[#1A1A1A] leading-snug mb-1">
                        {point.text}
                      </p>
                      <p className="font-mono text-sm text-[#6B6B6B]">
                        {point.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Icon */}
              <div className="mt-8 pt-6 border-t-2 border-[#E5E5E0]">
                <div className="flex items-center gap-2 text-[#6B6B6B]">
                  <XCircle className="w-5 h-5" />
                  <span className="font-mono text-sm uppercase tracking-wider">Not Optimal</span>
                </div>
              </div>
            </div>
          </div>

          {/* INTENT */}
          <div>
            <div className="p-8 lg:p-10 border-3 border-[#FF6B35] rounded-2xl bg-gradient-to-br from-[#FF6B35]/5 to-white shadow-xl hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <div className="px-4 py-2 bg-[#FF6B35] rounded-lg shadow-lg">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                    ✨ Better Way
                  </span>
                </div>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B35]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-xl flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-black text-xl lg:text-2xl text-[#1A1A1A] uppercase">
                  INTENT
                </h3>
              </div>

              {/* Divider */}
              <div className="w-16 h-1 bg-[#FF6B35] mb-8 relative z-10" />

              {/* Points */}
              <div className="space-y-6 relative z-10">
                {[
                  { icon: CheckCircle2, text: "Fokus ke cara kamu pakai dApps", detail: "Personalisasi berdasarkan perilaku nyata" },
                  { icon: CheckCircle2, text: "Aktivitas bervariasi & berurutan", detail: "Alur yang logis dan masuk akal" },
                  { icon: CheckCircle2, text: "Tujuan utama: partisipasi nyata", detail: "Bangun jejak penggunaan yang berharga" }
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-base text-[#1A1A1A] leading-snug mb-1">
                        {point.text}
                      </p>
                      <p className="font-mono text-sm text-[#FF6B35]">
                        {point.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Icon */}
              <div className="mt-8 pt-6 border-t-2 border-[#FF6B35]/30 relative z-10">
                <div className="flex items-center gap-2 text-[#FF6B35]">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-mono text-sm uppercase tracking-wider font-bold">Recommended</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="mt-16 p-8 lg:p-10 bg-white border-2 border-[#FF6B35] rounded-xl max-w-4xl mx-auto shadow-lg text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FF6B35]/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FF6B35]/5 rounded-full blur-2xl pointer-events-none" />

          <p className="font-mono text-base lg:text-lg text-[#1A1A1A] leading-relaxed relative z-10">
            <span className="font-black text-[#FF6B35]">INTENT</span> bukan ngajarin kamu "cara cepat claim",
            <br />
            tapi bantu kamu bangun jejak penggunaan yang masuk akal.
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E5E0]" />
    </section>
  );
};

export default WhyDifferentSection;

import { CheckCircle2, XCircle } from "lucide-react";
import { useResponsive } from "@/contexts/ResponsiveContext";
import { useTranslation } from 'react-i18next';

const WhyDifferentSection = () => {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();

  return (
    <section
      id="why-different"
      className="relative w-full min-h-[70vh] bg-[#FAFAF8] overflow-hidden py-12 lg:py-24"
    >
      <div className={`${isMobile ? 'w-full px-6' : 'max-w-[1400px] mx-auto px-6 lg:px-12'} relative z-10`}>

        {/* Section Header */}
        <div className={`text-center space-y-8 ${isMobile ? 'mb-16' : 'mb-24'}`}>

          {/* Orange Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35]/10 border border-[#FF6B35] rounded-full">
            <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B35] font-bold">
              {t('whyDifferent.badge')}
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
              {t('whyDifferent.headline')}
            </h2>
          </div>

          {/* Orange Divider */}
          <div className="w-24 h-1.5 bg-[#FF6B35] mx-auto" />
        </div>

        {/* Comparison Cards */}
        <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} mt-16`}>

          {/* Platform Quest Biasa */}
          <div>
            <div className={`border-3 border-[#E5E5E0] rounded-2xl bg-white hover:shadow-lg transition-all duration-300 h-full ${
              isMobile ? 'p-5' : 'p-8 lg:p-10'
            }`}>
              {/* Header */}
              <div className={`flex items-center gap-3 mb-6 ${
                isMobile ? 'gap-3 mb-6' : 'gap-4 mb-8'
              }`}>
                <div className={`bg-[#E5E5E0] rounded-xl flex items-center justify-center ${
                  isMobile ? 'w-12 h-12' : 'w-16 h-16'
                }`}>
                  <XCircle className={`text-[#6B6B6B] ${
                    isMobile ? 'w-6 h-6' : 'w-8 h-8'
                  }`} />
                </div>
                <h3 className={`font-black text-[#1A1A1A] uppercase ${
                  isMobile ? 'text-base' : 'text-xl lg:text-2xl'
                }`}>
                  {t('whyDifferent.questPlatform.title')}
                </h3>
              </div>

              {/* Divider */}
              <div className={`bg-[#E5E5E0] mb-6 ${
                isMobile ? 'w-12 h-0.5 mb-6' : 'w-16 h-1 mb-8'
              }`} />

              {/* Points */}
              <div className={`space-y-4 ${
                isMobile ? 'space-y-3' : 'space-y-6'
              }`}>
                {[
                  { icon: XCircle, text: t('whyDifferent.questPlatform.point1'), detail: t('whyDifferent.questPlatform.detail1') },
                  { icon: XCircle, text: t('whyDifferent.questPlatform.point2'), detail: t('whyDifferent.questPlatform.detail2') },
                  { icon: XCircle, text: t('whyDifferent.questPlatform.point3'), detail: t('whyDifferent.questPlatform.detail3') }
                ].map((point, index) => (
                  <div key={index} className={`flex items-start gap-3 ${
                    isMobile ? 'gap-3' : 'gap-4'
                  }`}>
                    <div className={`bg-[#E5E5E0] rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isMobile ? 'w-6 h-6' : 'w-8 h-8'
                    }`}>
                      <point.icon className={`text-[#6B6B6B] ${
                        isMobile ? 'w-4 h-4' : 'w-5 h-5'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-black text-[#1A1A1A] leading-snug mb-1 ${
                        isMobile ? 'text-xs' : 'text-base'
                      }`}>
                        {point.text}
                      </p>
                      <p className={`font-mono text-[#6B6B6B] ${
                        isMobile ? 'text-[10px]' : 'text-sm'
                      }`}>
                        {point.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Icon */}
              <div className={`border-t-2 border-[#E5E5E0] ${
                isMobile ? 'mt-6 pt-4' : 'mt-8 pt-6'
              }`}>
                <div className="flex items-center gap-2 text-[#6B6B6B]">
                  <XCircle className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
                  <span className={`font-mono uppercase tracking-wider ${
                    isMobile ? 'text-[10px]' : 'text-sm'
                  }`}>{t('whyDifferent.questPlatform.status')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* INTENT */}
          <div>
            <div className={`border-3 border-[#FF6B35] rounded-2xl bg-gradient-to-br from-[#FF6B35]/5 to-white shadow-xl hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden ${
              isMobile ? 'p-5' : 'p-8 lg:p-10'
            }`}>
              {/* Badge */}
              <div className={`absolute bg-[#FF6B35] rounded-lg shadow-lg ${
                isMobile ? 'top-4 right-4' : 'top-6 right-6'
              }`}>
                <div className={`bg-[#FF6B35] rounded-lg ${
                  isMobile ? 'px-3 py-1.5' : 'px-4 py-2'
                }`}>
                  <span className={`font-mono font-bold uppercase tracking-wider text-white ${
                    isMobile ? 'text-[10px]' : 'text-xs'
                  }`}>
                    {t('whyDifferent.intent.badge')}
                  </span>
                </div>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B35]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className={`flex items-center gap-3 mb-6 relative z-10 ${
                isMobile ? 'gap-3 mb-6' : 'gap-4 mb-8'
              }`}>
                <div className={`bg-[#FF6B35] rounded-xl flex items-center justify-center shadow-lg ${
                  isMobile ? 'w-12 h-12' : 'w-16 h-16'
                }`}>
                  <CheckCircle2 className={`text-white ${
                    isMobile ? 'w-6 h-6' : 'w-8 h-8'
                  }`} />
                </div>
                <h3 className={`font-black text-[#1A1A1A] uppercase ${
                  isMobile ? 'text-base' : 'text-xl lg:text-2xl'
                }`}>
                  {t('whyDifferent.intent.title')}
                </h3>
              </div>

              {/* Divider */}
              <div className={`bg-[#FF6B35] mb-6 relative z-10 ${
                isMobile ? 'w-12 h-0.5 mb-6' : 'w-16 h-1 mb-8'
              }`} />

              {/* Points */}
              <div className={`space-y-4 relative z-10 ${
                isMobile ? 'space-y-3' : 'space-y-6'
              }`}>
                {[
                  { icon: CheckCircle2, text: t('whyDifferent.intent.point1'), detail: t('whyDifferent.intent.detail1') },
                  { icon: CheckCircle2, text: t('whyDifferent.intent.point2'), detail: t('whyDifferent.intent.detail2') },
                  { icon: CheckCircle2, text: t('whyDifferent.intent.point3'), detail: t('whyDifferent.intent.detail3') }
                ].map((point, index) => (
                  <div key={index} className={`flex items-start gap-3 ${
                    isMobile ? 'gap-3' : 'gap-4'
                  }`}>
                    <div className={`bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isMobile ? 'w-6 h-6' : 'w-8 h-8'
                    }`}>
                      <point.icon className={`text-[#FF6B35] ${
                        isMobile ? 'w-4 h-4' : 'w-5 h-5'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-black text-[#1A1A1A] leading-snug mb-1 ${
                        isMobile ? 'text-xs' : 'text-base'
                      }`}>
                        {point.text}
                      </p>
                      <p className={`font-mono text-[#FF6B35] ${
                        isMobile ? 'text-[10px]' : 'text-sm'
                      }`}>
                        {point.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Icon */}
              <div className={`border-t-2 border-[#FF6B35]/30 relative z-10 ${
                isMobile ? 'mt-6 pt-4' : 'mt-8 pt-6'
              }`}>
                <div className="flex items-center gap-2 text-[#FF6B35]">
                  <CheckCircle2 className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
                  <span className={`font-mono uppercase tracking-wider font-bold ${
                    isMobile ? 'text-[10px]' : 'text-sm'
                  }`}>{t('whyDifferent.intent.status')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className={`bg-white border-2 border-[#FF6B35] rounded-xl max-w-4xl mx-auto shadow-lg text-center relative overflow-hidden ${
          isMobile ? 'mt-12 p-5' : 'mt-16 p-8 lg:p-10'
        }`}>
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FF6B35]/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FF6B35]/5 rounded-full blur-2xl pointer-events-none" />

          <p className={`font-mono text-[#1A1A1A] leading-relaxed relative z-10 ${
            isMobile ? 'text-xs' : 'text-base lg:text-lg'
          }`}>
            {t('whyDifferent.explanation')}
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E5E0]" />
    </section>
  );
};

export default WhyDifferentSection;

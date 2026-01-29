import { useResponsive } from "@/contexts/ResponsiveContext";
import { Award, Link, Eye, CheckCircle, Hash, Trophy, Users, TrendingUp, Lock, Globe } from "lucide-react";

const proofStats = [
  { icon: Trophy, label: "Activities Verified", value: "10K+", color: "text-[#FFD700]" },
  { icon: Users, label: "Active Users", value: "2.5K+", color: "text-[#00D9FF]" },
  { icon: TrendingUp, label: "Monthly Growth", value: "180%", color: "text-green-500" },
];

const AboutProofBadge = () => {
  const { isMobile } = useResponsive();

  return (
    <section
      id="about-proof"
      className="relative w-full min-h-[90vh] bg-[#F5F5F2] overflow-hidden py-16 lg:py-24"
    >
      <div className={`${isMobile ? 'w-full px-6' : 'max-w-[1400px] mx-auto px-6 lg:px-12'} relative z-10`}>

        {/* Section Header */}
        <div className={`text-center space-y-8 ${isMobile ? 'mb-16' : 'mb-24 lg:mb-32'}`}>

          {/* Orange Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35]/10 border border-[#FF6B35] rounded-full">
            <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF6B35] font-bold">
              ABOUT PROOF & BADGE
            </p>
          </div>

          {/* Main Headline */}
          <div className={isMobile ? '' : 'max-w-4xl mx-auto'}>
            <h2
              className="font-black leading-[1.15] text-[#1A1A1A] uppercase"
              style={{
                fontSize: isMobile ? '2.5rem' : '3.5rem lg:[4rem] xl:[4.5rem]',
                fontFamily: '"Mastertext Plain", "Space Grotesk", sans-serif'
              }}
            >
              Badge di sini bukan koleksi,<br />
              tapi bukti aktivitas.
            </h2>
          </div>

          {/* Orange Divider */}
          <div className="w-24 h-1.5 bg-[#FF6B35] mx-auto" />
        </div>

        {/* Proof Stats */}
        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-3'} mt-16`}>
          {proofStats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white border-2 border-[#E5E5E0] rounded-xl hover:border-[#FF6B35] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-[#FF6B35]/10">
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div>
                  <p className="font-mono text-2xl lg:text-3xl font-black text-[#1A1A1A]">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-[#6B6B6B] uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proof Features */}
        <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} mt-12`}>
          {[
            {
              icon: Link,
              title: "Terhubung langsung ke transaksi",
              description: "Setiap proof di INTENT terhubung langsung ke transaksi kamu di chain. Bukan cuma NFT kosong, tapi catatan aktivitas yang bisa dicek ulang.",
              color: "text-[#00D9FF]",
              bgColor: "bg-[#00D9FF]/10"
            },
            {
              icon: Eye,
              title: "Bisa diverifikasi kapan saja",
              description: "Kalau nanti ada snapshot, campaign, atau retroactive reward, kamu punya history yang rapi dan bisa diverifikasi.",
              color: "text-[#FF6B35]",
              bgColor: "bg-[#FF6B35]/10"
            },
            {
              icon: Lock,
              title: "Privasi tetap terjaga",
              description: "Proof kamu tetap anonim dan tidak mengekspos data sensitif. Hanya verifikasi yang bisa dibuktikan tanpa membuka identitas.",
              color: "text-purple-500",
              bgColor: "bg-purple-500/10"
            },
            {
              icon: Globe,
              title: "Terbuka untuk semua ecosystem",
              description: "Proof yang kamu bangun di INTENT tetap relevan meskipun nanti ecosystem lain membutuhkan verifikasi aktivitas.",
              color: "text-green-500",
              bgColor: "bg-green-500/10"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 border-2 border-[#E5E5E0] rounded-xl bg-white hover:border-[#FF6B35] hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-5 ${feature.bgColor}`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              {/* Title */}
              <h3 className="font-black text-lg lg:text-xl text-[#1A1A1A] mb-3 uppercase leading-tight">
                {feature.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-1 bg-[#FF6B35] mb-3" />

              {/* Description */}
              <p className="font-mono text-sm text-[#6B6B6B] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Proof Visualization */}
        <div className="mt-16 p-8 lg:p-10 bg-gradient-to-br from-[#FF6B35]/5 to-white border-2 border-[#FF6B35] rounded-xl max-w-5xl mx-auto shadow-lg relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left: Content */}
            <div>
              <h4 className="font-black text-xl lg:text-2xl text-[#1A1A1A] mb-4 uppercase">
                How Your Proof Works
              </h4>
              <p className="font-mono text-base text-[#6B6B6B] leading-relaxed mb-6">
                Each proof contains timestamp, transaction hash, protocol interaction, and verification status.
              </p>

              {/* Proof Details */}
              <div className="space-y-3">
                {[
                  { icon: Hash, label: "Transaction Hash", value: "0x1a2b...9z8y" },
                  { icon: CheckCircle, label: "Verification Status", value: "Verified" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-white rounded-lg border border-[#E5E5E0]">
                    <item.icon className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-mono text-xs text-[#6B6B6B] uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="font-mono text-sm text-[#1A1A1A] font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Badge Visual */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Badge */}
                <div className="w-40 h-40 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-full flex items-center justify-center shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300">
                  <Award className="w-20 h-20 text-white" />
                </div>

                {/* Outer Ring */}
                <div className="absolute -inset-4 w-48 h-48 border-2 border-[#FF6B35]/30 rounded-full" />

                {/* Badge Label */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="px-4 py-2 bg-[#FF6B35] rounded-lg shadow-lg">
                    <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      VERIFIED ACTIVITY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline/Process Section */}
        <div className="mt-16 p-8 lg:p-10 bg-white border-2 border-[#E5E5E0] rounded-xl max-w-5xl mx-auto">
          <h4 className="font-black text-xl lg:text-2xl text-[#1A1A1A] mb-8 uppercase text-center">
            How INTENT Verifies Your Activity
          </h4>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Execute", desc: "Lakukan transaksi di dApps ARC ecosystem" },
              { step: "02", title: "Track", desc: "INTENT mendeteksi dan mencatat activity kamu" },
              { step: "03", title: "Verify", desc: "Data diverifikasi langsung dari ARC RPC" },
              { step: "04", title: "Badge", desc: "Proof badge otomatis ditambahkan ke profil kamu" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4 shadow-lg">
                    <span className="font-mono text-sm font-black text-white">{item.step}</span>
                  </div>

                  {/* Title */}
                  <h5 className="font-black text-base text-[#1A1A1A] mb-2 uppercase">
                    {item.title}
                  </h5>

                  {/* Description */}
                  <p className="font-mono text-xs text-[#6B6B6B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Connector Arrow (not for last item) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-6 -right-3">
                    <div className="w-6 h-6 border-t-2 border-r-2 border-[#FF6B35] transform rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E5E0]" />
    </section>
  );
};

export default AboutProofBadge;

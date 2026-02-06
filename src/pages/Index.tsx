import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofBanner from "@/components/landing/SocialProofBanner";
import WhatYouDo from "@/components/landing/WhatYouDo";
import ProofRanking from "@/components/landing/ProofRanking";
import WhyVerificationMatters from "@/components/landing/WhyVerificationMatters";
import EcosystemTrust from "@/components/landing/EcosystemTrust";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofBanner />
        <WhatYouDo />
        <ProofRanking />
        <WhyVerificationMatters />
        <EcosystemTrust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

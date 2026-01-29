import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofBanner from "@/components/landing/SocialProofBanner";
import ProblemFraming from "@/components/landing/ProblemFraming";
import InfrastructureSection from "@/components/landing/InfrastructureSection";
import DailyArcActivity from "@/components/landing/DailyArcActivity";
import WhyDifferentSection from "@/components/landing/WhyDifferentSection";
import AboutProofBadge from "@/components/landing/AboutProofBadge";
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
        <ProblemFraming />
        <InfrastructureSection />
        <DailyArcActivity />
        <WhyDifferentSection />
        <AboutProofBadge />
        <EcosystemTrust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

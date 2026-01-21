import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofBanner from "@/components/landing/SocialProofBanner";
import ProblemFraming from "@/components/landing/ProblemFraming";
import InfrastructureSection from "@/components/landing/InfrastructureSection";
import VideoDemo from "@/components/landing/VideoDemo";
import SupportedDapps from "@/components/landing/SupportedDapps";
import OutputShowcase from "@/components/landing/OutputShowcase";
import TechnicalEdge from "@/components/landing/TechnicalEdge";
import ComparisonTable from "@/components/landing/ComparisonTable";
import Testimonials from "@/components/landing/Testimonials";
import FAQSection from "@/components/landing/FAQSection";
import EcosystemTrust from "@/components/landing/EcosystemTrust";
import NetworkExpansion from "@/components/landing/NetworkExpansion";
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
        <VideoDemo />
        <SupportedDapps />
        <OutputShowcase />
        <TechnicalEdge />
        <ComparisonTable />
        <Testimonials />
        <FAQSection />
        <EcosystemTrust />
        <NetworkExpansion />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

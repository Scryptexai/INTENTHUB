import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofBanner from "@/components/landing/SocialProofBanner";
import ProblemCarousel from "@/components/landing/ProblemCarousel";
import InfrastructureSection from "@/components/landing/InfrastructureSection";
import VideoDemo from "@/components/landing/VideoDemo";
import SupportedDapps from "@/components/landing/SupportedDapps";
import OutputShowcase from "@/components/landing/OutputShowcase";
import TechnicalEdge from "@/components/landing/TechnicalEdge";
import ComparisonTable from "@/components/landing/ComparisonTable";
import Testimonials from "@/components/landing/Testimonials";
import FAQSection from "@/components/landing/FAQSection";
import OurEcosystem from "@/components/landing/OurEcosystem";
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
        <ProblemCarousel />
        <InfrastructureSection />
        <VideoDemo />
        <SupportedDapps />
        <OutputShowcase />
        <TechnicalEdge />
        <ComparisonTable />
        <OurEcosystem />
        <Testimonials />
        <FAQSection />
        <NetworkExpansion />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { WhoIsItForSection } from "@/components/landing/WhoIsItForSection";
import { ProgramTracksSection } from "@/components/landing/ProgramTracksSection";
import { CommunityPreviewSection } from "@/components/landing/CommunityPreviewSection";
import { ExpertNetworkSection } from "@/components/landing/ExpertNetworkSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <WhoIsItForSection />
        <ProgramTracksSection />
        <CommunityPreviewSection />
        <ExpertNetworkSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}

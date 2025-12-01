import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { FeaturesGrid } from '@/components/landing/FeaturesGrid';
import { AnalyticsHighlight } from '@/components/landing/AnalyticsHighlight';
import { InterviewNotes } from '@/components/landing/InterviewNotes';
import { TargetAudience } from '@/components/landing/TargetAudience';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesGrid />
        <AnalyticsHighlight />
        <InterviewNotes />
        <TargetAudience />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

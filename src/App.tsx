import { useState } from 'react';
import { LiveWallpaper } from './components/LiveWallpaper';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { FeatureGrid } from './components/FeatureGrid';
import { InteractiveDashboard } from './components/InteractiveDashboard';
import { TargetUsers } from './components/TargetUsers';
import { ComparisonSection } from './components/ComparisonSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';

export function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const handleOpenWaitlist = () => setWaitlistOpen(true);
  const handleCloseWaitlist = () => setWaitlistOpen(false);

  return (
    <div className="min-h-screen bg-[#08080C] text-slate-100 selection:bg-orange-500 selection:text-white font-sans antialiased relative overflow-x-hidden">
      {/* Live Animated Canvas & Particle Wallpaper */}
      <LiveWallpaper />

      {/* Sticky Header Navbar */}
      <Navbar onOpenWaitlist={handleOpenWaitlist} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenWaitlist={handleOpenWaitlist} />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <FeatureGrid />
        <InteractiveDashboard />
        <TargetUsers />
        <ComparisonSection />
        <Testimonials />
        <FAQ />
        <FinalCTA onOpenWaitlist={handleOpenWaitlist} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Waitlist Modal */}
      <WaitlistModal isOpen={waitlistOpen} onClose={handleCloseWaitlist} />
    </div>
  );
}

export default App;

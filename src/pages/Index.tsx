import Preloader from '@/components/Preloader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CraftSection from '@/components/CraftSection';
import ArtisansSection from '@/components/ArtisansSection';
import CollectionSection from '@/components/CollectionSection';
import VerificationSection from '@/components/VerificationSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePreloader } from '@/hooks/usePreloader';

const Index = () => {
  // Initialize smooth scrolling
  useSmoothScroll();
  
  // Initialize scroll reveal animations
  useScrollReveal();
  
  // Initialize preloader animation
  usePreloader();

  return (
    <>
      <Preloader />

      <main className="bg-cream text-charcoal">
        <Navigation />
        <Hero />
        <CraftSection />
        <ArtisansSection />
        <CollectionSection />
        <VerificationSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;

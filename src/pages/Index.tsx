import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLenis } from '@/hooks/useLenis';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Loader from '@/components/layout/Loader';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import ClientLogos from '@/components/sections/ClientLogos';
import HowICanHelp from '@/components/sections/HowICanHelp';
import Marquee from '@/components/sections/Marquee';
import WhatWeBring from '@/components/sections/WhatWeBring';

import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  useLenis();

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navigation />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <ClientLogos />
          <HowICanHelp />
          <Marquee />
          <WhatWeBring />

          <FAQ />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

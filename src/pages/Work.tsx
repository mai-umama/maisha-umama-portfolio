import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Portfolio from '@/components/sections/Portfolio';
import { motion } from 'framer-motion';
import { useLenis } from '@/hooks/useLenis';

const Work = () => {
  useLenis();

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl mb-4">Our Work</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of projects that showcase our approach to design—where 
              strategy meets creativity to deliver results.
            </p>
          </motion.div>
        </div>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Work;

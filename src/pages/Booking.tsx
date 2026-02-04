import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { useLenis } from '@/hooks/useLenis';
import bookingIllustration from '@/assets/booking-illustration.jpg';

const Booking = () => {
  useLenis();

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.Cal) {
        // @ts-ignore
        window.Cal('init', { origin: 'https://cal.com' });
        // @ts-ignore
        window.Cal('inline', {
          elementOrSelector: '#cal-booking',
          calLink: 'maisha-umama-ckpkmj/30min',
          config: {
            layout: 'month_view',
            theme: 'light',
          },
        });
        // @ts-ignore
        window.Cal('ui', {
          styles: {
            branding: { brandColor: '#1f1f1f' },
          },
          hideEventTypeDetails: false,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <motion.h1
                  className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Let's
                  <br />
                  <span className="italic">connect.</span>
                </motion.h1>
                <motion.p
                  className="text-muted-foreground text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Schedule a brief chat or email us at{' '}
                  <a
                    href="mailto:umamau418@gmail.com"
                    className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                  >
                    umamau418@gmail.com
                  </a>
                </motion.p>
              </div>

              {/* Illustration */}
              <motion.div
                className="aspect-[4/3] max-w-md rounded-bento overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <img
                  src={bookingIllustration}
                  alt="Creative illustration"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Right Content - Cal.com Embed */}
            <motion.div
              className="bg-background rounded-bento-lg overflow-hidden min-h-[600px] shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                id="cal-booking"
                className="w-full h-full min-h-[600px]"
                style={{ minHeight: '600px' }}
              />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Booking;

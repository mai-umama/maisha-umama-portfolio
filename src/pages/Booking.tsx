import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { useLenis } from '@/hooks/useLenis';
import bookingIllustration from '@/assets/booking-illustration.jpg';

const Booking = () => {
  useLenis();

  // Your public Cal.com link - if this is incorrect, the embed will show a 404
  const calLink = "maisha-umama-ckpkmj/15min";

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-40 pb-20 px-6 bg-secondary/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <motion.h1
                  className="font-serif text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Let's
                  <br />
                  <span className="italic font-light">connect.</span>
                </motion.h1>
                <motion.p
                  className="text-muted-foreground text-xl max-w-md font-sans leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Schedule a brief chat or, email us at{' '}
                  <a
                    href="mailto:umamau418@gmail.com"
                    className="text-foreground font-medium underline underline-offset-8 hover:text-muted-foreground transition-colors"
                  >
                    umamau418@gmail.com
                  </a>
                </motion.p>
              </div>

              {/* Illustration and Backup Link */}
              <div className="space-y-8">
                <motion.div
                  className="max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <img
                    src={bookingIllustration}
                    alt="Creative illustration"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <a
                    href={`https://cal.com/${calLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-foreground text-background px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all">
                      Book directly on Cal.com
                    </button>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Cal.com Embed Card */}
            <motion.div
              className="bg-white rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-border/50 min-h-[700px] relative mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <iframe
                src={`https://cal.com/${calLink}?embed=true&theme=light`}
                title="Booking"
                className="w-full h-full min-h-[700px] border-0"
                style={{ width: '100%', height: '100%', minHeight: '700px' }}
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

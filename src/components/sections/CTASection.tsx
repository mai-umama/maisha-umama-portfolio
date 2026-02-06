import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-background section-glow">
      <div className="container mx-auto relative z-10">
        <motion.div
          className="bg-card rounded-bento-lg p-12 md:p-20 text-center shadow-green border border-primary/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Not sure where to start?
          </motion.h2>
          <motion.p
            className="text-foreground/60 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get in touch and let's figure out what you need! I offer a free call to discuss your project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/booking">
              <Button className="rounded-full px-10 py-7 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-green">
                Book a Free Call
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

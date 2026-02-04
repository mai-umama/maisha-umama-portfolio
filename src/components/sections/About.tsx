import { motion } from 'framer-motion';
import portraitImage from '@/assets/portrait.jpeg';

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[3/4] rounded-bento-lg overflow-hidden">
              <img
                src={portraitImage}
                alt="About Jules Studio"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-sage/40 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-bento bg-taupe/30 -z-10" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >

            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Inspired by creation, dedicated to harnessing the power of design.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a designer who believes in the transformative power of thoughtful design.
              Every project is an opportunity to create something meaningful—whether it's a
              brand identity that tells your unique story or a website that converts visitors
              into loyal customers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines strategy with creativity, ensuring every design decision
              serves a purpose while looking absolutely stunning.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

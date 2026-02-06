import { motion } from 'framer-motion';
import workspaceImage from '@/assets/workspace.jpg';

const helpItems = [
  {
    title: 'Creative Design + Development + A Web for You',
    description: 'Creating websites that not only look stunning but also function seamlessly.',
  },
  {
    title: 'Elevating your Digital Presence',
    description: 'Your website is more than just pixels—it\'s your digital identity.',
  },
  {
    title: 'Branding Packages',
    description: 'From concept to completion, I\'ll help you build a cohesive brand identity.',
  },
  {
    title: 'Custom Illustrations & Visual Assets',
    description: 'Designing unique artistic elements tailored to your brand\'s creative needs.',
  },
  {
    title: 'Commercial & Brand Photography',
    description: 'Professional visual storytelling for personal brands and small businesses.',
  },
];

const HowICanHelp = () => {
  return (
    <section className="py-20 px-6 bg-background section-glow">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              How I can help you...
            </h2>

            <div className="space-y-6">
              {helpItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="text-foreground/60 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Workspace Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="aspect-[4/3] rounded-bento-lg overflow-hidden shadow-green border border-primary/10">
              <img
                src={workspaceImage}
                alt="Creative workspace"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowICanHelp;

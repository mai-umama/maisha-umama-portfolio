import { motion } from 'framer-motion';

const categories = [
  'Non-Profits',
  'Small Businesses',
  'Startups',
  'Event Planners',
  'E-commerce Businesses',
  'Agencies',
  'Personal Brands',
];

const Marquee = () => {
  return (
    <section className="py-12 overflow-hidden bg-primary/5 rounded-bento-lg mx-6 border border-primary/10">
      <div className="relative">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {[...categories, ...categories, ...categories].map((cat, index) => (
            <span
              key={`${cat}-${index}`}
              className="text-foreground/80 text-lg md:text-xl font-medium flex items-center gap-4"
            >
              {cat}
              <span className="text-muted-foreground">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;

import { motion } from 'framer-motion';

const webDesignItems = [
  'Design Systems',
  'Website Design',
  'Landing Pages',
  'Brand Identities Online',
];

const brandDesignItems = [
  'Brand Strategy',
  'Logo Design + More',
  'Brand Identity',
  'Communication Design',
];

const WhatWeBring = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Card Container */}
        <motion.div
          className="bg-card rounded-bento-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.p
              className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Expertise
            </motion.p>
            <motion.h2
              className="font-serif text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              What we bring to the table...
            </motion.h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Web Design */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-serif text-2xl italic text-muted-foreground">
                Web Design
              </h3>
              <ul className="space-y-3">
                {webDesignItems.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <span className="text-muted-foreground">→</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Brand Design */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-serif text-2xl italic text-muted-foreground">
                Brand Design
              </h3>
              <ul className="space-y-3">
                {brandDesignItems.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <span className="text-muted-foreground">→</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBring;

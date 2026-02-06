import { motion } from 'framer-motion';

const clients = [
  'ADRIANO',
  'Conservation & Sustainability',
  'THE FLOATING PAGE GALLERY',
  'AVNA',
];

const ClientLogos = () => {
  return (
    <section className="py-16 px-6 border-y border-primary/10 bg-background">
      <div className="container mx-auto">
        <motion.p
          className="text-center text-sm text-primary/60 mb-10 uppercase tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Selected clients I've had the pleasure of working with, big and small
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              className="text-foreground/60 hover:text-foreground transition-colors cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="font-serif text-lg md:text-xl tracking-wide">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

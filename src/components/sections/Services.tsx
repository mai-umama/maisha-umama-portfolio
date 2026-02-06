import { motion } from 'framer-motion';
import { useFadeInOnScroll } from '@/hooks/useScrollAnimation';
import { Zap, Palette, TrendingUp } from 'lucide-react';
import projectLuxe from '@/assets/project-luxe.jpg';
import projectEssence from '@/assets/project-essence.jpg';
import workspaceImage from '@/assets/workspace.jpg';

const services = [
  {
    icon: Zap,
    title: 'Ready for your future',
    description: 'Landing pages that convert and improve your user experience or identity and visuals.',
    image: workspaceImage,
  },
  {
    icon: Palette,
    title: 'Cohesive Design',
    description: 'Making sure all elements work together. Developing a cohesive visual language across all work.',
    image: projectLuxe,
  },
  {
    icon: TrendingUp,
    title: 'Streamlining Collabs',
    description: 'Making it clear. Helping you to understand what you can do. Unboxing the power of strategic identity.',
    image: projectEssence,
  },
];

const Services = () => {
  const ref = useFadeInOnScroll();

  return (
    <section id="services" className="py-20 px-6 bg-background section-glow" ref={ref}>
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-primary/60 text-sm uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Promise
          </motion.p>
          <motion.h2
            className="font-serif text-4xl md:text-5xl text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Results driven, budget smart
          </motion.h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-card rounded-bento p-8 transition-all shadow-green hover:shadow-2xl hover:-translate-y-1 border border-primary/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="w-7 h-7" />
              </div>

              {/* Service Image */}
              <div className="w-full h-32 rounded-2xl overflow-hidden mb-6 shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="font-serif text-xl mb-3 text-foreground">{service.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

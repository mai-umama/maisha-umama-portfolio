import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectFocusMate from '@/assets/focusmate.png';
import projectBlenderDonut from '@/assets/blender-donut.png';
import projectCGPACalculator from '@/assets/cgpa-calculator.png';
// Using illustration-7.jpg as thumbnail for illustration card
import projectIllustration from '@/assets/creative/illustration-7.jpg';
import projectPhotography from '@/assets/creative/photography-1.jpg';

const projects = [
  {
    title: 'FocusMate',
    category: 'Productivity Tool',
    image: projectFocusMate,
    link: 'https://focus-management-project.vercel.app/',
    isExternal: true,
    layout: 'boxed' as const,
    colSpan: 'md:col-span-7',
    bgColor: 'bg-[#F2F0E7]',
  },
  {
    title: 'Blender Donut',
    category: '3D Modeling & Rendering',
    image: projectBlenderDonut,
    link: 'https://github.com/mai-umama/blender-donut',
    isExternal: true,
    layout: 'full' as const,
    colSpan: 'md:col-span-5',
  },
  {
    title: 'CGPA Calculator',
    category: 'Educational Tool',
    image: projectCGPACalculator,
    link: 'https://cgpa-calculator-f6dbdp4kpjhejercxwpdjr.streamlit.app/',
    isExternal: true,
    layout: 'full' as const,
    colSpan: 'md:col-span-5',
  },
  {
    title: 'Illustration & Sketch Art',
    category: 'Hand-drawn and digital visual artwork',
    image: projectIllustration,
    link: '/work/illustration',
    isExternal: false,
    layout: 'boxed' as const,
    colSpan: 'md:col-span-7',
    bgColor: 'bg-[#F2F0E7]',
    objectPosition: 'bottom 20% right 10%',
  },
  {
    title: 'Photography',
    category: 'Creativity through lens',
    image: projectPhotography,
    link: '/work/photography',
    isExternal: false,
    layout: 'full' as const,
    colSpan: 'md:col-span-12',
    objectPosition: 'center',
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 px-6 bg-background section-glow">
      <div className="container mx-auto">
        <div className="text-center mb-24 relative z-10">
          <motion.h2
            className="font-serif text-5xl md:text-7xl mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Selected work...
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
          {projects.map((project, index) => {
            const CardWrapper = project.isExternal ? 'a' : Link;
            const extraProps = project.isExternal
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : { to: project.link };

            const isBoxed = project.layout === 'boxed';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${project.colSpan} group`}
              >
                <CardWrapper
                  {...(extraProps as any)}
                  className={`block relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 h-[400px] md:h-[500px] shadow-green hover:shadow-2xl ${isBoxed ? (project.bgColor || 'bg-secondary/30') : 'bg-secondary/20'
                    }`}
                >
                  {/* Image Container */}
                  <div className={`absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02] ${isBoxed ? 'p-12 md:p-16 flex items-center justify-center' : ''
                    }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${isBoxed ? 'rounded-2xl shadow-green' : ''
                        }`}
                      style={{ objectPosition: (project as any).objectPosition || 'center' }}
                    />
                  </div>

                  {/* Overlays */}
                  {!isBoxed && (
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  )}
                  {isBoxed && (
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  )}

                  {/* Content */}
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                    <div className="flex justify-between items-end">
                      <div className="max-w-[80%]">
                        <motion.h3
                          className={`font-serif text-3xl md:text-5xl mb-2 uppercase leading-tight ${isBoxed ? 'text-foreground' : 'text-white'
                            }`}
                        >
                          {project.title}
                        </motion.h3>
                        <span className={`text-xs md:text-sm tracking-widest uppercase font-sans ${isBoxed ? 'text-foreground/60' : 'text-white/70'
                          }`}>
                          {project.category}
                        </span>
                      </div>
                      <div className={`flex flex-col items-end gap-2 overflow-hidden ${isBoxed ? 'text-foreground' : 'text-white'
                        }`}>
                        <span className="text-sm font-medium transition-transform duration-300 translate-x-12 group-hover:translate-x-0">
                          View Project
                        </span>
                        <div className={`h-[1px] transition-all duration-300 w-8 group-hover:w-16 ${isBoxed ? 'bg-primary' : 'bg-primary'
                          }`} />
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;




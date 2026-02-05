import { motion } from 'framer-motion';
import projectFocusMate from '@/assets/focusmate.png';
import projectBlenderDonut from '@/assets/blender-donut.png';
import projectCGPACalculator from '@/assets/cgpa-calculator.png';

const projects = [
  {
    title: 'FocusMate',
    category: 'Productivity Tool',
    image: projectFocusMate,
    link: 'https://focus-management-project.vercel.app/',
  },
  {
    title: 'Blender Donut',
    category: '3D Modeling & Rendering',
    image: projectBlenderDonut,
    link: 'https://github.com/mai-umama/blender-donut',
  },
  {
    title: 'CGPA Calculator',
    category: 'Educational Tool',
    image: projectCGPACalculator,
    link: 'https://cgpa-calculator-f6dbdp4kpjhejercxwpdjr.streamlit.app/',
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="font-serif text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Selected work...
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Loop through projects */}
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-bento-lg md:col-span-2 aspect-[2/1] overflow-hidden cursor-pointer group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div />
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-serif text-4xl md:text-5xl text-background mb-2 uppercase">
                      {project.title}
                    </h3>
                    <span className="text-sm text-background/80">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-sm text-background">View Project →</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;




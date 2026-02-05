import { motion } from 'framer-motion';
import { PenTool, Camera, Layout, Lightbulb, Users, CheckCircle } from 'lucide-react';

const strengths = [
  {
    icon: PenTool,
    title: 'Creative Illustration & Sketching',
  },
  {
    icon: Camera,
    title: 'Photography & Visual Storytelling',
  },
  {
    icon: Layout,
    title: 'UI/UX & Web Design',
  },
  {
    icon: Lightbulb,
    title: 'Creative Problem Solving',
  },
  {
    icon: Users,
    title: 'Leadership & Team Collaboration',
  },
  {
    icon: CheckCircle,
    title: 'Detail-Oriented Execution',
  },
];

const WhatWeBring = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Card Container */}
        <motion.div
          className="bg-card rounded-[3rem] p-8 md:p-16 border border-border/50 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mb-32 blur-3xl" />

          {/* Header */}
          <div className="text-center mb-16 relative z-10">
            <motion.p
              className="text-muted-foreground text-xs uppercase tracking-[0.3em] font-sans mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Professional Values
            </motion.p>
            <motion.h2
              className="font-serif text-5xl md:text-6xl text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              What I Bring to the Table
            </motion.h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {strengths.map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-8 rounded-[2rem] bg-background/50 border border-border/40 hover:border-foreground/20 hover:bg-background transition-all duration-500 shadow-sm hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground/90 leading-tight">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBring;

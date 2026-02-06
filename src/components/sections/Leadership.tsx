import { motion } from 'framer-motion';
import { Award, Shield, Users, Target } from 'lucide-react';
import scoutPhoto from '@/assets/leadership-photo.jpg';

const Leadership = () => {
    return (
        <section className="py-24 px-6 bg-background section-glow">
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-xs font-sans uppercase tracking-[0.2em] text-primary/60 mb-4 block">
                                Extracurricular Strengths
                            </span>
                            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
                                Leadership & <br />Achievements
                            </h2>
                        </div>

                        <p className="text-foreground/70 text-lg leading-relaxed max-w-xl">
                            Beyond design and development, I am an active Scout with two national-level awards.
                            Scouting has shaped my leadership, teamwork, resilience, and problem-solving skills —
                            qualities I bring into every project and collaboration.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Award, label: 'National Awards', value: '2 Honors' },
                                { icon: Shield, label: 'Experience', value: 'Active Scout' },
                                { icon: Users, label: 'Teamwork', value: 'Core Skill' },
                                { icon: Target, label: 'Resilience', value: 'Tested' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shadow-sm">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-primary/60 uppercase tracking-widest">{item.label}</p>
                                        <p className="font-medium text-foreground">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] md:aspect-square bg-card rounded-[3rem] overflow-hidden shadow-green border border-primary/10 relative group">
                            {/* Image background */}
                            <img
                                src={scoutPhoto}
                                alt="Leadership and Coding"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Glass Content */}
                            <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/50 transition-colors duration-500 flex flex-col justify-center items-center text-center p-8 text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2rem] max-w-sm"
                                >
                                    <Award className="w-12 h-12 text-white/40 mb-4 mx-auto" />
                                    <h3 className="font-serif text-3xl mb-3 italic text-white">
                                        “Be Prepared”
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        A commitment to excellence, preparation, and community service through national-level scouting achievements.
                                    </p>

                                    <div className="mt-6 flex justify-center gap-3">
                                        <div className="px-3 py-1.5 rounded-full border border-white/20 text-[10px] uppercase tracking-widest text-white/90 bg-white/5">
                                            Leadership
                                        </div>
                                        <div className="px-3 py-1.5 rounded-full border border-white/20 text-[10px] uppercase tracking-widest text-white/90 bg-white/5">
                                            Service
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Background Accent */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/5 -z-10 rounded-[3rem]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Leadership;

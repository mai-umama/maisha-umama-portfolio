import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/profile-photo-new.jpg';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden bg-background pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content - Text */}
                    <motion.div
                        className="space-y-8 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
                                CSE Student & Developer
                            </span>
                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                                Hi, I'm
                                <br />
                                <span className="italic">Maisha Umama.</span>
                            </h1>
                        </div>

                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
                            <p>
                                I am a CSE student studied at Mymensingh Engineering College.
                            </p>
                            <p>
                                I know <span className="text-foreground font-medium">Python</span> and <span className="text-foreground font-medium">C language</span>, and have a basic knowledge on <span className="text-foreground font-medium">Blender</span> and <span className="text-foreground font-medium">OpenCV</span> library of Python.
                            </p>
                            <p>
                                Currently learning <span className="text-foreground font-medium">C++</span> and <span className="text-foreground font-medium">Machine Learning</span>, also focusing on Problem Solving.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Link to="/work">
                                <Button size="lg" className="rounded-full px-8 py-6 text-base w-full sm:w-auto">
                                    View My Work
                                </Button>
                            </Link>
                            <Link to="/booking">
                                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base w-full sm:w-auto">
                                    Contact Me
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        className="relative order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50, scale: 1.05 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.2
                        }}
                    >
                        <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10" />
                            <img
                                src={profileImage}
                                alt="Maisha Umama"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative background elements */}
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/30 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

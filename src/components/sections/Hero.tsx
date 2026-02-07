import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/profile-photo-new.jpg';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center overflow-hidden bg-background pt-32 pb-20 section-glow">
            {/* Atmospheric Sage Green Color Wash */}
            <div className="absolute top-0 left-0 w-[55%] h-full bg-gradient-to-r from-sage/30 via-sage/10 to-transparent pointer-events-none" />
            <div className="absolute top-[10%] left-[-5%] w-[65%] h-[75%] bg-sage/20 blur-[130px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content - Text */}
                    <motion.div
                        className="space-y-8 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div>
                            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.25em] mb-6 border border-primary/20 shadow-sm">
                                CSE Student & Developer
                            </span>
                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-foreground">
                                Hi, I'm
                                <br />
                                <span className="italic font-light">Maisha Umama.</span>
                            </h1>
                        </div>

                        <div className="space-y-5 text-foreground/80 text-lg leading-relaxed max-w-xl font-sans font-light">
                            <p>
                                I am a CSE student studying at Mymensingh Engineering College.
                            </p>
                            <p>
                                I know <span className="text-foreground font-semibold">Python</span> and <span className="text-foreground font-semibold">C language</span>, and have a basic knowledge on <span className="text-foreground font-semibold">Blender</span> and <span className="text-foreground font-semibold">OpenCV</span> library of Python.
                            </p>
                            <p>
                                Currently learning <span className="text-foreground font-semibold">C++</span> and <span className="text-foreground font-semibold">Machine Learning</span>, also focusing on Problem Solving.
                            </p>
                            <p>
                                I'm also passionate about visual storytelling through illustration, sketching, and photography, which helps me bring a more artistic and human touch to digital experiences.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
                            <Link to="/work">
                                <Button size="lg" className="rounded-full px-10 py-7 text-base w-full sm:w-auto bg-primary hover:bg-primary/90 transition-all shadow-green text-primary-foreground">
                                    View My Work
                                </Button>
                            </Link>
                            <Link to="/booking">
                                <Button size="lg" variant="outline" className="rounded-full px-10 py-7 text-base w-full sm:w-auto border-primary/20 text-primary hover:bg-primary/10 transition-colors">
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
                        <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-green border border-primary/15">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 mix-blend-multiply" />
                            <img
                                src={profileImage}
                                alt="Maisha Umama"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

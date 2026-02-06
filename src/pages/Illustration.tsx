import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { useLenis } from '@/hooks/useLenis';

// Import images
import illu1 from '@/assets/creative/illustration-1.jpg';
import illu2 from '@/assets/creative/illustration-2.jpg';
import illu3 from '@/assets/creative/illustration-3.jpg';
import illu4 from '@/assets/creative/illustration-4.jpg';
import illu5 from '@/assets/creative/illustration-5.jpg';
import illu6 from '@/assets/creative/illustration-6.jpg';
import illu7 from '@/assets/creative/illustration-7.jpg';

const illustrations = [
    { id: 1, src: illu1, alt: 'Hand-drawn sketch 1' },
    { id: 2, src: illu2, alt: 'Colorful painting + Sketching 1' },
    { id: 3, src: illu3, alt: 'Colorful painting + Sketching 2' },
    { id: 4, src: illu4, alt: 'Hand-drawn sketch 2' },
    { id: 5, src: illu5, alt: 'Hand-drawn sketch 3' },
    { id: 6, src: illu6, alt: 'Calligraphy Painting' },
    { id: 7, src: illu7, alt: 'Creative Sketch Study' },
];

const Illustration = () => {
    useLenis();

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-32 pb-20 bg-background section-glow">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-serif text-5xl md:text-6xl mb-4 text-foreground">Illustration & Sketch Art</h1>
                        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                            Hand-drawn and digital visual artwork designed to bring an artistic and professional touch to branding and creative concepts.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {illustrations.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="rounded-2xl overflow-hidden aspect-[4/5] bg-card group shadow-green hover:shadow-2xl border border-primary/5"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Illustration;

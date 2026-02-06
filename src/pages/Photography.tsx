import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { useLenis } from '@/hooks/useLenis';

// Import images
import photo1 from '@/assets/creative/photography-1.jpg';
import photo2 from '@/assets/creative/photography-2.jpg';
import photo3 from '@/assets/creative/photography-3.jpg';
import photo4 from '@/assets/creative/photography-4.jpg';
import photo5 from '@/assets/creative/photography-5.jpg';
import photo6 from '@/assets/creative/photography-6.jpg';

// Photography list (total 6 requested)
const photography = [
    { id: 1, src: photo1, alt: 'River Sunset Photography' },
    { id: 2, src: photo2, alt: 'Urban Trees Photography' },
    { id: 3, src: photo3, alt: 'Birds on Wires Photography' },
    { id: 4, src: photo4, alt: 'Bird on Tree Photography' },
    { id: 5, src: photo5, alt: 'Floral Detail Photography' },
    { id: 6, src: photo6, alt: 'Rainy Window Composition' },
];

const Photography = () => {
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
                        <h1 className="font-serif text-5xl md:text-6xl mb-4 text-foreground">Photography</h1>
                        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                            Professional product, nature, and lifestyle photography captured with an eye for composition, lighting, and visual storytelling.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {photography.map((item, index) => (
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

export default Photography;

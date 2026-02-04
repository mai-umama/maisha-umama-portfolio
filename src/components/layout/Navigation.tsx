import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: 'Services', path: '/#services' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={cn(
                    "fixed top-6 left-0 right-0 mx-auto z-50 w-[95%] max-w-5xl transition-all duration-300",
                    isScrolled ? "top-4 scale-[0.98]" : "top-6"
                )}
            >
                <div className={cn(
                    "relative flex items-center justify-between md:grid md:grid-cols-3 px-6 py-3 rounded-full transition-all duration-300",
                    "bg-white/80 backdrop-blur-md border border-white/20 shadow-sm dark:bg-black/80 dark:border-white/10",
                    isScrolled ? "shadow-md bg-white/90 dark:bg-black/90" : ""
                )}>
                    {/* Logo */}
                    <Link to="/" className="font-serif text-xl font-bold tracking-tight z-50 relative md:justify-self-start">
                        maisha.umama
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 md:justify-self-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => {
                                    if (link.path.startsWith('/#')) {
                                        // Handle hash scroll if needed manually, though basic Link works
                                        const element = document.querySelector(link.path.substring(1));
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4 md:justify-self-end">
                        <Link to="/booking" className="hidden md:block">
                            <Button size="sm" className="rounded-full px-6">
                                Book Call
                            </Button>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-foreground z-50 relative"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden pt-28 px-6"
                    >
                        <nav className="flex flex-col gap-6 items-center text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-2xl font-serif text-foreground/80 hover:text-foreground"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/booking" className="mt-4">
                                <Button size="lg" className="rounded-full w-full px-12">
                                    Book a Call
                                </Button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;

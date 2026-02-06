import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import footerPortrait from '@/assets/footer-portrait.jpg';

const Footer = () => {
  const workLinks = [
    { name: 'Adriano', href: '#' },
    { name: 'Horizon Interiors', href: '#' },
    { name: 'Urban Wheels', href: '#' },
    { name: 'Conservation', href: '#' },
  ];

  const connectLinks = [
    { name: 'Email', href: 'mailto:umamau418@gmail.com' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100088052134559' }, // Assuming user profile link, or just name usage if URL not known. Using generic or search for now if not provided, but text is key. I'll use the profile name as link text and href '#' or proper FB search if possible. User gave name "maisha osman umama". I will make the link specific if possible or just use name text. Best to make href a search or placeholder.
    { name: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-dark text-primary-foreground rounded-t-[3rem] mt-20">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Section - Photo & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 items-center sm:items-start"
          >
            {/* Footer Portrait */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-full overflow-hidden border-2 border-primary/20">
              <img
                src={footerPortrait}
                alt="Maisha Umama"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center sm:text-left">
              <h2 className="font-serif text-3xl lg:text-4xl mb-6">
                Let's create something
                <br />
                <span className="italic">extraordinary.</span>
              </h2>
              <Link to="/booking">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-dark bg-background border-background hover:bg-transparent hover:text-background transition-all"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-12"
          >
            <div>
              <h3 className="font-serif text-xl mb-6">Work</h3>
              <ul className="space-y-3">
                {workLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-6">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:umamau418@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Maisha Osman Umama (Facebook)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col items-center gap-6 text-sm text-primary-foreground/60">
          <p className="text-xl font-serif italic text-primary-foreground/90 tracking-wide">
            Designer, Developer & Visual Creative
          </p>
          <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4">
            <p>© 2026 Maisha Osman Umama. All rights reserved.</p>
            <p>
              Designed with ♥ by{' '}
              <a href="#" className="text-primary-foreground hover:underline">
                Maisha Osman Umama
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

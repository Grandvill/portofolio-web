import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-brutal' : 'bg-transparent'}`} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div className="font-mono text-xl font-black" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="text-primary-500">Z</span>
            <span className="text-accent-500">A</span>
            <span className="text-neon-500">H</span>
            <span className="text-primary-500">I</span>
            <span className="text-accent-500">D</span>
            <span className="text-neon-500">A</span>
            <span className="text-primary-500 mr-2">N</span>

            <span className="text-accent-500">A</span>
            <span className="text-neon-500">R</span>
            <span className="text-primary-500">D</span>
            <span className="text-accent-500">H</span>
            <span className="text-neon-500">I</span>
            <span className="text-primary-500">A</span>
            <span className="text-accent-500">N</span>
            <span className="text-neon-500">S</span>
            <span className="text-primary-500">Y</span>
            <span className="text-accent-500">A</span>
            <span className="text-neon-500">H</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-4 py-2 font-mono font-bold border-2 border-black dark:border-white hover:bg-primary-400 hover:text-white transition-all duration-200"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button onClick={toggleTheme} className="p-2 border-2 border-black dark:border-white hover:bg-accent-400 hover:text-white transition-all duration-200" whileHover={{ scale: 1.1, rotate: 180 }} whileTap={{ scale: 0.9 }}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button className="md:hidden p-2 border-2 border-black dark:border-white hover:bg-primary-400 hover:text-white transition-all duration-200" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.9 }}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden bg-white dark:bg-gray-900 border-2 border-black dark:border-white shadow-brutal-lg mt-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 font-mono font-bold hover:bg-primary-400 hover:text-white transition-all duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

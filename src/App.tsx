import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {});

  return (
    <AnimatePresence>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`} />
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white" />
      <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>

      <Footer />

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary-500 text-white border-4 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200 z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span className="text-2xl">🚀</span>
      </motion.button>
    </AnimatePresence>
  );
}

export default App;

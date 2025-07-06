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
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}

export default App;

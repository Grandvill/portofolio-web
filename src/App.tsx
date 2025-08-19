import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import ProjectDetail from './components/projectDetail/ProjectDetail';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary-400 flex items-center justify-center">
        <motion.div className="text-center" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <motion.div
            className="w-32 h-32 bg-black border-4 border-white shadow-brutal-xl mx-auto mb-8 flex items-center justify-center"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <span className="text-4xl text-white">💻</span>
          </motion.div>

          <motion.h1 className="text-4xl font-black text-black mb-4" animate={{ y: [0, -10, 0] }} transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}>
            Loading Portfolio...
          </motion.h1>

          <motion.div className="w-64 h-2 bg-black border-2 border-white mx-auto overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <motion.div className="h-full bg-white" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5, ease: 'easeInOut' }} />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AnimatePresence>
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
          <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
            <Header isDark={isDark} toggleTheme={toggleTheme} />

            <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Routes>
                {/* Home page */}
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <About />
                      <Skills />
                      <Projects />
                      <Certificates />
                      <Contact />
                    </>
                  }
                />

                {/* Dynamic project detail page */}
                <Route path="/project/:id" element={<ProjectDetail />} />
              </Routes>
            </motion.main>

            <Footer />

            {/* Floating Button */}
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
          </div>
        </div>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;

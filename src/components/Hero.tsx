import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Grandvill', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zahidan-ardhiansyah/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:zahidanardhiansyah@gmail.com', label: 'Email' },
  ];

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="space-y-4">
              <motion.div className="inline-block px-4 py-2 bg-neon-400 text-black font-mono font-bold border-2 border-black shadow-brutal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                FRONTEND ENGINEER • UI/UX DESIGNER
              </motion.div>

              <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                The One Who <span className="text-primary-500 inline-block animate-wiggle">Codes,</span>
                <br />
                <span className="text-accent-500">Creates,</span> <span className="text-neon-500">And Conquers.</span>
              </motion.h1>

              <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                Frontend Developer & UI/UX Designer crafting sleek, functional experiences. Passionate about clean code, bold design, and exploring the fun side of tech. I don't just follow the future—I help shape it.
              </motion.p>

              <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <motion.span className="flex items-center gap-2 font-mono text-sm" whileHover={{ scale: 1.05 }}>
                  <Mail size={16} />
                  zahidanardhiansyah@gmail.com
                </motion.span>
                <motion.span className="flex items-center gap-2 font-mono text-sm" whileHover={{ scale: 1.05 }}>
                  📍 Indonesia
                </motion.span>
              </motion.div>
            </div>

            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <motion.button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-primary-500 text-white font-mono font-bold border-2 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>

              <motion.button
                className="px-6 py-3 bg-white dark:bg-gray-800 text-black dark:text-white font-mono font-bold border-2 border-black dark:border-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download CV
              </motion.button>
            </motion.div>

            <motion.div className="flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-accent-500 text-white border-2 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div className="flex justify-center lg:justify-end" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <motion.div className="relative" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-accent-500 border-4 border-black shadow-brutal-xl transform rotate-3 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-300 to-pink-300 flex items-center justify-center">
                  <motion.div className="text-8xl" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                    👨‍💻
                  </motion.div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-neon-400 border-2 border-black shadow-brutal flex items-center justify-center text-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                ⚡
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-500 border-2 border-black shadow-brutal flex items-center justify-center text-xl text-white"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                🚀
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

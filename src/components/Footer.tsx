import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Grandvill', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zahidan-ardhiansyah/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:zahidan23@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Name */}
          <motion.div className="text-center md:text-left" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-black mb-2">
              <span className="text-accent-400">ZAHIDAN ARDHIANSYAH</span>
            </h3>
            <p className="font-mono text-sm text-gray-400">Full Stack Web Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex justify-center gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 border-2 border-gray-600 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div className="text-center md:text-right" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="font-mono text-sm text-gray-400 flex items-center justify-center md:justify-end gap-1">
              Made with <Heart size={16} className="text-red-500 animate-pulse" />© {currentYear}
            </p>
            <p className="font-mono text-xs text-gray-500 mt-1">Built with React, TypeScript & Framer Motion</p>
          </motion.div>
        </div>

        {/* Fun Quote */}
        <motion.div className="mt-8 pt-8 border-t border-gray-800 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <motion.p
            className="font-mono text-lg font-bold text-primary-400"
            animate={{
              textShadow: ['0 0 0px #f384fc', '0 0 10px #f384fc', '0 0 0px #f384fc'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            "life sometimes needs a little surprise" ✨
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}

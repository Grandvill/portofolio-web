import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Users, Zap } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.',
      color: 'bg-primary-400',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
      color: 'bg-accent-400',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional results.',
      color: 'bg-neon-400',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and user experience.',
      color: 'bg-purple-400',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div ref={ref} className="space-y-8" initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <div>
              <motion.h2 className="text-4xl sm:text-5xl font-black mb-6" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
                About <span className="text-primary-500">The</span> <span className="text-accent-500">Developer</span>
              </motion.h2>

              <motion.div className="w-24 h-1 bg-neon-400 mb-8" initial={{ width: 0 }} animate={inView ? { width: 96 } : {}} transition={{ duration: 0.8, delay: 0.4 }} />

              <motion.div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
                <p>
                  Hi there! I'm <strong className="text-primary-500">Zahidan Ardhiansyah</strong>, a passionate Frontend Developer and UI/UX Designer with over 2 years of experience crafting digital experiences that make a difference.
                </p>

                <p>
                  I specialize in <strong className="text-accent-500">React.js</strong>,<strong className="text-neon-500"> Next.js</strong>, and modern web technologies. My journey in tech started with curiosity about how websites work, and
                  it evolved into a passion for creating seamless, beautiful, and functional web applications.
                </p>

                <p>When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or learning the latest in web development. I believe in continuous learning and always staying ahead of the curve.</p>
              </motion.div>
            </div>

            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.7 }}>
              <div className="px-4 py-2 bg-primary-100 text-primary-800 font-mono font-bold border-2 border-primary-800">🎓 Bachelor's in Information Technology</div>
              <div className="px-4 py-2 bg-accent-100 text-accent-800 font-mono font-bold border-2 border-accent-800">📍 Based in Indonesia</div>
              <div className="px-4 py-2 bg-neon-100 text-neon-800 font-mono font-bold border-2 border-neon-800">💼 Available for Work</div>
            </motion.div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="bg-white dark:bg-gray-800 border-4 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-2 hover:translate-y-2 transition-all duration-300 p-6">
                  <div className={`${feature.color} w-16 h-16 border-2 border-black shadow-brutal flex items-center justify-center mb-4 group-hover:animate-bounce`}>
                    <feature.icon size={28} className="text-black" />
                  </div>

                  <h3 className="text-xl font-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div className="mt-20" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }}>
          <h3 className="text-3xl font-black text-center mb-12">
            My <span className="text-primary-500">Journey</span>
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: '2024',
                  title: 'Frontend Developer',
                  company: 'Freelance Projects',
                  description: 'Building modern web applications with React, Next.js, and TypeScript for various clients.',
                  color: 'bg-primary-400',
                },
                {
                  year: '2023',
                  title: 'UI/UX Designer & Developer',
                  company: 'Personal Projects',
                  description: 'Created multiple web applications focusing on user experience and modern design principles.',
                  color: 'bg-accent-400',
                },
                {
                  year: '2022',
                  title: 'Started Web Development Journey',
                  company: 'Self-taught',
                  description: 'Began learning web development through online courses and hands-on projects.',
                  color: 'bg-neon-400',
                },
              ].map((item, index) => (
                <motion.div key={item.year} className="flex gap-6 items-start" initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 1 + index * 0.2 }}>
                  <div className={`${item.color} w-16 h-16 border-4 border-black shadow-brutal flex items-center justify-center flex-shrink-0`}>
                    <span className="font-black text-black text-sm">{item.year}</span>
                  </div>

                  <div className="bg-white dark:bg-gray-800 border-2 border-black shadow-brutal p-6 flex-1">
                    <h4 className="font-black text-lg mb-1">{item.title}</h4>
                    <p className="text-primary-500 font-mono font-bold text-sm mb-3">{item.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

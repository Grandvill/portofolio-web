import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      name: 'React.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      color: 'bg-cyan-400',
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      color: 'bg-gray-800',
    },
    {
      name: 'TypeScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      color: 'bg-blue-500',
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      color: 'bg-green-500',
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      color: 'bg-teal-400',
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      color: 'bg-yellow-400',
    },
    {
      name: 'HTML5',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      color: 'bg-orange-500',
    },
    {
      name: 'CSS3',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      color: 'bg-blue-400',
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      color: 'bg-red-500',
    },
    {
      name: 'Figma',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      color: 'bg-purple-500',
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      color: 'bg-indigo-500',
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      color: 'bg-green-600',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div ref={ref} className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <motion.h2 className="text-4xl sm:text-5xl font-black mb-4" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            My <span className="text-primary-500">Tech</span> <span className="text-accent-500">Arsenal</span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-neon-400 mx-auto" initial={{ width: 0 }} animate={inView ? { width: 96 } : {}} transition={{ duration: 0.8, delay: 0.4 }} />
        </motion.div>

        <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div
                  className={`w-20 h-20 ${skill.color} border-4 border-black shadow-brutal flex items-center justify-center transform transition-all duration-300 group-hover:shadow-brutal-lg group-hover:translate-x-1 group-hover:translate-y-1`}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 object-contain filter group-hover:brightness-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling!.textContent = skill.name.slice(0, 2);
                    }}
                  />
                  <span className="text-white font-bold text-sm hidden"></span>
                </div>

                {/* Tooltip */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded font-mono text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {skill.name}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full border-4 border-transparent border-b-black"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun stats */}
        <motion.div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }}>
          {[
            { label: 'Years of Experience', value: '2+', icon: '🎯' },
            { label: 'Projects Completed', value: '10+', icon: '🚀' },
            { label: 'Technologies Mastered', value: '15+', icon: '⚡' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white dark:bg-gray-800 border-4 border-black shadow-brutal transform hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              whileHover={{ scale: 1.05, rotate: -1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-primary-500 mb-2">{stat.value}</div>
              <div className="font-mono font-bold text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

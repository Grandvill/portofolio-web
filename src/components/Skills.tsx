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
      color: 'bg-cyan-600',
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
      name: 'Vue.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/vuejs/vuejs-original.svg',
      color: 'bg-green-800',
    },
    {
      name: 'Nuxt.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg',
      color: 'bg-gray-800',
    },
    {
      name: 'Node js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      color: 'bg-green-500',
    },
    {
      name: 'Express js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
      color: 'bg-gray-600',
    },
    {
      name: 'Hapi js',
      logo: 'images/skills/hapi.svg',
      color: 'bg-green-200',
    },
    {
      name: 'AJAX',
      logo: 'images/skills/AJAX.svg',
      color: 'bg-blue-300',
    },
    {
      name: 'JQuery',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg',
      color: 'bg-blue-400',
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      color: 'bg-yellow-400',
    },
    {
      name: 'PHP',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
      color: 'bg-purple-400',
    },
    {
      name: 'Laravel',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
      color: 'bg-red-800',
    },
    {
      name: 'CodeIgniter',
      logo: 'images/skills/codeigniter.svg',
      color: 'bg-orange-400',
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
      name: 'Bootstrap',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      color: 'bg-indigo-600',
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      color: 'bg-teal-600',
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      color: 'bg-red-700',
    },
    {
      name: 'Gitlab',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
      color: 'bg-orange-400',
    },
    {
      name: 'Github',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      color: 'bg-gray-500',
    },
    {
      name: 'Postman',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
      color: 'bg-orange-500',
    },
    {
      name: 'mySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      color: 'bg-blue-400',
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      color: 'bg-indigo-500',
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      color: 'bg-green-800',
    },
    {
      name: 'Supabase',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
      color: 'bg-green-800',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div ref={ref} className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <motion.h2 className="text-4xl sm:text-5xl font-black mb-4" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <span className="text-accent-500">Skills</span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-neon-400 mx-auto" initial={{ width: 0 }} animate={inView ? { width: 96 } : {}} transition={{ duration: 0.8, delay: 0.4 }} />
        </motion.div>

        <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-6" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
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
                  className="absolute -top-2 -right-2 transform translate-x-1/2 -translate-y-full bg-black text-white px-3 py-1 rounded font-mono text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {skill.name}
                  <div className="absolute bottom-0 left-0 transform -translate-x-1 translate-y-1 border-4 border-transparent border-t-black border-r-black"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

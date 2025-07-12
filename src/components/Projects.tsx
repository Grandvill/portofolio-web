import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Wild Oasis Resort',
      description: 'A comprehensive hotel management system with booking functionality, room management, and guest services. Built with React and modern web technologies.',
      tech: ['React', 'JavaScript', 'CSS', 'API Integration'],
      liveUrl: 'https://wildoasisretreat.netlify.app/',
      githubUrl: 'https://github.com/Grandvill/the-wild-oasis',
      color: 'bg-primary-400',
      featured: true,
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: 'wild-oasis',
    },
    {
      title: 'Movie Finder',
      description: 'An interactive movie discovery platform with search functionality, detailed movie information, and user-friendly interface for movie enthusiasts.',
      tech: ['React', 'JavaScript', 'Movie API', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Grandvill/movie-finder',
      color: 'bg-accent-400',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: 'movie-finder',
    },
    {
      title: 'Big Forum 3.0',
      description: 'A modern discussion forum platform with real-time messaging, user authentication, and community features for enhanced user engagement.',
      tech: ['React', 'Node.js', 'Database', 'Real-time'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Grandvill/big-forum-3.0',
      color: 'bg-neon-400',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: 'big-forum',
    },
    {
      title: 'Portfolio Website',
      description: 'This very website! A neobrutalism-inspired portfolio showcasing my work with interactive animations and modern design principles.',
      tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'bg-purple-400',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: 'portfolio',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div ref={ref} className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <motion.h2 className="text-4xl sm:text-5xl font-black mb-4" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            My <span className="text-primary-500">Creative</span> <span className="text-accent-500">Projects</span>
          </motion.h2>
          <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            A collection of my favorite projects that showcase my skills in frontend development, UI/UX design, and problem-solving abilities.
          </motion.p>
          <motion.div className="w-24 h-1 bg-neon-400 mx-auto mt-6" initial={{ width: 0 }} animate={inView ? { width: 96 } : {}} transition={{ duration: 0.8, delay: 0.4 }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={project.title} className={`group ${project.featured ? 'md:col-span-2' : ''}`} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 * index }}>
              <div className="bg-white dark:bg-gray-800 border-4 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-2 hover:translate-y-2 transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden border-b-4 border-black">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  />

                  {/* Project Type Badge */}
                  <div className="absolute top-2 left-2">
                    <motion.div className="bg-black text-white px-2 py-1 border-2 border-white shadow-brutal font-mono text-xs font-bold" animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 2, repeat: Infinity }}>
                      WEB APP
                    </motion.div>
                  </div>
                </div>

                {/* Project Header */}
                <div className={`${project.color} p-6 border-b-4 border-black`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-black mb-2">{project.title}</h3>
                      {project.featured && (
                        <motion.span className="inline-block px-3 py-1 bg-black text-white font-mono text-xs font-bold" animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 2, repeat: Infinity }}>
                          FEATURED
                        </motion.span>
                      )}
                    </div>
                    <motion.div className="text-4xl" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                      🎨
                    </motion.div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm font-bold border-2 border-black dark:border-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={`/project/${project.id}`}
                      className="flex items-center gap-2 px-4 py-2 bg-accent-500 text-white font-mono font-bold border-2 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      View Details
                    </motion.a>

                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white font-mono font-bold border-2 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 text-black dark:text-white font-mono font-bold border-2 border-black dark:border-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }}>
          <motion.a
            href="https://github.com/Grandvill"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-mono font-bold text-lg border-4 border-black shadow-brutal-xl hover:shadow-brutal-lg hover:translate-x-2 hover:translate-y-2 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

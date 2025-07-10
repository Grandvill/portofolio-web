import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Users, Zap } from 'lucide-react';

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
      icon: Brain,
      title: 'Problem Solving',
      description: 'Applying critical thinking to overcome challenges and find effective solutions.',
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
                About <span className="text-accent-500">Me</span>
              </motion.h2>

              <motion.div className="w-24 h-1 bg-neon-400 mb-8" initial={{ width: 0 }} animate={inView ? { width: 96 } : {}} transition={{ duration: 0.8, delay: 0.4 }} />

              <motion.div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
                <p>
                  Hi there! I'm <strong className="text-primary-500">Zahidan Ardhiansyah</strong>, a passionate Full Stack Developer with a Bachelor's degree in Computer Science. Based in Indonesia, I am highly motivated to gain practical
                  experience in web development and contribute to projects that enhance my technical and professional skills.
                </p>

                <p>
                  I specialize in <strong className="text-accent-500">React.js</strong>,<strong className="text-neon-500"> Next.js</strong>, and modern web technologies. My journey in tech started with curiosity about how websites work, and
                  it evolved into a passion for creating seamless, beautiful, and functional web applications.
                </p>

                <p>When I'm not coding, you'll find me exploring the latest web development trends or diving into new technologies. I'm passionate about continuous learning and staying ahead of the curve.</p>
              </motion.div>
            </div>

            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.7 }}>
              <div className="px-4 py-2 bg-primary-100 text-primary-800 font-mono font-bold border-2 border-primary-800">🎓 Bachelor's in Computer Science</div>
              <div className="px-4 py-2 bg-accent-100 text-accent-800 font-mono font-bold border-2 border-accent-800">📍 Bekasi City, West Java, Indonesia</div>
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
            My <span className="text-primary-500">Experience</span>
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  period: 'Oct - Dec 2024',
                  title: 'Web Developer (Internship)',
                  company: 'BPBD Cianjur x UG Techno Park',
                  program: 'Program Kompetisi Kampus Merdeka (PKKM)',
                  description: 'Developed SiKembar (Sistem Keluar Masuk Barang) web-based information system for logistics and aid management.',
                  points: [
                    'Conducted analysis of manual logistics and aid management system, identifying inefficiencies and transparency issues',
                    'Designed and developed web-based information system using PHP (CodeIgniter), MySQL, AJAX, and GitHub',
                    'Contributed to both front-end and back-end development of core modules with database integration',
                    'Performed system testing and deployed application to server for direct use by BPBD',
                  ],
                  color: 'bg-primary-400',
                },
                {
                  period: 'Feb - Jun 2024',
                  title: 'IT Programmer (Internship)',
                  company: 'Bisnis Indonesia Group – Central Jakarta',
                  program: 'Program Magang Kampus Merdeka – MSIB Batch 6',
                  description: 'Developed and maintained web-based ERP systems and internal information systems using Laravel and Oracle Database.',
                  points: [
                    'Implemented mock-up designs and managed website-Oracle Database interactions using Laravel, significantly reducing page load times',
                    'Maintained internal information system for goods processes, adding 10+ new features and fixing 20+ bugs',
                    'Built and managed web-based ERP system using Laravel backend and Oracle Database for logistics data processing',
                    'Performed database administration operations including creating databases, tables, and components',
                    'Managed code repository on GitLab platform, ensuring clean version control and reducing integration errors',
                    'Contributed to BigForum Revamp project using Next.js and TailwindCSS for platform modernization',
                  ],
                  color: 'bg-accent-400',
                },
              ].map((item, index) => (
                <motion.div key={item.period} className="flex gap-6 items-start" initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 1 + index * 0.2 }}>
                  <div className={`${item.color} w-20 h-20 border-4 border-black shadow-brutal flex items-center justify-center flex-shrink-0`}>
                    <span className="font-black text-black text-xs text-center leading-tight">{item.period}</span>
                  </div>

                  <div className="bg-white dark:bg-gray-800 border-2 border-black shadow-brutal p-6 flex-1 hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
                    <h4 className="font-black text-lg mb-1">{item.title}</h4>
                    <p className="text-primary-500 font-mono font-bold text-sm mb-3">{item.company}</p>
                    {item.program && <p className="text-accent-500 font-mono font-bold text-xs mb-3 italic">{item.program}</p>}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{item.description}</p>

                    {/* Experience Points */}
                    <div className="space-y-2">
                      {item.points.map((point, pointIndex) => (
                        <motion.div
                          key={pointIndex}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 1.2 + index * 0.2 + pointIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-neon-400 border border-black mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">{point}</p>
                        </motion.div>
                      ))}
                    </div>
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

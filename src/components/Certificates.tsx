import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink, X, ZoomIn } from 'lucide-react';

export default function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certificates = [
    {
      title: 'Belajar Back-End Pemula dengan JavaScript',
      issuer: 'Dicoding Indonesia',
      date: 'June 2025',
      description:
        'Learned the fundamentals of back-end development, including HTTP communication, RESTful API architecture, Node.js basics, and building web services using Node.js and Hapi framework. Gained hands-on experience deploying web services to Amazon EC2 and testing APIs with Postman.Learned the fundamentals of JavaScript programming and how to build a simple web application using Node.js and Hapi',
      skills: ['Node.js', 'RESTful API', 'Hapi.js', 'Amazon EC2', 'Postman', 'NPM'],
      color: 'bg-primary-400',
      borderColor: 'border-primary-600',
      images: ['/images/certificates/dicoding_zahidan.png', '/images/certificates/dicoding2.png'],
    },
    {
      title: 'Certificate of Competence',
      issuer: 'BNSP (Badan Nasional Sertifikasi Profesi)',
      date: 'January 2025',
      description: 'Professional certification in Programming and Software Development (Junior Web Developer).',
      skills: ['Web Development', 'Programming', 'Software Development', 'Junior Web Developer'],
      color: 'bg-accent-400',
      borderColor: 'border-accent-600',
      image: '/images/certificates/bisnis_zahidan.png',
    },
    {
      title: 'TOEIC Certificate',
      issuer: 'WELTS (World English Language Testing Services)',
      date: 'December 2024',
      description: 'Demonstrates strong English communication skills for technical and international collaboration.',
      skills: ['Listening', 'Reading', 'Grammar', 'Vocabulary', 'Comprehension'],
      color: 'bg-neon-400',
      borderColor: 'border-neon-600',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const openModal = (image: string) => {
    setSelectedCertificate(image);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div ref={ref} className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <motion.h2 className="text-4xl sm:text-5xl font-black mb-4" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
              My <span className="text-primary-500">Certifications</span>
            </motion.h2>

            <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
              Continuous Learning Journey - Professional certifications that validate my expertise and commitment to staying current with industry standards.
            </motion.p>

            <motion.div className="w-24 h-1 bg-neon-400 mx-auto" initial={{ width: 0 }} animate={inView ? { width: 96 } : {}} transition={{ duration: 0.8, delay: 0.4 }} />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? -1 : 1 }}
              >
                <div className={`bg-white dark:bg-gray-800 border-4 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-2 hover:translate-y-2 transition-all duration-300 overflow-hidden`}>
                  {/* Certificate Header */}
                  <div className={`${cert.color} p-6 border-b-4 border-black relative`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-black mb-2 leading-tight">{cert.title}</h3>
                        <p className="text-black font-mono font-bold text-sm mb-1">{cert.issuer}</p>
                        <div className="flex items-center gap-2 text-black">
                          <Calendar size={16} />
                          <span className="font-mono text-sm font-bold">{cert.date}</span>
                        </div>
                      </div>
                      <motion.div className="bg-black text-white p-3 border-2 border-white shadow-brutal" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                        <Award size={24} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6">
                    {/* Certificate Image with Enhanced Styling */}
                    <motion.div
                      className="relative mb-6 group/image cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => openModal(cert.image)}
                    >
                      <div className="relative overflow-hidden border-4 border-black shadow-brutal">
                        <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover/image:scale-110" />

                        {/* Overlay with zoom icon */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover/image:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                          <motion.div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" whileHover={{ scale: 1.2 }}>
                            <div className="bg-white p-3 border-2 border-black shadow-brutal">
                              <ZoomIn size={24} className="text-black" />
                            </div>
                          </motion.div>
                        </div>

                        {/* Certificate Badge */}
                        <div className="absolute top-2 right-2">
                          <motion.div
                            className="bg-neon-400 text-black px-2 py-1 border-2 border-black shadow-brutal font-mono text-xs font-bold"
                            animate={{ rotate: [0, 2, -2, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            CERTIFIED
                          </motion.div>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[15px] border-r-transparent border-t-[15px] border-t-black"></div>
                      </div>
                    </motion.div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{cert.description}</p>

                    {/* Skills Tags */}
                    <div className="mb-6">
                      <h4 className="font-black text-sm mb-3 text-gray-800 dark:text-gray-200">SKILLS COVERED:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-xs font-bold border-2 border-black dark:border-white"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.5 + skillIndex * 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* View Certificate Button */}
                    <motion.button
                      onClick={() => openModal(cert.image)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-black text-white font-mono font-bold border-2 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </motion.button>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-black"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievement Stats */}
          <motion.div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }}>
            {[
              { label: 'Certifications Earned', value: '3+', icon: '🏆' },
              { label: 'Skills Validated', value: '15+', icon: '✅' },
              { label: 'Learning Hours', value: '200+', icon: '📚' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white dark:bg-gray-800 border-4 border-black shadow-brutal transform hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -1 : 1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <motion.div className="text-4xl mb-2" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}>
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-black text-primary-500 mb-2">{stat.value}</div>
                <div className="font-mono font-bold text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 1.2 }}>
            <motion.div className="inline-block p-6 bg-accent-400 border-4 border-black shadow-brutal-xl" whileHover={{ rotate: 2, scale: 1.02 }}>
              <div className="flex items-center gap-3">
                <motion.div className="text-3xl" animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                  🎓
                </motion.div>
                <div className="text-left">
                  <p className="font-black text-black text-lg">Always Learning!</p>
                  <p className="text-black text-sm font-mono">Currently pursuing more certifications</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white border-4 border-black shadow-brutal-xl"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button onClick={closeModal} className="absolute -top-4 -right-4 bg-red-500 text-white p-2 border-4 border-black shadow-brutal z-10" whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                <X size={24} />
              </motion.button>

              {/* Certificate Image */}
              <div className="overflow-hidden">
                <motion.img src={selectedCertificate} alt="Certificate" className="w-full h-auto max-h-[80vh] object-contain" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} />
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-primary-400 border-t-4 border-black">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award size={20} className="text-black" />
                    <span className="font-mono font-bold text-black">Official Certificate</span>
                  </div>
                  <motion.button
                    onClick={closeModal}
                    className="px-4 py-2 bg-black text-white font-mono font-bold border-2 border-white shadow-brutal hover:shadow-brutal-lg transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

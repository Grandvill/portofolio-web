import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Users, User, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  color: string;
  image: string;
  isTeamProject: boolean;
  teamSize?: number;
  // role?: string;
  // duration: string;
  // challenges: string[];
  features: string[];
  gallery: string[];
}

const projectsData: Record<string, ProjectData> = {
  'wild-oasis': {
    id: 'wild-oasis',
    title: 'Wild Oasis',
    description: 'A comprehensive hotel management system with booking functionality, room management, and guest services.',
    fullDescription:
      'Wild Oasis Resort is a full-featured hotel management system designed to streamline operations for resort and hotel businesses. The application provides comprehensive booking management, room allocation, guest services, and administrative tools. Built with modern React architecture, it offers a seamless user experience for both staff and guests.',
    tech: ['React', 'React Query', 'JavaScript', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://wildoasisretreat.netlify.app/',
    githubUrl: 'https://github.com/Grandvill/the-wild-oasis',
    color: 'bg-primary-400',
    image: '../images/projects/wild-oasis.png',
    isTeamProject: false,
    // duration: '2 months',
    // role: 'Full Stack Developer',
    // challenges: ['Implementing complex booking logic with date validation', 'Creating responsive design for multiple device types', 'Managing state across multiple components', 'Optimizing performance for large datasets'],
    features: ['Real-time booking system', 'Room management dashboard', 'Guest check-in/check-out', 'Reporting and analytics', 'Mobile-responsive design'],
    gallery: [
      '../images/projects/wild-oasis/cabin.png',
      '../images/projects/wild-oasis/cabin-detail.png',
      '../images/projects/wild-oasis/booking.png',
      '../images/projects/wild-oasis/login.png',
      '../images/projects/wild-oasis/dashboard.png',
      '../images/projects/wild-oasis/booking-admin.png',
      '../images/projects/wild-oasis/cabins-admin.png',
      '../images/projects/wild-oasis/user-admin.png',
      '../images/projects/wild-oasis/settings-admin.png',
      '../images/projects/wild-oasis/update-account.png',
    ],
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = id ? projectsData[id] : null;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-8 px-4 py-2 bg-gray-100 dark:bg-gray-800 border-2 border-black dark:border-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200 font-mono font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </motion.button>

          {/* Project Header */}
          <motion.div className="mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="relative overflow-hidden border-4 border-black shadow-brutal-xl mb-8">
              <img src={project.image} alt={project.title} className="w-full h-64 md:h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className={`${project.color} px-4 py-2 border-2 border-white shadow-brutal font-mono font-bold text-black flex items-center gap-2`}>
                    {project.isTeamProject ? <Users size={20} /> : <User size={20} />}
                    {project.isTeamProject ? `Team Project (${project.teamSize} members)` : 'Solo Project'}
                  </div>
                  {/* <div className="bg-white px-4 py-2 border-2 border-black shadow-brutal font-mono font-bold text-black">{project.duration}</div> */}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Description */}
              <motion.div className="bg-white dark:bg-gray-800 border-4 border-black shadow-brutal p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <h2 className="text-3xl font-black mb-6">Project Overview</h2>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">{project.fullDescription}</p>
                <div className="flex items-center gap-2 text-sm font-mono font-bold">
                  {/* <span className="text-primary-500">Role:</span>
                  <span>{project.role}</span> */}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div className="bg-white dark:bg-gray-800 border-4 border-black shadow-brutal p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <h3 className="text-2xl font-black mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div key={feature} className="flex items-center gap-3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}>
                      <div className="w-3 h-3 bg-neon-400 border border-black"></div>
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              {/* <motion.div className="bg-white dark:bg-gray-800 border-4 border-black shadow-brutal p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <h3 className="text-2xl font-black mb-6">Challenges & Solutions</h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <motion.div key={challenge} className="flex items-start gap-3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}>
                      <div className="w-6 h-6 bg-accent-400 border-2 border-black flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-black font-bold text-xs">{index + 1}</span>
                      </div>
                      <span className="text-sm leading-relaxed">{challenge}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div> */}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <motion.div className="bg-white dark:bg-gray-800 border-4 border-black shadow-brutal p-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <h3 className="text-xl font-black mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-mono text-sm font-bold border-2 border-black dark:border-white"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Project Links */}
              <motion.div className="bg-white dark:bg-gray-800 border-4 border-black shadow-brutal p-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <h3 className="text-xl font-black mb-4">Project Links</h3>
                <div className="space-y-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full px-4 py-3 bg-primary-500 text-white font-mono font-bold border-2 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full px-4 py-3 bg-gray-800 text-white font-mono font-bold border-2 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={16} />
                    Source Code
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Image Gallery */}
          <motion.div className="mt-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <h2 className="text-3xl font-black mb-8 text-center">Project Gallery</h2>

            {/* Carousel */}
            <div className="relative bg-white dark:bg-gray-800 border-4 border-black shadow-brutal-xl overflow-hidden">
              <div className="relative h-96 md:h-[500px]">
                <motion.img
                  key={currentImageIndex}
                  src={project.gallery[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={openModal}
                />

                {/* Navigation Buttons */}
                <motion.button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 border-2 border-white shadow-brutal hover:shadow-brutal-lg transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={24} />
                </motion.button>

                <motion.button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 border-2 border-white shadow-brutal hover:shadow-brutal-lg transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={24} />
                </motion.button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-1 border-2 border-white shadow-brutal font-mono text-sm font-bold">
                  {currentImageIndex + 1} / {project.gallery.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="p-4 border-t-4 border-black bg-gray-50 dark:bg-gray-700">
                <div className="flex gap-2 overflow-x-auto">
                  {project.gallery.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 border-2 ${index === currentImageIndex ? 'border-primary-500' : 'border-black dark:border-white'} shadow-brutal hover:shadow-brutal-lg transition-all duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <motion.div
              className="relative max-w-6xl max-h-[90vh] bg-white border-4 border-black shadow-brutal-xl"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button onClick={closeModal} className="absolute -top-4 -right-4 bg-red-500 text-white p-2 border-4 border-black shadow-brutal z-10" whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                <X size={24} />
              </motion.button>

              <img src={project.gallery[currentImageIndex]} alt={`${project.title} full size`} className="w-full h-auto max-h-[80vh] object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

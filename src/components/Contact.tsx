import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Message sent! Thanks for reaching out! 🚀');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zahidanardhiansyah@gmail.com',
      href: 'mailto:zahidanardhiansyah@gmail.com',
      color: 'bg-primary-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Indonesia',
      href: '#',
      color: 'bg-accent-400',
    },
    {
      icon: MessageCircle,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/zahidan-ardhiansyah/',
      color: 'bg-neon-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div ref={ref} className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <motion.h2 className="text-4xl sm:text-5xl font-black mb-4" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            Let's <span className="text-primary-500">Build</span> <span className="text-accent-500">Something</span> <span className="text-neon-500">Amazing</span>
          </motion.h2>

          <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you! Drop me a message and let's create something incredible together.
          </motion.p>

          <motion.div className="w-24 h-1 bg-neon-400 mx-auto mt-6" initial={{ width: 0 }} animate={inView ? { width: 96 } : {}} transition={{ duration: 0.8, delay: 0.4 }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div className="space-y-8" initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <div>
              <h3 className="text-2xl font-black mb-6">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. Whether you have a specific project in mind or just want to explore possibilities, let's start a conversation!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center gap-4 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className={`${info.color} w-14 h-14 border-2 border-black shadow-brutal flex items-center justify-center group-hover:shadow-brutal-lg group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-200`}>
                    <info.icon size={24} className="text-black" />
                  </div>
                  <div>
                    <p className="font-mono font-bold text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="font-bold text-lg">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Fun element */}
            <motion.div
              className="bg-primary-400 border-4 border-black shadow-brutal p-6 mt-8"
              initial={{ opacity: 0, rotate: -5 }}
              animate={inView ? { opacity: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ rotate: 2, scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <motion.div className="text-3xl" animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                  💡
                </motion.div>
                <div>
                  <p className="font-black text-black text-lg">Quick Response!</p>
                  <p className="text-black text-sm">I typically respond within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white dark:bg-gray-800 border-4 border-black shadow-brutal p-8">
                <h3 className="text-2xl font-black mb-6">Send a Message</h3>

                <div className="space-y-6">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.6 }}>
                    <label htmlFor="name" className="block font-mono font-bold text-sm mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black bg-white dark:bg-gray-700 dark:border-white font-mono focus:outline-none focus:shadow-brutal transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.7 }}>
                    <label htmlFor="email" className="block font-mono font-bold text-sm mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black bg-white dark:bg-gray-700 dark:border-white font-mono focus:outline-none focus:shadow-brutal transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.8 }}>
                    <label htmlFor="message" className="block font-mono font-bold text-sm mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-black bg-white dark:bg-gray-700 dark:border-white font-mono focus:outline-none focus:shadow-brutal transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or just say hello! 👋"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent-500 text-white font-mono font-bold border-2 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

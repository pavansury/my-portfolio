import React from 'react';
import { motion } from 'framer-motion';
// Link removed - using anchor tags for smooth scrolling
import { FiArrowRight, FiCode, FiLayers, FiSmartphone, FiChevronDown } from 'react-icons/fi';

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Features data
  const features = [
    {
      icon: <FiCode className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Web Development',
      description: 'I build responsive, user-friendly websites using modern web technologies like React, Next.js, and TailwindCSS with a focus on performance and accessibility.',
    },
    {
      icon: <FiLayers className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'UI/UX Design',
      description: 'I create beautiful, intuitive user interfaces with a focus on user experience and accessibility using modern design tools and best practices.',
    },
    {
      icon: <FiSmartphone className="w-6 h-6 md:w-8 md:h-8" />,
      title: 'Mobile First',
      description: 'I build with a mobile-first approach, ensuring optimal performance and user experience across all device sizes and screen resolutions.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="absolute inset-0 opacity-10 dark:opacity-5" style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(var(--color-primary-500), 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(var(--color-secondary-500), 0.2) 0%, transparent 50%)',
              backgroundSize: '800px 800px'
            }}></div>
          </div>
          <div className="absolute inset-0 opacity-30 dark:opacity-10" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Content - Left Side */}
            <motion.div 
              className="relative z-10 text-center lg:text-left flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="mr-2">👋</span> Hello, I'm Pavan
              </motion.span>
              
              <motion.h3 
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  AI/ML Engineer
                </span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                  Data & Web Solutions 
                </span>
              </motion.h3>

              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                I craft intelligent web applications and AI solutions that solve real-world problems. 
                Let's build something amazing together!
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 transition-all duration-300 text-center"
                >
                  Get In Touch
                </a>
                <a 
                  href="#projects" 
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300 text-center"
                >
                  View My Work
                </a>
              </motion.div>

              <motion.div 
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">Available for freelance work</span>
                </div>
                <div className="hidden lg:block w-px h-5 bg-gray-300 dark:bg-gray-600"></div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Chh. Sambhajinagar, India</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Picture - Right Side */}
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-3xl transform -rotate-6"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img 
                  src="/images/profile-placeholder.jpg" 
                  alt="Pavan Suryawanshi" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x400?text=Profile+Image';
                  }}
                />
              </div>
              
              {/* Floating Tech Icons */}
              <motion.div 
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll Down Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [0, 5, 0, 5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <a 
              href="#about" 
              className="flex items-center justify-center group"
              aria-label="Scroll to next section"
            >
              <FiChevronDown className="w-10 h-10 text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiGithub, FiLinkedin, FiMail, FiUser, FiBriefcase, FiHome, FiCode, FiSend } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', path: '/', icon: <FiHome className="mr-2" /> },
  { name: 'About', path: '/about', icon: <FiUser className="mr-2" /> },
  { name: 'Projects', path: '/projects', icon: <FiCode className="mr-2" /> },
  { name: 'Contact', path: '/contact', icon: <FiSend className="mr-2" /> },
];

const socialLinks = [
  { 
    icon: <FiGithub />, 
    url: 'https://github.com/pavansury',
    label: 'GitHub Profile',
    className: 'hover:text-gray-900 dark:hover:text-white'
  },
  { 
    icon: <FiLinkedin />, 
    url: 'https://www.linkedin.com/in/pavan-suryawanshi-185b11311',
    label: 'LinkedIn Profile',
    className: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  { 
    icon: <FiMail />, 
    url: 'mailto:pavansuryawanshi202@gmail.com',
    label: 'Send me an email',
    className: 'hover:text-red-500 dark:hover:text-red-400'
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    const initialTheme = savedTheme ? savedTheme === 'dark' : prefersDark;
    setDarkMode(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
    window.scrollTo(0, 0);
  }, [location]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-gradient"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm font-medium transition-colors hover:text-primary dark:hover:text-secondary ${
                location.pathname === link.path 
                  ? 'text-primary dark:text-secondary' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span 
                  layoutId="activeNavItem"
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary dark:bg-secondary"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center
          ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-secondary focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <motion.div 
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="container mx-auto px-4 py-4 flex flex-col space-y-4"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className={`block py-2 text-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary dark:text-secondary'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                {/* Dark mode toggle for mobile */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </span>
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                  </button>
                </div>
                
                {/* Social links */}
                <div className="flex space-x-4 mb-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 ${social.className} hover:scale-110 transition-transform`}
                      whileHover={{ y: -2 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
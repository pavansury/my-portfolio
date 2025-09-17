import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiHome, FiUser, FiCode, FiSend, FiFileText } from 'react-icons/fi';

const MobileNavigation = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '#home', icon: <FiHome className="w-5 h-5 mr-3" /> },
    { name: 'About', path: '#about', icon: <FiUser className="w-5 h-5 mr-3" /> },
    { name: 'Projects', path: '#projects', icon: <FiCode className="w-5 h-5 mr-3" /> },
    { name: 'Contact', path: '#contact', icon: <FiSend className="w-5 h-5 mr-3" /> },
  ];
  
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white dark:bg-gray-900 shadow-xl z-50 p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Pavan Suryawanshi
                </span>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                  aria-label="Close menu"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className="flex items-center px-4 py-3 text-base font-medium rounded-md transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={closeMenu}
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
                
                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => {
                      toggleTheme();
                      closeMenu();
                    }}
                    className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {darkMode ? (
                      <>
                        <FiSun className="w-5 h-5 mr-2" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <FiMoon className="w-5 h-5 mr-2" />
                        Dark Mode
                      </>
                    )}
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;

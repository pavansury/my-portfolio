import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MobileNavigation from './components/MobileNavigation';
import { FiSun, FiMoon } from 'react-icons/fi';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or use system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme !== null) return savedTheme === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Update the theme whenever it changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Responsive Navigation */}
      <Navbar />
      <MobileNavigation />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900">
        <section id="home" className="min-h-screen flex items-center justify-center py-20">
          <div className="w-full max-w-7xl mx-auto px-4">
            <Home />
          </div>
        </section>
        <section id="about" className="py-20">
          <div className="w-full max-w-7xl mx-auto px-4">
            <About />
          </div>
        </section>
        <section id="projects" className="py-20">
          <div className="w-full max-w-7xl mx-auto px-4">
            <Projects />
          </div>
        </section>
        <section id="contact" className="py-20">
          <div className="w-full max-w-7xl mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
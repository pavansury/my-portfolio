import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'AI Financial Portfolio Advisor',
    description: 'An intelligent system that provides personalized investment recommendations using machine learning algorithms to analyze market trends and user preferences.',
    tags: ['Python', 'Machine Learning', 'TensorFlow', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    github: 'https://github.com/pavansury',
    demo: 'https://example.com',
    category: 'ai'
  },
  {
    id: 2,
    title: 'Personalized Movie/Book Recommender System',
    description: 'A content-based recommendation engine that suggests movies and books based on user preferences and behavior patterns.',
    tags: ['Python', 'NLP', 'Scikit-learn', 'Flask', 'React'],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    github: 'https://github.com/pavansury',
    demo: 'https://example.com',
    category: 'ai'
  },
  {
    id: 3,
    title: 'Smart Waste Management Prediction',
    description: 'IoT and AI-powered system that predicts waste generation patterns to optimize collection routes and schedules.',
    tags: ['Python', 'IoT', 'Time Series Analysis', 'Django', 'React Native'],
    image: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    github: 'https://github.com/pavansury',
    demo: 'https://example.com',
    category: 'iot'
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="w-full">
      {/* Projects Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 mb-8"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-6">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="px-2 py-1 bg-primary/10 text-primary dark:text-secondary text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex space-x-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary dark:hover:text-secondary transition-colors"
                            aria-label="GitHub repository"
                          >
                            <FiGithub className="w-5 h-5" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary dark:hover:text-secondary transition-colors"
                            aria-label="Live demo"
                          >
                            <FiExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {projects.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCode className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                We couldn't find any projects in this category. Check back later!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a project in mind?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your visions.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-primary font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Let's Talk About Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
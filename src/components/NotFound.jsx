import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="text-8xl font-bold text-gradient">404</div>
          
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Oops! Page Not Found
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              to="/"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <FiHome className="w-5 h-5" />
              Back to Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <FiArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need help?{' '}
              <a 
                href="#contact" 
                className="text-primary dark:text-secondary hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

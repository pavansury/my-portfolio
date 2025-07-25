import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-primary border-t-transparent dark:border-secondary dark:border-t-transparent rounded-full mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.p 
          className="mt-4 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;

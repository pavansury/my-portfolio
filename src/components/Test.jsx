import React from 'react';

const Test = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Hello, World!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          If you can see this, React is working!
        </p>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Check the browser's console for any error messages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Test;

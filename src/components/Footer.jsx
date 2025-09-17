import React, { useState } from 'react';
// Link removed - using anchor tags for navigation
import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiInstagram, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: 'Portfolio Visitor',
        from_email: 'noreply@portfolio.com',
        to_email: EMAILJS_CONFIG.RECEIVER_EMAIL,
        message: feedback,
        subject: 'New Feedback from Portfolio'
      };
      
      console.log('Sending feedback with params:', templateParams);
      
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID, // Using the same template as contact form
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('EmailJS response:', response);
      
      if (response.status === 200) {
        setStatus('success');
        setFeedback('');
        // Reset status after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        throw new Error('Failed to send feedback');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      setStatus('error');
      // Keep error message visible until user dismisses it
    } finally {
      setIsSubmitting(false);
    }
  };

  
  const socialLinks = [
    { 
      icon: <FiGithub className="text-gray-800 dark:text-white" />, 
      url: 'https://github.com/pavansury', 
      label: 'GitHub Profile',
      className: 'hover:bg-gray-200 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-800'
    },
    { 
      icon: <FiLinkedin className="text-blue-600" />, 
      url: 'https://www.linkedin.com/in/pavan-suryawanshi-185b11311', 
      label: 'Connect on LinkedIn',
      className: 'hover:bg-blue-100 dark:hover:bg-blue-900/30 bg-gray-100 dark:bg-gray-800'
    },
    { 
      icon: <FiInstagram className="text-pink-600" />, 
      url: 'https://www.instagram.com/pavan_suryawanshi.45', 
      label: 'Follow on Instagram',
      className: 'hover:bg-pink-100 dark:hover:bg-pink-900/30 bg-gray-100 dark:bg-gray-800'
    },
    { 
      icon: <FiMail className="text-red-500" />, 
      url: 'mailto:pavansuryawanshi202@gmail.com', 
      label: 'Send me an email',
      className: 'hover:bg-red-100 dark:hover:bg-red-900/30 bg-gray-100 dark:bg-gray-800'
    }
  ];

  const navLinks = [
    { name: 'Home', path: '#home', icon: null },
    { name: 'About', path: '#about', icon: null },
    { name: 'Projects', path: '#projects', icon: null },
    { name: 'Contact', path: '#contact', icon: null },
  ];

  const footerLinks = [
    { 
      title: 'Quick Links', 
      links: navLinks.map(link => ({
        name: link.name,
        to: link.path,
        isExternal: false
      }))
    }
  ];

  return (
    <div className="bg-gray-800 text-gray-300 py-8 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column - Brand and Social */}
          <div className="md:col-span-5">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <a href="#" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Pavan Suryawanshi
                </a>
                <p className="mt-2 text-sm text-gray-400">
                  Aspiring AI/ML Engineer | Python • Machine Learning • Deep Learning • Computer Vision • NLP • TensorFlow • Keras • Scikit-Learn • Pandas • NumPy • Data Analysis
                </p>
              </div>
              <div className="flex space-x-4 mt-auto">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${link.className} transition-colors duration-200`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <hr className="border-gray-700 mb-4" />
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index} className="group">
                  <a 
                    href={link.path}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Feedback Form */}
          <div className="md:col-span-4">
            <h3 className="text-white font-medium mb-4">Your Feedback</h3>
            <hr className="border-gray-700 mb-4" />
            <p className="text-sm text-gray-400 mb-4">
              Have suggestions or feedback? I'd love to hear from you!
            </p>
            
            {status === 'success' && (
              <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-lg flex items-center">
                <FiCheck className="w-4 h-4 mr-2" />
                Thank you for your feedback!
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm rounded-lg flex items-start">
                <FiAlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Failed to send feedback</p>
                  <p className="text-xs mt-1">Please try again or contact me directly at {EMAILJS_CONFIG.RECEIVER_EMAIL}</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleFeedbackSubmit} className="space-y-3">
              <div>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Your feedback..."
                  rows="3"
                  className="w-full bg-gray-700 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend className="w-4 h-4 mr-2" />
                    Send Feedback
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-700 mt-8">
        &copy; {currentYear} Pavan Suryawanshi. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

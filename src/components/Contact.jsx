import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../utils/emailConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      // Add the receiver's email to the form data
      const formData = new FormData(form.current);
      formData.append('to_email', EMAILJS_CONFIG.RECEIVER_EMAIL);
      
      setStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        subject: '', 
        message: '',
        to_email: EMAILJS_CONFIG.RECEIVER_EMAIL
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Chh. Sambhajinagar, Maharashtra, India',
      link: 'https://maps.app.goo.gl/ChhSambhajinagar',
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      value: 'pavansuryawanshi202@gmail.com',
      link: 'mailto:pavansuryawanshi202@gmail.com',
    },
  ];

  return (
    <div className="w-full">
      {/* Contact Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-gradient">Get In Touch</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg flex items-center">
                  <FiCheck className="w-5 h-5 mr-2" />
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-start">
                  <FiAlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Oops! Something went wrong.</p>
                    <p className="text-sm mt-1">Please try again later or contact me directly at pavansuryawanshi202@gmail.com</p>
                  </div>
                </div>
              )}
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:text-white"
                  />
                </div>
                
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary dark:bg-gray-700 dark:text-white"
                    required
                  ></textarea>
                </div>
                
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white transition-colors ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                    }`}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Feel free to get in touch with me. I'm always open to discussing new projects, 
                  creative ideas, or opportunities to be part of your visions.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-secondary mr-4 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
              

              
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.035377274096!2d75.3279659!3d19.8761653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a89e5e3f%3A0x9e2c1b7e083c22b1!2sChhatrapati%20Sambhajinagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                  title="Location Map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
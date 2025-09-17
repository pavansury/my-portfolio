import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiBrain, 
  FiTrendingUp, 
  FiUsers, 
  FiAward,
  FiBookOpen,
  FiTarget
} from 'react-icons/fi';

const About = () => {
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

  const skills = [
    {
      category: "AI/ML Technologies",
      icon: <FiBrain className="w-6 h-6" />,
      items: ["Python", "TensorFlow", "Keras", "Scikit-Learn", "PyTorch", "OpenCV"]
    },
    {
      category: "Data Science",
      icon: <FiDatabase className="w-6 h-6" />,
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "SQL"]
    },
    {
      category: "Web Development",
      icon: <FiCode className="w-6 h-6" />,
      items: ["React", "JavaScript", "HTML/CSS", "Node.js", "TailwindCSS", "Git"]
    },
    {
      category: "Specializations",
      icon: <FiTarget className="w-6 h-6" />,
      items: ["Computer Vision", "NLP", "Deep Learning", "Data Analysis", "Web Applications", "API Development"]
    }
  ];

  const achievements = [
    {
      icon: <FiAward className="w-8 h-8 text-yellow-500" />,
      title: "AI/ML Projects",
      description: "Successfully completed multiple machine learning projects including computer vision and NLP applications."
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-green-500" />,
      title: "Data Analysis",
      description: "Experienced in data preprocessing, analysis, and visualization for actionable insights."
    },
    {
      icon: <FiUsers className="w-8 h-8 text-blue-500" />,
      title: "Problem Solving",
      description: "Strong analytical thinking and problem-solving skills with focus on real-world applications."
    },
    {
      icon: <FiBookOpen className="w-8 h-8 text-purple-500" />,
      title: "Continuous Learning",
      description: "Passionate about staying updated with latest technologies and industry best practices."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Passionate About <span className="text-gradient">AI & Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm an aspiring AI/ML Engineer with a strong foundation in data science and web development. 
              I love creating intelligent solutions that solve real-world problems and building user-friendly applications.
            </p>
          </motion.div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Personal Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Journey
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  My journey in technology began with a fascination for how data can tell stories and 
                  drive decisions. What started as curiosity about machine learning algorithms has evolved 
                  into a passion for creating AI-powered solutions that make a real impact.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I specialize in developing end-to-end machine learning pipelines, from data preprocessing 
                  and model training to deployment and monitoring. My experience spans computer vision, 
                  natural language processing, and predictive analytics.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not training models or writing code, you'll find me exploring the latest research 
                  papers, contributing to open-source projects, or building web applications that showcase 
                  the power of AI in everyday life.
                </p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="grid gap-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What I Bring
              </h3>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Skills & Technologies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-primary dark:text-secondary">
                      {skillGroup.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-secondary/10 dark:to-primary/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new projects and collaborate with like-minded individuals. 
                Whether it's an AI solution or a web application, let's turn your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
                >
                  View My Work
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

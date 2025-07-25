import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiAward, 
  FiCode, 
  FiCpu, 
  FiLayers, 
  FiDatabase, 
  FiBookOpen, 
  FiCpu as FiChip, 
  FiGlobe,
  FiUser,
  FiTool,
  FiBarChart2
} from 'react-icons/fi';

const About = () => {
  const skills = [
    {
      category: "Languages & Libraries",
      items: ["Python", "JavaScript", "HTML/CSS", "TypeScript"],
      icon: <FiCode className="text-primary" />
    },
    {
      category: "AI/ML Frameworks",
      items: ["TensorFlow", "Keras", "PyTorch", "Scikit-Learn"],
      icon: <FiCpu className="text-primary" />
    },
    {
      category: "Data Science",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      icon: <FiBarChart2 className="text-primary" />
    },
    {
      category: "Web Development",
      items: ["React.js", "Node.js", "Express", "MongoDB"],
      icon: <FiGlobe className="text-primary" />
    },
    {
      category: "Tools & Platforms",
      items: ["Git & GitHub", "VS Code", "Jupyter", "Google Colab"],
      icon: <FiTool className="text-primary" />
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero About Section */}
      <section className="mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              About Me
            </h1>
          </div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI/ML Engineer specializing in building intelligent systems with a passion for bridging machine learning models with practical applications. 
            I combine technical expertise in deep learning with full-stack development skills to create impactful, scalable solutions.
          </p>
        </motion.div>
      </section>

      {/* Domains of Interest */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700/50"
        >
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-lg bg-primary/10 dark:bg-primary/20 mr-4">
              <FiChip className="text-2xl text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Domains of Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Machine Learning",
                description: "Developing predictive models and algorithms for various applications",
                icon: <FiLayers className="text-primary" />
              },
              {
                title: "Deep Learning",
                description: "Building neural networks for computer vision and NLP tasks",
                icon: <FiDatabase className="text-primary" />
              },
              {
                title: "Data Analysis",
                description: "Extracting insights from complex datasets and visualizing results",
                icon: <FiBarChart2 className="text-primary" />
              },
              {
                title: "Web Development",
                description: "Creating responsive interfaces and integrating ML models",
                icon: <FiGlobe className="text-primary" />
              },
              {
                title: "Model Deployment",
                description: "Productionizing ML models with scalable architectures",
                icon: <FiTool className="text-primary" />
              }
            ].map((domain, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white/50 dark:bg-gray-700/30 border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-secondary/50 transition-all group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-md bg-primary/10 dark:bg-primary/20 mr-3 group-hover:bg-primary/20 transition-colors">
                    {domain.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{domain.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills & Tools */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700/50"
        >
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-lg bg-primary/10 dark:bg-primary/20 mr-4">
              <FiCode className="text-2xl text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white/50 dark:bg-gray-700/30 border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-secondary/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-md bg-primary/10 dark:bg-primary/20 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700/50"
        >
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-lg bg-primary/10 dark:bg-primary/20 mr-4">
              <FiBookOpen className="text-2xl text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-8">
            <motion.div
              className="p-6 rounded-xl bg-white/50 dark:bg-gray-700/30 border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-secondary/50 transition-all"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold">B.Tech in Computer Science (AI & ML)</h3>
                <span className="text-primary dark:text-secondary font-medium mt-2 md:mt-0">2024–2027</span>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Deogiri Institute of Engineering and Management Studies, Aurangabad</p>
              <p className="text-gray-500 dark:text-gray-400">Direct Second Year Entry</p>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-xl bg-white/50 dark:bg-gray-700/30 border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-secondary/50 transition-all"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold">Diploma in Computer Engineering</h3>
                <span className="text-primary dark:text-secondary font-medium mt-2 md:mt-0">2021–2024</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Completed with distinction</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
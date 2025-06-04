
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-dark-800/80 backdrop-blur-sm rounded-full mb-6 border border-neon-blue/30"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-2xl mr-2">💻</span>
            <span className="font-mono text-sm text-neon-cyan">
              // my digital creations
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6 cyber-text">
            Software Projects
            <motion.div
              className="h-2 w-32 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green mx-auto mt-4 rounded-full cyber-glow"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto font-space leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Since 2022, I've been architecting full-stack applications, AI-powered systems, and SaaS platforms 
            that solve real-world problems with <span className="gradient-text font-bold">clean code</span> and 
            robust architecture.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
              className="tech-card"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

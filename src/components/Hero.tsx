
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Download, Eye, Zap, Code, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 matrix-bg">
      {/* Animated cyber particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 4 === 0 ? 'bg-neon-blue' :
              i % 4 === 1 ? 'bg-neon-cyan' :
              i % 4 === 2 ? 'bg-neon-purple' :
              'bg-neon-green'
            }/30`}
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-6 py-3 bg-dark-800/80 backdrop-blur-sm rounded-full text-neon-blue font-mono text-sm border border-neon-blue/30 cyber-glow">
              <Terminal className="w-4 h-4 mr-2" />
              ~/currently-in-nairobi $
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            I'm{' '}
            <motion.span 
              className="gradient-text cyber-text"
              animate={{ 
                textShadow: [
                  '0 0 20px #00D4FF',
                  '0 0 30px #8B5CF6', 
                  '0 0 20px #00FF88',
                  '0 0 30px #00D4FF'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Kipchirchir
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-6 h-24 font-space font-medium"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer crafting digital experiences',
                2500,
                'Technical Writer breaking down complex systems',
                2500,
                'Law Student bridging code and legislation',
                2500,
                'Building the future with clean architecture',
                2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-400 mb-8 max-w-2xl font-space leading-relaxed"
          >
            I architect scalable web applications, write technical documentation that developers actually read, 
            and explore the intersection of technology and law in the digital age.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={scrollToProjects}
              className="cyber-button inline-flex items-center px-8 py-4 font-bold rounded-xl font-space scan-line"
              whileHover={{ 
                scale: 1.05, 
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5 mr-2" />
              View Projects
              <Code className="w-5 h-5 ml-2" />
            </motion.button>
            
            <motion.a
              href="/assets/resume/Kipchirchir_Too_Resume_2025.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-dark-900 font-bold rounded-xl shadow-2xl transition-all duration-300 hover:from-neon-purple hover:to-neon-green font-space cyber-glow"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                rotate: 1
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.5 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
            animate={{ 
              y: [0, -10, 0]
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-neon-blue/50 shadow-2xl backdrop-blur-sm cyber-glow">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Kipchirchir Too - Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -inset-4 rounded-2xl -z-10 border border-neon-purple/30"
              animate={{
                background: [
                  'linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.1), transparent)',
                  'linear-gradient(135deg, transparent, rgba(139, 92, 246, 0.1), transparent)',
                  'linear-gradient(225deg, transparent, rgba(0, 255, 136, 0.1), transparent)',
                  'linear-gradient(315deg, transparent, rgba(0, 212, 255, 0.1), transparent)',
                ],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neon-blue bg-dark-800/80 backdrop-blur-sm rounded-full p-4 border border-neon-blue/30 cyber-glow"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
        aria-label="Scroll to projects"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Hero;

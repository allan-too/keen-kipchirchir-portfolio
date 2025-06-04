
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Download, Eye, Zap, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg-1">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-3 h-3 rounded-full ${
              i % 5 === 0 ? 'bg-neon-pink' :
              i % 5 === 1 ? 'bg-neon-cyan' :
              i % 5 === 2 ? 'bg-neon-green' :
              i % 5 === 3 ? 'bg-neon-yellow' :
              'bg-neon-purple'
            }/20`}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
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
            className="mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full text-white font-mono text-sm border border-white/20">
              <Sparkles className="w-4 h-4 mr-2 text-neon-yellow" />
              Currently vibing in Nairobi ✨
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            yo, I'm{' '}
            <motion.span 
              className="gradient-text neon-text"
              animate={{ 
                textShadow: [
                  '0 0 20px #FF10F0',
                  '0 0 30px #00FFFF', 
                  '0 0 20px #39FF14',
                  '0 0 30px #FF10F0'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Kipchirchir
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6 h-24 font-space font-medium"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Dev who codes with ✨ magic',
                2500,
                'Writer & Researcher crafting viral content 📝',
                2500,
                'Law Student breaking barriers at UoN ⚖️',
                2500,
                'Building the future, one commit at a time 🚀',
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
            className="text-lg text-white/90 mb-8 max-w-2xl font-space leading-relaxed"
          >
            I build scalable web apps that slap 💯, craft content that goes viral 📈, 
            and merge tech with law to create solutions that are absolutely fire 🔥
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={scrollToProjects}
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 hover:bg-white hover:text-purple-600 font-space"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ 
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Eye className="w-5 h-5 mr-2" />
              Check My Work
              <Zap className="w-5 h-5 ml-2" />
            </motion.button>
            
            <motion.a
              href="/assets/resume/Kipchirchir_Too_Resume_2025.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 hover:from-neon-cyan hover:to-neon-green font-space neon-glow"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                rotate: 2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              Get My Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.5 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="w-80 h-80 rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Kipchirchir Too - Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -inset-6 rounded-3xl -z-10"
              animate={{
                background: [
                  'conic-gradient(from 0deg, #FF10F0, #00FFFF, #39FF14, #FFFF00, #BF00FF, #FF10F0)',
                  'conic-gradient(from 120deg, #FF10F0, #00FFFF, #39FF14, #FFFF00, #BF00FF, #FF10F0)',
                  'conic-gradient(from 240deg, #FF10F0, #00FFFF, #39FF14, #FFFF00, #BF00FF, #FF10F0)',
                  'conic-gradient(from 360deg, #FF10F0, #00FFFF, #39FF14, #FFFF00, #BF00FF, #FF10F0)',
                ],
              }}
              transition={{
                duration: 4,
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30"
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.1, 1]
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

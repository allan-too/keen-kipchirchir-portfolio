
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home', emoji: '🏠' },
    { name: 'Projects', href: '#projects', emoji: '💻' },
    { name: 'Writing & Research', href: '#writing', emoji: '✍️' },
    { name: 'Legal Expertise', href: '#legal', emoji: '⚖️' },
    { name: 'Resume', href: '#resume', emoji: '📄' },
    { name: 'Contact', href: '#contact', emoji: '📬' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-2xl gradient-text flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-6 h-6 mr-2 text-neon-purple" />
            KT Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-neon-pink dark:hover:text-neon-cyan transition-colors relative group font-space font-medium"
                whileHover={{ y: -2, scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="mr-2">{item.emoji}</span>
                {item.name}
                <motion.span 
                  className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-neon-pink to-neon-cyan rounded-full group-hover:w-full transition-all duration-300"
                  layoutId="navbar-indicator"
                />
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gradient-to-r from-aesthetic-lavender to-aesthetic-mint dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition-all duration-300 neon-glow"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Dark/Light Mode"
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5 text-neon-yellow" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5 text-neon-cyan" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed top-16 right-0 bottom-0 w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-2xl border-l border-white/20 dark:border-gray-700/50"
          >
            <div className="p-6 space-y-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-space font-medium text-gray-700 dark:text-gray-300 hover:text-neon-pink dark:hover:text-neon-cyan transition-colors p-3 rounded-xl hover:bg-aesthetic-lavender/20 dark:hover:bg-gray-800/50"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <span className="mr-3 text-xl">{item.emoji}</span>
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;

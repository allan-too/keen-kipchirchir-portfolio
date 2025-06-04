
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home', emoji: '🏠' },
    { name: 'Projects', href: '#projects', emoji: '💻' },
    { name: 'Writing & Research', href: '#writing', emoji: '📝' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 dark:bg-dark-900/95 backdrop-blur-md border-b border-neon-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-2xl gradient-text flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Terminal className="w-6 h-6 mr-2 text-neon-blue" />
            KT.dev
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-neon-blue transition-colors relative group font-space font-medium"
                whileHover={{ y: -2, scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="mr-2">{item.emoji}</span>
                {item.name}
                <motion.span 
                  className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full group-hover:w-full transition-all duration-300"
                  layoutId="navbar-indicator"
                />
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.div
              className="flex items-center space-x-3 p-3 rounded-full bg-dark-800 border border-neon-blue/30 cyber-glow"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Sun className="w-4 h-4 text-neon-blue" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-neon-blue data-[state=unchecked]:bg-gray-600"
              />
              <Moon className="w-4 h-4 text-neon-purple" />
            </motion.div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-dark-900 cyber-glow"
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
            className="lg:hidden fixed top-16 right-0 bottom-0 w-80 bg-dark-900/95 backdrop-blur-lg shadow-2xl border-l border-neon-blue/20"
          >
            <div className="p-6 space-y-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-space font-medium text-gray-300 hover:text-neon-blue transition-colors p-3 rounded-xl hover:bg-dark-800/50 border border-transparent hover:border-neon-blue/30"
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

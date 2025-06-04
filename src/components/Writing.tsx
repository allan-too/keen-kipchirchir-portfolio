
import React from 'react';
import { motion } from 'framer-motion';
import WritingCard from './WritingCard';
import { writingSamples } from '../data/writing';

const Writing: React.FC = () => {
  const blogPosts = writingSamples.filter(sample => sample.category === 'blog');
  const whitepapers = writingSamples.filter(sample => sample.category === 'whitepaper' || sample.category === 'case-study');
  const legalWriting = writingSamples.filter(sample => sample.category === 'legal');

  return (
    <section id="writing" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Writing & Research
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Since 2022, I've published SEO-optimized articles, case studies, whitepapers, and legal research. 
            Below are curated samples that highlight my versatility as a writer and researcher.
          </p>
        </motion.div>

        {/* SEO Blog Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            SEO-Optimized Blog Posts
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((sample, index) => (
              <WritingCard key={sample.id} sample={sample} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Case Studies & Whitepapers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Case Studies & Whitepapers
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {whitepapers.map((sample, index) => (
              <WritingCard key={sample.id} sample={sample} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Legal Research & Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Legal Research & Analysis
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalWriting.map((sample, index) => (
              <WritingCard key={sample.id} sample={sample} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Writing;

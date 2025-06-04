
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, FileText } from 'lucide-react';
import { WritingSample } from '../data/writing';

interface WritingCardProps {
  sample: WritingSample;
  index: number;
}

const WritingCard: React.FC<WritingCardProps> = ({ sample, index }) => {
  const categoryColors = {
    blog: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    whitepaper: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'case-study': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    legal: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={sample.image}
          alt={sample.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[sample.category]}`}>
            {sample.category.charAt(0).toUpperCase() + sample.category.slice(1).replace('-', ' ')}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {sample.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {sample.description}
        </p>

        {/* Preview Text */}
        {sample.previewText && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 italic">
            {sample.previewText}
          </p>
        )}

        {/* Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {sample.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Word Count */}
        {sample.wordCount && (
          <div className="mb-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <FileText className="w-4 h-4 mr-2" />
            {sample.wordCount.toLocaleString()} words
          </div>
        )}

        {/* Action Button */}
        <div className="flex gap-2">
          {sample.link && (
            <motion.a
              href={sample.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Read More
            </motion.a>
          )}

          {sample.downloadUrl && (
            <motion.a
              href={sample.downloadUrl}
              download
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors flex-1 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default WritingCard;

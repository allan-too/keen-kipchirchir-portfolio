
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Mail, Github } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Résumé
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Kipchirchir Too</h3>
                <p className="text-gray-600 dark:text-gray-400">Full-Stack Developer • Writer • Law Student</p>
                <div className="flex justify-center items-center space-x-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    kipchirchirtoo01@gmail.com
                  </div>
                  <div className="flex items-center">
                    <Github className="w-4 h-4 mr-1" />
                    allan-too
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Nairobi, Kenya</p>
              </div>

              {/* Quick Skills Overview */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Django', 'Node.js', 'Python', 'PostgreSQL', 'Docker'].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>• LL.B, University of Nairobi (Expected 2026)</p>
                    <p>• Diploma in Software Engineering, Moringa School (2023)</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Experience</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>• Freelance Full-Stack Developer (2023–Present)</p>
                    <p>• Paralegal Intern, XYZ Law Chambers (2022–2023)</p>
                    <p>• Published 15+ articles & 3 whitepapers</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                <Eye className="w-4 h-4 inline mr-1" />
                Preview - Download full résumé for complete details
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Download Complete Résumé
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get the full detailed résumé including comprehensive work experience, 
                project descriptions, technical skills, and professional achievements.
              </p>

              <motion.a
                href="/assets/resume/Kipchirchir_Too_Resume_2025.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors w-full justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full Résumé (PDF)
              </motion.a>

              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                Last updated: January 2025 • PDF Format • 2 pages
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Key Highlights
              </h3>
              
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Built 5+ full-stack applications with 50%+ performance improvements
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Published research on AI integration in legal practices
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Expertise in React, Django, FastAPI, and cloud technologies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Legal research experience in criminal and data protection law
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Presented at Nairobi Tech Summit 2024 on SaaS development
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

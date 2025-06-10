import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Download, GraduationCap, Mail, MapPin, Phone, Star, Scale } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">My Résumé</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">A summary of my professional journey and skills.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Resume Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Paul Serban</h3>
                <p className="text-gray-600 dark:text-gray-400">Software Engineer • Writer • Legal Professional</p>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Austin, TX</span>
                </div>
              </div>
              <div className="text-left sm:text-right mt-4 sm:mt-0">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>paul.serban@email.com</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>(512) 555-1234</span>
                  </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center"><GraduationCap className="h-6 w-6 mr-3 text-blue-500" /> Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">University of Texas School of Law, Austin, TX</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Juris Doctor (JD) | Expected May 2028</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Member, Student Bar Association; Moot Court Competition Qualifier</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">University of Texas at Austin, Austin, TX</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bachelor of Science in Computer Science | May 2024</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">GPA: 3.8/4.0; President, Longhorn Coding Club</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Westlake High School, Austin, TX</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">High School Diploma | 2020</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Valedictorian; Editor-in-Chief, The Westlake Chronicle</p>
                </div>
              </div>
            </div>

            {/* Software Engineering Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center"><Briefcase className="h-6 w-6 mr-3 text-blue-500" /> Software Engineering Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Software Engineer I | SparkWave Technologies</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Austin, TX | June 2024 – Present</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>Developed and maintained RESTful APIs in Python (FastAPI) for a real-time analytics platform processing 2M+ events/day.</li>
                    <li>Led a 3-engineer effort to migrate legacy services to AWS Lambda, reducing infra costs by 25%.</li>
                    <li>Implemented end-to-end CI/CD pipelines with GitHub Actions and Terraform.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Backend Engineering Intern | BlueNova Robotics</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Houston, TX | June 2023 – Aug 2023</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>Built data-ingestion modules in Node.js to integrate sensor data into a PostgreSQL time-series DB.</li>
                    <li>Wrote 5+ technical blog posts on robotics-as-a-service architectures, published on company site.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center"><Scale className="h-6 w-6 mr-3 text-blue-500" /> Legal Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Law Clerk | Anderson & Myers LLP</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Austin, TX | Jun 2025 – Present</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>Conduct legal research and draft memoranda on technology and IP law matters.</li>
                    <li>Assist in the preparation of briefs and client advisories related to regulatory compliance.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Legal Intern | Texas Department of State Health Services</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Austin, TX | Aug 2024 – May 2025</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>Supported counsel in health policy litigation by summarizing case law and drafting pleadings.</li>
                    <li>Coordinated with cross-functional teams to interpret emerging health regulations.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Notable Achievements */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center"><Star className="h-6 w-6 mr-3 text-blue-500" /> Notable Achievements & Publications</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>“Optimizing Lambda Cold Starts,” AWS Developer Blog (Mar 2024)</li>
                <li>Winner, Texas Tech Writers’ Guild “Emerging Tech Voices” Award (2023)</li>
                <li>Speaker, SXSW EDU Panel: “Bridging Coding & Storytelling” (Mar 2024)</li>
              </ul>
            </div>
          </motion.div>

          {/* Sidebar for Download and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Download Résumé
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get the full, detailed PDF version of my résumé.
              </p>
              <motion.a
                href="/assets/resume/Paul_Serban_Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors w-full justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Full Résumé (PDF)
              </motion.a>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                Last updated: June 2025
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'FastAPI', 'Node.js', 'React', 'TypeScript', 'Flutter', 'AWS', 'Terraform', 'Docker', 'PostgreSQL', 'CI/CD', 'GitHub Actions'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

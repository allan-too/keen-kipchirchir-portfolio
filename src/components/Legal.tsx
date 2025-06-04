
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Download, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Legal: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Kipchirchir's research on cross-border data transfers was instrumental in our firm's compliance workshop.",
      author: "Advocate Jane Mwangi",
      position: "XYZ Law Chambers"
    },
    {
      quote: "His clarity in analyzing criminal law provisions helped us prepare for a high-profile appeal.",
      author: "Prof. Samuel Otieno",
      position: "University of Nairobi Law Faculty"
    },
    {
      quote: "The legal tech insights provided by Kipchirchir have been invaluable for our digital transformation.",
      author: "Dr. Grace Kiprotich",
      position: "Legal Innovation Hub"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="legal" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Legal Expertise & Experience
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            As a Bachelor of Law candidate at the University of Nairobi (Class of 2026), I've engaged in 
            pro bono work, internships, and legal research since 2022. Below are my key legal credentials, 
            sample memos, and certifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education & Credentials</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Bachelor of Law (LL.B)</h4>
                <p className="text-gray-600 dark:text-gray-400">University of Nairobi • Expected 2026</p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Diploma in Software Engineering</h4>
                <p className="text-gray-600 dark:text-gray-400">Moringa School • 2023</p>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-600" />
                  Certifications
                </h5>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Certificate in Legal Research Methods (UoN, 2024)</li>
                  <li>• Intellectual Property Law in Kenya (Strathmore Law School, 2023)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Pro Bono Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Pro Bono & Internship Experience</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Paralegal Intern</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">XYZ Nairobi Law Chambers • 2022–2023</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Drafted pleadings and criminal plea submissions</li>
                  <li>• Performed case law research for criminal appeals</li>
                  <li>• Assisted attorneys in court filings and documentation</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Volunteer</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Free Legal Clinics • 2023–2024</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Drafted wills and simple land transfer agreements</li>
                  <li>• Advised low-income families on inheritance rights</li>
                  <li>• Explained data protection rights under Kenya Data Protection Act</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sample Legal Documents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Sample Legal Documents
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Sample Non-Disclosure Agreement (NDA) for Tech Startups
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ready-to-use template with key clauses and bullet-point highlights (3 pages)
                  </p>
                </div>
              </div>
              <motion.a
                href="/assets/pdfs/nda-tech-startup.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </motion.a>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Legal Memo: Data Protection Obligations Under Kenya's Data Protection Act
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Detailed analysis of personal data handling and compliance checklists (1,200 words)
                  </p>
                </div>
              </div>
              <motion.a
                href="/assets/pdfs/data-protection-memo.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Testimonials
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Quote className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
                <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? 'bg-blue-600 dark:bg-blue-400'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Legal;

import React from 'react';
import { GraduationCap, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const EducationSection: React.FC = () => {
  const coursework = [
    'Data Structures and Algorithms',
    'Operating Systems',
    'Database Programming',
    'Artificial Intelligence',
    'Software Engineering',
    'User Experience/User Interfaces',
    'Object-Oriented Programming',
    'System Analysis'
  ];

  return (
    <AnimatedSection id="education" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 max-w-4xl mx-auto hover:border-emerald-400/30 transition-all duration-300">
          <div className="flex items-start space-x-6">
            <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full p-4">
              <GraduationCap size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-semibold text-emerald-400 mb-2">Bachelor of Computer Science (Honours)</h3>
              <p className="text-xl text-gray-300 mb-2">Laurentian University</p>
              <p className="text-gray-400 mb-6">Sudbury, ON, Canada | May 2019 – May 2023</p>
              <div className="bg-gray-700/30 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Relevant Coursework:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {coursework.map((course, index) => (
                    <div key={index} className="flex items-center p-2 bg-gray-600/30 rounded-lg">
                      <ChevronRight size={14} className="text-emerald-400 mr-2" />
                      <span className="text-gray-300">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default EducationSection;
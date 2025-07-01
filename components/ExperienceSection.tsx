import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Experience } from './types';
import { experienceData } from './data';

const ExperienceSection: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div 
              key={index} 
              className="bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-400/30 transition-all duration-300 hover-scale"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-emerald-400 mb-2">{exp.title}</h3>
                  <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                </div>
                <div className="flex items-center text-cyan-400 bg-gray-700/30 px-4 py-2 rounded-lg">
                  <Briefcase size={20} className="mr-2" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              <div className="grid gap-4">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start p-3 bg-gray-700/20 rounded-lg">
                    <ChevronRight size={16} className="text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
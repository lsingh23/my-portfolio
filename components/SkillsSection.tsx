import React from 'react';
import { Code, Cpu, Database, Award, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Skill } from './types';

const SkillsSection: React.FC = () => {
  const skills: Record<string, Skill[]> = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 92 },
      { name: 'Redux', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Cypress', level: 80 },
      { name: 'Playwright', level: 80 },
      { name: 'Jest', level: 82 }
    ],
    aiIntegration: [
      { name: 'AI Agents' },
      { name: 'AI Tools Integration' },
      { name: 'AI-powered Features' },
      { name: 'RAG system' },
      { name: 'Web containers' },
    ],
    backend: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'Scala', level: 75 },
      { name: 'Node.js', level: 88 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'SQL', level: 90 }
    ],
    tools: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Agile Development' },
      { name: 'Functional Programming' },
      { name: 'CI/CD' },
      { name: 'REST APIs' },
      { name: 'System Design' },
      { name: 'API Development' },
      { name: 'Data Structure / OOP' },
      { name: 'Linux/Unix' },
    ]
  };

  return (
    <AnimatedSection id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-300 hover-scale">
            <div className="flex items-center mb-6">
              <Code className="text-emerald-400 mr-3" size={28} />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <div className="space-y-3">
              {skills.frontend.map((skill, index) => (
                <div key={skill.name} className="flex items-center p-2 bg-gray-700/30 rounded-lg">
                  <ChevronRight size={16} className="text-emerald-400 mr-2" />
                  <span className="text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover-scale">
            <div className="flex items-center mb-6">
              <Cpu className="text-cyan-400 mr-3" size={28} />
              <h3 className="text-xl font-semibold">AI Integration</h3>
            </div>
            <div className="space-y-3">
              {skills.aiIntegration.map((skill, index) => (
                <div key={skill.name} className="flex items-center p-2 bg-gray-700/30 rounded-lg">
                  <ChevronRight size={16} className="text-cyan-400 mr-2" />
                  <span className="text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover-scale">
            <div className="flex items-center mb-6">
              <Database className="text-blue-400 mr-3" size={28} />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <div className="space-y-3">
              {skills.backend.map((skill, index) => (
                <div key={skill.name} className="flex items-center p-2 bg-gray-700/30 rounded-lg">
                  <ChevronRight size={16} className="text-blue-400 mr-2" />
                  <span className="text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 hover-scale">
            <div className="flex items-center mb-6">
              <Award className="text-yellow-400 mr-3" size={28} />
              <h3 className="text-xl font-semibold">Tools & Methods</h3>
            </div>
            <div className="space-y-3">
              {skills.tools.map((skill, index) => (
                <div key={skill.name} className="flex items-center p-2 bg-gray-700/30 rounded-lg">
                  <ChevronRight size={16} className="text-yellow-400 mr-2" />
                  <span className="text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
import React from 'react';
import { Code, Cpu, Database, TabletSmartphone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  return (
    <AnimatedSection id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a dedicated software engineer with expertise in building scalable web applications and AI-powered solutions. 
              Currently working as a Founding Engineer at Kindgi, where I architect and develop cutting-edge AI-driven applications using modern technologies like React, Next.js, and TypeScript, integrating AI agents and intelligent automation tools.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              My experience spans from frontend development with React and Redux to backend systems with PostgreSQL and Scala. 
              I'm passionate about integrating AI technologies to create intelligent, user-friendly applications that solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <Code className="text-emerald-400" size={24} />
                <span className="text-gray-300">Clean Code</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <Cpu className="text-cyan-400" size={24} />
                <span className="text-gray-300">AI Integration</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <TabletSmartphone className="text-yellow-400" size={24} />
                <span className="text-gray-300">Responsive Design</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <Database className="text-blue-400" size={24} />
                <span className="text-gray-300">Scalable Systems</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300">
            <h4 className="text-2xl font-semibold mb-6 text-cyan-400">Quick Facts</h4>
            <div className="space-y-6">
              <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                <span className="text-gray-400">Experience</span>
                <span className="text-white font-semibold">3+ Years</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                <span className="text-gray-400">Location</span>
                <span className="text-white font-semibold">Canada</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                <span className="text-gray-400">Specialization</span>
                <span className="text-white font-semibold">Frontend Engineering</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-400">Education</span>
                <span className="text-white font-semibold">B.Cosc (Honours) Computer Science</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
import React from 'react';
import { Mail, Phone, Github, Linkedin, Terminal, Zap } from 'lucide-react';
import { HeroSectionProps } from './types';

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} 
        />
      </div>

      <div className="text-center max-w-5xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center floating">
            <Terminal size={64} className="text-white" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Lakhveer Singh
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-4 flex items-center justify-center gap-2">
            <Zap className="text-emerald-400" size={28} />
            <span>Full Stack Developer with Frontend Expertise</span>
          </div>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
          Full stack developer with specialized expertise in frontend technologies and user experience. Proficient across the entire development stack with particular strength in React, Next.js, and modern JavaScript frameworks.
          Currently building innovative AI-driven applications that deliver scalable, intelligent solutions.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="mailto:lakhveersingh10599@gmail.com" 
            className="p-4 bg-gray-800/50 hover:bg-emerald-600/20 border border-gray-700 hover:border-emerald-500/50 rounded-xl transition-all duration-300 hover-scale glow-on-hover"
          >
            <Mail size={24} className="text-emerald-400" />
          </a>
          <a 
            href="tel:+1-705-929-4097" 
            className="p-4 bg-gray-800/50 hover:bg-cyan-600/20 border border-gray-700 hover:border-cyan-500/50 rounded-xl transition-all duration-300 hover-scale"
          >
            <Phone size={24} className="text-cyan-400" />
          </a>
          <a 
            href="https://github.com/lsingh23" 
            className="p-4 bg-gray-800/50 hover:bg-gray-600/20 border border-gray-700 hover:border-gray-500/50 rounded-xl transition-all duration-300 hover-scale"
          >
            <Github size={24} className="text-gray-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/lakhveer-singh-550669200/" 
            className="p-4 bg-gray-800/50 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-500/50 rounded-xl transition-all duration-300 hover-scale"
          >
            <Linkedin size={24} className="text-blue-400" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover-scale glow-on-hover border border-emerald-500/20"
        >
          Explore My Journey
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { HeroSectionProps } from './types';

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6">
      <div className="max-w-3xl mx-auto w-full">
        <div className="animate-fade-in">
          <p className="mono text-indigo-400 text-sm mb-6">Hi, I&apos;m</p>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-50 tracking-tight leading-[1.1] mb-6">
            Lakhveer Singh<span className="text-indigo-400">.</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed">
            Full Stack Developer with Frontend Expertise
          </h2>
          <p className="text-zinc-500 leading-relaxed max-w-xl mb-12">
            Building AI-powered web applications with React, Next.js, and TypeScript.
            Currently a Founding Engineer crafting intelligent solutions at Kindgi.
          </p>

          <div className="flex items-center gap-6 mb-24">
            <a
              href="mailto:lakhveersingh10599@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/lsingh23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/lakhveer-singh-550669200/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-300 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="text-zinc-700 hover:text-zinc-500 transition-colors duration-200"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

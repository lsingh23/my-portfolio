import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { HeroSectionProps } from './types';

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="animate-fade-in">
          <div className="inline-block mb-8">
            <span className="btn-pill btn-pill-ghost text-xs mono tracking-wider">
              Full Stack Developer
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6">
            <span className="gradient-text">Lakhveer</span>
            <br />
            <span className="gradient-text">Singh</span>
            <span className="gradient-text-accent">.</span>
          </h1>

          <h2 className="text-lg md:text-xl text-white/40 mb-6 leading-relaxed max-w-xl font-light">
            Building AI-powered web applications with React, Next.js, and TypeScript.
          </h2>
          <p className="text-white/30 leading-relaxed max-w-lg mb-12 text-sm">
            Currently a Founding Engineer crafting intelligent solutions at Kindgi —
            architecting AI-driven applications from the ground up.
          </p>

          <div className="flex items-center gap-4 mb-24">
            <a
              href="mailto:lakhveersingh10599@gmail.com"
              className="btn-pill btn-pill-primary"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/lsingh23"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-ghost !p-3"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/lakhveer-singh-550669200/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-ghost !p-3"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="text-white/20 hover:text-white/50 transition-all duration-300 animate-float"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

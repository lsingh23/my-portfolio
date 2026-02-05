import React from 'react';
import { ArrowDown, ArrowRight, Github, Linkedin } from 'lucide-react';
import { HeroSectionProps } from './types';

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="animate-fade-in max-w-3xl">
        {/* Brand Lockup */}
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)] flex items-center justify-center">
            <span className="text-white text-xs font-bold">LS</span>
          </div>
          <span className="text-sm font-medium text-white/60 tracking-wide">Lakhveer Singh</span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.5rem,10vw,5.5rem)] font-extrabold leading-[1.1] tracking-tight text-white mb-6">
          Full Stack Developer
        </h1>

        {/* Subtext */}
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/55 font-normal max-w-xl mx-auto leading-relaxed mb-12">
          Building AI-powered web applications with React, Next.js, and TypeScript.
        </p>

        {/* CTA + Social */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:lakhveersingh10599@gmail.com"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--color-accent)] text-white font-semibold text-[15px] hover:bg-[var(--color-accent-hover)] transition-colors shadow-[0_4px_24px_-4px_rgba(99,108,245,0.35)]"
          >
            Get in Touch
            <ArrowRight size={16} />
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/lsingh23"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/[0.15] transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/lakhveer-singh-550669200/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/[0.15] transition-all"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 text-white/20 hover:text-white/45 transition-colors animate-float"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} />
      </button>
    </section>
  );
};

export default HeroSection;

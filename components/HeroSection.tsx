import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { HeroSectionProps } from './types';

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12 relative">
      <div className="max-w-[720px] w-full mx-auto md:mx-0 md:ml-[max(calc(50vw-500px),3rem)] relative z-10">
        <div className="animate-fade-in-up stagger-1">
          {/* Geist Mono status line */}
          <p className="section-label mb-8">
            // full stack developer
          </p>
        </div>

        {/* Display — Clash Display 700, 64–80px */}
        <h1 className="headline text-[clamp(64px,10vw,80px)] mb-2 animate-fade-in-up stagger-2">
          Lakhveer
        </h1>
        <h1 className="headline text-[clamp(64px,10vw,80px)] mb-8 animate-fade-in-up stagger-3">
          Singh<span className="cursor-blink" />
        </h1>

        {/* One-liner — Switzer 400, 18px, text-secondary */}
        <p className="text-[var(--text-secondary)] max-w-md leading-relaxed mb-10 text-[18px] animate-fade-in-up stagger-4">
          Building AI-powered web applications with modern tooling
          and clean architecture.
        </p>

        {/* CTA + social icons */}
        <div className="flex flex-wrap items-center gap-4 animate-fade-in-up stagger-5">
          <button
            onClick={() => scrollToSection('contact')}
            className="cta-button"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              Get in Touch
              <ArrowRight size={16} />
            </span>
          </button>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/lsingh23"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[var(--border-default)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-mint)] hover:border-[var(--border-hover)] transition-all duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/lakhveer-singh-550669200/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[var(--border-default)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-mint)] hover:border-[var(--border-hover)] transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

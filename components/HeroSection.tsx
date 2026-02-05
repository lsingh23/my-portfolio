import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { HeroSectionProps } from './types';

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-12">
      <div className="max-w-[760px] w-full mx-auto md:mx-0 md:ml-[max(calc(50vw-500px),3rem)]">
        <div className="animate-fade-in">
          {/* Monospace status line */}
          <p className="section-label mb-8">
            // Full Stack Developer
          </p>

          {/* Headline — Clash Display, left-aligned, huge */}
          <h1 className="headline text-[clamp(3rem,10vw,4.5rem)] mb-6">
            Lakhveer<br />Singh
          </h1>

          {/* Subtext — Switzer body */}
          <p className="text-[var(--text-secondary)] max-w-md leading-relaxed mb-10 text-[15px]">
            Building AI-powered web applications with modern tooling
            and clean architecture. Currently a Founding Engineer at Kindgi.
          </p>

          {/* CTA + Social */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--accent-teal)] text-white font-semibold text-[15px] hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(43,107,94,0.20)]"
            >
              Get in Touch
              <ArrowRight size={16} />
            </button>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/lsingh23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-black/[0.06] bg-[var(--surface)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-teal)] hover:border-[var(--accent-teal)]/30 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/lakhveer-singh-550669200/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-black/[0.06] bg-[var(--surface)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-teal)] hover:border-[var(--accent-teal)]/30 transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative dot grid — right side breathing room */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[200px] h-[280px] dot-grid rounded-2xl opacity-60" />
    </section>
  );
};

export default HeroSection;

import React from 'react';
import { ArrowDown, ArrowRight, Github, Linkedin } from 'lucide-react';
import { HeroSectionProps } from './types';

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="animate-fade-in max-w-3xl">
        {/* Brand Lockup */}
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <div className="w-7 h-7 rounded-lg bg-[var(--accent)] flex items-center justify-center">
            <span className="text-white text-xs font-bold">LS</span>
          </div>
          <span className="text-sm font-medium text-[var(--text-secondary)] tracking-wide">Lakhveer Singh</span>
        </div>

        {/* Headline — Heroic display */}
        <h1 className="text-[clamp(2.8rem,10vw,3.75rem)] font-bold leading-[1.2] tracking-[-0.025em] text-[var(--text-primary)] mb-6">
          Full Stack Developer
        </h1>

        {/* Monospace status line */}
        <p className="font-[JetBrains_Mono,ui-monospace,monospace] text-[13px] tracking-[0.03em] text-[var(--text-muted)] mb-10">
          react &middot; next.js &middot; typescript &middot; ai agents
        </p>

        {/* Subtext */}
        <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[var(--text-secondary)] font-normal max-w-md mx-auto leading-relaxed mb-12">
          Building AI-powered web applications with modern tooling and clean architecture.
        </p>

        {/* CTA + Social */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:lakhveersingh10599@gmail.com"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--accent)] text-white font-semibold text-[15px] hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(43,138,126,0.25)]"
          >
            Get in Touch
            <ArrowRight size={16} />
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/lsingh23"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-black/[0.06] bg-white/60 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/20 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/lakhveer-singh-550669200/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-black/[0.06] bg-white/60 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/20 transition-all"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors animate-float"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} />
      </button>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavigationProps } from './types';

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection
}) => {
  const navItems = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-lg">
      <div className="nav-pill px-6">
        <div className="flex justify-between items-center h-11">
          <button
            onClick={() => scrollToSection('home')}
            className="headline text-sm hover:text-[var(--accent-mint)] transition-colors"
          >
            LS
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-3.5 py-1 rounded-full text-[13px] font-medium transition-all duration-200 ${
                  activeSection === item.toLowerCase()
                    ? 'text-[var(--accent-mint)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="nav-dot" />
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-[var(--bg-surface)]/95 border border-[var(--border-default)] rounded-2xl overflow-hidden backdrop-blur-xl">
          <div className="px-3 py-3 space-y-0.5">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-4 py-2.5 text-sm rounded-xl transition-all duration-200 ${
                  activeSection === item.toLowerCase()
                    ? 'text-[var(--accent-mint)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.02]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

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
      <div className="bg-[#F7F5F1]/90 border border-black/[0.06] rounded-full px-6 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.06)]">
        <div className="flex justify-between items-center h-11">
          <button
            onClick={() => scrollToSection('home')}
            className="headline text-sm hover:text-[var(--accent-teal)] transition-colors"
          >
            LS
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-3.5 py-1 rounded-full text-[13px] font-medium transition-all duration-200 ${
                  activeSection === item.toLowerCase()
                    ? 'text-[var(--accent-teal)] bg-[rgba(43,107,94,0.08)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {item}
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
        <div className="md:hidden mt-2 bg-[#F7F5F1]/95 border border-black/[0.06] rounded-2xl overflow-hidden backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <div className="px-3 py-3 space-y-0.5">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-4 py-2.5 text-sm rounded-xl transition-all duration-200 ${
                  activeSection === item.toLowerCase()
                    ? 'bg-[rgba(43,107,94,0.08)] text-[var(--accent-teal)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/[0.02]'
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

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
      <div className="bg-[rgba(14,14,22,0.65)] border border-white/[0.07] rounded-full px-6 backdrop-blur-xl">
        <div className="flex justify-between items-center h-11">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-semibold text-white/90 hover:text-white transition-colors"
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
                    ? 'text-white bg-white/[0.08]'
                    : 'text-white/45 hover:text-white/75'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white/50 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-[rgba(14,14,22,0.85)] border border-white/[0.07] rounded-2xl overflow-hidden backdrop-blur-xl">
          <div className="px-3 py-3 space-y-0.5">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-4 py-2.5 text-sm rounded-xl transition-all duration-200 ${
                  activeSection === item.toLowerCase()
                    ? 'bg-white/[0.08] text-white'
                    : 'text-white/45 hover:text-white/75 hover:bg-white/[0.04]'
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

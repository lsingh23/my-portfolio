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
    <nav className="fixed top-0 w-full bg-[#0A0A0B]/80 backdrop-blur-md border-b border-zinc-800/50 z-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-semibold text-zinc-50 tracking-tight hover:text-indigo-400 transition-colors duration-200"
          >
            LS
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-[13px] transition-colors duration-200 ${
                  activeSection === item.toLowerCase()
                    ? 'text-zinc-50'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-zinc-400 hover:text-zinc-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-800/50 bg-[#0A0A0B]/95 backdrop-blur-md">
          <div className="max-w-3xl mx-auto px-6 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-sm text-zinc-400 hover:text-zinc-50 transition-colors rounded-lg hover:bg-zinc-900"
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

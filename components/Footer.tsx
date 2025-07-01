import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 Lakhveer Singh. Crafted with React, TypeScript & Tailwind CSS.
          </div>
          <div className="flex items-center space-x-4 text-gray-400">
            <span>Made with</span>
            <div className="flex space-x-2">
              <span className="text-emerald-400">⚛️</span>
              <span className="text-blue-400">📘</span>
              <span className="text-cyan-400">🎨</span>
            </div>
            <span>and lots of ☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
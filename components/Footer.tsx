import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-sm text-white/25">
          &copy; {new Date().getFullYear()} Lakhveer Singh
        </span>
        <span className="mono text-xs text-white/15">
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
};

export default Footer;

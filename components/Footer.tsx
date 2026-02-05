import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} Lakhveer Singh
        </span>
        <span className="text-xs text-white/12">
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Lakhveer Singh
        </span>
        <span className="mono text-xs text-zinc-700">
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
};

export default Footer;

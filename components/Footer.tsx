import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 md:px-12">
      <div className="max-w-[760px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-xs text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Lakhveer Singh
        </span>
        <span className="section-label text-[10px] opacity-50">
          Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
};

export default Footer;

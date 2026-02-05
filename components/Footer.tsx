import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6">
      <div className="max-w-[760px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-xs text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Lakhveer Singh
        </span>
        <span className="font-[JetBrains_Mono,ui-monospace,monospace] text-[11px] text-[var(--text-muted)] opacity-60 tracking-[0.03em]">
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
};

export default Footer;

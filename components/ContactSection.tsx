import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  const links = [
    {
      icon: <Mail size={16} />,
      label: 'lakhveersingh10599@gmail.com',
      href: 'mailto:lakhveersingh10599@gmail.com',
    },
    {
      icon: <Phone size={16} />,
      label: '+1 (705) 929-4097',
      href: 'tel:+1-705-929-4097',
    },
    {
      icon: <Github size={16} />,
      label: 'github.com/lsingh23',
      href: 'https://github.com/lsingh23',
      external: true,
    },
    {
      icon: <Linkedin size={16} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lakhveer-singh-550669200/',
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-[140px] px-6 md:px-12">
      <div className="max-w-[760px] mx-auto">
        <p className="section-label mb-8">Contact</p>

        <h3 className="headline text-[clamp(1.5rem,4vw,1.75rem)] mb-4">
          Let&apos;s work together.
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed max-w-lg text-[15px] mb-10">
          Always open to new opportunities and interesting projects.
          Reach out if you&apos;d like to collaborate.
        </p>

        <div className="space-y-0">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="cert-row group"
            >
              <div className="flex items-center gap-3">
                <span className="text-[var(--text-muted)] group-hover:text-[var(--accent-teal)] transition-colors">
                  {link.icon}
                </span>
                <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors text-sm">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight
                size={14}
                className="cert-arrow text-[var(--text-muted)] shrink-0"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

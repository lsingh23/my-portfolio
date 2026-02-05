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
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-8">
          Contact
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
          Let&apos;s work together.
        </h3>
        <p className="text-white/35 leading-relaxed max-w-lg text-[15px] mb-10">
          I&apos;m always open to new opportunities and interesting projects.
          Feel free to reach out if you&apos;d like to collaborate.
        </p>

        <div className="space-y-2.5">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="card flex items-center justify-between p-4 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-white/25 group-hover:text-[var(--color-accent)] transition-colors">
                  {link.icon}
                </span>
                <span className="text-white/50 group-hover:text-white/85 transition-colors text-sm">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight
                size={14}
                className="text-white/12 group-hover:text-[var(--color-accent)] transition-colors shrink-0"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

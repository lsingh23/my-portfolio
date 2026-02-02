import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  const links = [
    {
      icon: <Mail size={18} className="text-zinc-600" />,
      label: 'lakhveersingh10599@gmail.com',
      href: 'mailto:lakhveersingh10599@gmail.com',
    },
    {
      icon: <Phone size={18} className="text-zinc-600" />,
      label: '+1 (705) 929-4097',
      href: 'tel:+1-705-929-4097',
    },
    {
      icon: <Github size={18} className="text-zinc-600" />,
      label: 'github.com/lsingh23',
      href: 'https://github.com/lsingh23',
      external: true,
    },
    {
      icon: <Linkedin size={18} className="text-zinc-600" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lakhveer-singh-550669200/',
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="mono text-indigo-400 text-sm mb-8">Contact</h2>
        <p className="text-2xl md:text-3xl font-semibold text-zinc-50 leading-snug mb-4">
          Let&apos;s work together.
        </p>
        <p className="text-zinc-500 leading-relaxed mb-10 max-w-lg">
          I&apos;m always open to new opportunities and interesting projects.
          Feel free to reach out if you&apos;d like to collaborate.
        </p>

        <div className="space-y-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center justify-between p-4 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors duration-200 group"
            >
              <div className="flex items-center gap-3">
                {link.icon}
                <span className="text-zinc-300 group-hover:text-zinc-50 transition-colors duration-200">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight
                size={14}
                className="text-zinc-700 group-hover:text-indigo-400 transition-colors duration-200 shrink-0"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

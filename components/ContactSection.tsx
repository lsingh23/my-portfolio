import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  const links = [
    {
      icon: <Mail size={18} />,
      label: 'lakhveersingh10599@gmail.com',
      href: 'mailto:lakhveersingh10599@gmail.com',
    },
    {
      icon: <Phone size={18} />,
      label: '+1 (705) 929-4097',
      href: 'tel:+1-705-929-4097',
    },
    {
      icon: <Github size={18} />,
      label: 'github.com/lsingh23',
      href: 'https://github.com/lsingh23',
      external: true,
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lakhveer-singh-550669200/',
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-10">Contact</p>

        <div className="glass-card-glow p-8 md:p-10 mb-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white/90 leading-snug mb-4">
            Let&apos;s work together<span className="gradient-text-accent">.</span>
          </h3>
          <p className="text-white/35 leading-relaxed max-w-lg text-[15px]">
            I&apos;m always open to new opportunities and interesting projects.
            Feel free to reach out if you&apos;d like to collaborate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="glass-card flex items-center justify-between p-5 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-white/25 group-hover:text-violet-400 transition-colors duration-300">
                  {link.icon}
                </span>
                <span className="text-white/55 group-hover:text-white/90 transition-colors duration-300 text-sm">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight
                size={14}
                className="text-white/15 group-hover:text-violet-400 transition-colors duration-300 shrink-0"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

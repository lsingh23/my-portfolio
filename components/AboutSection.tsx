import React from 'react';

const AboutSection: React.FC = () => {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux',
    'Tailwind CSS', 'HTML/CSS', 'Node.js', 'PostgreSQL', 'Scala',
    'Java', 'SQL', 'Docker', 'Git', 'AI Agents', 'RAG Systems',
    'Cypress', 'Playwright', 'Jest', 'CI/CD', 'REST APIs',
    'System Design', 'Linux/Unix'
  ];

  return (
    <section id="about" className="py-[140px] px-6">
      <div className="max-w-[760px] mx-auto">
        <p className="font-[JetBrains_Mono,ui-monospace,monospace] text-xs font-medium tracking-[0.03em] text-[var(--accent)] mb-8">
          About
        </p>

        <h2 className="text-2xl md:text-[28px] font-bold text-[var(--text-primary)] leading-snug tracking-[-0.025em] mb-6">
          Software engineer building production web apps &amp; AI-powered solutions.
        </h2>

        <p className="text-[var(--text-secondary)] leading-[1.75] text-[15px] mb-16">
          3+ years of experience across the full stack. Currently a Founding Engineer
          at Kindgi, where I architect and develop AI-driven applications using React,
          Next.js, and TypeScript. My work spans from frontend development with React
          and Redux to backend systems with PostgreSQL and Scala.
        </p>

        <p className="font-[JetBrains_Mono,ui-monospace,monospace] text-xs font-medium tracking-[0.03em] text-[var(--accent)] mb-5">
          Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

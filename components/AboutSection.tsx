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
    <section id="about" className="py-[140px] px-6 md:px-12">
      <div className="max-w-[720px] mx-auto">
        <p className="section-label mb-8">About</p>

        <h2 className="headline-sub text-[clamp(28px,4vw,36px)] mb-6">
          Software engineer building production web apps &amp; AI-powered solutions.
        </h2>

        <p className="text-[var(--text-secondary)] leading-[1.75] text-[17px] mb-16">
          3+ years of experience across the full stack. Currently a Founding Engineer
          at Kindgi, where I architect and develop AI-driven applications using React,
          Next.js, and TypeScript. My work spans from frontend development with React
          and Redux to backend systems with PostgreSQL and Scala.
        </p>

        <p className="section-label mb-5">Technologies</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="tech-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

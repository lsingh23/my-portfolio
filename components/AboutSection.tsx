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
    <section id="about" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="mono text-indigo-400 text-sm mb-8">About</h2>
        <div className="space-y-5">
          <p className="text-zinc-300 text-lg leading-relaxed">
            I&apos;m a software engineer with 3+ years of experience building production web
            applications and AI-powered solutions. Currently working as a Founding Engineer
            at Kindgi, where I architect and develop AI-driven applications using React,
            Next.js, and TypeScript.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            My experience spans frontend development with React and Redux to backend
            systems with PostgreSQL and Scala. I focus on integrating AI technologies —
            including AI agents, RAG systems, and web containers — to build intelligent
            applications that solve real-world problems.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="mono text-zinc-600 text-xs uppercase tracking-wider mb-4">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-[13px] text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-md hover:text-zinc-200 hover:border-zinc-700 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

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
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-10">About</p>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Bio Card — spans full width on top */}
          <div className="md:col-span-2 glass-card-glow p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white/90 mb-5 leading-snug">
              Software engineer building production web apps &amp; AI-powered solutions.
            </h3>
            <p className="text-white/40 leading-relaxed text-[15px]">
              3+ years of experience across the full stack. Currently a Founding Engineer
              at Kindgi, where I architect and develop AI-driven applications using React,
              Next.js, and TypeScript. My work spans from frontend development with React
              and Redux to backend systems with PostgreSQL and Scala.
            </p>
          </div>

          {/* Focus Area Card */}
          <div className="glass-card p-7">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5">
              <span className="text-lg">&#x2728;</span>
            </div>
            <h4 className="font-semibold text-white/85 mb-2">AI Integration</h4>
            <p className="text-white/35 text-sm leading-relaxed">
              Integrating AI agents, RAG systems, and web containers to build
              intelligent applications that solve real-world problems.
            </p>
          </div>

          {/* Approach Card */}
          <div className="glass-card p-7">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
              <span className="text-lg">&#x26A1;</span>
            </div>
            <h4 className="font-semibold text-white/85 mb-2">Full Stack</h4>
            <p className="text-white/35 text-sm leading-relaxed">
              End-to-end development from database design and API creation
              to scalable, high-performance frontend deployments.
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-10">
          <p className="section-label mb-5">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
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

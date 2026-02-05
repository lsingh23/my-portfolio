import React from 'react';

const EducationSection: React.FC = () => {
  const coursework = [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Programming',
    'Artificial Intelligence',
    'Software Engineering',
    'UX/UI Design',
    'Object-Oriented Programming',
    'System Analysis'
  ];

  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-10">Education</p>
        <div className="glass-card-glow p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-white/90">
              Bachelor of Computer Science (Honours)
            </h3>
            <span className="mono text-xs text-white/25 shrink-0 sm:mt-1.5">2019 — 2023</span>
          </div>
          <p className="text-white/40 text-sm mb-8">
            Laurentian University &middot; Sudbury, ON, Canada
          </p>
          <div>
            <p className="section-label mb-4">Relevant Coursework</p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, index) => (
                <span key={index} className="skill-tag">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

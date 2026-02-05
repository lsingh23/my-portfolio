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
    <section id="education" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-8">
          Education
        </p>

        <div className="card p-7">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-2">
            <h3 className="text-lg font-bold text-white/90">
              Bachelor of Computer Science (Honours)
            </h3>
            <span className="text-xs text-white/25 shrink-0 sm:mt-1.5 tabular-nums">2019 — 2023</span>
          </div>
          <p className="text-white/35 text-sm mb-7">
            Laurentian University &middot; Sudbury, ON, Canada
          </p>

          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-4">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course, index) => (
              <span key={index} className="tag">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

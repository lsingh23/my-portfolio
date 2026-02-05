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
    <section id="education" className="py-[140px] px-6">
      <div className="max-w-[760px] mx-auto">
        <p className="font-[JetBrains_Mono,ui-monospace,monospace] text-xs font-medium tracking-[0.03em] text-[var(--accent)] mb-8">
          Education
        </p>

        <div className="card p-8 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-2">
            <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-[-0.025em]">
              Bachelor of Computer Science (Honours)
            </h3>
            <span className="font-[JetBrains_Mono,ui-monospace,monospace] text-xs text-[var(--text-muted)] shrink-0 sm:mt-1.5 tabular-nums tracking-[0.03em]">
              2019 — 2023
            </span>
          </div>
          <p className="text-[var(--text-muted)] text-sm mb-8">
            Laurentian University &middot; Sudbury, ON, Canada
          </p>

          <p className="font-[JetBrains_Mono,ui-monospace,monospace] text-xs font-medium tracking-[0.03em] text-[var(--accent)] mb-4">
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

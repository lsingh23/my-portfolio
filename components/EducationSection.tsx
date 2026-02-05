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
    <section id="education" className="py-[140px] px-6 md:px-12">
      <div className="max-w-[720px] mx-auto">
        <p className="section-label mb-8">Education</p>

        {/* Text row — no card */}
        <div className="border-b border-[var(--border-default)] pb-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-2">
            <h3 className="headline-sub text-lg">
              Bachelor of Computer Science (Honours)
            </h3>
            <span className="section-label text-[11px] shrink-0 sm:mt-1.5">
              2019 — 2023
            </span>
          </div>
          <p className="text-[var(--text-secondary)] text-sm mb-8">
            Laurentian University &middot; Sudbury, ON, Canada
          </p>

          <p className="section-label mb-4">Relevant Coursework</p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course, index) => (
              <span key={index} className="tech-pill">
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

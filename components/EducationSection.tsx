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
      <div className="max-w-[760px] mx-auto">
        <p className="section-label mb-8">Education</p>

        <div className="card card-bar-slate p-8 md:p-10">
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-2">
              <h3 className="headline text-lg">
                Bachelor of Computer Science (Honours)
              </h3>
              <span className="section-label text-[11px] shrink-0 sm:mt-1.5">
                2019 — 2023
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-sm mb-8">
              Laurentian University &middot; Sudbury, ON, Canada
            </p>

            <p className="section-label mb-4">Relevant Coursework</p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, index) => (
                <span key={index} className="tag">
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

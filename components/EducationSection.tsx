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
    <section id="education" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="mono text-indigo-400 text-sm mb-8">Education</h2>
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
            <h3 className="text-lg font-semibold text-zinc-50">
              Bachelor of Computer Science (Honours)
            </h3>
            <span className="mono text-xs text-zinc-600">2019 — 2023</span>
          </div>
          <p className="text-zinc-400 text-sm mb-6">
            Laurentian University · Sudbury, ON, Canada
          </p>
          <div>
            <h4 className="mono text-zinc-600 text-xs uppercase tracking-wider mb-3">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-[13px] text-zinc-500 bg-zinc-900 border border-zinc-800 rounded-md"
                >
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

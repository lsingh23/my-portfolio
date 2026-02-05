import React from 'react';
import { experienceData } from './data';

const barColors = ['card-bar-teal', 'card-bar-terra', 'card-bar-slate', 'card-bar-teal'];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-[140px] px-6 md:px-12">
      <div className="max-w-[760px] mx-auto">
        <p className="section-label mb-8">Experience</p>

        <div className="space-y-5">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`card ${barColors[index % barColors.length]} p-8 md:p-10 ${index % 2 === 1 ? 'md:ml-8' : ''}`}
            >
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-5">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">
                      {exp.title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm">{exp.company}</p>
                  </div>
                  <span className="section-label text-[11px] shrink-0 sm:mt-0.5">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-terra)] mt-[7px] shrink-0 opacity-60" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

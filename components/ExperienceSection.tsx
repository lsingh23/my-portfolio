import React from 'react';
import { experienceData } from './data';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-8">
          Experience
        </p>

        <div className="space-y-4">
          {experienceData.map((exp, index) => (
            <div key={index} className="card p-6 group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-4">
                <div>
                  <h3 className="text-base font-semibold text-white/90 group-hover:text-white transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-white/35 text-sm">{exp.company}</p>
                </div>
                <span className="text-xs text-white/25 shrink-0 sm:mt-0.5 tabular-nums">{exp.period}</span>
              </div>
              <ul className="space-y-2.5">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/40 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] opacity-40 mt-2 shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

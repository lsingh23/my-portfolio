import React from 'react';
import { experienceData } from './data';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-[140px] px-6">
      <div className="max-w-[760px] mx-auto">
        <p className="font-[JetBrains_Mono,ui-monospace,monospace] text-xs font-medium tracking-[0.03em] text-[var(--accent)] mb-8">
          Experience
        </p>

        <div className="space-y-4">
          {experienceData.map((exp, index) => (
            <div key={index} className="card card-accent p-8 md:p-10 group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-5">
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    {exp.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm">{exp.company}</p>
                </div>
                <span className="font-[JetBrains_Mono,ui-monospace,monospace] text-xs text-[var(--text-muted)] shrink-0 sm:mt-0.5 tabular-nums tracking-[0.03em]">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-warm)] mt-1.5 shrink-0 opacity-70" />
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

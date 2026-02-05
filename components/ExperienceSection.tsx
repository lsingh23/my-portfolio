import React from 'react';
import { experienceData } from './data';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-10">Experience</p>
        <div className="space-y-4">
          {experienceData.map((exp, index) => (
            <div key={index} className="glass-card p-7 group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-white/40 text-sm">{exp.company}</p>
                </div>
                <span className="mono text-xs text-white/25 shrink-0 sm:mt-1">{exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/40 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-violet-400/50 mt-2 shrink-0" />
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

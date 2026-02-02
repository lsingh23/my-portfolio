import React from 'react';
import { experienceData } from './data';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="mono text-indigo-400 text-sm mb-12">Experience</h2>
        <div className="space-y-16">
          {experienceData.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-50">{exp.title}</h3>
                  <p className="text-zinc-400 text-sm">{exp.company}</p>
                </div>
                <span className="mono text-xs text-zinc-600 shrink-0">{exp.period}</span>
              </div>
              <ul className="space-y-2.5">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                    <span className="text-zinc-700 mt-0.5 shrink-0">&mdash;</span>
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

import React from 'react';
import { SkillBarProps } from './types';

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <div 
      className="mb-4"
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeInUp 0.6s ease-out forwards',
        opacity: 0
      }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
        {skill.level && <span className="text-emerald-400 text-sm">{skill.level}%</span>}
      </div>
      {skill.level && (
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: `${skill.level}%`,
              animation: `fillBar 1.5s ease-out ${index * 0.1}s forwards`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SkillBar;
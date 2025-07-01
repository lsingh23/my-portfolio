import React from 'react';
import { AnimatedSectionProps } from './types';

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, id }) => {
  return (
    <div 
      id={id}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
import React from 'react';
import useIntersection from '../hooks/useIntersection';

const ScrollReveal = ({ children, className = '', delay = 0, threshold = 0.2 }) => {
  const { ref, isVisible } = useIntersection({ threshold });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-base ${isVisible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

import React from 'react';
import useIntersection from '../hooks/useIntersection';

/**
 * variant="fade" (default, unchanged): fade + rise — used everywhere this
 * component was already used before this redesign.
 * variant="clip": mask/clip-path reveal ("printing into place") — opt in
 * per call site, e.g. headlines.
 */
const ScrollReveal = ({ children, className = '', delay = 0, threshold = 0.2, variant = 'fade' }) => {
  const { ref, isVisible } = useIntersection({ threshold });
  const base = variant === 'clip' ? 'reveal-clip' : 'reveal-base';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${base} ${isVisible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

import React from 'react';

/**
 * Four small viewfinder-style corner brackets, absolutely positioned inside
 * a `relative` (and usually `group`) parent. By default they're hidden and
 * animate in on hover/focus of the parent; pass `active` to keep them
 * permanently visible (useful on cards that don't rely on hover, e.g. a
 * featured/spotlight card, or on touch devices where hover doesn't fire).
 */
const CornerMarks = ({ active = false, accent = 'primary', className = '' }) => {
  const accentClass = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    tertiary: 'border-tertiary',
  }[accent] || 'border-primary';

  const base = 'absolute h-4 w-4 transition-all duration-300 ease-out';
  const visibility = active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-within:opacity-100';
  const shift = active ? '' : 'group-hover:translate-x-0 group-hover:translate-y-0 group-focus-within:translate-x-0 group-focus-within:translate-y-0';

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <span className={`${base} ${visibility} ${shift} left-2 top-2 border-l-2 border-t-2 ${accentClass} ${active ? '' : '-translate-x-1 -translate-y-1'}`} />
      <span className={`${base} ${visibility} ${shift} right-2 top-2 border-r-2 border-t-2 ${accentClass} ${active ? '' : 'translate-x-1 -translate-y-1'}`} />
      <span className={`${base} ${visibility} ${shift} bottom-2 left-2 border-b-2 border-l-2 ${accentClass} ${active ? '' : '-translate-x-1 translate-y-1'}`} />
      <span className={`${base} ${visibility} ${shift} bottom-2 right-2 border-b-2 border-r-2 ${accentClass} ${active ? '' : 'translate-x-1 translate-y-1'}`} />
    </div>
  );
};

export default CornerMarks;

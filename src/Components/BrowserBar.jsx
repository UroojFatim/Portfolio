import React from 'react';

/**
 * Small macOS-style browser/window chrome bar (traffic-light dots + label).
 * A recurring "this is real, running software" motif — used on TerminalCard
 * and on project cards so the whole site reads unmistakably as a
 * developer's work, not just a themed brochure.
 */
const BrowserBar = ({ label = '', className = '' }) => (
  <div className={`flex min-w-0 items-center gap-2 border-b border-outline-variant bg-on-surface/5 px-4 py-2.5 ${className}`}>
    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400/70" />
    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400/70" />
    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400/70" />
    {label && <span className="ml-3 truncate font-mono text-[11px] text-on-surface-variant">{label}</span>}
  </div>
);

export default BrowserBar;

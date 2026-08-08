import React, { useEffect, useState } from 'react';
import BrowserBar from './BrowserBar';

const LINES = [
  { tokens: [['const', 'kw'], [' dev', 'var'], [' = ', 'op'], ['{', 'punc']] },
  { tokens: [["  name: ", 'key'], ["'Urooj F.'", 'str'], [',', 'punc']] },
  { tokens: [["  role: ", 'key'], ["'Full Stack'", 'str'], [',', 'punc']] },
  { tokens: [["  stack: ", 'key'], ["['React','Node']", 'str'], [',', 'punc']] },
  { tokens: [["  focus: ", 'key'], ["'SaaS + AI'", 'str'], [',', 'punc']] },
  { tokens: [["  status: ", 'key'], ["'shipping'", 'str']] },
  { tokens: [['}', 'punc'], [';', 'punc']] },
];

const TOKEN_CLASS = {
  kw: 'text-tertiary',
  var: 'text-on-surface',
  op: 'text-on-surface-variant',
  key: 'text-secondary',
  str: 'text-primary',
  punc: 'text-on-surface-variant',
};

const FULL_TEXT = LINES.map((l) => l.tokens.map((t) => t[0]).join('')).join('\n');

/**
 * A small "code editor" style widget that types out a developer profile
 * object, then holds, then retypes — a lightweight nod to the fact this is
 * an engineer's portfolio rather than a generic one.
 */
const TerminalCard = ({ className = '' }) => {
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing | holding | deleting

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCharCount(FULL_TEXT.length);
      return undefined;
    }

    let timer;
    if (phase === 'typing') {
      if (charCount < FULL_TEXT.length) {
        timer = setTimeout(() => setCharCount((c) => c + 1), 22);
      } else {
        timer = setTimeout(() => setPhase('holding'), 2200);
      }
    } else if (phase === 'holding') {
      timer = setTimeout(() => setPhase('deleting'), 200);
    } else if (phase === 'deleting') {
      if (charCount > 0) {
        timer = setTimeout(() => setCharCount((c) => c - 1), 10);
      } else {
        timer = setTimeout(() => setPhase('typing'), 500);
      }
    }
    return () => clearTimeout(timer);
  }, [charCount, phase]);

  // Rebuild the rendered lines up to charCount, preserving per-token coloring.
  let remaining = charCount;
  const renderedLines = [];
  for (const line of LINES) {
    if (remaining <= 0) {
      renderedLines.push([]);
      continue;
    }
    const tokens = [];
    for (const [text, kind] of line.tokens) {
      if (remaining <= 0) break;
      const slice = text.slice(0, remaining);
      tokens.push([slice, kind]);
      remaining -= text.length;
    }
    renderedLines.push(tokens);
    remaining -= 1; // account for the newline
  }

  let cursorLine = 0;
  for (let i = 0; i < renderedLines.length; i += 1) {
    if (renderedLines[i].length > 0) cursorLine = i;
  }

  return (
    <div className={`glass-card w-full min-w-0 max-w-full overflow-hidden rounded-lg text-left shadow-soft ${className}`}>
      <BrowserBar label="profile.js" />
      <pre className="max-w-full overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-6 sm:text-sm">
        {renderedLines.map((tokens, i) => (
          <div key={i} className="whitespace-pre">
            {tokens.map(([text, kind], j) => (
              <span key={j} className={TOKEN_CLASS[kind]}>{text}</span>
            ))}
            {i === cursorLine && <span className="blinking-cursor text-primary">|</span>}
          </div>
        ))}
      </pre>
    </div>
  );
};

export default TerminalCard;

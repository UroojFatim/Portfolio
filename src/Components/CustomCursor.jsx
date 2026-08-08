import React, { useEffect, useRef, useState } from 'react';

/**
 * Small dot + lagging ring cursor for fine-pointer desktops. Never attaches
 * on touch/coarse pointers or under prefers-reduced-motion — in those cases
 * this renders nothing and the real system cursor is untouched. Even on
 * desktop, `cursor: none` is only applied to <html> (see .custom-cursor-active
 * in index.css) after the first real pointermove, so there's never a moment
 * with no visible cursor at all.
 */
const CustomCursor = () => {
  const [ready, setReady] = useState(false);
  const [hovering, setHovering] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isCoarsePointer || prefersReducedMotion) return undefined;

    let started = false;
    const interactiveSelector = 'a, button, [role="button"], input, textarea, [data-cursor-hover]';

    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!started) {
        started = true;
        ring.current = { ...pos.current };
        document.documentElement.classList.add('custom-cursor-active');
        setReady(true);
      }
    };
    const handleOver = (e) => {
      if (e.target?.closest?.(interactiveSelector)) setHovering(true);
    };
    const handleOut = (e) => {
      if (e.target?.closest?.(interactiveSelector)) setHovering(false);
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    document.addEventListener('pointerover', handleOver);
    document.addEventListener('pointerout', handleOut);

    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.18;
      ring.current.y += (pos.current.y - ring.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerover', handleOver);
      document.removeEventListener('pointerout', handleOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-primary"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[100] rounded-full border transition-[width,height,border-color] duration-200 ease-out ${
          hovering ? 'h-12 w-12 border-primary' : 'h-8 w-8 border-primary/50'
        }`}
      />
    </>
  );
};

export default CustomCursor;

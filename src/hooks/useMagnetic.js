import { useEffect, useRef } from 'react';

/**
 * Subtle magnetic-pull hover effect for primary CTAs. No-ops entirely on
 * touch pointers and under prefers-reduced-motion, so it never fights tap
 * targets or motion-sensitive users — the element just behaves like a plain
 * button in those cases (no ref side effects, no dead click zones).
 */
const useMagnetic = (strength = 14) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
    };
    const handleLeave = () => {
      el.style.transform = '';
    };

    el.addEventListener('pointermove', handleMove);
    el.addEventListener('pointerleave', handleLeave);
    return () => {
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerleave', handleLeave);
    };
  }, [strength]);

  return ref;
};

export default useMagnetic;

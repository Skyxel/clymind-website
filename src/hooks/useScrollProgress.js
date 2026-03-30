import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollProgress() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const wh = window.innerHeight;
    const scrollable = rect.height - wh;
    if (scrollable <= 0) { setProgress(0.5); return; }
    const p = Math.max(0, Math.min(1, -rect.top / scrollable));
    setProgress(p);
  }, []);

  useEffect(() => {
    let rafId;
    const handler = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', handler, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', handler);
      cancelAnimationFrame(rafId);
    };
  }, [update]);

  return { containerRef, progress };
}

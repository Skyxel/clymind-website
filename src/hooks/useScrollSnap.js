import { useEffect, useRef } from 'react';

export function useScrollSnap(getSnapPoints) {
  const snapping = useRef(false);
  const timer    = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    function snap() {
      const points  = getSnapPoints();
      const y       = window.scrollY;
      const nearest = points.reduce((best, p) =>
        Math.abs(p - y) < Math.abs(best - y) ? p : best
      );

      if (Math.abs(nearest - y) < 2) return;

      snapping.current = true;
      window.scrollTo({ top: nearest, behavior: 'smooth' });

      clearTimeout(timer.current);
      timer.current = setTimeout(() => { snapping.current = false; }, 800);
    }

    function onScroll() {
      if (snapping.current) return;
      clearTimeout(timer.current);
      timer.current = setTimeout(snap, 150);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer.current);
    };
  }, [getSnapPoints]);
}

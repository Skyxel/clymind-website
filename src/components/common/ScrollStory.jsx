import { useCallback, useEffect } from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useScrollSnap } from '../../hooks/useScrollSnap';
import SectionDots from './SectionDots';
import './ScrollStory.css';

function easeOut(x) {
  return 1 - (1 - x) * (1 - x);
}

function smoothScrollTo(target, duration = 900) {
  const start = window.scrollY;
  const delta = target - start;
  const startTime = performance.now();

  function ease(t) {
    return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
  }

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + delta * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/** Middle sections: enter → pause → exit */
function getT(lp) {
  const ENTER = 0.20;
  const EXIT  = 0.80;
  if (lp < ENTER) return easeOut(lp / ENTER);
  if (lp <= EXIT)  return 1;
  const x = (lp - EXIT) / (1 - EXIT);
  return (1 - x) * (1 - x);
}

/** First section: enter earlier so it overlaps the hero exit */
function getFirstT(lp) {
  const ENTER = 0.08;
  const EXIT = 0.80;
  if (lp < ENTER) return easeOut(lp / ENTER);
  if (lp <= EXIT) return 1;
  const x = (lp - EXIT) / (1 - EXIT);
  return (1 - x) * (1 - x);
}

/** Last section: enter → stays visible forever */
function getLastT(lp) {
  const ENTER = 0.20;
  if (lp < ENTER) return easeOut(lp / ENTER);
  return 1;
}

export default function ScrollStory({ sections, sectionHeight = '170vh' }) {
  const N = sections.length;
  const { containerRef, progress } = useScrollProgress();

  // Compute snap points dynamically from the live DOM
  const getSnapPoints = useCallback(() => {
    const el = containerRef.current;
    if (!el) return [0];

    const wh         = window.innerHeight;
    const offsetTop  = el.getBoundingClientRect().top + window.scrollY;
    const totalH     = el.getBoundingClientRect().height;
    const scrollable = totalH - wh;

    // Hero snap: top of page
    const points = [0];

    // For each section, snap to its midpoint (lp = 0.5 → progress = (i+0.5)/N)
    for (let i = 0; i < N; i++) {
      const p = (i + 0.5) / N;
      points.push(offsetTop + p * scrollable);
    }

    return points;
  }, [containerRef, N]);

  useScrollSnap(getSnapPoints);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      e.preventDefault();

      const points = getSnapPoints();
      const y = window.scrollY;

      // Find the snap point nearest to current scroll
      let currentIdx = 0;
      let minDist = Infinity;
      points.forEach((p, i) => {
        const d = Math.abs(p - y);
        if (d < minDist) { minDist = d; currentIdx = i; }
      });

      const nextIdx = e.key === 'ArrowDown'
        ? Math.min(currentIdx + 1, points.length - 1)
        : Math.max(currentIdx - 1, 0);

      smoothScrollTo(points[nextIdx]);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [getSnapPoints]);

  const ts = sections.map((_, i) => {
    const lp = Math.max(0, Math.min(1, progress * N - i));
    if (i === 0) return getFirstT(lp);
    if (i === N - 1) return getLastT(lp);
    return getT(lp);
  });

  const activeIndex = ts.reduce(
    (best, value, index, arr) => (value > arr[best] ? index : best),
    0
  );
  const dotsVisible = progress > 0.01;
  const snapPoints = getSnapPoints();

  function handleSectionSelect(index) {
    const target = snapPoints[index + 1];
    if (typeof target !== 'number') return;
    smoothScrollTo(target);
  }

  return (
    <div
      ref={containerRef}
      className="scroll-story"
      style={{ height: `calc(${N} * ${sectionHeight})` }}
    >
      <div className="scroll-story__stage">
        {sections.map((Section, i) => (
          <div
            key={i}
            className={`scroll-story__layer${i === activeIndex ? ' scroll-story__layer--active' : ''}`}
            style={{ zIndex: i === activeIndex ? 2 : 1 }}
            aria-hidden={i === activeIndex ? 'false' : 'true'}
          >
            <Section t={ts[i]} />
          </div>
        ))}
      </div>

      <SectionDots
        sections={sections.map(S => ({ label: S.sectionLabel ?? S.displayName ?? S.name }))}
        activeIndex={activeIndex}
        visible={dotsVisible}
        onSelect={handleSectionSelect}
      />
    </div>
  );
}

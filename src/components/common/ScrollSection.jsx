import { useScrollProgress } from '../../hooks/useScrollProgress';
import './ScrollSection.css';

/** Fast rise from 0, decelerates near 1 */
function easeOut(x) {
  return 1 - (1 - x) * (1 - x);
}

/**
 * 0 → 1 → 0 with fast entry and fast exit — no static pause.
 * Content appears quickly, then disappears quickly as soon as exit starts.
 */
export function getT(progress) {
  if (progress <= 0.5) {
    return easeOut(progress * 2);           // fast rise: 0 → 1
  }
  const x = (progress - 0.5) * 2;          // 0 → 1 during exit half
  return (1 - x) * (1 - x);               // fast drop: 1 → 0
}

/** 1 → 0 immediately — for hero exit only */
export function getExitT(progress) {
  const HOLD = 0.38;
  if (progress <= HOLD) return 1;
  const x = (progress - HOLD) / (1 - HOLD);
  return (1 - x) * (1 - x);
}

/** Slide in from left, slide out to left */
export function sL(t, d = 72) {
  return { transform: `translateX(${(1 - t) * -d}px)`, opacity: t, willChange: 'transform, opacity' };
}

/** Slide in from right, slide out to right */
export function sR(t, d = 72) {
  return { transform: `translateX(${(1 - t) * d}px)`, opacity: t, willChange: 'transform, opacity' };
}

/** Slide in from bottom, slide out to bottom */
export function sU(t, d = 52) {
  return { transform: `translateY(${(1 - t) * d}px)`, opacity: t, willChange: 'transform, opacity' };
}

/** Fade only */
export function sF(t) {
  return { opacity: t, willChange: 'opacity' };
}

/**
 * Wraps a section with scroll-linked animation.
 * Children is a render-prop: ({t, progress}) => JSX
 * scrollHeight controls how long the scroll "pause" lasts.
 */
export default function ScrollSection({ children, scrollHeight = '280vh', id, className = '' }) {
  const { containerRef, progress } = useScrollProgress();
  const t = getT(progress);

  return (
    <div ref={containerRef} id={id} style={{ height: scrollHeight }} className={`scroll-section ${className}`}>
      <div className="scroll-section__sticky">
        {children({ t, progress })}
      </div>
    </div>
  );
}

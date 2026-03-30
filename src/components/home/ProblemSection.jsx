import { sL, sR } from '../common/ScrollSection';
import './ProblemSection.css';

const CIRC = 2 * Math.PI * 54;

// Exponential decay path: steep initial drop, then flattens
// viewBox x: 18→170 (range 152), y: 10→86 (range 76)
const DECAY_PATH = (() => {
  const k = 4;
  const norm = 1 - Math.exp(-k);
  const pts = Array.from({ length: 50 }, (_, i) => {
    const u = i / 49;
    const x = 18 + u * 152;
    const y = 10 + 76 * (1 - Math.exp(-k * u)) / norm;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return 'M ' + pts.join(' L ');
})();

function ProblemSection({ t }) {
  // Donut: animates from 0 to 8% fill as t → 1
  const donutOffset = CIRC * (1 - 0.08 * t);

  // Line: clipPath rect expands left→right with t
  const lineClipX = 18 + t * 152;

  return (
    <div className="problem__inner">

      {/* LEFT */}
      <div className="problem__left" style={sL(t)}>
        <span className="section-label">Problem</span>
        <h2 className="problem__headline">
          We've lost<br />daily <span className="accent">Motivation</span>
        </h2>
        <p className="problem__body">
          Most people start strong — but without a visible, living anchor,
          motivation fades fast. Discipline stays invisible.
          And invisible things die.
        </p>
      </div>

      {/* RIGHT */}
      <div className="problem__right" style={sR(t)}>

        {/* Stat 1 – donut */}
        <div className="prob-stat">
          <div className="prob-stat__pct">8%</div>
          <svg viewBox="0 0 140 140" className="prob-stat__chart">
            {/* Track */}
            <circle cx="70" cy="70" r="54" fill="none" stroke="#e4e4de" strokeWidth="11" />
            {/* Animated fill */}
            <circle
              cx="70" cy="70" r="54" fill="none"
              stroke="var(--clr-green)" strokeWidth="11"
              strokeDasharray={CIRC}
              strokeDashoffset={donutOffset}
              strokeLinecap="round"
              transform="rotate(-90 70 70)"
            />
            <text x="70" y="75" textAnchor="middle" fontSize="11" fill="#aaa"
              fontFamily="Inter, sans-serif" fontWeight="500">only</text>
          </svg>
          <p className="prob-stat__label">achieve their<br />new year's resolutions</p>
        </div>

        {/* Stat 2 – decay chart */}
        <div className="prob-stat">
          <div className="prob-stat__pct">70%</div>
          <svg viewBox="0 0 190 140" className="prob-stat__chart">
            <defs>
              <clipPath id="lineReveal">
                <rect x="0" y="0" width={lineClipX} height="140" />
              </clipPath>
            </defs>

            {/* Axes */}
            <line x1="18" y1="10" x2="18"  y2="92" stroke="#ddddd8" strokeWidth="1.3" />
            <line x1="18" y1="92" x2="178" y2="92" stroke="#ddddd8" strokeWidth="1.3" />

            {/* Week labels */}
            <text x="18"  y="106" fontSize="9.5" fill="#ccc" fontFamily="Inter, sans-serif" textAnchor="middle">W1</text>
            <text x="70"  y="106" fontSize="9.5" fill="#ccc" fontFamily="Inter, sans-serif" textAnchor="middle">W2</text>
            <text x="120" y="106" fontSize="9.5" fill="#ccc" fontFamily="Inter, sans-serif" textAnchor="middle">W3</text>
            <text x="170" y="106" fontSize="9.5" fill="#ccc" fontFamily="Inter, sans-serif" textAnchor="middle">W4</text>

            {/* Animated decay line */}
            <path
              d={DECAY_PATH}
              stroke="var(--clr-green)" strokeWidth="2.8"
              fill="none" strokeLinecap="round" strokeLinejoin="round"
              clipPath="url(#lineReveal)"
            />

            {/* Arrowhead (appears at end) */}
            <g clipPath="url(#lineReveal)">
              <polygon points="164,80 172,86 164,92" fill="var(--clr-green)" />
            </g>
          </svg>
          <p className="prob-stat__label">abandon their goals<br />within 3 weeks</p>
        </div>

      </div>
    </div>
  );
}

ProblemSection.sectionLabel = 'Problem';
export default ProblemSection;

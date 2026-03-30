import { sL, sR, sU } from '../common/ScrollSection';
import './SolutionSection.css';

const STEPS = [
  {
    num: '01',
    title: 'You complete your goals',
    body: 'Complete your daily missions in the app, from workouts to reading, education, and more.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="var(--clr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20" fill="var(--clr-green)" fillOpacity="0.08" stroke="none" />
        <path d="M16 24l6 6 10-12" />
      </svg>
    ),
    anim: sL,
  },
  {
    num: '02',
    title: 'ClyMind remembers every effort',
    body: 'ClyMind registers every action. Your consistency score builds in real time, day by day.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="var(--clr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20" fill="var(--clr-green)" fillOpacity="0.08" stroke="none" />
        <rect x="17" y="13" width="14" height="22" rx="3" />
        <line x1="20" y1="18" x2="28" y2="18" />
        <line x1="20" y1="22" x2="28" y2="22" />
        <line x1="20" y1="26" x2="25" y2="26" />
      </svg>
    ),
    anim: sU,
  },
  {
    num: '03',
    title: 'Your plant grows',
    body: 'The plant responds to your consistency. Miss days and it struggles. Stay disciplined and watch it flourish.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="var(--clr-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20" fill="var(--clr-green)" fillOpacity="0.08" stroke="none" />
        <path d="M24 34v-8" />
        <path d="M24 26 Q18 20 19 13 Q24 18 24 25" />
        <path d="M24 26 Q30 20 29 13 Q24 18 24 25" />
      </svg>
    ),
    anim: sR,
  },
];

function SolutionSection({ t }) {
  return (
    <div className="solution__inner">
      <div className="solution__header" style={sU(t, 40)}>
        <span className="section-label">Solution</span>
        <h2 className="solution__headline">
          <span className="accent">Grow</span> what you do
        </h2>
      </div>

      <div className="solution__steps">
        {STEPS.map(({ num, title, body, icon, anim }) => (
          <div key={num} className="step-card" style={anim(t)}>
            <div className="step-card__icon">{icon}</div>
            <span className="step-card__num">{num}</span>
            <h3 className="step-card__title">{title}</h3>
            <p className="step-card__body">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

SolutionSection.sectionLabel = "Solution";
export default SolutionSection;

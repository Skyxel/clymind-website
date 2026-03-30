import { sL, sR } from '../common/ScrollSection';
import './WhyItWorksSection.css';

const REASONS = [
  {
    title: 'Psychology',
    body: 'Visual cues of a living plant trigger intrinsic motivation — a proven mechanism for long-term habit formation.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="var(--clr-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20" fill="var(--clr-green)" fillOpacity="0.08" stroke="none" />
        {/* Head outline */}
        <path d="M18 20 Q18 13 24 13 Q30 13 30 20 Q30 26 26 28 L26 31 L22 31 L22 28 Q18 26 18 20Z" />
        {/* Three thought lines inside */}
        <line x1="21" y1="19" x2="27" y2="19" />
        <line x1="21" y1="22" x2="27" y2="22" />
        <line x1="22" y1="25" x2="26" y2="25" />
        {/* Neck base */}
        <line x1="22" y1="31" x2="22" y2="34" />
        <line x1="26" y1="31" x2="26" y2="34" />
        <line x1="20" y1="34" x2="28" y2="34" />
      </svg>
    ),
  },
  {
    title: 'Gamified',
    body: 'Streaks, missions, and growth milestones keep engagement high without turning your discipline into a chore.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="var(--clr-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20" fill="var(--clr-green)" fillOpacity="0.08" stroke="none" />
        {/* Trophy cup */}
        <path d="M17 16 L31 16 L29 26 Q28 30 24 30 Q20 30 19 26 Z" />
        {/* Trophy handles */}
        <path d="M17 16 Q13 16 13 20 Q13 24 17 24" />
        <path d="M31 16 Q35 16 35 20 Q35 24 31 24" />
        {/* Stem */}
        <line x1="24" y1="30" x2="24" y2="34" />
        <line x1="20" y1="34" x2="28" y2="34" />
        {/* Star on cup */}
        <path d="M24 19 L25 22 L28 22 L26 24 L27 27 L24 25 L21 27 L22 24 L20 22 L23 22 Z" fill="var(--clr-green)" fillOpacity="0.4" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Community',
    body: 'Grow alongside others. Shared accountability multiplies individual results and creates real impact.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="var(--clr-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20" fill="var(--clr-green)" fillOpacity="0.08" stroke="none" />
        {/* Left person */}
        <circle cx="17" cy="19" r="4" />
        <path d="M10 34 Q10 27 17 27 Q20 27 21 29" />
        {/* Right person */}
        <circle cx="31" cy="19" r="4" />
        <path d="M38 34 Q38 27 31 27 Q28 27 27 29" />
        {/* Center person (bigger) */}
        <circle cx="24" cy="18" r="4.5" />
        <path d="M15 34 Q15 28 24 28 Q33 28 33 34" />
      </svg>
    ),
  },
  {
    title: 'Design & Emotion',
    body: "A beautiful object you genuinely care for. ClyMind sits on your desk as a living reminder of who you're becoming.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="var(--clr-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20" fill="var(--clr-green)" fillOpacity="0.08" stroke="none" />
        {/* Heart */}
        <path d="M24 33 Q14 26 14 20 Q14 15 19 15 Q22 15 24 18 Q26 15 29 15 Q34 15 34 20 Q34 26 24 33Z" />
        {/* Small sparkles */}
        <line x1="13" y1="13" x2="13" y2="15" />
        <line x1="12" y1="14" x2="14" y2="14" />
        <line x1="35" y1="13" x2="35" y2="15" />
        <line x1="34" y1="14" x2="36" y2="14" />
        <line x1="24" y1="11" x2="24" y2="13" />
        <line x1="23" y1="12" x2="25" y2="12" />
      </svg>
    ),
  },
];

function WhyItWorksSection({ t }) {
  return (
    <div className="why__inner">
      <div className="why__left" style={sL(t)}>
        <span className="section-label">Why It Works</span>
        <h2 className="why__headline">
          Motivation<br />through <span className="accent">Life</span>
        </h2>
        <p className="why__body">
          ClyMind combines behavioral science, real biology, and emotional design
          into a system that actually sticks.
        </p>
        <div className="why__proof">
          <div className="why__proof-item">
            <span className="why__proof-num">+30%</span>
            <span className="why__proof-label">productive hours/week — SUPSI study</span>
          </div>
          <div className="why__proof-item">
            <span className="why__proof-num">−50%</span>
            <span className="why__proof-label">dropout rate vs. standard apps</span>
          </div>
        </div>
      </div>

      <div className="why__right" style={sR(t)}>
        {REASONS.map(({ title, body, icon }) => (
          <div key={title} className="why-card">
            <div className="why-card__icon">{icon}</div>
            <div>
              <h3 className="why-card__title">{title}</h3>
              <p className="why-card__body">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

WhyItWorksSection.sectionLabel = "Why it works";
export default WhyItWorksSection;

import { sL, sR, sF } from '../common/ScrollSection';
import './VisionSection.css';

function VisionSection({ t }) {
  return (
    <div className="vision__inner">
      <span className="section-label" style={sF(t)}>Vision</span>

      <h2 className="vision__headline">
        <span className="vision__left" style={sL(t)}>
          Millions of people <span className="accent">Growing Together,</span>
        </span>
        <span className="vision__right" style={sR(t)}>
          for themselves and for the planet.
        </span>
      </h2>

      <p className="vision__body" style={sF(t)}>
        ClyMind is more than a product. It's a movement where every habit
        completed is a step toward a better self — and a healthier world.
      </p>
    </div>
  );
}

VisionSection.sectionLabel = "Vision";
export default VisionSection;

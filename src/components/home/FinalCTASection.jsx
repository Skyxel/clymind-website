import { sU, sF } from '../common/ScrollSection';
import './FinalCTASection.css';

function FinalCTASection({ t }) {
  return (
    <div className="final-cta__inner">
      <p className="final-cta__overline" style={sF(t)}>Start today</p>
      <h2 className="final-cta__headline" style={sU(t, 50)}>
        Your growth is<br />waiting to be<br /><span className="accent">seen.</span>
      </h2>
      <div className="final-cta__actions" style={sU(t, 30)}>
        <a href="/order" className="final-cta__btn final-cta__btn--primary">
          Order Now
        </a>
        <a href="/product" className="final-cta__btn final-cta__btn--ghost">
          Discover the system
        </a>
      </div>
    </div>
  );
}

FinalCTASection.sectionLabel = "Order";
export default FinalCTASection;

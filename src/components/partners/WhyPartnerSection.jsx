import { useInView } from '../../hooks/useInView';
import './WhyPartnerSection.css';

export default function WhyPartnerSection({ items }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="why-partner" ref={ref}>
      <div className={`why-partner__inner container${isVisible ? ' visible' : ''}`}>
        <div className="why-partner__header">
          <span className="why-partner__label">Why partner with us</span>
          <h2 className="why-partner__headline">More than a logo on a page.</h2>
        </div>

        <div className="why-partner__grid">
          {items.map((item, i) => (
            <div
              key={i}
              className="why-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="why-card__icon">{item.icon}</span>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useInView } from '../../hooks/useInView';
import './SustainabilitySection.css';

export default function SustainabilitySection({ label, headline, subline, points }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="sustainability">
      <div className={`sustainability__inner container${isVisible ? ' visible' : ''}`} ref={ref}>
        <div className="sustainability__header">
          <span className="sustainability__label">{label}</span>
          <h2 className="sustainability__headline">{headline}</h2>
          {subline && <p className="sustainability__subline">{subline}</p>}
        </div>

        <div className="sustainability__grid">
          {points.map((point, i) => (
            <div
              key={i}
              className="sustainability-card"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="sustainability-card__icon">{point.icon}</span>
              <h3 className="sustainability-card__title">{point.title}</h3>
              <p className="sustainability-card__body">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

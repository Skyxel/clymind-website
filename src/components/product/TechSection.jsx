import { useInView } from '../../hooks/useInView';
import './TechSection.css';

export default function TechSection({ label, headline, subline, specs }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="tech-section">
      <div className={`tech-section__inner container${isVisible ? ' visible' : ''}`} ref={ref}>
        <div className="tech-section__header">
          <span className="tech-section__label">{label}</span>
          <h2 className="tech-section__headline">
            {headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          {subline && <p className="tech-section__subline">{subline}</p>}
        </div>

        <div className="tech-section__grid">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="tech-spec"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <span className="tech-spec__label">{spec.label}</span>
              <span className="tech-spec__value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

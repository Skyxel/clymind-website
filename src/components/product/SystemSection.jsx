import { useInView } from '../../hooks/useInView';
import './SystemSection.css';

export default function SystemSection({ label, headline, components }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="system-section">
      <div className={`system-section__inner container${isVisible ? ' visible' : ''}`} ref={ref}>
        <div className="system-section__header">
          <span className="system-section__label">{label}</span>
          <h2 className="system-section__headline">
            {headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>

        <div className="system-section__grid">
          {components.map((item, i) => (
            <div
              key={i}
              className="system-card"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="system-card__icon">{item.icon}</span>
              <div className="system-card__meta">
                <h3 className="system-card__title">{item.title}</h3>
                <span className="system-card__subtitle">{item.subtitle}</span>
              </div>
              <p className="system-card__body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

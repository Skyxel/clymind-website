import { useInView } from '../../hooks/useInView';
import './UseCasesSection.css';

export default function UseCasesSection({ items }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="use-cases" ref={ref}>
      <div className={`use-cases__inner${isVisible ? ' visible' : ''}`}>
        <div className="use-cases__header container">
          <span className="use-cases__label">Integrations</span>
          <h2 className="use-cases__headline">ClyMind grows everywhere.</h2>
          <p className="use-cases__sub">
            Wherever discipline matters, ClyMind fits. Here's where we see the most impact.
          </p>
        </div>

        <div className="use-cases__grid container">
          {items.map((item, i) => (
            <div
              key={item.id}
              className="use-case-card"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="use-case-card__number">0{i + 1}</span>
              <span className="use-case-card__env">{item.label}</span>
              <h3 className="use-case-card__headline">{item.headline}</h3>
              <p className="use-case-card__body">{item.body}</p>
              <p className="use-case-card__detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

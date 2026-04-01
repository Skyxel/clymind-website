import { useInView } from '../../hooks/useInView';
import './RoadmapSection.css';

export default function RoadmapSection({ milestones }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="roadmap" ref={ref}>
      <div className={`roadmap__inner container${isVisible ? ' visible' : ''}`}>
        <div className="roadmap__header">
          <span className="roadmap__label">Roadmap</span>
          <h2 className="roadmap__headline">Where we are, where we're going.</h2>
        </div>

        <div className="roadmap__track">
          <div className="roadmap__line" />
          {milestones.map((m, i) => (
            <div
              key={i}
              className={`roadmap__milestone${m.active ? ' roadmap__milestone--active' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="roadmap__dot" />
              <div className={`roadmap__info roadmap__info--${i % 2 === 0 ? 'above' : 'below'}`}>
                <span className="roadmap__date">{m.date}</span>
                <strong className="roadmap__title">{m.title}</strong>
                <span className="roadmap__desc">{m.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

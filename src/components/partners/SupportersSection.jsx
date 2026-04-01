import { useInView } from '../../hooks/useInView';
import './SupportersSection.css';

export default function SupportersSection({ supporters }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="supporters" ref={ref}>
      <div className={`supporters__inner container${isVisible ? ' visible' : ''}`}>
        <span className="supporters__label">Supported by</span>
        <h2 className="supporters__headline">They believed in us first.</h2>

        <div className="supporters__logos">
          {supporters.map((s) => (
            <a
              key={s.id}
              className="supporter"
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="supporter__logo-wrap">
                <img
                  src={s.logo}
                  alt={s.name}
                  className="supporter__logo"
                />
              </div>
              <div className="supporter__card">
                <p className="supporter__card-name">{s.name}</p>
                <p className="supporter__card-thanks">{s.thanks}</p>
                <span className="supporter__card-link">Visit →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

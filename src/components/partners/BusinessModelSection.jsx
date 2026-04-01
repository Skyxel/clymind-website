import { useInView } from '../../hooks/useInView';
import './BusinessModelSection.css';

export default function BusinessModelSection({ headline, body, layers }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="biz-model" ref={ref}>
      <div className={`biz-model__inner container${isVisible ? ' visible' : ''}`}>
        {/* Left: text */}
        <div className="biz-model__text">
          <span className="biz-model__label">Business model</span>
          <h2 className="biz-model__headline">{headline}</h2>
          <p className="biz-model__body">{body}</p>
        </div>

        {/* Right: layered diagram */}
        <div className="biz-model__diagram">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="biz-layer"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="biz-layer__number">0{i + 1}</span>
              <div className="biz-layer__content">
                <strong className="biz-layer__label">{layer.label}</strong>
                <span className="biz-layer__desc">{layer.desc}</span>
              </div>
            </div>
          ))}
          <div className="biz-model__arrow">→ Recurring value</div>
        </div>
      </div>
    </section>
  );
}

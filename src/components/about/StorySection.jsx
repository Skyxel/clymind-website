import { useInView } from '../../hooks/useInView';
import './StorySection.css';

export default function StorySection({ label, headline, paragraphs }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="story" ref={ref}>
      <div className={`story__inner${isVisible ? ' visible' : ''}`}>
        <div className="story__left">
          <span className="story__label">{label}</span>
          <h2 className="story__headline">{headline}</h2>
        </div>
        <div className="story__right">
          {paragraphs.map((p, i) => (
            <p key={i} className="story__para" style={{ transitionDelay: `${i * 0.12}s` }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

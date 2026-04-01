import { useInView } from '../../hooks/useInView';
import './VisionSection.css';

export default function VisionSection({ label, headline, words }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="about-vision" ref={ref}>
      <div className={`about-vision__inner${isVisible ? ' visible' : ''}`}>
        <div className="about-vision__header">
          <span className="about-vision__label">{label}</span>
          <h2 className="about-vision__headline">{headline}</h2>
        </div>

        <div className="about-vision__words">
          {words.map((item, i) => (
            <div
              key={i}
              className="vision-word"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <h3 className="vision-word__word">{item.word}</h3>
              <p className="vision-word__body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useInView } from '../../hooks/useInView';
import './HowItWorksSection.css';

export default function HowItWorksSection({ label, headline, steps }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="how-it-works" id="how-it-works">
      <div className={`how-it-works__inner container${isVisible ? ' visible' : ''}`} ref={ref}>
        <div className="how-it-works__header">
          <span className="how-it-works__label">{label}</span>
          <h2 className="how-it-works__headline">
            {headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step, i) => (
            <div
              key={i}
              className="hiw-step"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <span className="hiw-step__number">{step.number}</span>
              <div className="hiw-step__content">
                <h3 className="hiw-step__title">{step.title}</h3>
                <p className="hiw-step__body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

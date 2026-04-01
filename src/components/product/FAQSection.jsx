import { useInView } from '../../hooks/useInView';
import Accordion from '../common/Accordion';
import './FAQSection.css';

export default function FAQSection({ items }) {
  const [ref, isVisible] = useInView();

  return (
    <section className="faq-section">
      <div className={`faq-section__inner container${isVisible ? ' visible' : ''}`} ref={ref}>
        <div className="faq-section__header">
          <span className="faq-section__label">FAQ</span>
          <h2 className="faq-section__headline">Common questions.</h2>
        </div>
        <div className="faq-section__body">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}

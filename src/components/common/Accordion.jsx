import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);

  function toggle(i) {
    setOpen((prev) => (prev === i ? null : i));
  }

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={i} className={`accordion__item${open === i ? ' accordion__item--open' : ''}`}>
          <button className="accordion__trigger" onClick={() => toggle(i)} aria-expanded={open === i}>
            <span className="accordion__question">{item.question}</span>
            <span className="accordion__icon" aria-hidden="true">{open === i ? '−' : '+'}</span>
          </button>
          <div className="accordion__body">
            <div className="accordion__inner">
              <p className="accordion__answer">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

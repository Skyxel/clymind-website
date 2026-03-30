import './SectionDots.css';

export default function SectionDots({ sections, activeIndex, visible, onSelect }) {
  return (
    <nav className={`section-dots${visible ? ' section-dots--visible' : ''}`} aria-label="Section navigation">
      {sections.map(({ label }, i) => (
        <button
          key={label}
          type="button"
          className={`section-dots__item${i === activeIndex ? ' section-dots__item--active' : ''}`}
          onClick={() => onSelect?.(i)}
          aria-current={i === activeIndex ? 'step' : undefined}
          aria-label={`Go to ${label}`}
        >
          <div className="section-dots__dot" />
          <span className="section-dots__label">{label}</span>
        </button>
      ))}
    </nav>
  );
}

import './AboutHero.css';

export default function AboutHero({ label, headline, subline }) {
  return (
    <section className="about-hero">
      <div className="about-hero__inner">
        <span className="about-hero__label">{label}</span>
        <h1 className="about-hero__headline">{headline}</h1>
        <p className="about-hero__sub">{subline}</p>
      </div>
    </section>
  );
}

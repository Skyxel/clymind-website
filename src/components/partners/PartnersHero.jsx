import './PartnersHero.css';

export default function PartnersHero({ label, headline, subline }) {
  return (
    <section className="partners-hero">
      <div className="partners-hero__inner">
        <span className="partners-hero__label">{label}</span>
        <h1 className="partners-hero__headline">{headline}</h1>
        <p className="partners-hero__sub">{subline}</p>
      </div>
    </section>
  );
}

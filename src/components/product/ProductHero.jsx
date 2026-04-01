import './ProductHero.css';

export default function ProductHero({ label, headline, subline, ctaPrimary, ctaSecondary }) {
  function scrollToHowItWorks() {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="product-hero">
      <div className="product-hero__inner">
        <span className="product-hero__label">{label}</span>
        <h1 className="product-hero__headline">
          {headline.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < headline.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="product-hero__sub">{subline}</p>
        <div className="product-hero__ctas">
          <a href="/order" className="product-hero__cta product-hero__cta--primary">
            {ctaPrimary}
          </a>
          <button className="product-hero__cta product-hero__cta--ghost" onClick={scrollToHowItWorks}>
            {ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}

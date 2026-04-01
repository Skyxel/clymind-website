import './ProductCTABar.css';

export default function ProductCTABar({ visible = false, price = '€149', label = 'ClyMind Starter Kit' }) {
  return (
    <div className={`product-cta-bar${visible ? ' product-cta-bar--visible' : ''}`}>
      <div className="product-cta-bar__inner">
        <div className="product-cta-bar__info">
          <span className="product-cta-bar__name">{label}</span>
          <span className="product-cta-bar__price">{price}</span>
        </div>
        <a href="/order" className="product-cta-bar__btn">
          Order Now
        </a>
      </div>
    </div>
  );
}

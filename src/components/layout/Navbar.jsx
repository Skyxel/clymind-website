import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Product', href: '/product' },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo – left */}
        <a href="/" className="navbar__logo">
          ClyMind
        </a>

        {/* Nav links – centered absolutely */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`navbar__link${label === 'Home' ? ' navbar__link--active' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA – right */}
        <div className="navbar__cta">
          <a href="/order" className="navbar__order-btn">
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}

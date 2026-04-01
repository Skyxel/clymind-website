import './Footer.css';

const COLS = [
  {
    heading: 'Product',
    links: [
      { label: 'Overview', href: '/product' },
      { label: 'How it works', href: '/product#how-it-works' },
      { label: 'Order', href: '/order' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Partners', href: '/partners' },
      { label: 'Contact', href: '/about#contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Legal Notice', href: '/legal' },
    ],
  },
];

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'LI' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Top row */}
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <a href="/" className="footer__logo">ClyMind</a>
            <p className="footer__tagline">Discipline made visible.</p>
          </div>

          {/* Nav columns */}
          <nav className="footer__nav" aria-label="Footer navigation">
            {COLS.map((col) => (
              <div key={col.heading} className="footer__col">
                <span className="footer__col-heading">{col.heading}</span>
                <ul className="footer__col-links">
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className="footer__link">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span className="footer__copy">© {year} ClyMind. All rights reserved.</span>
          <div className="footer__socials">
            {SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="footer__social"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

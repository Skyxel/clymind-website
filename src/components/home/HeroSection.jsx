import { useScrollProgress } from '../../hooks/useScrollProgress';
import { getExitT, sL, sR } from '../common/ScrollSection';
import HeroIllustration from './HeroIllustration';
import './HeroSection.css';

export default function HeroSection() {
  const { containerRef, progress } = useScrollProgress();
  const t = getExitT(progress);

  return (
    <section ref={containerRef} className="hero">
      <div className="hero__sticky">
        <div className="hero__inner">
          {/* Left */}
          <div className="hero__content" style={sL(t)}>
            <h1 className="hero__headline">
              Watch your <span className="hero__headline--accent">Growth</span><br />come alive
            </h1>
            <p className="hero__subline">
              A mirror of what you do<br />for yourself, and for the planet.
            </p>
            <a href="/order" className="hero__cta">
              Start Your Growth
            </a>
          </div>

          {/* Right */}
          <div className="hero__visual" style={sR(t)}>
            <HeroIllustration />
          </div>
        </div>

        {/* Scroll hint — fades out as user starts scrolling */}
        <div className="hero__scroll-hint" style={{ opacity: t }}>
          <span className="hero__scroll-label">Scroll to discover</span>
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel" />
          </div>
        </div>
      </div>
    </section>
  );
}

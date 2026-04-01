import { useState, useRef, useEffect } from 'react';
import ProductHero from '../components/product/ProductHero';
import SystemSection from '../components/product/SystemSection';
import HowItWorksSection from '../components/product/HowItWorksSection';
import TechSection from '../components/product/TechSection';
import SustainabilitySection from '../components/product/SustainabilitySection';
import FAQSection from '../components/product/FAQSection';
import ProductCTABar from '../components/product/ProductCTABar';
import { productContent as c } from '../data/productContent';

export default function ProductPage() {
  const [barVisible, setBarVisible] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarVisible(false);
        } else {
          setBarVisible(entry.boundingClientRect.top < 0);
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProductHero
        label={c.hero.label}
        headline={c.hero.headline}
        subline={c.hero.subline}
        ctaPrimary={c.hero.ctaPrimary}
        ctaSecondary={c.hero.ctaSecondary}
      />
      <div ref={sentinelRef} />
      <SystemSection
        label={c.system.label}
        headline={c.system.headline}
        components={c.system.components}
      />
      <HowItWorksSection
        label={c.howItWorks.label}
        headline={c.howItWorks.headline}
        steps={c.howItWorks.steps}
      />
      <TechSection
        label={c.tech.label}
        headline={c.tech.headline}
        subline={c.tech.subline}
        specs={c.tech.specs}
      />
      <SustainabilitySection
        label={c.sustainability.label}
        headline={c.sustainability.headline}
        subline={c.sustainability.subline}
        points={c.sustainability.points}
      />
      <FAQSection items={c.faq} />
      <ProductCTABar visible={barVisible} />
      <div style={{ height: '72px' }} />
    </>
  );
}

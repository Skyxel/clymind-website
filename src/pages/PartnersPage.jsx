import PartnersHero from '../components/partners/PartnersHero';
import SupportersSection from '../components/partners/SupportersSection';
import WhyPartnerSection from '../components/partners/WhyPartnerSection';
import UseCasesSection from '../components/partners/UseCasesSection';
import BusinessModelSection from '../components/partners/BusinessModelSection';
import RoadmapSection from '../components/partners/RoadmapSection';
import PartnerContactSection from '../components/partners/PartnerContactSection';
import { partnersContent as c } from '../data/partnersContent';

export default function PartnersPage() {
  return (
    <>
      <PartnersHero
        label={c.hero.label}
        headline={c.hero.headline}
        subline={c.hero.subline}
      />

      <SupportersSection supporters={c.supporters} />

      <WhyPartnerSection items={c.whyPartner} />

      <UseCasesSection items={c.useCases} />

      <BusinessModelSection
        headline={c.businessModel.headline}
        body={c.businessModel.body}
        layers={c.businessModel.layers}
      />

      <RoadmapSection milestones={c.roadmap} />

      {/* Sticky contact bar — renders fixed at bottom of viewport */}
      <PartnerContactSection />

      {/* Bottom padding so last section content isn't hidden behind sticky bar */}
      <div style={{ height: '52px' }} />
    </>
  );
}

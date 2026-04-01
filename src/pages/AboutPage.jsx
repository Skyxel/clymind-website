import AboutHero from '../components/about/AboutHero';
import StorySection from '../components/about/StorySection';
import VisionSection from '../components/about/VisionSection';
import TeamSection from '../components/about/TeamSection';
import ContactSection from '../components/about/ContactSection';
import { aboutContent as c } from '../data/aboutContent';

export default function AboutPage() {
  return (
    <>
      <AboutHero
        label={c.hero.label}
        headline={c.hero.headline}
        subline={c.hero.subline}
      />

      <StorySection
        label={c.story.label}
        headline={c.story.headline}
        paragraphs={c.story.paragraphs}
      />

      <VisionSection
        label={c.vision.label}
        headline={c.vision.headline}
        words={c.vision.words}
      />

      <TeamSection
        label={c.team.label}
        headline={c.team.headline}
        members={c.team.members}
        consultants={c.team.consultants}
      />

      <ContactSection
        label={c.contact.label}
        headline={c.contact.headline}
        subline={c.contact.subline}
      />
    </>
  );
}

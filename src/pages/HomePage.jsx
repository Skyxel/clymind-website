import HeroSection from '../components/home/HeroSection';
import ScrollStory from '../components/common/ScrollStory';
import ProblemSection from '../components/home/ProblemSection';
import SolutionSection from '../components/home/SolutionSection';
import WhyItWorksSection from '../components/home/WhyItWorksSection';
import VisionSection from '../components/home/VisionSection';
import FinalCTASection from '../components/home/FinalCTASection';

const STORY_SECTIONS = [
  ProblemSection,
  SolutionSection,
  WhyItWorksSection,
  VisionSection,
  FinalCTASection,
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollStory sections={STORY_SECTIONS} sectionHeight="170vh" />
    </>
  );
}

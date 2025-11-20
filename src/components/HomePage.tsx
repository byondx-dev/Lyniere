import { HeroSmartVilla3D } from "./HeroSmartVilla3D";
import { TextReveal } from "./TextReveal";
import { RoundCards } from "./RoundCards";
import { LuxurySlider } from "./LuxurySlider";
import { DynamicFeatures } from "./DynamicFeatures";
import { HorizontalTimeline } from "./HorizontalTimeline";
import { FloatingShowcase } from "./FloatingShowcase";
import { MinimalGallery } from "./MinimalGallery";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      {/* Updated to the new Futuristic Villa Hero */}
      <HeroSmartVilla3D onNavigate={onNavigate} />
      
      <TextReveal />
      <RoundCards onNavigate={onNavigate} />
      <LuxurySlider />
      <DynamicFeatures />
      <HorizontalTimeline />
      <FloatingShowcase />
      <MinimalGallery />
    </>
  );
}

import { ModernHero } from "./ModernHero";
import { TextReveal } from "./TextReveal";
import { RoundCards } from "./RoundCards";
import { LuxurySlider } from "./LuxurySlider";
import { DynamicFeatures } from "./DynamicFeatures";
import { ArchitecturalDetails } from "./ArchitecturalDetails";
import { HorizontalTimeline } from "./HorizontalTimeline";
import { FloatingShowcase } from "./FloatingShowcase";
import { MinimalGallery } from "./MinimalGallery";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <ModernHero onNavigate={onNavigate} />
      <TextReveal />
      <RoundCards onNavigate={onNavigate} />
      <LuxurySlider />
      <DynamicFeatures />
      <ArchitecturalDetails />
      <HorizontalTimeline />
      <FloatingShowcase />
      <MinimalGallery />
    </>
  );
}
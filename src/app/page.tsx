import { Hero } from '@/components/hero/Hero';
import { PickUpSection } from '@/components/pickup-section/PickUpSection';
import { PopularCars } from '@/components/popular-cars/PopularCars';
import { RecommendedCars } from '@/components/recommended-cars/RecommendedCars';

export default function Home() {
  return (
    <div className="container mx-auto px-[60px]">
      <Hero />
      <PickUpSection />
      <PopularCars />
      <RecommendedCars />
    </div>
  );
}

import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";

export default function Homepage() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
    </main>
  );
}
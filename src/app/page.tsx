import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SocialSection } from "@/components/sections/SocialSection";

export default function Homepage() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <AboutSection />
      <TestimonialsSection />
      <SocialSection />
    </main>
  );
}
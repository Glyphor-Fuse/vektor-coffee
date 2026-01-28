import { Header } from "@/components/Header";
import { BannerSection } from "@/components/BannerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { GridShowcase } from "@/components/GridShowcase";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { LiquidEther } from "@/components/ui/LiquidEther";

export default function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LiquidEther />
      <Header />
      <main>
        <BannerSection />
        <FeaturesSection />
        <GridShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

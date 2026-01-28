import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BannerSection } from "@/components/BannerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CatalogSection } from "@/components/CatalogSection";
import { Footer } from "@/components/Footer";
import { LiquidEther } from "@/components/ui/LiquidEther";

export default function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <LiquidEther className="fixed inset-0 opacity-20 pointer-events-none" />
      <Header />
      <main>
        <BannerSection />
        <FeaturesSection />
        <ProcessSection />
        <CatalogSection />
      </main>
      <Footer />
    </div>
  );
}
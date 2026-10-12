import HeroSection from "@/components/tiva/sections/HeroSection";
import ServicesSection from "@/components/tiva/sections/ServicesSection";
import StatsSection from "@/components/tiva/sections/StatsSection";
import PortfolioSection from "@/components/tiva/sections/PortfolioSection";
import ProjectConfigurator from "@/components/tiva/sections/ProjectConfigurator";
import TivaLab from "@/components/tiva/sections/TivaLab";
import InteractiveProcess from "@/components/tiva/sections/InteractiveProcess";
import TechStack from "@/components/tiva/sections/TechStack";
import WhyTivaSection from "@/components/tiva/sections/WhyTivaSection";
import TestimonialsSection from "@/components/tiva/sections/TestimonialsSection";
import BlogSection from "@/components/tiva/sections/BlogSection";
import CTASection from "@/components/tiva/sections/CTASection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-main)]">
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <PortfolioSection />
        <ProjectConfigurator />
        <TivaLab />
        <InteractiveProcess />
        <TechStack />
        <WhyTivaSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </div>
    </div>
  );
}
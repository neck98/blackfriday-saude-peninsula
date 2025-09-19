import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FormSection from "@/components/FormSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <HowItWorksSection />
      <AboutSection />
      <FAQSection />
      <FormSection />
      <ContactSection />
    </div>
  );
};

export default Index;

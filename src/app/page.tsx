import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import AboutSection from "@/components/sections/AboutSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import BlogSection from "@/components/sections/BlogSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { SERVICES } from "@/lib/constants";

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: "AgenticAI First",
        url: "https://agenticaifirst.com",
      },
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <AboutSection />
        <CaseStudiesSection />
        <BlogSection />
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

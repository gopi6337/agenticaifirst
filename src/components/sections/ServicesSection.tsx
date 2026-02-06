"use client";

import { SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ServicesSection() {
  const ref = useScrollReveal();

  return (
    <section id="services" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="AgenticAI First"
          title="Everything AI, Under One Roof"
          description="From strategy to deployment, we deliver end-to-end AI solutions tailored to your unique business challenges."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

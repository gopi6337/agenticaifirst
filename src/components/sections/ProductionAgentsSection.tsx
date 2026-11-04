"use client";

import { PRODUCTION_PRACTICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProductionAgentsSection() {
  const ref = useScrollReveal();

  return (
    <section id="production" ref={ref} className="py-8 md:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Beyond the Pilot"
          title="How We Build Agents You Can Trust"
          description="Most agent projects stall between demo and production. These six practices are how we get them across."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTION_PRACTICES.map((practice) => (
            <div
              key={practice.title}
              className="scroll-reveal p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{practice.title}</h3>
              <p className="text-slate-400 leading-relaxed">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

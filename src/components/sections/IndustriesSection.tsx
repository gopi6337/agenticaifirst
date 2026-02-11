"use client";

import { INDUSTRIES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const INDUSTRY_ICONS: Record<string, string> = {
  it: "⚙️",
  healthcare: "🏥",
  ecommerce: "🛒",
  telecom: "📡",
  finance: "💰",
  support: "🎧",
  hr: "👥",
  sales: "📈",
};

export default function IndustriesSection() {
  const ref = useScrollReveal();

  return (
    <section id="industries" ref={ref} className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Industries"
          title="AI Solutions Across Industries"
          description="We don't just build AI — we solve real problems in your industry with agents designed for your workflows."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-vivid/30 hover:bg-white/[0.06] transition-all duration-300 scroll-reveal"
            >
              <div className="text-4xl mb-4">
                {INDUSTRY_ICONS[industry.icon] || "🏢"}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-vivid transition-colors">
                {industry.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

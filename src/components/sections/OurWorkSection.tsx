"use client";

import { OUR_PLATFORMS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function OurWorkSection() {
  const ref = useScrollReveal();

  return (
    <section id="our-work" ref={ref} className="py-8 md:py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Built by Us"
          title="Agentic AI We Built and Run"
          description="We built these three platforms end to end under EduVerseJr, our education startup. Today they serve students, schools, and colleges."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OUR_PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-reveal group flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-vivid/30 transition-colors"
            >
              <span className="self-start text-xs font-medium px-3 py-1 rounded-full bg-purple-vivid/10 text-purple-vivid border border-purple-vivid/20 mb-4">
                {platform.audience}
              </span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-vivid transition-colors">
                {platform.name}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5">{platform.description}</p>
              <dl className="space-y-3 mb-6">
                {platform.concepts.map((concept) => (
                  <div key={concept.name}>
                    <dt className="text-sm font-semibold text-white">{concept.name}</dt>
                    <dd className="text-sm text-slate-400">{concept.detail}</dd>
                  </div>
                ))}
              </dl>
              <span className="mt-auto text-sm text-purple-vivid">
                Visit {platform.domain} ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

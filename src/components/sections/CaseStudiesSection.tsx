"use client";

import { useState } from "react";
import { CASE_STUDIES } from "@/lib/casestudies";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CaseStudiesSection() {
  const ref = useScrollReveal();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="case-studies" ref={ref} className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Case Studies"
          title="Proven Results That Speak"
          description="Real-world examples of how our agentic AI solutions drive measurable business outcomes."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-vivid/30 transition-all duration-300 scroll-reveal cursor-pointer"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{cs.icon}</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-vivid/10 text-purple-vivid border border-purple-vivid/20">
                  {cs.industry}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-vivid transition-colors">
                {cs.title}
              </h3>

              {expanded === i ? (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-1">Challenge</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-1">Solution</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Results</h4>
                    <ul className="space-y-1.5">
                      {cs.results.map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-green-400 mt-0.5">✓</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-slate-500 text-xs pt-2">Click to collapse ↑</p>
                </div>
              ) : (
                <div>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {cs.challenge}
                  </p>
                  <div className="flex items-center gap-4 mt-4 pt-3 border-t border-white/[0.06]">
                    <span className="text-green-400 text-sm font-semibold">
                      {cs.results[0]}
                    </span>
                  </div>
                  <p className="text-purple-vivid text-xs mt-2">Click to read full case study →</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

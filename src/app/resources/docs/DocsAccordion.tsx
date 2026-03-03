"use client";

import { useState } from "react";
import Link from "next/link";
import { IMPLEMENTATION_GUIDES } from "@/lib/resources";

export default function DocsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {IMPLEMENTATION_GUIDES.map((guide, index) => (
        <div
          key={guide.id}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <div className="flex items-center gap-4 pr-4">
              <span className="text-2xl flex-shrink-0">{guide.icon}</span>
              <div>
                <p className="text-white font-semibold text-base leading-snug">
                  {guide.title}
                </p>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  {guide.description}
                </p>
              </div>
            </div>
            <span
              className={`text-purple-400 text-2xl flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[600px] pb-6" : "max-h-0"
            }`}
          >
            <div className="px-6">
              <ol className="space-y-3 mb-6">
                {guide.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-400 text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
              <Link
                href={`/case-studies/${guide.relatedCaseStudy.slug}/`}
                className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Related Case Study: {guide.relatedCaseStudy.label} →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

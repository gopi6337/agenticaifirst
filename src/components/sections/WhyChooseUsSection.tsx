"use client";

import { DIFFERENTIATORS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const icons: Record<string, React.ReactNode> = {
  brain: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
};

export default function WhyChooseUsSection() {
  const ref = useScrollReveal();

  return (
    <section id="why-us" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="scroll-reveal">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-vivid/10 text-purple-vivid border border-purple-vivid/20 mb-4">
              Why AgenticAI
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The{" "}
              <span className="gradient-text">Unfair Advantage</span>{" "}
              Your Business Needs
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              We don&apos;t just implement AI — we engineer autonomous agents
              that become an integral part of your team, learning and improving
              with every interaction.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our team combines deep technical expertise with real-world business
              acumen to deliver solutions that aren&apos;t just technically
              impressive — they&apos;re commercially transformative.
            </p>
          </div>

          {/* Right: 2x2 grid of differentiator cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIFFERENTIATORS.map((diff) => (
              <div
                key={diff.title}
                className="gradient-border card-glow rounded-2xl scroll-reveal"
                style={{
                  minHeight: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '1.25rem'
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-vivid/20 to-blue-electric/20 flex items-center justify-center text-purple-vivid mb-3">
                  {icons[diff.icon]}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {diff.title}
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

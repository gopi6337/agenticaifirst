"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const VALUES = [
  {
    title: "Customer First",
    description: "Your success is our success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Over Quantity",
    description: "We build things right, not just fast.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement",
    description: "Better every day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description: "Clear communication at every step.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-violet-deep/10 to-slate-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Us"
          title="Who We Are"
          description="A team of seasoned technologists with over 25 years of collective experience, now focused on the AI revolution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left: Story */}
          <div className="scroll-reveal">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              <span className="font-bold text-white">Agentic AI First</span> is
              built by a team of seasoned technologists with over 25 years of
              collective experience in software development, enterprise solutions,
              and business automation. We&apos;ve solved complex problems across
              industries — and now, we&apos;re channeling that expertise into the
              AI revolution.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              We build autonomous AI agents that don&apos;t just assist — they{" "}
              <span className="gradient-text font-semibold">
                think, plan, and execute
              </span>
              .
            </p>
            <div className="gradient-border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To make AI accessible and actionable for every business. We
                believe AI should work <em>for</em> you — not the other way
                around. Our solutions deliver measurable results from day one.
              </p>
            </div>
          </div>

          {/* Right: Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="gradient-border card-glow rounded-2xl scroll-reveal min-h-[160px] flex"
              >
                <div className="flex-1 flex flex-col justify-center items-center text-center p-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-vivid/20 to-blue-electric/20 flex items-center justify-center text-purple-vivid mb-3">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

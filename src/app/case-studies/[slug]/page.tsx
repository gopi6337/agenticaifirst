import { CASE_STUDIES } from "@/lib/casestudies";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.title} Case Study | Agentic AI First`,
    description: `How AI agents transformed ${cs.industry}: ${cs.results[0]}`,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <Link
          href="/#case-studies"
          className="inline-flex items-center text-sm text-slate-400 hover:text-purple-vivid transition-colors mb-8"
        >
          ← Back to Case Studies
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{cs.icon}</span>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-vivid/10 text-purple-vivid border border-purple-vivid/20">
            {cs.industry}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          {cs.title}
        </h1>
        <p className="text-slate-400 text-lg mb-10">{cs.overview}</p>

        {/* Results Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {cs.results.map((r, i) => (
            <div key={i} className="text-center p-4 rounded-xl bg-green-500/5 border border-green-500/10">
              <span className="text-green-400 text-sm font-semibold">{r}</span>
            </div>
          ))}
        </div>

        {/* Challenges */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-red-400 mb-4">The Challenges</h2>
          <ul className="space-y-3">
            {cs.challenges.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <span className="text-red-400 mt-1">✕</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Our Solution</h2>
          <p className="text-slate-300 leading-relaxed mb-6">{cs.solution}</p>
          <h3 className="text-sm font-semibold text-blue-400 mb-3">AI Agents Deployed</h3>
          <div className="flex flex-wrap gap-2">
            {cs.agents.map((a, i) => (
              <span key={i} className="text-sm px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-green-400 mb-4">The Impact</h2>
          <p className="text-slate-300 leading-relaxed">{cs.impact}</p>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-vivid/10 to-blue-electric/10 border border-purple-vivid/20 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Ready for Similar Results?</h3>
          <p className="text-slate-400 mb-6">Let&apos;s discuss how AI agents can transform your {cs.industry.toLowerCase()} operations.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-vivid to-blue-electric text-white font-medium hover:opacity-90 transition-opacity"
          >
            Get Started →
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
          <Link
            href="/#case-studies"
            className="inline-flex items-center text-purple-vivid hover:text-purple-400 transition-colors font-medium"
          >
            ← Back to all case studies
          </Link>
        </div>
      </div>
    </div>
  );
}

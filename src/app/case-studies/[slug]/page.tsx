import { CASE_STUDIES } from "@/lib/casestudies";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.title} Case Study | Agentic AI First`,
    description: `How AI agents transformed ${cs.industry}: ${cs.results[0]}`,
    alternates: {
      canonical: `https://agenticaifirst.com/case-studies/${cs.slug}/`,
    },
    openGraph: {
      title: `${cs.title} - AI Case Study`,
      description: cs.overview,
      type: "article",
      url: `https://agenticaifirst.com/case-studies/${cs.slug}/`,
      siteName: "AgenticAI First",
      images: [
        {
          url: "https://agenticaifirst.com/og-image.png",
          width: 1200,
          height: 630,
          alt: `${cs.title} - AI Case Study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.title} - AI Case Study`,
      description: cs.overview,
      images: ["https://agenticaifirst.com/og-image.png"],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${cs.title} - AI Transformation Case Study`,
    description: cs.overview,
    datePublished: cs.datePublished,
    dateModified: cs.datePublished,
    image: "https://agenticaifirst.com/og-image.png",
    author: {
      "@type": "Organization",
      name: "AgenticAI First",
      url: "https://agenticaifirst.com",
    },
    publisher: {
      "@type": "Organization",
      name: "AgenticAI First",
      url: "https://agenticaifirst.com",
      logo: {
        "@type": "ImageObject",
        url: "https://agenticaifirst.com/new_logo.png",
      },
    },
    url: `https://agenticaifirst.com/case-studies/${cs.slug}/`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://agenticaifirst.com/case-studies/${cs.slug}/`,
    },
    articleSection: cs.industry,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* ── HERO ── */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <Link
            href="/#case-studies"
            className="inline-flex items-center text-sm text-slate-400 hover:text-purple-400 transition-colors mb-8"
          >
            ← Back to Case Studies
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{cs.icon}</span>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              {cs.industry}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How AI Agents Transformed {cs.title} Operations
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-10">{cs.overview}</p>

          {/* Key Results */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cs.results.map((r, i) => (
              <div key={i} className="text-center p-5 rounded-2xl bg-green-500/5 border border-green-500/15">
                <span className="text-green-400 text-sm font-bold">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── CLIENT PROFILE ── */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-base">
              🏢
            </div>
            <h2 className="text-2xl font-bold text-white">Client Profile</h2>
          </div>
          <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/15">
            <p className="text-slate-300 leading-relaxed text-lg">{cs.clientProfile}</p>
          </div>
        </section>

        {/* ── THE CHALLENGE ── */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/25 flex items-center justify-center text-base">
              ⚠️
            </div>
            <h2 className="text-2xl font-bold text-white">The Challenge</h2>
          </div>
          {/* Quick bullets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {cs.challenges.map((c, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/15">
                <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                <span className="text-slate-300 text-sm">{c}</span>
              </div>
            ))}
          </div>
          {/* Detailed paragraphs */}
          <div className="space-y-4">
            {cs.challengeDetail.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-300 leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* ── BEFORE AI ── */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-base">
              🕐
            </div>
            <h2 className="text-2xl font-bold text-white">Before AI: The Daily Reality</h2>
          </div>
          <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/15 space-y-4">
            {cs.beforeAI.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-300 leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* ── OUR APPROACH ── */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-base">
              🔍
            </div>
            <h2 className="text-2xl font-bold text-white">Our Approach</h2>
          </div>
          <div className="space-y-4">
            {cs.approach.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-300 leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* ── AI AGENTS IN DETAIL ── */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-base">
              🤖
            </div>
            <h2 className="text-2xl font-bold text-white">The AI Agents Deployed</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cs.agentDetails.map((agent, i) => (
              <div key={i} className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/15 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  <h3 className="text-blue-300 font-semibold text-base">{agent.name}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{agent.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TECHNICAL IMPLEMENTATION ── */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-slate-600/40 border border-slate-500/30 flex items-center justify-center text-base">
              ⚙️
            </div>
            <h2 className="text-2xl font-bold text-white">Technical Implementation</h2>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 space-y-4">
            {cs.technicalImplementation.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-300 leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* ── RESULTS & IMPACT ── */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-green-500/15 border border-green-500/25 flex items-center justify-center text-base">
              📊
            </div>
            <h2 className="text-2xl font-bold text-white">Results &amp; Impact</h2>
          </div>
          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {cs.results.map((r, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-green-500/8 border border-green-500/20">
                <span className="text-green-400 text-sm font-bold">{r}</span>
              </div>
            ))}
          </div>
          {/* Detailed narrative */}
          <div className="space-y-4">
            {cs.impactDetail.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-300 leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* ── KEY TAKEAWAYS ── */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center text-base">
              💡
            </div>
            <h2 className="text-2xl font-bold text-white">Key Takeaways</h2>
          </div>
          <ul className="space-y-4">
            {cs.keyTakeaways.map((t, i) => (
              <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/15">
                <span className="text-yellow-400 font-bold text-sm shrink-0 mt-0.5">{i + 1}.</span>
                <span className="text-slate-300 leading-relaxed text-sm">{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── WHAT'S NEXT ── */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-base">
              🚀
            </div>
            <h2 className="text-2xl font-bold text-white">What&apos;s Next</h2>
          </div>
          <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/15">
            <p className="text-slate-300 leading-relaxed text-lg">{cs.nextSteps}</p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="p-10 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready for Similar Results?</h3>
          <p className="text-slate-400 mb-8 text-lg">
            Let&apos;s discuss how AI agents can transform your {cs.industry.toLowerCase()} operations.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity text-base"
          >
            Get Started →
          </Link>
        </div>

        {/* ── BACK LINK ── */}
        <div className="pt-4 border-t border-white/10">
          <Link
            href="/#case-studies"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            ← Back to all case studies
          </Link>
        </div>

      </div>
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { INTEGRATIONS } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Integrations & Platforms | AgenticAI First",
  description:
    "AgenticAI First connects with your existing stack — CRM, ERP, cloud, DevOps, and more. See all 40+ supported platforms and tools.",
  alternates: {
    canonical: "https://agenticaifirst.com/resources/integrations/",
  },
  openGraph: {
    title: "Integrations & Platforms - AgenticAI First",
    description: "We work with your existing stack. 40+ platforms across CRM, ERP, Cloud, DevOps, Marketing, and HR.",
    type: "website",
    url: "https://agenticaifirst.com/resources/integrations/",
    siteName: "AgenticAI First",
    images: [{ url: "https://agenticaifirst.com/og-image.png", width: 1200, height: 630, alt: "AgenticAI First Integrations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrations & Platforms - AgenticAI First",
    description: "We work with your existing stack. 40+ platforms supported.",
    images: ["https://agenticaifirst.com/og-image.png"],
  },
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  orange: "bg-orange-500/10 border-orange-500/20 text-orange-400",
  slate: "bg-slate-500/10 border-slate-500/20 text-slate-300",
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  sky: "bg-sky-500/10 border-sky-500/20 text-sky-400",
  pink: "bg-pink-500/10 border-pink-500/20 text-pink-400",
  green: "bg-green-500/10 border-green-500/20 text-green-400",
};

const headerColorMap: Record<string, string> = {
  blue: "bg-blue-500/15 border-blue-500/25",
  purple: "bg-purple-500/15 border-purple-500/25",
  orange: "bg-orange-500/15 border-orange-500/25",
  slate: "bg-slate-600/40 border-slate-500/30",
  cyan: "bg-cyan-500/15 border-cyan-500/25",
  sky: "bg-sky-500/15 border-sky-500/25",
  pink: "bg-pink-500/15 border-pink-500/25",
  green: "bg-green-500/15 border-green-500/25",
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Integrations & Platforms — AgenticAI First",
  description: "AgenticAI First supports 40+ platforms across CRM, ERP, Cloud, DevOps, Marketing, and HR.",
  url: "https://agenticaifirst.com/resources/integrations/",
  publisher: {
    "@type": "Organization",
    name: "AgenticAI First",
    url: "https://agenticaifirst.com",
  },
};

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
            Integrations
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We Work With{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Your Existing Stack
            </span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
            Our AI agents plug directly into the tools your team already uses — no ripping
            and replacing, no disruption. 40+ platforms supported across 8 categories.
          </p>
        </div>
      </div>

      {/* ── INTEGRATION GRID ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INTEGRATIONS.map((category) => {
            const badgeClass = colorMap[category.color] ?? colorMap.blue;
            const headerClass = headerColorMap[category.color] ?? headerColorMap.blue;
            return (
              <div
                key={category.name}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center text-lg ${headerClass}`}
                  >
                    {category.icon}
                  </div>
                  <h2 className="text-lg font-bold text-white">{category.name}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border ${badgeClass}`}
                    >
                      <span className="text-base leading-none">{tool.icon}</span>
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* custom integration note */}
        <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
          <p className="text-slate-400">
            Don&apos;t see your tool?{" "}
            <Link
              href="/#contact"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
            >
              Contact us
            </Link>{" "}
            — we build custom connectors for any platform with an API.
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="mt-12 p-10 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Connect Your Stack?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Tell us what tools you use and we&apos;ll show you exactly how our AI agents
            integrate — usually in days, not weeks.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity text-base"
          >
            Start Integration Discussion →
          </Link>
        </div>

        {/* back link */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <Link
            href="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

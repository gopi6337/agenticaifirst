import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsletterForm from "./NewsletterForm";

export const metadata: Metadata = {
  title: "Community & Newsletter | AgenticAI First",
  description:
    "Join the AgenticAI First community. Get monthly AI digests, early access to guides, and practical insights on deploying AI agents in your business.",
  alternates: {
    canonical: "https://agenticaifirst.com/resources/community/",
  },
  openGraph: {
    title: "Community & Newsletter - AgenticAI First",
    description: "Monthly AI digest, early guide access, and practical automation insights — free forever.",
    type: "website",
    url: "https://agenticaifirst.com/resources/community/",
    siteName: "AgenticAI First",
    images: [{ url: "https://agenticaifirst.com/og-image.png", width: 1200, height: 630, alt: "AgenticAI First Community" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Community & Newsletter - AgenticAI First",
    description: "Monthly AI digest and practical AI insights for business leaders.",
    images: ["https://agenticaifirst.com/og-image.png"],
  },
};

const BENEFITS = [
  {
    icon: "📬",
    title: "Monthly AI Digest",
    description:
      "Curated roundup of the most impactful AI agent trends, new tools, and real-world use cases — straight to your inbox.",
  },
  {
    icon: "📖",
    title: "Early Access to Guides",
    description:
      "Get new implementation guides, playbooks, and case studies before they're published on the site.",
  },
  {
    icon: "💡",
    title: "Practical Tips & Insights",
    description:
      "Actionable advice on automating workflows, reducing costs, and scaling with AI — no fluff, just what works.",
  },
  {
    icon: "🎯",
    title: "Exclusive Offers",
    description:
      "Newsletter subscribers get first access to webinars, workshops, and limited consultation slots.",
  },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: "in",
    description: "Follow us for AI industry news, case study highlights, and company updates.",
    color: "bg-blue-600/10 border-blue-500/25 hover:bg-blue-600/20",
    textColor: "text-blue-400",
    href: "#",
  },
  {
    name: "Twitter / X",
    icon: "𝕏",
    description: "Quick takes, AI news, and real-time commentary on the agentic AI space.",
    color: "bg-slate-600/10 border-slate-500/25 hover:bg-slate-600/20",
    textColor: "text-slate-300",
    href: "#",
  },
  {
    name: "GitHub",
    icon: "⌨",
    description: "Open-source tools, templates, and agent blueprints from our engineering team.",
    color: "bg-slate-700/10 border-slate-600/25 hover:bg-slate-700/20",
    textColor: "text-slate-200",
    href: "#",
  },
  {
    name: "YouTube",
    icon: "▶",
    description: "Walkthroughs, demos, and recorded workshops on implementing AI agents.",
    color: "bg-red-600/10 border-red-500/25 hover:bg-red-600/20",
    textColor: "text-red-400",
    href: "#",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* ── HERO ── */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
            Community
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Join the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-First Community
            </span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
            Stay ahead of the curve. Get practical AI insights, real-world case studies, and
            early access to guides — delivered to your inbox monthly.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── BENEFITS ── */}
        <section>
          <h2 className="text-2xl font-bold text-white text-center mb-8">What You&apos;ll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{b.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{b.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── NEWSLETTER FORM ── */}
        <section>
          <div className="max-w-xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white text-center mb-2">
              Subscribe to the Newsletter
            </h2>
            <p className="text-slate-400 text-center mb-8 text-sm">
              No spam. Unsubscribe any time. One email per month, max.
            </p>
            <NewsletterForm />
          </div>
        </section>

        {/* ── SOCIAL LINKS — PENDING: re-enable once real URLs are ready ── */}
        {/* <section>
          ...
        </section> */}

        {/* ── CTA ── */}
        <div className="p-10 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Want More Than a Newsletter?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Let&apos;s talk about how AI can transform your specific business workflows.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity text-base"
          >
            Book a Free Consultation →
          </Link>
        </div>

        {/* back link */}
        <div className="pt-4 border-t border-white/10">
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

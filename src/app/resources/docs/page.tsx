import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DocsAccordion from "./DocsAccordion";

export const metadata: Metadata = {
  title: "AI Implementation Guides | AgenticAI First",
  description:
    "Step-by-step AI implementation guides for customer support, finance, HR, DevOps, and sales — built from real project experience.",
  alternates: {
    canonical: "https://agenticaifirst.com/resources/docs/",
  },
  openGraph: {
    title: "AI Implementation Guides - AgenticAI First",
    description: "Practical guides to deploy AI agents across customer support, finance, HR, DevOps, and sales.",
    type: "website",
    url: "https://agenticaifirst.com/resources/docs/",
    siteName: "AgenticAI First",
    images: [{ url: "https://agenticaifirst.com/og-image.png", width: 1200, height: 630, alt: "AI Implementation Guides" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Implementation Guides - AgenticAI First",
    description: "Step-by-step guides to deploy AI agents in your business.",
    images: ["https://agenticaifirst.com/og-image.png"],
  },
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* ── HERO ── */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Implementation{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Guides
            </span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
            Practical, step-by-step guides to help you plan, deploy, and scale AI agents
            across your business — written from real project experience.
          </p>
        </div>
      </div>

      {/* ── GUIDES ACCORDION ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <DocsAccordion />

        {/* ── CTA ── */}
        <div className="mt-16 p-10 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need a Custom Implementation?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Every business is different. Let&apos;s design an AI roadmap tailored to your
            specific workflows, tech stack, and goals.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity text-base"
          >
            Talk to Our Team →
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

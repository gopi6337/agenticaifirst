import Link from "next/link";
import type { Metadata } from "next";
import { CASE_STUDIES } from "@/lib/casestudies";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AI Case Studies | AgenticAI First",
  description:
    "Real-world AI transformation results across IT, Healthcare, Finance, Retail, HR, Telecom, and more. See how agentic AI delivered measurable ROI for our clients.",
  alternates: {
    canonical: "https://agenticaifirst.com/case-studies/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AI Case Studies - AgenticAI First",
    description:
      "Real AI transformation stories across 8 industries. Measurable results from agentic AI deployments.",
    type: "website",
    url: "https://agenticaifirst.com/case-studies/",
    siteName: "AgenticAI First",
    images: [
      {
        url: "https://agenticaifirst.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgenticAI First Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Case Studies - AgenticAI First",
    description: "Real AI transformation results across 8 industries.",
    images: ["https://agenticaifirst.com/og-image.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://agenticaifirst.com/" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://agenticaifirst.com/case-studies/" },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AgenticAI First Case Studies",
  url: "https://agenticaifirst.com/case-studies/",
  numberOfItems: CASE_STUDIES.length,
  itemListElement: CASE_STUDIES.map((cs, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${cs.title} AI Case Study`,
    url: `https://agenticaifirst.com/case-studies/${cs.slug}/`,
    description: cs.overview,
  })),
};

export default function CaseStudiesIndexPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-slate-400 hover:text-purple-400 transition-colors mb-6"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Transformation Case Studies
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Real results from real deployments. See how agentic AI transformed operations
            across IT, healthcare, finance, retail, HR, telecom, customer support, and sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.slug} className="group">
              <Link href={`/case-studies/${cs.slug}/`}>
                <div className="h-full p-7 rounded-2xl bg-slate-900/60 border border-white/8 hover:border-purple-500/40 transition-all duration-300 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cs.icon}</span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {cs.industry}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    How AI Agents Transformed {cs.title} Operations
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{cs.overview}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {cs.results.slice(0, 2).map((r, i) => (
                      <div
                        key={i}
                        className="text-center p-2 rounded-lg bg-green-500/5 border border-green-500/15"
                      >
                        <span className="text-green-400 text-xs font-bold">{r}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                    Read full case study →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-slate-400 mb-4">Ready to see results like these?</p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Talk to us →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AI Blog | AgenticAI First",
  description:
    "Expert articles on agentic AI, AI agents, automation strategies, and how businesses are transforming with AI. Practical insights from real implementations.",
  alternates: {
    canonical: "https://agenticaifirst.com/blog/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AI Blog - AgenticAI First",
    description:
      "Expert articles on agentic AI, automation, and AI transformation for businesses.",
    type: "website",
    url: "https://agenticaifirst.com/blog/",
    siteName: "AgenticAI First",
    images: [
      {
        url: "https://agenticaifirst.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AgenticAI First Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Blog - AgenticAI First",
    description: "Expert articles on agentic AI, automation, and AI transformation.",
    images: ["https://agenticaifirst.com/og-image.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://agenticaifirst.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://agenticaifirst.com/blog/" },
  ],
};

const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "AgenticAI First Blog",
  url: "https://agenticaifirst.com/blog/",
  description: "Expert articles on agentic AI, automation strategies, and AI transformation.",
  publisher: {
    "@type": "Organization",
    name: "AgenticAI First",
    url: "https://agenticaifirst.com",
  },
  blogPost: BLOG_POSTS.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `https://agenticaifirst.com/blog/${post.slug}/`,
    datePublished: new Date(post.date).toISOString(),
    description: post.excerpt,
  })),
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-slate-400 hover:text-purple-400 transition-colors mb-6"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Insights &amp; Articles
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Practical guides, deep dives, and real-world insights on agentic AI,
            automation strategies, and AI transformation for businesses.
          </p>
        </div>

        <div className="space-y-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}/`}>
                <div className="p-8 rounded-2xl bg-slate-900/60 border border-white/8 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border bg-purple-500/10 text-purple-400 border-purple-500/20">
                      {post.category}
                    </span>
                    <span className="text-slate-500 text-sm">{post.date}</span>
                    <span className="text-slate-500 text-sm">·</span>
                    <span className="text-slate-500 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                    Read article →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-slate-400 mb-4">Want AI insights delivered to your inbox?</p>
          <Link
            href="/resources/community/"
            className="inline-flex items-center px-6 py-3 rounded-full border border-purple-500/40 text-purple-400 hover:bg-purple-500/10 transition-colors font-medium text-sm"
          >
            Join our community →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

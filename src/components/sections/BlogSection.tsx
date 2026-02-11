"use client";

import { BLOG_POSTS } from "@/lib/blog";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

const CATEGORY_COLORS: Record<string, string> = {
  "AI Fundamentals": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Use Cases": "bg-green-500/10 text-green-400 border-green-500/20",
  Strategy: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function BlogSection() {
  const ref = useScrollReveal();

  return (
    <section id="blog" ref={ref} className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Blog"
          title="Insights & Resources"
          description="Expert perspectives on AI agents, industry trends, and practical guides to help your business thrive."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-vivid/30 hover:bg-white/[0.06] transition-all duration-300 scroll-reveal"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${CATEGORY_COLORS[post.category] || "bg-slate-500/10 text-slate-400 border-slate-500/20"}`}
                >
                  {post.category}
                </span>
                <span className="text-slate-500 text-xs">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-vivid transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.06]">
                <span className="text-slate-500 text-xs">{post.date}</span>
                <span className="text-purple-vivid text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

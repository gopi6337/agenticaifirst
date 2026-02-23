import { BLOG_POSTS } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Agentic AI First`,
    description: post.excerpt,
    alternates: {
      canonical: `https://agenticaifirst.com/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://agenticaifirst.com/blog/${post.slug}/`,
      siteName: "AgenticAI First",
      publishedTime: new Date(post.date).toISOString(),
      authors: ["AgenticAI First"],
      images: [
        {
          url: "https://agenticaifirst.com/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["https://agenticaifirst.com/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
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
    url: `https://agenticaifirst.com/blog/${post.slug}/`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://agenticaifirst.com/blog/${post.slug}/`,
    },
    articleSection: post.category,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <Link
          href="/#blog"
          className="inline-flex items-center text-sm text-slate-400 hover:text-purple-vivid transition-colors mb-8"
        >
          ← Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border bg-purple-500/10 text-purple-400 border-purple-500/20">
            {post.category}
          </span>
          <span className="text-slate-500 text-sm">{post.date}</span>
          <span className="text-slate-500 text-sm">·</span>
          <span className="text-slate-500 text-sm">{post.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
          {post.title}
        </h1>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-300 prose-p:leading-relaxed prose-strong:text-white prose-li:text-slate-300 prose-ul:text-slate-300 whitespace-pre-line">
          {post.content.split('\n').map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith('## '))
              return <h2 key={i}>{trimmed.slice(3)}</h2>;
            if (trimmed.startsWith('**') && trimmed.endsWith('**'))
              return <p key={i}><strong>{trimmed.slice(2, -2)}</strong></p>;
            if (trimmed.startsWith('- '))
              return <p key={i} className="pl-4 text-slate-300">• {trimmed.slice(2)}</p>;
            if (trimmed.startsWith('❌') || trimmed.startsWith('✅'))
              return <p key={i} className="pl-4 text-slate-300">{trimmed}</p>;
            return <p key={i}>{trimmed}</p>;
          })}
        </article>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/#blog"
            className="inline-flex items-center text-purple-vivid hover:text-purple-400 transition-colors font-medium"
          >
            ← Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}

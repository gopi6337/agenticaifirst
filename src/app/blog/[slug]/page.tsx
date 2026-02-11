import { BLOG_POSTS } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Agentic AI First
          </Link>
          <Link
            href="/#blog"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-vivid/10 text-purple-vivid border border-purple-vivid/20">
              {post.category}
            </span>
            <span className="text-slate-500 text-sm">{post.date}</span>
            <span className="text-slate-500 text-sm">·</span>
            <span className="text-slate-500 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text leading-tight">
            {post.title}
          </h1>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:gradient-text prose-headings:font-bold prose-p:text-slate-300 prose-p:leading-relaxed prose-strong:text-white prose-li:text-slate-300 prose-ul:text-slate-300">
          {post.content.split("\n").map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith("## "))
              return (
                <h2
                  key={i}
                  className="text-2xl md:text-3xl font-bold mt-10 mb-4 gradient-text"
                >
                  {trimmed.replace("## ", "")}
                </h2>
              );
            if (trimmed.startsWith("**") && trimmed.endsWith("**"))
              return (
                <p key={i} className="text-white font-semibold mt-6 mb-2">
                  {trimmed.replace(/\*\*/g, "")}
                </p>
              );
            if (trimmed.startsWith("- "))
              return (
                <li
                  key={i}
                  className="text-slate-300 ml-6 list-disc leading-relaxed"
                >
                  {trimmed
                    .replace("- ", "")
                    .split("**")
                    .map((part, j) =>
                      j % 2 === 1 ? (
                        <strong key={j} className="text-white">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                </li>
              );
            if (trimmed.startsWith("- ❌") || trimmed.startsWith("- ✅"))
              return (
                <li
                  key={i}
                  className="text-slate-300 ml-6 list-none leading-relaxed"
                >
                  {trimmed.replace("- ", "")}
                </li>
              );
            return (
              <p key={i} className="text-slate-300 leading-relaxed mb-4">
                {trimmed.split("**").map((part, j) =>
                  j % 2 === 1 ? (
                    <strong key={j} className="text-white">
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-slate-400 mb-6">
              Let&apos;s discuss how agentic AI can solve your specific
              challenges.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-purple-vivid hover:bg-purple-vivid/90 text-white font-semibold transition-all"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

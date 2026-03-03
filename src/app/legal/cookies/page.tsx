import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | AgenticAI First",
  description:
    "Learn about the cookies used on the AgenticAI First website, why we use them, and how you can control them.",
  alternates: {
    canonical: "https://agenticaifirst.com/legal/cookies/",
  },
  openGraph: {
    title: "Cookie Policy - AgenticAI First",
    description: "Information about cookies used on the AgenticAI First website.",
    type: "website",
    url: "https://agenticaifirst.com/legal/cookies/",
    siteName: "AgenticAI First",
    images: [{ url: "https://agenticaifirst.com/og-image.png", width: 1200, height: 630, alt: "Cookie Policy - AgenticAI First" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy - AgenticAI First",
    description: "Information about cookies used on the AgenticAI First website.",
    images: ["https://agenticaifirst.com/og-image.png"],
  },
};

const COOKIE_TYPES = [
  {
    name: "Essential Cookies",
    badge: "Required",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
    description:
      "These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting your cookie preferences. You can set your browser to block these cookies, but some parts of the site may then not work.",
    examples: [
      { name: "Session state", purpose: "Maintains basic site functionality during your visit." },
    ],
  },
  {
    name: "Analytics Cookies",
    badge: "Optional",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description:
      "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. All information collected is aggregated and therefore anonymous.",
    examples: [
      { name: "_ga", purpose: "Google Analytics — distinguishes unique users. Expires after 2 years." },
      { name: "_ga_XXXXXXXXXX", purpose: "Google Analytics — persists session state. Expires after 2 years." },
      { name: "_gid", purpose: "Google Analytics — distinguishes users. Expires after 24 hours." },
      { name: "_gat", purpose: "Google Analytics — throttles request rate. Expires after 1 minute." },
    ],
  },
  {
    name: "Functional Cookies",
    badge: "Optional",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    description:
      "These cookies enable the website to provide enhanced functionality. They may be set by us or by third-party providers whose services we have added to our pages.",
    examples: [
      { name: "Preference cookies", purpose: "Remember user preferences such as language or region settings." },
    ],
  },
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* ── HERO ── */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Cookie{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-slate-400 text-base">Last updated: March 3, 2026</p>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto mt-4">
            This policy explains what cookies are, which cookies we use on this site,
            and how you can control them.
          </p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12">

        {/* What are cookies */}
        <section id="what-are-cookies">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold border bg-purple-500/10 text-purple-400 border-purple-500/20">§</span>
            <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4">
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p>
              Cookies can be &quot;session&quot; cookies (deleted when you close your browser) or &quot;persistent&quot; cookies (remain on your device for a set period or until deleted manually).
            </p>
          </div>
        </section>

        {/* Cookies we use */}
        <section id="cookies-we-use">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold border bg-blue-500/10 text-blue-400 border-blue-500/20">§</span>
            <h2 className="text-2xl font-bold text-white">Cookies We Use</h2>
          </div>
          <div className="space-y-6">
            {COOKIE_TYPES.map((type) => (
              <div key={type.name} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-white">{type.name}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${type.badgeColor}`}>
                    {type.badge}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{type.description}</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left text-slate-400 font-medium pb-2 pr-4">Cookie Name</th>
                        <th className="text-left text-slate-400 font-medium pb-2">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {type.examples.map((ex) => (
                        <tr key={ex.name} className="border-b border-white/5">
                          <td className="py-2.5 pr-4 text-slate-200 font-mono text-xs align-top whitespace-nowrap">{ex.name}</td>
                          <td className="py-2.5 text-slate-400 align-top">{ex.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Google Analytics */}
        <section id="google-analytics">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold border bg-pink-500/10 text-pink-400 border-pink-500/20">§</span>
            <h2 className="text-2xl font-bold text-white">Google Analytics</h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4">
            <p>
              We use Google Analytics (measurement ID <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm font-mono">G-52DR8DC0PB</code>) to understand how visitors interact with our site. Google Analytics uses cookies to collect anonymised usage data, including pages visited, time on page, and referral source.
            </p>
            <p>
              We have enabled IP anonymisation so that no full IP addresses are stored. Data is processed by Google LLC and may be transferred to servers in the United States. For more information, see the{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                Google Privacy Policy
              </a>.
            </p>
          </div>
        </section>

        {/* Third-party cookies */}
        <section id="third-party-cookies">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold border bg-green-500/10 text-green-400 border-green-500/20">§</span>
            <h2 className="text-2xl font-bold text-white">Third-Party Cookies</h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4">
            <p>
              Some cookies on this site are set by third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-slate-100">Google Analytics</strong> — analytics cookies as described above.</li>
              <li><strong className="text-slate-100">Formspree</strong> — our form submission provider may set functional cookies when you interact with contact forms on this site.</li>
            </ul>
            <p>We do not use advertising or tracking cookies from ad networks.</p>
          </div>
        </section>

        {/* Managing cookies */}
        <section id="managing-cookies">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold border bg-amber-500/10 text-amber-400 border-amber-500/20">§</span>
            <h2 className="text-2xl font-bold text-white">Managing & Disabling Cookies</h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4">
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies already on your device and set most browsers to prevent them from being placed. However, if you do this, some services or features may not work.
            </p>
            <p>Instructions for managing cookies in popular browsers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-slate-100">Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong className="text-slate-100">Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong className="text-slate-100">Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong className="text-slate-100">Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
            <p>
              To opt out of Google Analytics specifically, you can install the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="mt-8 p-10 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Questions About Our Cookie Use?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            If you have any questions about how we use cookies, please get in touch.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity text-base"
          >
            Contact Us →
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

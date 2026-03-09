import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | AgenticAI First",
  description:
    "Learn how AgenticAI First collects, uses, and protects your personal data. We are committed to your privacy and data security.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://agenticaifirst.com/legal/privacy/",
  },
  openGraph: {
    title: "Privacy Policy - AgenticAI First",
    description: "How AgenticAI First collects, uses, and protects your personal data.",
    type: "website",
    url: "https://agenticaifirst.com/legal/privacy/",
    siteName: "AgenticAI First",
    images: [{ url: "https://agenticaifirst.com/og-image.png", width: 1200, height: 630, alt: "Privacy Policy - AgenticAI First" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - AgenticAI First",
    description: "How AgenticAI First collects, uses, and protects your personal data.",
    images: ["https://agenticaifirst.com/og-image.png"],
  },
};

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    content: (
      <>
        <p>We collect information you provide directly to us and information gathered automatically when you use our site:</p>
        <ul>
          <li><strong>Contact information</strong> — name and email address when you submit our contact or newsletter forms.</li>
          <li><strong>Message content</strong> — the content of messages you send us via our contact form (processed by Formspree).</li>
          <li><strong>Usage data</strong> — pages visited, time spent on pages, referral source, browser type, and device type, collected via Google Analytics.</li>
          <li><strong>Cookies</strong> — small text files placed on your device by Google Analytics to measure site usage. See our <Link href="/legal/cookies/" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">Cookie Policy</Link> for details.</li>
        </ul>
        <p>We do not collect sensitive personal data such as payment card details, government ID numbers, or health information.</p>
      </>
    ),
  },
  {
    id: "how-we-use-your-data",
    title: "How We Use Your Data",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li><strong>Respond to enquiries</strong> — process and reply to contact form submissions.</li>
          <li><strong>Send communications</strong> — deliver newsletter emails you have opted into; you may unsubscribe at any time.</li>
          <li><strong>Improve our service</strong> — analyse site usage data (via Google Analytics measurement ID <code>G-52DR8DC0PB</code>) to understand how visitors interact with our site and improve content and navigation.</li>
          <li><strong>Maintain security</strong> — detect and prevent fraudulent or abusive activity.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Third Parties",
    color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    content: (
      <>
        <p>We share data only with the following trusted service providers, each subject to their own privacy policies:</p>
        <ul>
          <li><strong>Formspree</strong> — processes contact and newsletter form submissions. Data is stored on Formspree&apos;s servers. See <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">Formspree Privacy Policy</a>.</li>
          <li><strong>Google Analytics</strong> — collects anonymised usage data via cookies. IP addresses are anonymised. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">Google Privacy Policy</a>.</li>
          <li><strong>GitHub Pages</strong> — hosts this website. GitHub may log request metadata (IP address, user agent). See <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">GitHub Privacy Statement</a>.</li>
        </ul>
        <p>We may disclose personal data if required by law, court order, or regulatory authority.</p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention & Security",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    content: (
      <>
        <p>We retain personal data only for as long as necessary to fulfil the purposes described in this policy:</p>
        <ul>
          <li><strong>Contact form submissions</strong> — retained in Formspree for up to 12 months, then deleted.</li>
          <li><strong>Newsletter subscriptions</strong> — retained until you unsubscribe.</li>
          <li><strong>Analytics data</strong> — aggregated usage data is retained by Google Analytics for 14 months.</li>
        </ul>
        <p>We implement reasonable technical and organisational measures to protect your data, including HTTPS/TLS encryption for all data in transit and access controls limiting who can view form submissions.</p>
        <p>However, no method of transmission over the Internet is completely secure. We cannot guarantee absolute security.</p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    content: (
      <>
        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul>
          <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
          <li><strong>Correction</strong> — request that inaccurate data be corrected.</li>
          <li><strong>Deletion</strong> — request that your personal data be deleted.</li>
          <li><strong>Opt-out of analytics</strong> — install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">Google Analytics Opt-out Browser Add-on</a> to prevent your data from being used by Google Analytics.</li>
          <li><strong>Unsubscribe</strong> — click the unsubscribe link in any newsletter email to stop receiving communications.</li>
        </ul>
        <p>To exercise any of these rights, please contact us via the form on our website.</p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    color: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    content: (
      <>
        <p>We may update this Privacy Policy from time to time. When we do, we will revise the &quot;last updated&quot; date at the top of this page. We encourage you to review this policy periodically.</p>
        <p>Continued use of our website after any changes constitutes your acceptance of the updated policy.</p>
      </>
    ),
  },
];

export default function PrivacyPage() {
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
            Privacy{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-slate-400 text-base">Last updated: March 3, 2026</p>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto mt-4">
            We are committed to protecting your privacy. This policy explains what data we
            collect, how we use it, and your rights.
          </p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12">

        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold border ${section.color}`}>
                §
              </span>
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
            </div>
            <div className="text-slate-300 leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-slate-300 [&_strong]:text-slate-100 [&_code]:bg-white/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono">
              {section.content}
            </div>
          </section>
        ))}

        {/* ── CTA ── */}
        <div className="mt-8 p-10 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Questions About This Policy?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            If you have any questions or concerns about how we handle your data, please get in touch.
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

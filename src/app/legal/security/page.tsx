import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Security | AgenticAI First",
  description:
    "Learn about the security practices at AgenticAI First — how we protect our website, your data, and how to report a vulnerability.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://agenticaifirst.com/legal/security/",
  },
  openGraph: {
    title: "Security - AgenticAI First",
    description: "Security practices, data protection, and vulnerability disclosure at AgenticAI First.",
    type: "website",
    url: "https://agenticaifirst.com/legal/security/",
    siteName: "AgenticAI First",
    images: [{ url: "https://agenticaifirst.com/og-image.png", width: 1200, height: 630, alt: "Security - AgenticAI First" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security - AgenticAI First",
    description: "Security practices and vulnerability disclosure at AgenticAI First.",
    images: ["https://agenticaifirst.com/og-image.png"],
  },
};

const PRACTICES = [
  {
    title: "HTTPS / TLS Encryption",
    description:
      "All traffic between your browser and agenticaifirst.com is encrypted using TLS (HTTPS). Our TLS certificate is issued by Let's Encrypt and auto-renews every 90 days. We enforce HTTPS exclusively — HTTP requests are redirected automatically.",
  },
  {
    title: "Static Site Architecture",
    description:
      "Our website is a fully static export hosted on GitHub Pages. There are no server-side processes, no database connections, and no dynamic code execution on our servers. This significantly reduces the attack surface compared to traditional web applications.",
  },
  {
    title: "Access Controls",
    description:
      "Access to our GitHub repository and deployment pipeline is protected by two-factor authentication (2FA). Only authorised team members can push code or trigger deployments. Branch protection rules prevent direct pushes to the main branch.",
  },
  {
    title: "Secure Deployment via GitHub Actions",
    description:
      "Our site is deployed automatically via GitHub Actions on every push to the master branch. The deployment pipeline uses scoped tokens with the minimum permissions required. No secrets or credentials are stored in the repository.",
  },
  {
    title: "Dependency Management",
    description:
      "We regularly review and update third-party dependencies to address known vulnerabilities. We use npm's audit tooling to detect vulnerable packages and prioritise patching.",
  },
];

const THIRD_PARTY = [
  {
    name: "GitHub Pages",
    description:
      "Hosts our static website. GitHub maintains comprehensive physical and network security for its infrastructure. See the GitHub Security overview for details.",
    link: "https://github.com/security",
    linkLabel: "GitHub Security",
  },
  {
    name: "Formspree",
    description:
      "Processes our contact and newsletter form submissions. Formspree encrypts data in transit and at rest. See Formspree's security documentation for details.",
    link: "https://formspree.io/legal/privacy-policy/",
    linkLabel: "Formspree Privacy & Security",
  },
  {
    name: "Google Analytics",
    description:
      "Collects anonymised usage data. Google Analytics infrastructure is operated and maintained by Google LLC under their comprehensive security programme.",
    link: "https://policies.google.com/privacy",
    linkLabel: "Google Privacy Policy",
  },
  {
    name: "Let's Encrypt / ACME",
    description:
      "Issues and auto-renews our TLS certificate. Let's Encrypt is a free, automated, and open Certificate Authority run by the Internet Security Research Group (ISRG).",
    link: "https://letsencrypt.org/about/",
    linkLabel: "About Let's Encrypt",
  },
];

export default function SecurityPage() {
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
            Security{" "}
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Practices
            </span>
          </h1>
          <p className="text-slate-400 text-base">Last updated: March 3, 2026</p>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto mt-4">
            We take the security of our website and your data seriously. Here&apos;s an
            overview of how we keep things secure.
          </p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12">

        {/* Our security practices */}
        <section id="our-practices">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold border bg-green-500/10 text-green-400 border-green-500/20">§</span>
            <h2 className="text-2xl font-bold text-white">Our Security Practices</h2>
          </div>
          <div className="space-y-4">
            {PRACTICES.map((p) => (
              <div key={p.title} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data handling */}
        <section id="data-handling">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold border bg-blue-500/10 text-blue-400 border-blue-500/20">§</span>
            <h2 className="text-2xl font-bold text-white">Data Handling & Storage</h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4">
            <p>
              As a static website, we do not operate our own databases or backend servers. Personal data you submit through our forms (name, email, message) is processed and stored by Formspree — not by us directly.
            </p>
            <p>
              Analytics data collected via Google Analytics is anonymised and aggregated. We have enabled IP anonymisation to prevent full IP addresses from being stored.
            </p>
            <p>
              We do not store payment card data, government ID information, or any sensitive personal data. If you engage us for services, any data exchanged as part of that engagement is handled under the terms of our separate service agreement and applicable data protection law.
            </p>
          </div>
        </section>

        {/* Third-party security */}
        <section id="third-party-security">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold border bg-purple-500/10 text-purple-400 border-purple-500/20">§</span>
            <h2 className="text-2xl font-bold text-white">Third-Party Security</h2>
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            We rely on the following trusted providers. Each maintains its own security programme:
          </p>
          <div className="space-y-4">
            {THIRD_PARTY.map((tp) => (
              <div key={tp.name} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-white font-semibold mb-1">{tp.name}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{tp.description}</p>
                  </div>
                </div>
                <a
                  href={tp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {tp.linkLabel} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Responsible disclosure */}
        <section id="responsible-disclosure">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold border bg-amber-500/10 text-amber-400 border-amber-500/20">§</span>
            <h2 className="text-2xl font-bold text-white">Responsible Disclosure</h2>
          </div>
          <div className="text-slate-300 leading-relaxed space-y-4">
            <p>
              We welcome and appreciate the security research community&apos;s efforts to improve the security of our website and services. If you believe you have found a security vulnerability in our site, please report it to us responsibly.
            </p>
            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
              <h3 className="text-amber-300 font-semibold mb-2">How to Report a Vulnerability</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Email us at our contact address (see the contact form below).</li>
                <li>Include a description of the vulnerability and steps to reproduce it.</li>
                <li>Give us a reasonable amount of time to investigate and address the issue before public disclosure.</li>
                <li>Do not access, modify, or delete data that does not belong to you.</li>
                <li>Do not perform denial-of-service attacks or other disruptive testing.</li>
              </ul>
            </div>
            <p>
              We will acknowledge your report within 5 business days and keep you informed of our progress. We do not currently offer a bug bounty programme, but we will credit researchers who responsibly disclose valid vulnerabilities (if they wish to be credited).
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="mt-8 p-10 rounded-3xl bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Have a Security Concern?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            If you have questions about our security practices or need to report a vulnerability, please contact us directly.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-opacity text-base"
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

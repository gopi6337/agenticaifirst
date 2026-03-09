import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | AgenticAI First",
  description:
    "Read the Terms of Service for AgenticAI First. Understand your rights and obligations when using our AI consulting and automation services.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://agenticaifirst.com/legal/terms/",
  },
  openGraph: {
    title: "Terms of Service - AgenticAI First",
    description: "Terms and conditions for using AgenticAI First services.",
    type: "website",
    url: "https://agenticaifirst.com/legal/terms/",
    siteName: "AgenticAI First",
    images: [{ url: "https://agenticaifirst.com/og-image.png", width: 1200, height: 630, alt: "Terms of Service - AgenticAI First" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - AgenticAI First",
    description: "Terms and conditions for using AgenticAI First services.",
    images: ["https://agenticaifirst.com/og-image.png"],
  },
};

const SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    content: (
      <>
        <p>By accessing or using the AgenticAI First website at <strong>agenticaifirst.com</strong> (the &quot;Site&quot;) or enquiring about our services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Site.</p>
        <p>These Terms apply to all visitors, users, and anyone who accesses or uses the Site.</p>
      </>
    ),
  },
  {
    id: "services",
    title: "Description of Services",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    content: (
      <>
        <p>AgenticAI First provides AI consulting, automation development, and related technology services, including but not limited to:</p>
        <ul>
          <li>AI strategy consulting and roadmapping</li>
          <li>Custom AI agent and workflow automation development</li>
          <li>Full-stack software development and legacy system modernisation</li>
          <li>AI integration and API development</li>
          <li>Customer support AI solutions</li>
          <li>Voice AI and speech solutions</li>
          <li>Computer vision and data analytics solutions</li>
          <li>AI training and upskilling programmes</li>
        </ul>
        <p>The scope, deliverables, pricing, and timeline for any engagement are set out in a separate Statement of Work or service agreement entered into between AgenticAI First and the client.</p>
        <p>The Site itself is an informational website. Submitting a contact form does not constitute a binding agreement for services.</p>
      </>
    ),
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    content: (
      <>
        <p>When using the Site, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information in contact and enquiry forms.</li>
          <li>Use the Site only for lawful purposes and in a manner consistent with all applicable laws and regulations.</li>
          <li>Not attempt to gain unauthorised access to any part of the Site or its underlying infrastructure.</li>
          <li>Not transmit any harmful, offensive, or disruptive content via the Site&apos;s forms.</li>
          <li>Not use automated tools to scrape, crawl, or harvest information from the Site without our prior written consent.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    content: (
      <>
        <p>All content on this Site — including text, graphics, logos, images, case studies, blog posts, and code — is the property of AgenticAI First or its content suppliers and is protected by applicable intellectual property laws.</p>
        <p>You may view and print content from the Site for personal, non-commercial use only. You may not reproduce, distribute, modify, or create derivative works without our express written permission.</p>
        <p>For client engagements, intellectual property ownership is governed by the applicable service agreement. Unless otherwise agreed in writing, custom deliverables created exclusively for a client will transfer to the client upon full payment.</p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    content: (
      <>
        <p>To the maximum extent permitted by applicable law, AgenticAI First and its directors, employees, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:</p>
        <ul>
          <li>Your use of or inability to use the Site or our services.</li>
          <li>Any errors or omissions in site content.</li>
          <li>Unauthorised access to or alteration of your data.</li>
          <li>Any other matter relating to the Site or services.</li>
        </ul>
        <p>Our total liability for any claim arising in connection with the Site shall not exceed the amount paid by you to AgenticAI First in the three months preceding the claim, or £100 (whichever is greater).</p>
        <p>Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation.</p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    color: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    content: (
      <>
        <p>You agree to indemnify and hold harmless AgenticAI First, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with:</p>
        <ul>
          <li>Your violation of these Terms.</li>
          <li>Your use of the Site or services in a manner that violates any applicable law.</li>
          <li>Any content you submit through the Site that infringes the rights of a third party.</li>
        </ul>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    content: (
      <>
        <p>We reserve the right to terminate or restrict your access to the Site at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, third parties, or for any other reason.</p>
        <p>For service engagements, termination rights are governed by the applicable service agreement.</p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    content: (
      <>
        <p>These Terms are governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles.</p>
        <p>Any disputes arising from these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    color: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    content: (
      <>
        <p>We reserve the right to modify these Terms at any time. When we make changes, we will update the &quot;last updated&quot; date at the top of this page.</p>
        <p>Your continued use of the Site after any changes constitutes your acceptance of the revised Terms. We encourage you to review this page periodically.</p>
      </>
    ),
  },
];

export default function TermsPage() {
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
            Terms of{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-slate-400 text-base">Last updated: March 3, 2026</p>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto mt-4">
            Please read these Terms of Service carefully before using our website or
            engaging our services.
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
            <div className="text-slate-300 leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-slate-300 [&_strong]:text-slate-100">
              {section.content}
            </div>
          </section>
        ))}

        {/* ── CTA ── */}
        <div className="mt-8 p-10 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Questions About These Terms?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            If you have any questions about these Terms of Service, please contact us.
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

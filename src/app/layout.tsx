import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgenticAI First - Everything AI, Under One Roof",
  description:
    "AgenticAI First delivers cutting-edge agentic AI solutions that automate workflows, enhance decision-making, and drive growth for forward-thinking businesses.",
  keywords: [
    "AI",
    "Agentic AI",
    "Artificial Intelligence",
    "Automation",
    "Machine Learning",
    "AI as a Service",
    "AI Agents",
    "Business Automation",
    "AI Consulting",
    "AI Development",
    "Workflow Automation",
    "AI Solutions",
  ],
  metadataBase: new URL("https://agenticaifirst.com"),
  alternates: {
    canonical: "https://agenticaifirst.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AgenticAI First - Everything AI, Under One Roof",
    description:
      "Transform your business with autonomous AI agents that think, plan, and execute.",
    type: "website",
    url: "https://agenticaifirst.com",
    siteName: "AgenticAI First",
    locale: "en_US",
    images: [
      {
        url: "/aaf_logo.png",
        width: 512,
        height: 512,
        alt: "AgenticAI First - AI Solutions Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgenticAI First - Everything AI, Under One Roof",
    description:
      "Transform your business with autonomous AI agents that think, plan, and execute.",
    images: ["/aaf_logo.png"],
  },
  manifest: "/manifest.json",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AgenticAI First",
  url: "https://agenticaifirst.com",
  logo: "https://agenticaifirst.com/aaf_logo.png",
  description:
    "AgenticAI First delivers cutting-edge agentic AI solutions that automate workflows, enhance decision-making, and drive growth for forward-thinking businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://agenticaifirst.com/#contact",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AgenticAI First",
  url: "https://agenticaifirst.com",
  description:
    "Everything AI, Under One Roof. End-to-end agentic AI solutions for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-52DR8DC0PB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-52DR8DC0PB');
          `}
        </Script>
      </body>
    </html>
  );
}

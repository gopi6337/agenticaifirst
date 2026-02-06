import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  ],
  metadataBase: new URL("https://agenticaifirst.com"),
  openGraph: {
    title: "AgenticAI First - Everything AI, Under One Roof",
    description:
      "Transform your business with autonomous AI agents that think, plan, and execute.",
    type: "website",
    url: "https://agenticaifirst.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

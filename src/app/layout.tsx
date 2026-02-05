import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgenticAI - Intelligent AI Solutions for Modern Business",
  description:
    "AgenticAI delivers cutting-edge agentic AI solutions that automate workflows, enhance decision-making, and drive growth for forward-thinking businesses.",
  keywords: [
    "AI",
    "Agentic AI",
    "Artificial Intelligence",
    "Automation",
    "Machine Learning",
  ],
  openGraph: {
    title: "AgenticAI - Intelligent AI Solutions for Modern Business",
    description:
      "Transform your business with autonomous AI agents that think, plan, and execute.",
    type: "website",
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

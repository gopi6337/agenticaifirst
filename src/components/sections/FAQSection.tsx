"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQ_ITEMS = [
  {
    question: "What is Agentic AI?",
    answer:
      "Agentic AI refers to autonomous AI systems powered by large language models (LLMs) that can understand goals, break them into steps, use tools, and execute tasks independently. Unlike traditional automation that follows rigid rules, agentic AI adapts to changing conditions, and handles edge cases intelligently, within limits set by people.",
  },
  {
    question: "How can AI agents help my business?",
    answer:
      "AI agents automate repetitive workflows, provide 24/7 customer support, process documents and data at scale, qualify leads, manage inventory, and much more. The biggest gains usually come from redesigning a whole workflow around the agent, rather than automating single tasks.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including IT & Services, Healthcare & Education, Telecom, E-Commerce & Retail, Finance & Accounting, Customer Support, HR & Recruitment, and Sales & Marketing. Our AI solutions are tailored to the specific challenges and workflows of each industry.",
  },
  {
    question: "How long does it take to deploy AI agents?",
    answer:
      "Our modular architecture enables rapid deployment — most projects go from concept to production in weeks, not months. We follow a four-step process: Discovery (understanding your needs), Design (architecting the solution), Deploy (building and launching), and Optimize (continuous improvement post-launch).",
  },
  {
    question: "What is the ROI of implementing AI agents?",
    answer:
      "ROI varies by use case, so we agree a baseline and target measure before we build, such as cost per transaction, processing time, or resolution rate. Every solution we deliver includes built-in analytics so you can track performance and business impact from day one.",
  },
  {
    question: "How do AI agents differ from traditional automation?",
    answer:
      "Traditional automation (RPA) follows pre-defined rules and breaks when processes change. AI agents understand context and intent, adapt to changing conditions, and handle exceptions intelligently. They can process unstructured data, make decisions, and handle complex multi-step workflows that traditional automation cannot.",
  },
  {
    question: "Is my data secure with AI agents?",
    answer:
      "Security is built in from the start, with data encryption, least-privilege access for each agent, audit trails, and controls designed around the regulations that apply to you. We also offer dedicated security audits based on the OWASP Top 10 for Agentic Applications, covering prompt injection, tool misuse, and agent identity.",
  },
  {
    question: "Why do so many AI agent projects stall after the pilot?",
    answer:
      "Common reasons are unclear ROI, weak governance, and workflows that were never redesigned for agents. Gartner has predicted that over 40% of agentic AI projects will be canceled by the end of 2027. We address this early by agreeing business measures, testing with automated evals, tracing every run, and increasing autonomy in stages.",
  },
  {
    question: "What are MCP and A2A?",
    answer:
      "They are open standards for connecting AI agents. The Model Context Protocol (MCP) connects an agent to tools and data, while Agent2Agent (A2A) lets agents from different vendors work together. Building on them means less custom integration work and less dependence on one vendor.",
  },
  {
    question: "How do you keep AI agents under control?",
    answer:
      "Each agent gets its own identity, the minimum access it needs, and a named owner. High-impact actions go through human approval, every run is traced, and automated evals check quality before each release. New agents start in shadow mode and earn more autonomy as results justify it.",
  },
  {
    question: "Does the EU AI Act apply to my AI agents?",
    answer:
      "It can, if people in the EU use your system. Most transparency duties, such as telling people they are talking to an AI, have applied since 2 August 2026. Rules for high-risk uses such as hiring, credit, and education now start on 2 December 2027. What applies depends on your use case, so confirm the details with legal counsel.",
  },
  {
    question: "Do I need technical expertise to use your AI solutions?",
    answer:
      "No. Our solutions are designed to integrate seamlessly into your existing workflows and tech stack. We handle the technical complexity — from development to deployment to optimization. We also offer AI training and upskilling programs if your team wants to build in-house AI capabilities.",
  },
];

export default function FAQSection() {
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" ref={ref} className="py-8 md:py-12 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Get answers to common questions about agentic AI and how it can transform your business."
        />
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="scroll-reveal gradient-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-medium pr-4">
                  {item.question}
                </span>
                <span
                  className={`text-purple-400 text-xl flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-slate-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

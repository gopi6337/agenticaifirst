"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQ_ITEMS = [
  {
    question: "What is Agentic AI?",
    answer:
      "Agentic AI refers to autonomous AI systems powered by large language models (LLMs) that can understand goals, break them into steps, use tools, and execute tasks independently. Unlike traditional automation that follows rigid rules, agentic AI adapts to changing conditions, handles edge cases intelligently, and improves through learning.",
  },
  {
    question: "How can AI agents help my business?",
    answer:
      "AI agents automate repetitive workflows, provide 24/7 customer support, process documents and data at scale, qualify leads, manage inventory, and much more. Businesses typically see 40-70% cost reductions, 10x faster processing times, and significant improvements in accuracy and customer satisfaction.",
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
      "ROI varies by use case, but our clients typically see 40-70% cost reductions in operational expenses, 3-10x improvements in processing speed, and measurable revenue growth. Every solution we deliver includes built-in analytics so you can track performance and business impact from day one.",
  },
  {
    question: "How do AI agents differ from traditional automation?",
    answer:
      "Traditional automation (RPA) follows pre-defined rules and breaks when processes change. AI agents understand context and intent, adapt to changing conditions, handle exceptions intelligently, and improve through continuous learning. They can process unstructured data, make decisions, and handle complex multi-step workflows that traditional automation cannot.",
  },
  {
    question: "Is my data secure with AI agents?",
    answer:
      "Absolutely. We implement comprehensive security measures including data encryption, access controls, audit trails, and compliance with industry regulations. We also offer dedicated security audits for AI projects covering data privacy, prompt injection prevention, and model vulnerability assessments.",
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

"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const ref = useScrollReveal();

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-violet-deep/10 to-slate-950" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Ready to Transform Your Business?"
          description="Tell us about your project and we'll show you how agentic AI can deliver measurable results."
        />
        <div className="gradient-border rounded-2xl p-6 md:p-8 scroll-reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

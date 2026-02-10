"use client";

import { STEPS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import StepCard from "@/components/ui/StepCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HowItWorksSection() {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" ref={ref} className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="From Idea to Impact in 4 Steps"
          description="A proven methodology that minimizes risk and maximizes results at every stage."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {STEPS.map((step, index) => (
            <StepCard
              key={step.title}
              {...step}
              isLast={index === STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

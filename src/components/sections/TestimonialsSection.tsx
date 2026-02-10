"use client";

import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TestimonialsSection() {
  const ref = useScrollReveal();

  return (
    <section id="testimonials" ref={ref} className="py-12 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Industry Leaders"
          description="Hear from businesses that have transformed their operations with our agentic AI solutions."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

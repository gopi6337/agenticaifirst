"use client";

import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HeroSection() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-deep/20 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-purple-vivid)_0%,_transparent_50%)] opacity-20" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-purple-vivid/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-blue-electric/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-hot/5 rounded-full blur-3xl animate-float-slow" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="scroll-reveal">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-vivid/10 text-purple-vivid border border-purple-vivid/20 mb-6">
            Where AI Meets Action
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 scroll-reveal">
          Build Smarter with{" "}
          <span className="gradient-text">Agentic AI</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed scroll-reveal">
          Autonomous AI agents that think, plan, and execute. Transform your
          workflows with intelligent automation that delivers measurable results
          from day one.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 scroll-reveal">
          <Button href="#contact" size="lg">
            Start Your AI Journey
          </Button>
          <Button href="#services" variant="outline" size="lg">
            Explore Services
          </Button>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 scroll-reveal">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "80%", label: "Cost Reduction" },
            { value: "24/7", label: "AI Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-reveal">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-purple-vivid rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

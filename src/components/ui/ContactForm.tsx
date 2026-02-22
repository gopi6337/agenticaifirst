"use client";

import { useState, FormEvent } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xbdazazn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setError(
          result?.errors?.[0]?.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setError("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-vivid to-cyan-bright flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400 mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-purple-vivid focus:ring-1 focus:ring-purple-vivid outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-purple-vivid focus:ring-1 focus:ring-purple-vivid outline-none transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">
          Company
        </label>
        <input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-purple-vivid focus:ring-1 focus:ring-purple-vivid outline-none transition-colors"
          placeholder="Your company"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-purple-vivid focus:ring-1 focus:ring-purple-vivid outline-none transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
      <Button type="submit" size="lg" className="w-full disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

export type CaseStudy = {
  title: string;
  industry: string;
  icon: string;
  challenges: string[];
  agents: string[];
  results: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "IT & Services",
    industry: "IT & Services",
    icon: "⚙️",
    challenges: ["2-3 day deployment delays", "Late security vulnerability detection", "24/7 manual infrastructure monitoring"],
    agents: ["Code Review Agent", "Security Scanner", "DevOps Automation", "Incident Management"],
    results: ["70% faster deployments", "99.8% uptime achieved", "65% faster incident resolution", "35% developer productivity boost"],
  },
  {
    title: "Healthcare & Education",
    industry: "Healthcare & Education",
    icon: "🏥",
    challenges: ["3+ hrs daily on clinical documentation", "45-min average patient wait times", "24hr student query response delays"],
    agents: ["Clinical Documentation Agent", "Patient Care Monitor", "Diagnosis Support", "AI Tutor"],
    results: ["65% less documentation time", "30% fewer medical errors", "Instant student support", "28% better student performance"],
  },
  {
    title: "Telecom Services",
    industry: "Telecom Services",
    icon: "📡",
    challenges: ["4-6 hr outage resolution time", "25,000 monthly customer complaints", "48-72 hr service activation"],
    agents: ["Network Monitor", "Auto-Healing Agent", "Customer Service Agent", "Predictive Maintenance"],
    results: ["80% less downtime", "55% fewer complaints", "4hr activation (from 72hr)", "40% maintenance cost savings"],
  },
  {
    title: "E-Commerce & Retail",
    industry: "E-Commerce & Retail",
    icon: "🛒",
    challenges: ["68% cart abandonment rate", "15% revenue loss from stockouts", "Generic marketing with 2% conversion"],
    agents: ["Shopping Assistant", "Inventory Manager", "Customer Support Agent", "Marketing Personalizer"],
    results: ["Cart abandonment down to 42%", "75% fewer stockouts", "12% conversion (from 2%)", "32% revenue increase"],
  },
  {
    title: "Finance & Accounting",
    industry: "Finance & Accounting",
    icon: "💰",
    challenges: ["10-day month-end closing cycle", "2-week invoice processing backlog", "20% fraud detection miss rate"],
    agents: ["Reconciliation Agent", "Invoice Processor", "Fraud Detection Agent", "Tax Compliance"],
    results: ["2-day month-end close", "85% faster invoicing", "95% fraud catch rate", "60% team productivity boost"],
  },
  {
    title: "Customer Support",
    industry: "Customer Support",
    icon: "🎧",
    challenges: ["45-min average response time", "30% customer satisfaction score", "80% repetitive queries consuming agents"],
    agents: ["First Response Agent", "Tier-1 Resolution", "Intelligent Routing", "Sentiment Analysis"],
    results: ["30-sec response time", "87% CSAT (from 30%)", "78% tickets auto-resolved", "65% cost reduction"],
  },
  {
    title: "HR & Recruitment",
    industry: "HR & Recruitment",
    icon: "👥",
    challenges: ["40 hrs to screen 500 resumes", "45-day average time-to-hire", "40% candidate ghosting rate"],
    agents: ["Resume Screener", "Interview Scheduler", "Candidate Engagement", "Onboarding Agent"],
    results: ["90% faster screening", "18-day hire (from 45)", "Ghosting down to 14%", "3x recruiter capacity"],
  },
  {
    title: "Sales & Marketing",
    industry: "Sales & Marketing",
    icon: "📈",
    challenges: ["60% leads not contacted in 24hrs", "2% email open rate", "Sales reps 65% time on admin"],
    agents: ["Lead Qualifier", "Outreach Personalizer", "Meeting Scheduler", "Campaign Optimizer"],
    results: ["2hr lead response (from 24hr)", "18% email open rate", "3x more deals per rep", "40% lower acquisition cost"],
  },
];

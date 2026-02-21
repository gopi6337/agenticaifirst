export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  icon: string;
  challenges: string[];
  agents: string[];
  results: string[];
  overview: string;
  solution: string;
  impact: string;
  datePublished: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "it-services-devops-automation",
    title: "IT & Services",
    industry: "IT & Services",
    icon: "⚙️",
    challenges: ["2-3 day deployment delays", "Late security vulnerability detection", "24/7 manual infrastructure monitoring"],
    agents: ["Code Review Agent", "Security Scanner", "DevOps Automation", "Incident Management"],
    results: ["70% faster deployments", "99.8% uptime achieved", "65% faster incident resolution", "35% developer productivity boost"],
    overview: "A mid-size IT services company managing 200+ client applications struggled with slow deployment cycles and reactive incident management. Their team spent more time firefighting than building.",
    solution: "We deployed four AI agents working in concert: a Code Review Agent that catches bugs and security issues before merge, a Security Scanner running continuous vulnerability assessments, a DevOps Automation agent handling CI/CD pipelines end-to-end, and an Incident Management agent that detects, diagnoses, and resolves infrastructure issues autonomously.",
    impact: "The transformation was immediate. Deployments that took 2-3 days now complete in hours. The security posture improved dramatically with vulnerabilities caught at code-commit time rather than in production. The team shifted from reactive firefighting to proactive innovation, boosting overall developer satisfaction and retention.",
    datePublished: "2026-02-09T00:00:00.000Z",
  },
  {
    slug: "healthcare-education-ai",
    title: "Healthcare & Education",
    industry: "Healthcare & Education",
    icon: "🏥",
    challenges: ["3+ hrs daily on clinical documentation", "45-min average patient wait times", "24hr student query response delays"],
    agents: ["Clinical Documentation Agent", "Patient Care Monitor", "Diagnosis Support", "AI Tutor"],
    results: ["65% less documentation time", "30% fewer medical errors", "Instant student support", "28% better student performance"],
    overview: "A healthcare-education group running clinics and training programs faced burnout among clinicians drowning in paperwork, while students waited days for answers to course queries.",
    solution: "We built a Clinical Documentation Agent that listens to patient consultations and auto-generates structured notes, a Patient Care Monitor tracking vitals and flagging anomalies in real-time, a Diagnosis Support agent providing evidence-based recommendations, and an AI Tutor offering 24/7 personalized learning assistance to students.",
    impact: "Clinicians reclaimed 3+ hours daily for patient care. Medical errors dropped 30% through real-time monitoring alerts. Students received instant, accurate responses — improving exam scores by 28% and reducing dropout rates significantly.",
    datePublished: "2026-02-10T00:00:00.000Z",
  },
  {
    slug: "telecom-network-optimization",
    title: "Telecom Services",
    industry: "Telecom Services",
    icon: "📡",
    challenges: ["4-6 hr outage resolution time", "25,000 monthly customer complaints", "48-72 hr service activation"],
    agents: ["Network Monitor", "Auto-Healing Agent", "Customer Service Agent", "Predictive Maintenance"],
    results: ["80% less downtime", "55% fewer complaints", "4hr activation (from 72hr)", "40% maintenance cost savings"],
    overview: "A regional telecom provider serving 500K+ subscribers was hemorrhaging customers due to frequent outages, slow service activation, and overwhelmed call centers handling 25,000 complaints monthly.",
    solution: "We deployed a Network Monitor agent providing real-time topology awareness, an Auto-Healing Agent that detects and resolves network issues before customers notice, a Customer Service Agent handling tier-1 support autonomously, and a Predictive Maintenance agent scheduling proactive equipment servicing based on failure patterns.",
    impact: "Downtime dropped 80%. Service activation went from 72 hours to just 4 hours. Customer complaints fell by 55%, and the predictive maintenance approach saved 40% on maintenance costs by preventing failures rather than reacting to them.",
    datePublished: "2026-02-11T00:00:00.000Z",
  },
  {
    slug: "ecommerce-retail-personalization",
    title: "E-Commerce & Retail",
    industry: "E-Commerce & Retail",
    icon: "🛒",
    challenges: ["68% cart abandonment rate", "15% revenue loss from stockouts", "Generic marketing with 2% conversion"],
    agents: ["Shopping Assistant", "Inventory Manager", "Customer Support Agent", "Marketing Personalizer"],
    results: ["Cart abandonment down to 42%", "75% fewer stockouts", "12% conversion (from 2%)", "32% revenue increase"],
    overview: "An online retailer with 50K+ SKUs was losing millions to cart abandonment, stockouts, and one-size-fits-all marketing campaigns that customers ignored.",
    solution: "We implemented a Shopping Assistant that guides customers through product selection with personalized recommendations, an Inventory Manager predicting demand and auto-reordering stock, a Customer Support Agent resolving order issues instantly, and a Marketing Personalizer crafting individualized campaigns based on browsing and purchase behavior.",
    impact: "Cart abandonment dropped from 68% to 42%. Stockouts reduced by 75%, recovering previously lost revenue. The personalized marketing approach lifted conversion rates from 2% to 12%, driving a 32% overall revenue increase within the first quarter.",
    datePublished: "2026-02-12T00:00:00.000Z",
  },
  {
    slug: "finance-accounting-automation",
    title: "Finance & Accounting",
    industry: "Finance & Accounting",
    icon: "💰",
    challenges: ["10-day month-end closing cycle", "2-week invoice processing backlog", "20% fraud detection miss rate"],
    agents: ["Reconciliation Agent", "Invoice Processor", "Fraud Detection Agent", "Tax Compliance"],
    results: ["2-day month-end close", "85% faster invoicing", "95% fraud catch rate", "60% team productivity boost"],
    overview: "A financial services firm with $200M+ in annual transactions was drowning in manual reconciliation, slow invoice processing, and a fraud detection system that missed 1 in 5 fraudulent transactions.",
    solution: "We deployed a Reconciliation Agent that matches and validates transactions across multiple systems automatically, an Invoice Processor extracting data from any format and routing for approval, a Fraud Detection Agent using behavioral analysis to catch sophisticated fraud patterns, and a Tax Compliance agent ensuring real-time regulatory adherence.",
    impact: "Month-end close shrank from 10 days to 2. Invoice processing backlogs disappeared with 85% faster throughput. Fraud detection accuracy jumped to 95%, preventing significant financial losses. The finance team redirected 60% of their time from manual tasks to strategic analysis.",
    datePublished: "2026-02-13T00:00:00.000Z",
  },
  {
    slug: "customer-support-transformation",
    title: "Customer Support",
    industry: "Customer Support",
    icon: "🎧",
    challenges: ["45-min average response time", "30% customer satisfaction score", "80% repetitive queries consuming agents"],
    agents: ["First Response Agent", "Tier-1 Resolution", "Intelligent Routing", "Sentiment Analysis"],
    results: ["30-sec response time", "87% CSAT (from 30%)", "78% tickets auto-resolved", "65% cost reduction"],
    overview: "A SaaS company with 10,000+ customers had a support crisis: 45-minute response times, a dismal 30% CSAT score, and human agents spending 80% of their time on repetitive password resets and FAQ queries.",
    solution: "We built a First Response Agent providing instant acknowledgment and initial triage, a Tier-1 Resolution agent handling common issues end-to-end, an Intelligent Routing system matching complex tickets to the right specialist, and a Sentiment Analysis agent monitoring customer emotion to prioritize and escalate appropriately.",
    impact: "Response times dropped from 45 minutes to 30 seconds. CSAT scores soared from 30% to 87%. With 78% of tickets auto-resolved, human agents focused on complex, high-value interactions. Overall support costs dropped 65% while quality improved dramatically.",
    datePublished: "2026-02-14T00:00:00.000Z",
  },
  {
    slug: "hr-recruitment-automation",
    title: "HR & Recruitment",
    industry: "HR & Recruitment",
    icon: "👥",
    challenges: ["40 hrs to screen 500 resumes", "45-day average time-to-hire", "40% candidate ghosting rate"],
    agents: ["Resume Screener", "Interview Scheduler", "Candidate Engagement", "Onboarding Agent"],
    results: ["90% faster screening", "18-day hire (from 45)", "Ghosting down to 14%", "3x recruiter capacity"],
    overview: "A growing tech company hiring 50+ roles per quarter was losing top candidates to slow processes. Recruiters spent 40 hours screening 500 resumes per role, and 40% of candidates ghosted due to poor communication.",
    solution: "We deployed a Resume Screener that evaluates candidates against role requirements in seconds, an Interview Scheduler coordinating availability across panels automatically, a Candidate Engagement agent maintaining personalized communication throughout the pipeline, and an Onboarding Agent streamlining day-one setup for new hires.",
    impact: "Resume screening went from 40 hours to 4 hours per role. Time-to-hire dropped from 45 days to 18. Candidate ghosting fell from 40% to 14% thanks to consistent engagement. Each recruiter now handles 3x more open roles without burnout.",
    datePublished: "2026-02-15T00:00:00.000Z",
  },
  {
    slug: "sales-marketing-ai-agents",
    title: "Sales & Marketing",
    industry: "Sales & Marketing",
    icon: "📈",
    challenges: ["60% leads not contacted in 24hrs", "2% email open rate", "Sales reps 65% time on admin"],
    agents: ["Lead Qualifier", "Outreach Personalizer", "Meeting Scheduler", "Campaign Optimizer"],
    results: ["2hr lead response (from 24hr)", "18% email open rate", "3x more deals per rep", "40% lower acquisition cost"],
    overview: "A B2B company's sales pipeline was leaking: 60% of leads went cold because reps couldn't follow up within 24 hours, email campaigns had a dismal 2% open rate, and reps spent 65% of their time on CRM updates and admin work.",
    solution: "We implemented a Lead Qualifier that scores and prioritizes inbound leads instantly, an Outreach Personalizer crafting individualized emails based on prospect research, a Meeting Scheduler handling back-and-forth availability coordination, and a Campaign Optimizer A/B testing and refining messaging in real-time.",
    impact: "Lead response time dropped from 24 hours to 2 hours. Email open rates jumped from 2% to 18% with personalized messaging. Sales reps closed 3x more deals by focusing on selling instead of admin. Customer acquisition costs dropped 40%.",
    datePublished: "2026-02-16T00:00:00.000Z",
  },
];

export type CaseStudy = {
  title: string;
  industry: string;
  icon: string;
  challenge: string;
  solution: string;
  results: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Legacy System Modernization for a Global IT Firm",
    industry: "IT & Services",
    icon: "⚙️",
    challenge: "A Fortune 500 IT services company was running critical applications on a 15-year-old monolithic architecture. Deployments took weeks, downtime was frequent, and onboarding new developers took months due to undocumented legacy code.",
    solution: "We deployed AI agents to analyze the entire codebase, auto-generate documentation, and orchestrate a phased migration to microservices. The agents handled code refactoring, automated testing, and zero-downtime deployment pipelines.",
    results: [
      "60% faster migration timeline (18 months → 7 months)",
      "Zero downtime during transition",
      "Developer onboarding reduced from 3 months to 2 weeks",
      "40% improvement in system performance",
      "$1.2M annual infrastructure savings",
    ],
  },
  {
    title: "Smart Patient Intake for a Healthcare Network",
    industry: "Healthcare & Education",
    icon: "🏥",
    challenge: "A multi-location clinic network averaged 30 minutes per patient intake — paper forms, manual data entry, insurance verification calls, and duplicate records plagued the process. Staff burnout was high and patients complained about wait times.",
    solution: "We deployed an AI intake agent with digital forms, real-time insurance verification, automated record creation, and duplicate detection. Patients complete intake on their phones before arrival.",
    results: [
      "Intake time reduced from 30 minutes to 5 minutes",
      "80% of front-desk staff time freed for patient care",
      "Zero data entry errors",
      "Patient satisfaction scores up 35%",
      "Seamless integration with existing EHR system",
    ],
  },
  {
    title: "AI-Driven Network Operations for a Telecom Provider",
    industry: "Telecom Services",
    icon: "📡",
    challenge: "A regional telecom with 2M+ subscribers faced rising churn rates (18% annually) and frequent network outages. Their NOC team was reactive — detecting issues only after customer complaints flooded in.",
    solution: "We built AI agents for predictive network monitoring, automated fault detection, and proactive customer churn prediction. The agents analyze network telemetry in real-time, predict failures before they occur, and trigger automated remediation.",
    results: [
      "Churn rate reduced from 18% to 11%",
      "Network uptime improved to 99.97%",
      "Mean time to repair (MTTR) cut by 65%",
      "Proactive issue detection — 80% of faults resolved before customer impact",
      "$3.5M annual revenue saved from churn reduction",
    ],
  },
  {
    title: "AI-Powered Support for a Leading E-Commerce Platform",
    industry: "E-Commerce & Retail",
    icon: "🛒",
    challenge: "A fast-growing online retailer was drowning in 2,000+ daily support tickets. Their 15-person team couldn't keep up — response times hit 12+ hours, CSAT dropped to 62%, and hiring wasn't scalable.",
    solution: "We deployed an AI support agent integrated with their order management system, CRM, and knowledge base. The agent handles order tracking, returns, refund processing, and product FAQs — escalating complex cases to humans with full context.",
    results: [
      "70% of tickets resolved without human intervention",
      "Response time dropped from 12 hours to under 2 minutes",
      "CSAT improved from 62% to 91%",
      "45% reduction in support costs",
      "Team refocused on VIP customers and strategic work",
    ],
  },
  {
    title: "Intelligent Invoice Processing for a Financial Services Firm",
    industry: "Finance & Accounting",
    icon: "💰",
    challenge: "A mid-size financial firm processed 3,000+ invoices monthly — all manually. Staff spent 40+ hours/week on data entry, validation, and ERP updates. Error rates were at 8%, causing payment delays and vendor frustration.",
    solution: "We built an AI agent combining OCR, intelligent data extraction, and automated validation. It reads invoices in any format (PDF, scan, email), extracts key fields, cross-checks against POs, flags anomalies, and pushes approved entries to their ERP.",
    results: [
      "90% reduction in processing time (40 hrs → 4 hrs/week)",
      "Error rate dropped from 8% to 0.5%",
      "$200K annual savings in operational costs",
      "Vendor payments 3x faster",
      "Staff reassigned to financial analysis and strategy",
    ],
  },
  {
    title: "Omnichannel AI Support for a SaaS Company",
    industry: "Customer Support",
    icon: "🎧",
    challenge: "A B2B SaaS company with 5,000+ clients struggled with fragmented support across email, chat, and phone. Agents lacked context across channels, leading to repeated conversations, 24-hour average resolution time, and a CSAT of 68%.",
    solution: "We deployed an omnichannel AI agent that maintains unified context across all channels. It auto-categorizes tickets, suggests solutions from the knowledge base, handles L1 issues autonomously, and provides human agents with full conversation history and sentiment analysis on escalation.",
    results: [
      "Resolution time dropped from 24 hours to 3 hours",
      "CSAT improved from 68% to 91%",
      "60% of L1 tickets auto-resolved",
      "Agent productivity increased 2.5x",
      "Consistent experience across email, chat, and phone",
    ],
  },
  {
    title: "AI-Powered Talent Acquisition for a Staffing Agency",
    industry: "HR & Recruitment",
    icon: "👥",
    challenge: "A staffing agency processing 10,000+ resumes monthly was spending 200+ hours/week on manual screening. Time-to-fill averaged 45 days, qualified candidates were slipping away to competitors, and recruiter burnout was at an all-time high.",
    solution: "We built an AI recruitment agent that screens resumes against job requirements, ranks candidates by fit score, conducts automated initial assessments, schedules interviews, and maintains personalized candidate engagement throughout the pipeline.",
    results: [
      "Resume screening time reduced by 85%",
      "Time-to-fill cut from 45 days to 18 days",
      "Candidate quality scores improved 40%",
      "Recruiter capacity increased 3x without new hires",
      "Candidate drop-off rate reduced by 55%",
    ],
  },
  {
    title: "AI Lead Engine for a B2B Technology Company",
    industry: "Sales & Marketing",
    icon: "📈",
    challenge: "A B2B tech company's sales team was spending 60% of their time on manual prospecting, lead research, and cold outreach. Conversion rates were at 2%, pipeline was unpredictable, and reps were burning out on low-quality leads.",
    solution: "We deployed AI agents for automated lead research, intelligent scoring, personalized outreach sequences, and CRM enrichment. The agents identify ideal prospects, research their pain points, craft personalized messages, and hand off warm leads to sales reps.",
    results: [
      "Lead conversion rate improved from 2% to 6.5%",
      "Sales reps reclaimed 25 hours/week for closing deals",
      "Pipeline value increased 3x in 6 months",
      "Cost per qualified lead reduced by 55%",
      "Outreach response rates up from 3% to 14%",
    ],
  },
];

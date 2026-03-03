export type GuideStep = string;

export type ImplementationGuide = {
  id: string;
  title: string;
  description: string;
  icon: string;
  steps: GuideStep[];
  relatedCaseStudy: {
    label: string;
    slug: string;
  };
};

export type IntegrationTool = {
  name: string;
  icon: string;
};

export type IntegrationCategory = {
  name: string;
  icon: string;
  color: string;
  tools: IntegrationTool[];
};

export const IMPLEMENTATION_GUIDES: ImplementationGuide[] = [
  {
    id: "getting-started-ai-agents",
    title: "Getting Started with AI Agents",
    description:
      "A step-by-step guide to evaluating, planning, and deploying your first AI agent — without disrupting your existing operations.",
    icon: "🚀",
    steps: [
      "Audit your current workflows and identify repetitive, rule-based tasks that consume the most time.",
      "Prioritize use cases by impact vs. complexity — start with high-volume, low-ambiguity tasks.",
      "Choose the right AI framework (LLM-based agent, RPA hybrid, or custom) based on your data and compliance requirements.",
      "Define success metrics: response time, error rate, cost per transaction, and human escalation rate.",
      "Run a 30-day pilot with a small team before full rollout — capture edge cases and tune the agent.",
      "Set up monitoring dashboards and feedback loops so the agent improves over time.",
    ],
    relatedCaseStudy: { label: "IT & DevOps Automation", slug: "it-services-devops-automation" },
  },
  {
    id: "automating-customer-support",
    title: "Automating Customer Support",
    description:
      "How to build AI-powered support that resolves 70%+ of tickets autonomously while keeping customer satisfaction high.",
    icon: "🎧",
    steps: [
      "Classify your support tickets by category, frequency, and resolution complexity over the last 6 months.",
      "Build an intent classification model or use a pre-trained LLM to route tickets automatically.",
      "Create a knowledge base of approved responses for top 80% of ticket types.",
      "Integrate the AI agent with your helpdesk (Zendesk, Freshdesk, Intercom) via API.",
      "Implement a confidence threshold: below 80% confidence, auto-escalate to a human agent with context.",
      "Measure CSAT scores weekly and retrain the model on misclassified or escalated tickets.",
    ],
    relatedCaseStudy: { label: "Customer Support Transformation", slug: "customer-support-transformation" },
  },
  {
    id: "ai-for-finance-accounting",
    title: "AI for Finance & Accounting",
    description:
      "Automate invoice processing, reconciliation, and financial reporting while maintaining audit trails and compliance.",
    icon: "💰",
    steps: [
      "Map your invoice-to-pay and order-to-cash workflows — identify all manual touchpoints.",
      "Deploy an OCR + LLM pipeline to extract structured data from invoices, receipts, and POs.",
      "Build validation rules (amounts, vendor details, PO matching) that the AI checks automatically.",
      "Integrate with your ERP (SAP, QuickBooks, Xero) to push approved transactions directly.",
      "Create anomaly detection alerts for duplicate invoices, unusual amounts, or mismatched vendors.",
      "Generate automated P&L summaries, cash flow reports, and reconciliation statements on schedule.",
    ],
    relatedCaseStudy: { label: "Finance & Accounting Automation", slug: "finance-accounting-automation" },
  },
  {
    id: "hr-recruitment-automation",
    title: "HR & Recruitment Automation",
    description:
      "Streamline the entire talent lifecycle — from job posting and screening to onboarding — with AI agents.",
    icon: "👥",
    steps: [
      "Define structured job requirements and scoring rubrics for each role you frequently hire.",
      "Integrate an AI sourcing agent with LinkedIn, job boards, and your ATS to surface matched candidates.",
      "Deploy a resume screening model that scores candidates against your rubric — eliminating unconscious bias.",
      "Automate scheduling: the AI agent coordinates interview slots with candidates and interviewers.",
      "Create an onboarding workflow agent that sends documents, assigns tasks, and checks completion.",
      "Track time-to-hire, offer acceptance rates, and 90-day retention to optimize the pipeline continuously.",
    ],
    relatedCaseStudy: { label: "HR & Recruitment Automation", slug: "hr-recruitment-automation" },
  },
  {
    id: "devops-it-workflow-automation",
    title: "DevOps & IT Workflow Automation",
    description:
      "Reduce toil, speed up deployments, and keep infrastructure healthy with AI-driven DevOps agents.",
    icon: "⚙️",
    steps: [
      "Catalog all recurring IT tasks: incident triage, log analysis, deployment approvals, and access provisioning.",
      "Integrate an AI agent with your monitoring stack (Datadog, Grafana, PagerDuty) to classify alerts automatically.",
      "Build runbooks as machine-readable playbooks — the agent executes remediation steps on known incident types.",
      "Set up an AI-powered CI/CD reviewer that flags risky code changes and suggests rollback if metrics degrade.",
      "Automate IAM: the agent provisions and decommissions user access based on HR system events.",
      "Use anomaly detection on infrastructure metrics to predict capacity issues 24+ hours before they occur.",
    ],
    relatedCaseStudy: { label: "IT & DevOps Automation", slug: "it-services-devops-automation" },
  },
  {
    id: "sales-marketing-ai-agents",
    title: "Sales & Marketing AI Agents",
    description:
      "Deploy AI agents that identify, qualify, and nurture leads autonomously — so your sales team focuses on closing.",
    icon: "📈",
    steps: [
      "Define your Ideal Customer Profile (ICP) with firmographic and behavioral signals your top customers share.",
      "Deploy a prospecting agent that continuously scans LinkedIn, news feeds, and intent data for ICP matches.",
      "Integrate with your CRM (Salesforce, HubSpot) to auto-create and score leads without manual entry.",
      "Build personalized outreach sequences: the agent writes context-aware emails based on the prospect's industry and role.",
      "Set up an AI SDR agent to handle initial replies, answer FAQs, and book demo calls directly on your calendar.",
      "Analyze win/loss patterns monthly and feed insights back into your ICP and outreach templates.",
    ],
    relatedCaseStudy: { label: "Sales & Marketing AI Agents", slug: "sales-marketing-ai-agents" },
  },
];

export const INTEGRATIONS: IntegrationCategory[] = [
  {
    name: "CRM",
    icon: "🤝",
    color: "blue",
    tools: [
      { name: "Salesforce", icon: "☁️" },
      { name: "HubSpot", icon: "🧡" },
      { name: "Zoho CRM", icon: "🔵" },
      { name: "Pipedrive", icon: "🟢" },
      { name: "Monday CRM", icon: "🔴" },
    ],
  },
  {
    name: "Communication",
    icon: "💬",
    color: "purple",
    tools: [
      { name: "Slack", icon: "💜" },
      { name: "Microsoft Teams", icon: "🔷" },
      { name: "Twilio", icon: "🔴" },
      { name: "Intercom", icon: "🟦" },
      { name: "Zendesk", icon: "🟩" },
    ],
  },
  {
    name: "ERP",
    icon: "🏭",
    color: "orange",
    tools: [
      { name: "SAP", icon: "🔵" },
      { name: "Oracle ERP", icon: "🔴" },
      { name: "Microsoft Dynamics", icon: "🔷" },
      { name: "QuickBooks", icon: "🟢" },
      { name: "Xero", icon: "🔵" },
    ],
  },
  {
    name: "DevOps & IT",
    icon: "⚙️",
    color: "slate",
    tools: [
      { name: "GitHub", icon: "⬛" },
      { name: "GitLab", icon: "🟠" },
      { name: "Jira", icon: "🔵" },
      { name: "PagerDuty", icon: "🟢" },
      { name: "Datadog", icon: "🐶" },
    ],
  },
  {
    name: "Data & Analytics",
    icon: "📊",
    color: "cyan",
    tools: [
      { name: "Snowflake", icon: "❄️" },
      { name: "BigQuery", icon: "🔵" },
      { name: "Tableau", icon: "🟦" },
      { name: "Power BI", icon: "🟡" },
      { name: "Looker", icon: "🟣" },
    ],
  },
  {
    name: "Cloud",
    icon: "☁️",
    color: "sky",
    tools: [
      { name: "AWS", icon: "🟠" },
      { name: "Google Cloud", icon: "🔵" },
      { name: "Microsoft Azure", icon: "🔷" },
      { name: "Vercel", icon: "⬛" },
      { name: "Cloudflare", icon: "🟠" },
    ],
  },
  {
    name: "Marketing",
    icon: "📣",
    color: "pink",
    tools: [
      { name: "Mailchimp", icon: "🐵" },
      { name: "ActiveCampaign", icon: "🔵" },
      { name: "Marketo", icon: "🟣" },
      { name: "Klaviyo", icon: "🟢" },
      { name: "Brevo", icon: "🔵" },
    ],
  },
  {
    name: "HR & People",
    icon: "👥",
    color: "green",
    tools: [
      { name: "Workday", icon: "🔵" },
      { name: "BambooHR", icon: "🟢" },
      { name: "Greenhouse", icon: "🟢" },
      { name: "Rippling", icon: "🔵" },
      { name: "Lever", icon: "🟣" },
    ],
  },
];

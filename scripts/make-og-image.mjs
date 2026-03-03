import sharp from "sharp";
import { existsSync, mkdirSync } from "fs";

const WIDTH = 1200;
const HEIGHT = 630;

// Ensure output directory for per-page OG images
if (!existsSync("public/og")) {
  mkdirSync("public/og", { recursive: true });
}

const logoBuffer = await sharp("public/new_logo.png")
  .resize(160, 160, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapText(text, maxChars = 26) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    if (current && (current + " " + word).length > maxChars) {
      lines.push(current);
      current = word;
    } else {
      current = current ? current + " " + word : word;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function buildSvg({ badge, badgeColor, title, description }) {
  const lines = wrapText(title, 26);
  const lineHeight = 66;
  const titleStartY =
    lines.length === 1 ? 300 : lines.length === 2 ? 265 : 230;

  const titleLines = lines
    .map(
      (line, i) =>
        `<text x="370" y="${titleStartY + i * lineHeight}"
        font-family="Arial Black, Arial, sans-serif"
        font-size="56" font-weight="900" fill="#ffffff">${escapeXml(line)}</text>`
    )
    .join("\n  ");

  const descY = titleStartY + lines.length * lineHeight + 28;
  const desc = description.length > 52 ? description.slice(0, 52) + "…" : description;

  return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0f0a1e"/>
      <stop offset="60%"  stop-color="#0d0d1a"/>
      <stop offset="100%" stop-color="#020817"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <circle cx="160"  cy="315" r="220" fill="#7c3aed" opacity="0.13"/>
  <circle cx="1080" cy="280" r="170" fill="#3b82f6" opacity="0.09"/>
  <circle cx="640"  cy="620" r="180" fill="#ec4899" opacity="0.07"/>

  <!-- Brand name (top) -->
  <text x="370" y="105" font-family="Arial, sans-serif" font-size="20" fill="#64748b">AgenticAI First</text>

  <!-- Badge -->
  <rect x="368" y="122" width="148" height="30" rx="15" fill="${badgeColor}" opacity="0.15"/>
  <rect x="368" y="122" width="148" height="30" rx="15" fill="none" stroke="${badgeColor}" stroke-width="1" opacity="0.5"/>
  <text x="442" y="143" font-family="Arial, sans-serif" font-size="14" font-weight="600"
        fill="${badgeColor}" text-anchor="middle">${escapeXml(badge)}</text>

  <!-- Vertical divider -->
  <line x1="330" y1="80" x2="330" y2="550" stroke="#7c3aed" stroke-width="1.5" opacity="0.35"/>

  <!-- Title -->
  ${titleLines}

  <!-- Description -->
  <text x="370" y="${descY}" font-family="Arial, sans-serif" font-size="22" fill="#94a3b8">${escapeXml(desc)}</text>

  <!-- Domain pill -->
  <rect x="368" y="540" width="260" height="38" rx="19" fill="#7c3aed" opacity="0.18"/>
  <rect x="368" y="540" width="260" height="38" rx="19" fill="none" stroke="#7c3aed" stroke-width="1" opacity="0.4"/>
  <text x="498" y="565" font-family="Arial, sans-serif" font-size="20" fill="#c4b5fd"
        text-anchor="middle">agenticaifirst.com</text>
</svg>`;
}

async function generate(outPath, badge, badgeColor, title, description) {
  const svg = buildSvg({ badge, badgeColor, title, description });
  await sharp(Buffer.from(svg))
    .composite([{ input: logoBuffer, left: 65, top: 220 }])
    .png()
    .toFile(outPath);
  console.log(`✓ ${outPath}`);
}

// ── Homepage ─────────────────────────────────────────────────────────────────
await sharp(Buffer.from(`<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0f0a1e"/>
      <stop offset="60%"  stop-color="#0d0d1a"/>
      <stop offset="100%" stop-color="#020817"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <circle cx="160"  cy="315" r="220" fill="#7c3aed" opacity="0.13"/>
  <circle cx="1080" cy="280" r="170" fill="#3b82f6" opacity="0.09"/>
  <circle cx="640"  cy="620" r="180" fill="#ec4899" opacity="0.07"/>
  <line x1="330" y1="160" x2="330" y2="470" stroke="#7c3aed" stroke-width="1.5" opacity="0.35"/>
  <text x="368" y="268" font-family="Arial Black, Arial, sans-serif" font-size="72" font-weight="900" fill="#ffffff" letter-spacing="-1">AgenticAI First</text>
  <rect x="368" y="280" width="520" height="3" rx="2" fill="#7c3aed" opacity="0.6"/>
  <text x="370" y="344" font-family="Arial, sans-serif" font-size="33" font-weight="500" fill="#a78bfa">Everything AI, Under One Roof</text>
  <text x="370" y="398" font-family="Arial, sans-serif" font-size="22" fill="#94a3b8">Autonomous agents that think, plan, and execute.</text>
  <rect x="368" y="432" width="260" height="38" rx="19" fill="#7c3aed" opacity="0.18"/>
  <rect x="368" y="432" width="260" height="38" rx="19" fill="none" stroke="#7c3aed" stroke-width="1" opacity="0.4"/>
  <text x="498" y="457" font-family="Arial, sans-serif" font-size="20" fill="#c4b5fd" text-anchor="middle">agenticaifirst.com</text>
  <circle cx="370" cy="500" r="4" fill="#7c3aed" opacity="0.7"/>
  <circle cx="385" cy="500" r="4" fill="#3b82f6" opacity="0.7"/>
  <circle cx="400" cy="500" r="4" fill="#ec4899" opacity="0.7"/>
</svg>`))
  .composite([{ input: await sharp("public/new_logo.png").resize(200, 200, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer(), left: 65, top: 215 }])
  .png()
  .toFile("public/og-image.png");
console.log("✓ public/og-image.png (homepage)");

// ── Blog posts ────────────────────────────────────────────────────────────────
await generate(
  "public/og/blog-what-are-ai-agents.png",
  "Blog · AI Fundamentals", "#3b82f6",
  "What Are AI Agents?",
  "Why your business needs them in 2026"
);
await generate(
  "public/og/blog-ai-transforming-customer-support.png",
  "Blog · Use Cases", "#3b82f6",
  "AI Is Transforming Customer Support",
  "The future of customer experience"
);
await generate(
  "public/og/blog-choosing-right-ai-partner.png",
  "Blog · Strategy", "#3b82f6",
  "Choosing the Right AI Partner",
  "What to look for in an AI company"
);

// ── Case studies ──────────────────────────────────────────────────────────────
await generate(
  "public/og/cs-it-services-devops-automation.png",
  "Case Study · IT & DevOps", "#10b981",
  "IT & DevOps Automation",
  "AI agents streamlining IT operations"
);
await generate(
  "public/og/cs-healthcare-education-ai.png",
  "Case Study · Healthcare", "#10b981",
  "Healthcare & Education AI",
  "AI transforming patient care and learning"
);
await generate(
  "public/og/cs-telecom-network-optimization.png",
  "Case Study · Telecom", "#10b981",
  "Telecom Network Optimization",
  "AI agents managing network operations"
);
await generate(
  "public/og/cs-ecommerce-retail-personalization.png",
  "Case Study · E-Commerce", "#10b981",
  "E-Commerce Personalization",
  "AI driving retail revenue growth"
);
await generate(
  "public/og/cs-finance-accounting-automation.png",
  "Case Study · Finance", "#10b981",
  "Finance & Accounting AI",
  "Automated financial intelligence at scale"
);
await generate(
  "public/og/cs-customer-support-transformation.png",
  "Case Study · Support", "#10b981",
  "Customer Support AI",
  "Transforming support with AI agents"
);
await generate(
  "public/og/cs-hr-recruitment-automation.png",
  "Case Study · HR", "#10b981",
  "HR & Recruitment AI",
  "AI-powered talent acquisition"
);
await generate(
  "public/og/cs-sales-marketing-ai-agents.png",
  "Case Study · Sales", "#10b981",
  "Sales & Marketing AI Agents",
  "AI agents driving revenue growth"
);

console.log("\n✓ All OG images generated successfully!");

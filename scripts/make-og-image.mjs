import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;

// Scale the logo up
const logoBuffer = await sharp("public/new_logo.png")
  .resize(200, 200, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .toBuffer();

const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0f0a1e"/>
      <stop offset="60%"  stop-color="#0d0d1a"/>
      <stop offset="100%" stop-color="#020817"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Ambient glow blobs -->
  <circle cx="160"  cy="315" r="220" fill="#7c3aed" opacity="0.13"/>
  <circle cx="1080" cy="280" r="170" fill="#3b82f6" opacity="0.09"/>
  <circle cx="640"  cy="620" r="180" fill="#ec4899" opacity="0.07"/>

  <!-- Vertical divider -->
  <line x1="330" y1="160" x2="330" y2="470"
        stroke="#7c3aed" stroke-width="1.5" opacity="0.35"/>

  <!-- Brand name -->
  <text x="368" y="268"
        font-family="Arial Black, Arial, sans-serif"
        font-size="72" font-weight="900"
        fill="#ffffff" letter-spacing="-1">AgenticAI First</text>

  <!-- Purple accent bar under brand name -->
  <rect x="368" y="280" width="520" height="3" rx="2"
        fill="#7c3aed" opacity="0.6"/>

  <!-- Tagline -->
  <text x="370" y="344"
        font-family="Arial, sans-serif"
        font-size="33" font-weight="500"
        fill="#a78bfa">Everything AI, Under One Roof</text>

  <!-- Description -->
  <text x="370" y="398"
        font-family="Arial, sans-serif"
        font-size="22" fill="#94a3b8">
    Autonomous agents that think, plan, and execute.
  </text>

  <!-- Domain pill -->
  <rect x="368" y="432" width="260" height="38" rx="19"
        fill="#7c3aed" opacity="0.18"/>
  <rect x="368" y="432" width="260" height="38" rx="19"
        fill="none" stroke="#7c3aed" stroke-width="1" opacity="0.4"/>
  <text x="498" y="457"
        font-family="Arial, sans-serif"
        font-size="20" fill="#c4b5fd"
        text-anchor="middle">agenticaifirst.com</text>

  <!-- Decorative dots -->
  <circle cx="370" cy="500" r="4" fill="#7c3aed" opacity="0.7"/>
  <circle cx="385" cy="500" r="4" fill="#3b82f6" opacity="0.7"/>
  <circle cx="400" cy="500" r="4" fill="#ec4899" opacity="0.7"/>
</svg>`;

await sharp(Buffer.from(svg))
  .composite([{ input: logoBuffer, left: 65, top: 215 }])
  .png()
  .toFile("public/og-image.png");

console.log("✓ public/og-image.png created (1200×630)");

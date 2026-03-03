import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT  = path.join(__dirname, "../public/new_logo.png");
const OUTPUT = path.join(__dirname, "../src/app/icon.png");

async function makeFavicon() {
  // Load image and get raw pixel data to find bounding box
  const img = sharp(INPUT);
  const { width, height } = await img.metadata();

  const { data } = await img.raw().ensureAlpha().toBuffer({ resolveWithObject: true });

  // Find bounding box of non-transparent pixels
  let minX = width, minY = height, maxX = 0, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const alpha = data[idx + 3];
      if (alpha > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const PADDING = 4;
  minX = Math.max(0, minX - PADDING);
  minY = Math.max(0, minY - PADDING);
  maxX = Math.min(width - 1, maxX + PADDING);
  maxY = Math.min(height - 1, maxY + PADDING);

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;

  console.log(`Original: ${width}x${height} → Crop: ${cropW}x${cropH} at (${minX},${minY})`);

  // Crop tight + resize to 512x512 using lanczos3 (high quality)
  await sharp(INPUT)
    .extract({ left: minX, top: minY, width: cropW, height: cropH })
    .resize(64, 64, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      kernel: sharp.kernel.lanczos3,
    })
    .png()
    .toFile(OUTPUT);

  console.log(`✅ Favicon saved → ${OUTPUT} (512x512, high quality)`);
}

makeFavicon().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});

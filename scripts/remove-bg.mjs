import { Jimp } from "jimp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT  = path.join(__dirname, "../new_logo.png");
const OUTPUT = path.join(__dirname, "../public/new_logo.png");

// Colour tolerance — how far from the background colour a pixel can be
// and still get erased. Increase if edges still show shade; decrease to
// keep more detail.
const TOLERANCE = 60;

function colorDistance(r1, g1, b1, r2, g2, b2) {
  return Math.sqrt(
    (r1 - r2) ** 2 +
    (g1 - g2) ** 2 +
    (b1 - b2) ** 2
  );
}

async function removeBg() {
  const img = await Jimp.read(INPUT);

  // Sample the background colour from the top-left corner pixel
  const bgColor = img.getPixelColor(0, 0);
  const bgR = (bgColor >> 24) & 0xff;
  const bgG = (bgColor >> 16) & 0xff;
  const bgB = (bgColor >>  8) & 0xff;

  console.log(`Background colour sampled: rgb(${bgR}, ${bgG}, ${bgB})`);

  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];

    const dist = colorDistance(r, g, b, bgR, bgG, bgB);

    if (dist < TOLERANCE) {
      // Make pixel fully transparent
      this.bitmap.data[idx + 3] = 0;
    }
  });

  await img.write(OUTPUT);
  console.log(`✅ Saved transparent PNG → ${OUTPUT}`);
}

removeBg().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});

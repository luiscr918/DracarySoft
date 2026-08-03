import puppeteer from "puppeteer";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "..", "src", "assets", "imgs", "projects");

const SITES = [
  { slug: "new-inox", url: "https://new-inox.com/" },
  { slug: "extreme-bull", url: "https://extremebull.new-inox.com/" },
  { slug: "lincoln", url: "https://uelincolnlarrea.netlify.app/" },
  { slug: "glow-studio", url: "https://estetica-simulator.netlify.app/" },
  { slug: "autoservice", url: "https://taller-simulator.netlify.app/" },
  { slug: "gympro", url: "https://gym-simulator.netlify.app/" },
];

async function screenshots() {
  console.log("[screenshots] Starting...");
  await fs.mkdir(outDir, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  for (const { slug, url } of SITES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    );

    try {
      console.log(`[screenshots] Capturing ${slug} (${url})...`);
      await page.goto(url, { waitUntil: "networkidle2", timeout: 45000 });
      await new Promise((r) => setTimeout(r, 1200));

      const outputPath = path.join(outDir, `${slug}.jpg`);
      await page.screenshot({
        path: outputPath,
        type: "jpeg",
        quality: 80,
      });
      console.log(`[screenshots] ✓ ${slug}.jpg`);
    } catch (err) {
      console.error(`[screenshots] ✗ ${slug}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("[screenshots] Done!");
}

screenshots().catch((err) => {
  console.error("[screenshots] Fatal:", err);
  process.exit(1);
});

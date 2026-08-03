import puppeteer from "puppeteer";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");

const ROUTES = [
  "/",
  "/servicios",
  "/proyectos",
  "/beneficios",
  "/nosotros",
  "/contacto",
  "/preguntas-frecuentes",
  "/404",
];

async function prerender() {
  console.log("[prerender] Starting static HTML generation...");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (compatible; DracarySoft-prerender/1.0; +https://dracarysoft.com)",
  );

  for (const route of ROUTES) {
    const url = `http://localhost:4173${route}`;
    console.log(`[prerender] Rendering ${route}...`);

    try {
      const waitUntil = route === "/proyectos" ? "domcontentloaded" : "networkidle2";
      await page.goto(url, { waitUntil, timeout: 30000 });

      const html = await page.content();
      const outputPath =
        route === "/"
          ? path.join(distDir, "index.html")
          : path.join(distDir, route, "index.html");

      await fs.mkdir(path.dirname(outputPath), { recursive: true });

      const finalHtml = html.replace(
        /<\/head>/,
        '  <meta name="prerender-status-code" content="200">\n</head>',
      );

      await fs.writeFile(outputPath, finalHtml, "utf-8");
      console.log(`[prerender] ✓ ${route} → ${path.relative(distDir, outputPath)}`);
    } catch (err) {
      console.error(`[prerender] ✗ ${route}: ${err.message}`);
    }
  }

  await browser.close();
  console.log("[prerender] Done! Static HTML files generated in dist/");
}

prerender().catch((err) => {
  console.error("[prerender] Fatal:", err);
  process.exit(1);
});

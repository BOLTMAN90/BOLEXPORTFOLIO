import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "projects");

async function withPage(width, height, fn) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();
  try {
    await fn(page);
  } finally {
    await browser.close();
  }
}

async function capturePage({ name, url, width, height, waitMs, beforeShot }) {
  await withPage(width, height, async (page) => {
    console.log(`Capturing ${url} -> ${name}`);
    await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(waitMs);
    if (beforeShot) await beforeShot(page);
    await page.screenshot({
      path: path.join(outDir, name),
      fullPage: false,
      type: "png",
    });
    console.log(`Saved ${name}`);
  });
}

async function capturePlayStoreScreenshots() {
  const url =
    "https://play.google.com/store/apps/details?id=com.vibecoding.assistantai";
  await withPage(1440, 900, async (page) => {
    await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(4000);

    const shots = page.locator('img[alt="Screenshot image"]');
    const count = await shots.count();
    if (count === 0) throw new Error("No Play Store screenshots found");

    const targets = [
      { index: 0, name: "assistant-ai-new-project.png" },
      { index: Math.min(1, count - 1), name: "assistant-ai-hotel.png" },
    ];

    for (const target of targets) {
      const locator = shots.nth(target.index);
      await locator.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await locator.screenshot({
        path: path.join(outDir, target.name),
        type: "png",
      });
      console.log(`Saved ${target.name}`);
    }
  });
}

await capturePage({
  name: "flowcoach-hero.png",
  url: "https://flowcoachai.com/",
  width: 1440,
  height: 900,
  waitMs: 4000,
});

await capturePage({
  name: "flowcoach-second-brain.png",
  url: "https://flowcoachai.com/",
  width: 1440,
  height: 900,
  waitMs: 3000,
  beforeShot: async (page) => {
    const target = page.getByText("Never Lose an Idea Again", { exact: false }).first();
    await target.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
  },
});

await capturePage({
  name: "assistant-ai-hero.png",
  url: "https://play.google.com/store/apps/details?id=com.vibecoding.assistantai",
  width: 1440,
  height: 900,
  waitMs: 5000,
});

await capturePage({
  name: "urunn-hero.png",
  url: "https://www.urunn.com/",
  width: 1440,
  height: 900,
  waitMs: 5000,
});

await capturePage({
  name: "bolex-hospitality-hero.png",
  url: "https://bolexhospitalitylisting.vercel.app",
  width: 1440,
  height: 900,
  waitMs: 6000,
});

await capturePlayStoreScreenshots();
console.log("Done.");

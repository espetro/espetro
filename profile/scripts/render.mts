// Shoots every [data-name] asset in light + dark into ../assets/*.png.
// Uses the installed Chrome via playwright-core (no browser download).
import { chromium } from "playwright-core";
import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const out = path.resolve(root, "..", "assets");

const MIME: Record<string, string> = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2",
};
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const p = path.join(dist, decodeURIComponent(req.url!.split("?")[0]).replace(/^\/+/, "") || "index.html");
  const file = existsSync(p) && statSync(p).isFile() ? p : path.join(dist, "index.html");
  res.setHeader("content-type", MIME[path.extname(file)] ?? "application/octet-stream");
  res.end(readFileSync(file));
});
await new Promise<void>((r) => server.listen(0, r));
const port = (server.address() as any).port;

const browser = await chromium.launch({ channel: "chrome" });
let count = 0;

for (const theme of ["light", "dark"]) {
  const ctx = await browser.newContext({ deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(`http://localhost:${port}/?theme=${theme}`);
  await page.evaluate(() => (document as any).fonts.ready);
  await page.waitForTimeout(300);
  for (const el of await page.locator(".asset").all()) {
    const name = await el.getAttribute("data-name");
    await el.screenshot({ path: `${out}/${name}-${theme}.png`, omitBackground: true });
    count++;
  }
  await ctx.close();
}

await browser.close();
server.close();
console.log(`${count} pngs → ${out}`);

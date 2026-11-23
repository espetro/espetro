// Renders the generated README.md to a local preview page (markdown + GitHub-ish CSS).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { marked } from "marked";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const md = readFileSync(path.join(root, "..", "README.md"), "utf8");
const body = marked(md);

const css = `body{font-family:-apple-system,"Helvetica Neue",sans-serif;max-width:880px;margin:32px auto;padding:0 24px;line-height:1.5;font-size:16px}picture,img{vertical-align:middle}a{color:#0969da}`;
writeFileSync(
  path.join(root, "preview.html"),
  `<!doctype html><meta charset=utf-8><base href="../"><style>${css}body{background:#fff;color:#1f2328}</style>${body}`
);
console.log("preview.html written");

// Emits ../README.md from src/data.ts — the file GitHub renders.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { hero, buttons, headers, work, workCols, socials, moreOn } from "../src/data.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const pic = (name: string, alt: string, dim: string, extra = "") =>
  `<picture><source media="(prefers-color-scheme: dark)" srcset="assets/${name}-dark.png"><img ${extra} src="assets/${name}-light.png" alt="${alt}" ${dim}></picture>`;

const link = (href: string, name: string, alt: string, dim: string, extra = "") =>
  `<a href="${href}">${pic(name, alt, dim, extra)}</a>`;

const lines: string[] = [];

lines.push(pic("hero", `${hero.name}. ${hero.status}. ${hero.line1} ${hero.line2}`, 'width="100%"'));
lines.push("");
lines.push(hero.intro.replace(/^I'm Quino/, "I'm Quino"));
lines.push("");
lines.push(buttons.map((b) => link(b.href, `btn-${b.key}`, b.label, 'height="48"')).join("&nbsp;"));
lines.push("", "<br>", "");

lines.push(pic("h-work", `${headers.work.bold} ${headers.work.rest}`, 'width="100%"'));
lines.push("");

// Vertical bento. GitHub can't stack <picture>s beside a tall card — floats
// don't escape the <themed-picture> wrapper and #gh-*-mode-only hiding was
// removed from GitHub's CSS. So stacked columns are composite images
// (col-*.png) that pack inline at percentage widths; every card still gets a
// link below the grid. Anchors on each line are concatenated: a whitespace
// node between them would overflow the 100% row.
const [brioso, , , stash, cauce, , , psc] = work;
const [colA, colC] = workCols;
lines.push(
  link(brioso.href, `card-${brioso.key}`, brioso.alt, `width="${brioso.widthPct}%"`) +
    link(colA.href, `col-${colA.name}`, colA.alt, `width="${colA.pct}%"`)
);
lines.push(
  link(stash.href, `card-${stash.key}`, stash.alt, `width="${stash.widthPct}%"`) +
    link(cauce.href, `card-${cauce.key}`, cauce.alt, `width="${cauce.widthPct}%"`)
);
lines.push(
  link(colC.href, `col-${colC.name}`, colC.alt, `width="${colC.pct}%"`) +
    link(psc.href, `card-${psc.key}`, psc.alt, `width="${psc.widthPct}%"`)
);
// every card stays reachable even inside composite columns
lines.push(`${work.map((c) => `[${c.title}](${c.href})`).join(" · ")}`);
lines.push("");
lines.push(`${moreOn.text} [${moreOn.links[0].label}](${moreOn.links[0].href}), plus [${moreOn.links[1].label}](${moreOn.links[1].href}).`);
lines.push("", "<br>", "");

lines.push(pic("h-impact", `${headers.impact.bold} ${headers.impact.rest}`, 'width="100%"'));
lines.push("");
lines.push(pic("metrics-a", "Tech lead: 2x CI/CD speed. Full-stack AI engineer: 66% less maintenance burden. Data platform engineer: 40% faster builds, 10 to 6 minutes.", 'width="100%"'));
lines.push("", "<br>", "");

lines.push(pic("h-stack", `${headers.stack.bold} ${headers.stack.rest}`, 'width="100%"'));
lines.push("");
lines.push(pic("stack", "TypeScript, Python, Rust, Swift, React, Next.js, Node.js, Astro, Tailwind CSS, PostgreSQL, Kubernetes, AWS, Azure, Docker, Claude, MCP, LLM agents, RAG, LLVM", 'width="100%"'));
lines.push("", "<br>", "");

lines.push(pic("h-contact", `${headers.contact.bold} ${headers.contact.rest}`, 'width="100%"'));
lines.push("");
lines.push(socials.map((s) => link(s.href, `s-${s.key}`, s.label, 'height="40"')).join("\n"));

writeFileSync(path.join(root, "..", "README.md"), lines.join("\n") + "\n");
console.log("README.md written");

// Emits ../README.md from src/data.ts — the file GitHub renders.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { hero, buttons, headers, work, socials, moreOn } from "../src/data.ts";

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

// bento: tall floats left, right column stacks, clear, then alternating rows
const [tall, ...rest] = work;
lines.push(
  link(tall.href, `card-${tall.key}`, tall.alt, `width="${tall.widthPct}%"`, 'align="left" ') +
    link(rest[0].href, `card-${rest[0].key}`, rest[0].alt, `width="${rest[0].widthPct}%"`)
);
lines.push(link(rest[1].href, `card-${rest[1].key}`, rest[1].alt, `width="${rest[1].widthPct}%"`));
lines.push('<br clear="left">');
// each row's anchors sit on one line — a whitespace node would overflow the 100% row
lines.push(
  link(rest[2].href, `card-${rest[2].key}`, rest[2].alt, `width="${rest[2].widthPct}%"`) +
  link(rest[3].href, `card-${rest[3].key}`, rest[3].alt, `width="${rest[3].widthPct}%"`)
);
lines.push(
  link(rest[4].href, `card-${rest[4].key}`, rest[4].alt, `width="${rest[4].widthPct}%"`) +
  link(rest[5].href, `card-${rest[5].key}`, rest[5].alt, `width="${rest[5].widthPct}%"`)
);
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

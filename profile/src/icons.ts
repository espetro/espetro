const modules = import.meta.glob("/src/icons/*.svg", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const icons: Record<string, string> = {};
for (const [p, raw] of Object.entries(modules)) {
  const name = p.split("/").pop()!.replace(".svg", "");
  icons[name] = raw;
}

export function iconRaw(name: string): string | null {
  return icons[name] ?? null;
}

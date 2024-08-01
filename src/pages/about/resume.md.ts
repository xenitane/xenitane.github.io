import { type MarkdownInstance } from "astro";

const resumeMd = (
    (await import.meta.glob("@/data/about.md")["/src/data/about.md"]()) as MarkdownInstance<Record<string, any>>
).rawContent();

export function GET() {
    return new Response(resumeMd, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}

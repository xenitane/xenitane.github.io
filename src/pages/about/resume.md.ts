import { type MarkdownInstance } from "astro";

const resumeMd = (
    Object.values(import.meta.glob("@/data/about.md", { eager: true }))[0] as MarkdownInstance<Record<string, any>>
).rawContent();

export function GET() {
    return new Response(resumeMd, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}

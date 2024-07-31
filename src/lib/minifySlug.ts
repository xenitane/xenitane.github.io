import { hash } from "crypto";

export default function minifuSlug(slug: string): string {
    if (slug.length <= 32) return slug;
    return slug.slice(0, 23) + "-" + hash("sha256", slug, "hex").slice(0, 8);
}

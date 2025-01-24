import { type APIRoute } from "astro";
import { SITE_URL } from "astro:env/client";

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", SITE_URL).href}
`.trim();

export const GET: APIRoute = function () {
    return new Response(robotsTxt, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};

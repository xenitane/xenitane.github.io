/** @type {import("astro/config").AstroUserConfig} */

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), sitemap()],
    site: "https://xenitane.github.io",
    server: {
        host: "0.0.0.0",
        port: 5173,
    },
    build: {
        assets: "assets",
    },
    devToolbar: {
        enabled: false,
    },
    output: "hybrid",
});

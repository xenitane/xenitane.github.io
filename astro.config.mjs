/** @type {import("astro/config").AstroUserConfig} */

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        sitemap(),
        alpinejs({
            entrypoint: "/src/entrypoint",
        }),
    ],
    markdown: {
        rehypePlugins: [rehypeKatex],
        remarkPlugins: [remarkMath],
    },
    site: "https://xenitane.github.io",
    server: function ({ command }) {
        return {
            host: "0.0.0.0",
            port: 4173 + ("dev" === command && 1000),
        };
    },
    build: {
        assets: "assets",
    },
    devToolbar: {
        enabled: false,
    },
    output: "static",
});

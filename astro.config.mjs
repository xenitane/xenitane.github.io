/** @type {import("astro/config").AstroUserConfig} */

import { defineConfig } from "astro/config";
import { integrations, markdownConfig as markdown } from "./config/astrojs.integrations.mjs";

// https://astro.build/config
export default defineConfig({
    integrations,
    markdown,
    site: "https://xenitane.github.io",
    trailingSlash: "never",
    build: { assets: "assets" },
    devToolbar: { enabled: false },
    output: "static",
    server: function ({ command }) {
        return {
            host: "0.0.0.0",
            port: 4173 + ("dev" === command ? 1000 : 0),
        };
    },
});

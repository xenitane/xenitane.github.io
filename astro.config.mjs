/** @type {import("astro").AstroUserConfig} */

import { defineConfig, envField } from "astro/config";
import { integrations, markdownConfig as markdown } from "./config/astrojs.integrations.mjs";
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
    integrations,
    markdown,
    site: "https://xenitane.xyz",
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
    env: {
        schema: {
            SITE_URL: envField.string({ context: "client", access: "public", optional: false, url: true }),
            CDN_URL: envField.string({ context: "client", access: "public", optional: false, url: true }),
            DOMAIN_NAME: envField.string({ context: "client", access: "public", optional: false }),
            RESOURCE_URL: envField.string({ context: "client", access: "public", optional: false })
        }
    },
    vite: {
        plugins: [tailwindcss()]
    },
    build: {
        format: "file"
    }
});

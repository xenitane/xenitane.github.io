/** @type {import("astro/config").AstroUserConfig} */

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";

import { visit } from "unist-util-visit";

import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeMathjax from "rehype-mathjax/chtml";

/** @type {import("rehype-mathjax/chtml").Options} */
const rehypeMathjaxOptions = {
    chtml: {
        fontURL: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2",
    },
};

/** @type {import("rehype-pretty-code").Options} */
const rehypePrettyCodeOptions = {
    theme: "catppuccin-mocha",
    onVisitHighlightedLine(node) {
        node?.properties?.className?.push("highlighted");
    },
    onVisitHighlightedChars(node) {
        console.log(node);
        if (node) {
            if (node.properties) {
                node.properties.className = node.properties.className || [];
                node.properties.className.push("hilighted-chars");
            }
        }
    },
    tokensMap: {},
};

// https://astro.build/config
export default defineConfig({
    trailingSlash: "never",
    integrations: [
        tailwind({
            nesting: true,
        }),
        sitemap(),
        alpinejs({
            entrypoint: "/src/entrypoint",
        }),
        mdx(),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [
            [rehypeMathjax, rehypeMathjaxOptions],
            [rehypePrettyCode, rehypePrettyCodeOptions],
            () => (tree) => {
                visit(tree, "element", (node) => {
                    if (!("data-rehype-pretty-code-figure" in (node.properties || []))) {
                        return;
                    }

                    // skip inline code
                    if (!["pre", "figcaption"].includes(node.children[0]?.tagName)) {
                        return;
                    }

                    async function copy(e) {
                        e.preventDefault();

                        const el = e.currentTarget;

                        const value = el.previousElementSibling.innerText;

                        const originalText = el.innerText;

                        el.disabled = true;

                        await navigator.clipboard.writeText(value);

                        el.innerText = "copied!";

                        setTimeout(() => {
                            el.innerText = originalText;
                            el.disabled = false;
                        }, 3000);
                    }

                    node.children.push({
                        type: "element",
                        tagName: "button",
                        properties: {
                            "data-copy": true,
                            onClick: `${copy.toString().replace(/\s+/g, " ")}; copy(arguments[0])`,
                        },
                        children: [{ type: "text", value: "copy" }],
                    });
                });
            },
        ],
        syntaxHighlight: false,
        shikiConfig: {
            theme: "catppuccin-mocha",
        },
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

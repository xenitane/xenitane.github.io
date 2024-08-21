import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import { visit } from "unist-util-visit";

import rehypeMathjax from "rehype-mathjax/chtml";
import rehypePrettyCode from "rehype-pretty-code";
import remarkMath from "remark-math";

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
        if (node) {
            if (node.properties) {
                node.properties.className = node.properties.className ?? [];
                node.properties.className.push("hilighted-chars");
            }
        }
    },
};

function rehypeAddCopyButtonToCode() {
    return function (tree) {
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

        function visitor(node) {
            if (
                !(
                    "data-rehype-pretty-code-figure" in (node.properties ?? []) &&
                    ["pre", "figcaption"].includes(node.children[0]?.tagName)
                )
            ) {
                return;
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
        }
        visit(tree, "element", visitor);
    };
}

/** @type {import("astro/config").AstroUserConfig["markdown"]} */
const markdownConfig = {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
        [rehypePrettyCode, rehypePrettyCodeOptions],
        [rehypeMathjax, rehypeMathjaxOptions],
        rehypeAddCopyButtonToCode,
    ],
    syntaxHighlight: false,
    shikiConfig: { theme: "catppuccin-mocha" },
};

const integrations = [
    alpinejs({ entrypoint: "/src/entrypoint.ts" }),
    tailwind({ nesting: true }),
    sitemap(),
    mdx(markdownConfig),
];
export { integrations, markdownConfig };

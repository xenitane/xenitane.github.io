/** @type {import("prettier").Config} */

export default {
    useTabs: false,
    tabWidth: 4,
    trailingComma: "es5",
    printWidth: 128,
    semi: true,
    singleQuote: false,
    bracketSpacing: true,
    plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
    tailwindConfig: "./tailwind.config.mjs",
    tailwindAttributes: ["class", "class:list"],
    overrides: [
        {
            files: ".astro",
            options: {
                parser: "astro",
            },
        },
    ],
};

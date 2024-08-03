/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            dropShadow: {
                dark: ["0 1px 2px rgb(255  255  255 / 0.1)", "0 1px 1px rgb(255 255 255 / 0.06)"],
                neg: ["0 -1px 2px rgb(0  0  0 / 0.1)", "0 -1px 1px rgb(0  0  0 / 0.06)"],
                "neg-dark": ["0 -1px 2px rgb(255  255  255 / 0.1)", "0 -1px 1px rgb(255 255 255 / 0.06)"],
            },
            boxShadow: {
                "sm-dark": ["0 1px 2px 0 rgb(255 255 255/ 0.05)"],
                "sm-neg": ["0 -1px 2px 0 rgb(0 0 0 / 0.05)"],
                "sm-neg-dark": ["0 -1px 2px 0 rgb(255 255 255/ 0.05)"],
            },
        },
    },
    plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

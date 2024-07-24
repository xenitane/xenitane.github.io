/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            dropShadow: {
                neg: ["0 -1px 2px rgb(0  0  0 / 0.1)", "0 -1px 1px rgb(0  0  0 / 0.06)"],
            },
        },
    },
    plugins: [],
};

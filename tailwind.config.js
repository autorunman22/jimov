/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./composables/**/*.{js,ts}",
        "./data/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    separator: '_',
    theme: {
        extend: {
            colors: {
                ink: '#0B0B0C',
                'ink-soft': '#141416',
                paper: '#F5F3EE',
                'paper-2': '#EAE6DC',
                line: '#D9D4C8',
                muted: '#615D56',
                pine: '#1E6F50',
            },
            fontFamily: {
                sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
                serif: ['Instrument Serif', 'Georgia', 'Times New Roman', 'serif'],
            },
            letterSpacing: {
                label: '0.18em',
            },
            maxWidth: {
                content: '1120px',
            },
            transitionTimingFunction: {
                out: 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
        },
    },
    plugins: [],
}

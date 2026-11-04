// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	nitro: {
		preset: process.env.GITHUB_ACTIONS ? "static" : "firebase",
	},
	app: {
		baseURL: "/jimov/",
	},
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
	css: ["~/assets/css/main.css"],
	googleFonts: {
		families: {
			Inter: [300, 400, 500, 600],
			"Instrument Serif": [400],
		},
		display: "swap",
		download: true,
		prefetch: true,
		preconnect: true,
		preload: true,
	},
})

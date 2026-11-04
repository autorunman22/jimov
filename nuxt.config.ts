// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	nitro: {
		preset: process.env.GITHUB_ACTIONS ? "static" : "firebase",
	},
	app: {
		baseURL: "/jimov/",
	},
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-headlessui"],
	css: ["~/assets/css/main.css"],
	googleFonts: {
		families: {
			Inter: [300, 400, 700],
		},
		prefetch: true,
		preconnect: true,
		preload: true,
	},
	runtimeConfig: {
		public: {
			smtpKey: process.env.SENDINBLUE_KEY,
		},
	},
})

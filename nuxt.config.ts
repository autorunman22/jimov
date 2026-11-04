import { resolve } from "node:path"
import { siteConfig } from "./config/site"

// The CV lives outside public/ so it is only published when the flag is on.
const cvAssets = siteConfig.cv.visible
	? [{ dir: resolve(process.cwd(), "private"), baseURL: "/" }]
	: undefined

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	nitro: {
		preset: process.env.GITHUB_ACTIONS ? "static" : "firebase",
		...(cvAssets ? { publicAssets: cvAssets } : {}),
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

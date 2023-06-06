// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        preset: 'firebase'
    },
    modules: ['@nuxtjs/tailwindcss'],
    css: ['~/assets/css/main.css'],
})

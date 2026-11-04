<template lang="pug">
div
  side-bar
  main(class="xl_pl-[280px]")
    mobile-side-bar
    home-section#home
    about-section#about-me
    what-i-do-section#what-i-do
    resume-section#resume
    portfolio-section#portfolio
    contact-section#contact
    site-footer
</template>

<script setup>
const baseURL = useRuntimeConfig().app.baseURL

useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Jim Ovejera — Web & Android Developer',
  meta: [
    {
      name: 'description',
      content:
        'Jim Ovejera is a web and Android developer based in Manila, building calm, fast and human products for fintech, travel, education and local businesses.',
    },
    { name: 'theme-color', content: '#0B0B0C' },
    { property: 'og:title', content: 'Jim Ovejera — Web & Android Developer' },
    {
      property: 'og:description',
      content:
        'Web and Android developer in Manila. Ten years of shipping products for fintech, travel, education and local businesses.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: `${baseURL}og-image.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [{ rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg` }],
})
</script>

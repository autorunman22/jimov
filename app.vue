<template lang="pug">
div
  side-bar
  main.pl-0.lg_pl-64
    mobile-side-bar
    .px-0
      home-section#home.pt-12.lg_pt-0 
      about-section#about-me.pt-12.lg_pt-0
      what-i-do-section#what-i-do.pt-12.lg_pt-0
      //- resume-section#resume.pt-12.lg_pt-0
      portfolio-section#portfolio.pt-12.lg_pt-0
      testimonials-section#testimonials.pt-12.lg_pt-0
      contact-section#contact.pt-12.lg_pt-0
</template>

<script setup>
useHead({
  title: 'ALG 247 IT Solutions'
})
</script>
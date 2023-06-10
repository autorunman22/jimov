<template lang="pug">
div.min-h-screen
    section-header(bg-text="TESTIMONIALS") Clients Speak
    div wow!
    Carousel(:items-to-show="4")
        slide(v-for="i in 10" :key="i") Slide {{ i }}
        template(v-slot:addons)
            navigation
            pagination
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

</script>
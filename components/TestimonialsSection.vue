<template lang="pug">
div.min-h-screen
    section-header(bg-text="TESTIMONIALS") Clients Speak
    .max-w-7xl.mx-auto.px-4
        Carousel(:items-to-show="2" :autoplay="4000" :pauseAutoplayOnHover="true")
            slide(v-for="(i, index) in testimonials" :key="index")
                div
                    .flex
                        img(:src='i.img').rounded-full.w-20.h-20.object-cover
                        div
                            h1 {{ i.name }}
                            span {{ i.position }}
                    p {{ i.desc }}
                    .flex
                        img(v-for="star in i.stars" src='/icons/star.png').w-8
            template(v-slot:addons)
                //- navigation
                pagination
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const testimonials = [
    { name: 'Client 1', img: 'https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg', stars: 5, position: 'Position 1', desc: "Here's some updates" },
    { name: 'Client 1', img: 'https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg', stars: 5, position: 'Position 1', desc: "Here's some updates" },
    { name: 'Client 1', img: 'https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg', stars: 5, position: 'Position 1', desc: "Here's some updates" },
    { name: 'Client 1', img: 'https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg', stars: 5, position: 'Position 1', desc: "Here's some updates" },
    { name: 'Client 1', img: 'https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg', stars: 5, position: 'Position 1', desc: "Here's some updates" },
    { name: 'Client 1', img: 'https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg', stars: 5, position: 'Position 1', desc: "Here's some updates" },
]
</script>
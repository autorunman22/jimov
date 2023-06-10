<template lang="pug">
div.min-h-screen
    section-header(bg-text="TESTIMONIALS") Clients Speak
    .max-w-7xl.mx-auto.px-4
        Carousel(:items-to-show="2" :autoplay="4000" :pauseAutoplayOnHover="true")
            slide(v-for="(i, index) in testimonials" :key="index")
                div.shadow-xl.rounded-md.border.px-12.py-8.mb-10.mx-4
                    .flex.space-x-4
                        img(:src='i.img').rounded-full.w-20.h-20.object-cover
                        div.text-left
                            h1.text-2xl.font-bold {{ i.name }}
                            span {{ i.position }}
                    p.mt-4.text-left “{{ i.desc }}”
                    .flex.mt-6.justify-end
                        img(v-for="star in i.stars" :key="star" src='/icons/star.png').w-6
            template(v-slot:addons)
                //- navigation
                pagination
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const testimonials = [
    { name: 'Client 1', img: 'https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg', stars: 5, position: 'Position 1', desc: "Jim exceeded my expectations with his outstanding work. He delivered exceptional results and showcased a deep understanding of my brand. I couldn't be happier!" },
    { name: 'Client 1', img: 'https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg', stars: 5, position: 'Position 1', desc: "I am extremely impressed by Jim's professionalism and talent. He captured the essence of my project and delivered an outstanding final product. I highly recommend his expertise!" },
    { name: 'Client 1', img: 'https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg', stars: 5, position: 'Position 1', desc: "Worked with Jim for my website project, and I must say their work was outstanding. They understood the requirements perfectly and delivered a beautiful website that surpassed my expectations." },
    { name: 'Client 1', img: 'https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg', stars: 5, position: 'Position 1', desc: "I collaborated with Sir Jim on an Android app, and I'm amazed by their coding abilities. They implemented complex functionalities flawlessly and optimized the app for performance." },
    { name: 'Client 1', img: 'https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg', stars: 5, position: 'Position 1', desc: "Had a fantastic experience working with Jim as a web developer. He demonstrated a deep understanding of front-end technologies and delivered a responsive website. Their work speaks for itself." },
    { name: 'Client 1', img: 'https://harnishdesign.net/demo/react/simone/demo/images/testimonial/client-sm-2.jpg', stars: 5, position: 'Position 1', desc: "Working with Jim as a web developer was a pleasure. His strong grasp of back-end technologies and frameworks allowed him to build a scalable web app. His dedication to delivering a high-quality product is impressive." },
]
</script>
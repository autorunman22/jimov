<template lang="pug">
div.min-h-screen
    section-header(bg-text="TESTIMONIALS") Clients Speak
    .max-w-7xl.mx-auto.px-4
        Carousel(:items-to-show="1" :autoplay="4000" :pauseAutoplayOnHover="true").lg_hidden
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
        Carousel(:items-to-show="2" :autoplay="4000" :pauseAutoplayOnHover="true").hidden.lg_block
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
    { name: 'Aldwin Gupit', img: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-1/252737105_5326732340674615_2546263526491298517_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=f67be1&_nc_ohc=8QeX4RvB7cYAX9yOxeI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfBOxgO4kUdz4e5uUcX7pB9GGdM3AQH8nkcjUjSfGLAVVg&oe=64890D7E', stars: 5, position: 'Meta Ad Expert', desc: "ALG exceeded my expectations with his outstanding work. He delivered exceptional results and showcased a deep understanding of my brand. I couldn't be happier!" },
    { name: 'Danica Lacoste', img: 'https://scontent.fmnl25-5.fna.fbcdn.net/v/t39.30808-1/336271840_116475188056569_5546487383635567256_n.jpg?stp=cp1_dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Mlhaa-txg5QAX_d3r1K&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl25-5.fna&oh=00_AfCvVPIqOFTrBH7sYcEkATLkBoT1elPP78ObPu5Bh_EzHw&oe=64889157', stars: 5, position: 'Business Owner', desc: "I am extremely impressed by ALG's professionalism and talent. He captured the essence of my project and delivered an outstanding final product. I highly recommend his expertise!" },
    { name: 'Arvin Amparado', img: 'https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-1/308822760_5867291793295625_8734171531798494847_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_ohc=a43t32GAZt8AX-6j0ro&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfCAqSr-U0Q7Tk7JE3uBrjD4BGKlgdbJdwQ3wxY7HAnFWg&oe=6489298B', stars: 4, position: 'GPS System Client', desc: "Worked with ALG for my website project, and I must say their work was outstanding. They understood the requirements perfectly and delivered a beautiful website that surpassed my expectations." },
    { name: 'Anton Eleazar', img: 'https://scontent.fmnl25-5.fna.fbcdn.net/v/t1.6435-1/128084362_1671051093068423_7534404702847634241_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=a6xZI2yK-tQAX_esm1B&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl25-5.fna&oh=00_AfAW9Rs931a11VSNtM3lg519GtIZv2PXC24CpAAfasJjNw&oe=64ABE70F', stars: 5, position: 'Hotel, Business Owner', desc: "I collaborated with ALG on an Android app, and I'm amazed by their coding abilities. They implemented complex functionalities flawlessly and optimized the app for performance." },
    { name: 'Kim Mariano', img: 'https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-1/349797139_3086756261620156_1046129410395892214_n.jpg?stp=cp1_dst-jpg_p100x100&_nc_cat=101&ccb=1-7&_nc_sid=f67be1&_nc_ohc=t4hRLKbDvE8AX_BecHC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfB6GRFuVSG6tRXx3AX2kAsvsfCpmCtrDKs63fiHPvTMKA&oe=6488F9F6', stars: 4, position: 'Web Developer', desc: "Had a fantastic experience working with ALG as a web developer. He demonstrated a deep understanding of front-end technologies and delivered a responsive website. Their work speaks for itself." },
    { name: 'Del Diccion-Solidum', img: 'https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-1/272985561_4801056583306464_3236311751071690174_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=xIXI7glxinAAX_ZNRRw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl4-5.fna&oh=00_AfD9gjx3t00R315b5bUIQMi-4RW_IvRAFF8c5gn3bwXiCQ&oe=64891B7D', stars: 5, position: 'Dermatologist`', desc: "Working with ALG as a web developer was a pleasure. His strong grasp of back-end technologies and frameworks allowed him to build a scalable web app. His dedication to delivering a high-quality product is impressive." },
]
</script>
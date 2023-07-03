<template lang="pug">
portfolio-modal(ref="modal")
//- button(@click="modal.openModal()") show
.flex.flex-wrap.mt-10.justify-center
    .shadow-md.rounded-md(v-for="(i, index) in androids" :key="index").border.hover_bg-blue-50.m-2.w-96.overflow-hidden
        img(:src="i.img")
        a(:href="i.url" target="_blank")
            .px-4.py-4
                h1.font-bold.text-xl {{ i.name }}
                span {{ i.desc }}
                .flex.flex-wrap.space-x-2.mt-4
                    div(v-for="t in i.tags" :key="t").bg-green-500.text-white.px-4.rounded {{ t }}
</template>

<script setup>
const modal = ref(null)

const androids = [
    {
        name: 'Bida Basketball Association',
        url: 'http://bidabs.com',
        desc: 'Step into the world of professional basketball with our web app. Discover local schedules, team information, and player stats.',
        img: '/web/bidabs.jpg',
    },
    {
        name: 'ADSkin Clinic',
        url: 'http://adskin-clinic.com',
        desc: 'Streamline your clinic management with our exclusive web app designed for doctors. Manage appointments, patients, and more.',
        img: '/web/adskin.jpg',
    },
    {
        name: 'Blotz Room Management',
        url: 'http://www.blotzpension.com',
        desc: 'Take charge of your room allocations with our room management system. Our web app allows you to schedule, monitor, and manage room bookings.',
        img: '/web/blotz.jpg',
    },
    {
        name: 'D\' Lacoste Paper Mill',
        url: 'https://dlacoste-5a496.web.app/admin',
        desc: 'With state-of-the-art equipment and expertise, we process and transform paper waste into valuable materials for recycling and reuse.',
        img: '/web/dlacoste.jpg',
    },
    {
        name: 'LTO Web Reviewer',
        url: 'https://lto-reviewer.com',
        desc: 'Prepare for your LTO exam with confidence using our comprehensive web app! Access a vast collection of practice questions and simulated exams.',
        img: '/web/lto-web.jpg',
    },
]
</script>
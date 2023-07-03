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
        name: 'Bida Basketball Association',
        url: 'https://play.google.com/store/apps/details?id=com.lto.exam.reviewer',
        desc: 'LTO Exam Reviewer app is designed to help users prepare and pass their application for driver license exam',
        img: '/web/bidabs.jpg',
    },
]
</script>
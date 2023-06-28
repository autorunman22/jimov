<template lang="pug">
.flex.flex-wrap.mt-10.justify-center
    .shadow-md.px-4.py-4.rounded-md(v-for="(i, index) in androids" :key="index").border.hover_bg-blue-50.m-2
        a(:href="i.url" target="_blank")
            h1.font-bold.text-xl {{ i.name }}
            .flex.mt-4.items-center.space-x-4.w-96
                img(:src="i.icon").w-16.rounded-md
                span {{ i.desc }}
            .flex.flex-wrap.space-x-2.mt-4
                div(v-for="t in i.tags" :key="t").bg-green-500.text-white.px-4.rounded {{ t }}
</template>

<script setup>
const androids = [
    {
        name: 'LTO Reviewer: 2023',
        url: 'https://play.google.com/store/apps/details?id=com.lto.exam.reviewer',
        desc: 'LTO Exam Reviewer app is designed to help users prepare and pass their application for driver license exam',
        icon: 'https://play-lh.googleusercontent.com/wsZHZxqBfRRURN6Kl_Y2NQZDA14l3NQw4nOJ1-DwvWEJ4yGWMhAiQru3mUG0piHCkg=s512-rw',
        tags: ['java', 'xml', 'motion-layout']
    },
    {
        name: 'LET Reviewer: myLET',
        url: 'https://play.google.com/store/apps/details?id=com.let.reviewer.myletreviewer',
        desc: 'Do you have what it takes to pass the Reviewer for Licensure Examination for Teachers?',
        icon: 'https://play-lh.googleusercontent.com/5Ne5s51jztZAcj9adXFGUjgdymjXlcmwivOG4nBoqWFseE3JysicQnMYLdW8ffdAoJxR=s512-rw',
        tags: ['kotlin', 'jetpack', 'compose', 'coroutine']
    },
    {
        name: 'RecipeHub.PH: Filipino foods',
        url: 'https://play.google.com/store/apps/details?id=com.filipino.foods',
        desc: 'Looking for a Filipino foods for chicken? Look no more. The newest app for guiding Filipino mom\'s',
        icon: 'https://play-lh.googleusercontent.com/KsW8zHF1XAEN_76mnlpvlXl3-UpQjxonTMD8jihNdLpUTTY0ptG2YOdIv-1p9CczhFQ=w480-h960-rw',
        tags: ['kotlin', 'jetpack-room', 'data-store']
    },
    {
        name: 'DailyCar: Auto maintenance',
        url: 'https://play.google.com/store/apps/details?id=com.daily.car',
        desc: 'Taking care of your car should be simpler and straight to the point. This car maintenance is for tracking mileage, expenses, car pms, and more!!',
        icon: 'https://play-lh.googleusercontent.com/1dfawgm3A1iiayEfRFEr0CnZlB4Yo8WKK_RvB_W8h0G8EcnY8oSvMBr7BZooEHcR5kUt=w480-h960-rw',
        tags: ['kotlin', 'mvi', 'jetpack']
    },
]
</script>
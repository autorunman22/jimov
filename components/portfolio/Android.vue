<template lang="pug">
.flex.flex-wrap.mt-10
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
        desc: 'LTO Exam Reviewer app is designed to help users prepare and pass their application for driver license exam ',
        icon: 'https://play-lh.googleusercontent.com/wsZHZxqBfRRURN6Kl_Y2NQZDA14l3NQw4nOJ1-DwvWEJ4yGWMhAiQru3mUG0piHCkg=s512-rw',
        tags: ['kotlin', 'xml', 'motion-layout']
    },
    {
        name: 'LTO Reviewer: 2023',
        url: 'https://play.google.com/store/apps/details?id=com.lto.exam.reviewer',
        desc: 'LTO Exam Reviewer app is designed to help users prepare and pass their application for driver license exam ',
        icon: 'https://play-lh.googleusercontent.com/wsZHZxqBfRRURN6Kl_Y2NQZDA14l3NQw4nOJ1-DwvWEJ4yGWMhAiQru3mUG0piHCkg=s512-rw',
        tags: ['kotlin', 'xml', 'motion-layout']
    },
    {
        name: 'LTO Reviewer: 2023',
        url: 'https://play.google.com/store/apps/details?id=com.lto.exam.reviewer',
        desc: 'LTO Exam Reviewer app is designed to help users prepare and pass their application for driver license exam ',
        icon: 'https://play-lh.googleusercontent.com/wsZHZxqBfRRURN6Kl_Y2NQZDA14l3NQw4nOJ1-DwvWEJ4yGWMhAiQru3mUG0piHCkg=s512-rw',
        tags: ['kotlin', 'xml', 'motion-layout']
    },
    {
        name: 'LTO Reviewer: 2023',
        url: 'https://play.google.com/store/apps/details?id=com.lto.exam.reviewer',
        desc: 'LTO Exam Reviewer app is designed to help users prepare and pass their application for driver license exam ',
        icon: 'https://play-lh.googleusercontent.com/wsZHZxqBfRRURN6Kl_Y2NQZDA14l3NQw4nOJ1-DwvWEJ4yGWMhAiQru3mUG0piHCkg=s512-rw',
        tags: ['kotlin', 'xml', 'motion-layout']
    },
    {
        name: 'LTO Reviewer: 2023',
        url: 'https://play.google.com/store/apps/details?id=com.lto.exam.reviewer',
        desc: 'LTO Exam Reviewer app is designed to help users prepare and pass their application for driver license exam ',
        icon: 'https://play-lh.googleusercontent.com/wsZHZxqBfRRURN6Kl_Y2NQZDA14l3NQw4nOJ1-DwvWEJ4yGWMhAiQru3mUG0piHCkg=s512-rw',
        tags: ['kotlin', 'xml', 'motion-layout']
    },
    {
        name: 'LTO Reviewer: 2023',
        url: 'https://play.google.com/store/apps/details?id=com.lto.exam.reviewer',
        desc: 'LTO Exam Reviewer app is designed to help users prepare and pass their application for driver license exam ',
        icon: 'https://play-lh.googleusercontent.com/wsZHZxqBfRRURN6Kl_Y2NQZDA14l3NQw4nOJ1-DwvWEJ4yGWMhAiQru3mUG0piHCkg=s512-rw',
        tags: ['kotlin', 'xml', 'motion-layout']
    },
]
</script>
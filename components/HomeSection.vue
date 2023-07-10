<template lang="pug">
.flex.flex-col.min-h-screen(style="background-image: url('/background.webp'); background-size: cover;")
    .flex.grow.flex-col.justify-center.items-center.text-white.text-center.px-4
        p.text-3xl.mb-6.font-medium Welcome
        div: type-writer
        p.mt-6.text-2xl.text-slate-300 based in Bulacan, Philippines
        button(@click="onHire").mt-12.border-2.border-green-500.rounded-full.px-10.py-4.text-green-500.font-bold.transition-all.hover_text-white.hover_bg-green-500 Hire Us
    div
        img(src="/down-arrow.png" @click="onDown").mx-auto.animate-bounce.w-12.cursor-pointer
</template>

<script setup>
const onHire = () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    })
}

const onDown = () => {
    document.querySelector('#about-me').scrollIntoView({
        behavior: 'smooth'
    })
}
</script>
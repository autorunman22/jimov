<template lang="pug">
nav.sidebar.w-64.fixed.min-h-screen.bg-slate-800
    .flex.flex-col.items-center.min-h-screen.space-y-2.justify-between
        div
            img(src='/avatar.jpeg' class="w-48").h-48.object-cover.rounded-full.border-4.mt-10.border-green-500
            h1.mt-2.text-white.font-bold.text-3xl Jim Ovejera
        div.grow
            ul.text-white.mt-36.text-center
                li(v-for="i in links" :key="i").mt-5
                    a(href='#').text-lg.hover_text-green-500.transition {{ i }}
        div
</template>

<script setup>
const links = ref(['Home', 'About Me', 'What I Do', 'Portfolio', 'Testimonials', 'Contact'])
</script>
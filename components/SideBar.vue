<template lang="pug">
nav.sidebar.w-64.fixed.min-h-screen.bg-slate-800
    .flex.flex-col.items-center.min-h-screen.space-y-2.justify-between
        div
            img(src='/avatar.jpeg' class="w-48").h-48.object-cover.rounded-full.border-4.mt-10.border-green-500
            h1.mt-2.text-white.font-bold.text-3xl Jim Ovejera
        div.grow
            ul.text-white.mt-36.text-center
                li(v-for="i in links" :key="i.name" :class="{'text-green-500': activeSection === i.link}").mt-5
                    a(:href="i.link" @click.prevent.stop="onNav(i.link)").text-lg.hover_text-green-500.transition {{ i.name }}
        div
</template>

<script setup>
const activeSection = ref("#home")

const links = ref([
    { name: 'Home', link: '#home'}, 
    { name: 'About Me', link: '#about-me'}, 
    { name: 'What I Do', link: '#what-i-do'}, 
    { name: 'Portfolio', link: '#portfolio'}, 
    { name: 'Testimonials', link: '#testimonials'}, 
    { name: 'Contact', link: '#contact'}
])

const onNav = (page) => {
    activeSection.value = page

    document.querySelector(page).scrollIntoView({
        behavior: 'smooth'
    })
}
</script>
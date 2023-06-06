<template lang="pug">
nav.bg-slate-800.text-white.lg_hidden.fixed.w-full.top-0
    .flex.items-center.justify-between.py-2.px-4
        h1.font-bold.text-2xl.text-center Jim Ovejera
        div
            .flex.items-center.space-x-3
                NuxtLink(to="https://www.facebook.com/h4ck3r22b")
                    img(src="/fb.png").w-5.h-5
                NuxtLink(to="https://play.google.com/store/apps/dev?id=5623979583961178976")
                    img(src="/google-play.svg").w-5.h-5
                img(src="/menu.png" @click="isOpen = !isOpen").w-8
    div(:class="clazzMenu").transition-all.overflow-hidden
        ul.text-white.text-left.px-4.py-4
            li(v-for="i in links" :key="i.name" :class="{'text-green-500': activeSection === i.link}").mt-5
                a(:href="i.link" @click.prevent.stop="onNav(i.link)").text-lg.hover_text-green-500.transition {{ i.name }}
</template>

<script setup>
const activeSection = ref("#home")
const isOpen = ref(false)

const links = ref([
    { name: 'Home', link: '#home' },
    { name: 'About Me', link: '#about-me' },
    { name: 'What I Do', link: '#what-i-do' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Testimonials', link: '#testimonials' },
    { name: 'Contact', link: '#contact' }
])

const clazzMenu = computed(() => {
    if (isOpen.value) return ['ease-in-out delay-150 h-80']

    return ['ease-in-out delay-150 h-0']
})

const onNav = (page) => {
    activeSection.value = page
    isOpen.value = false

    document.querySelector(page).scrollIntoView({
        behavior: 'smooth'
    })
}
</script>
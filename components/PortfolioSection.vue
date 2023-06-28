<template lang="pug">
div.min-h-screen
    section-header(bg-text="PORTFOLIO") My Work
    ClientOnly
        .flex.justify-center
            .relative.justify-center.text-slate-500.menu-parent
                button(v-for="i in tabs" :key="i" @click="onSelectTab(i)" :class="{'active': activeTab === i}" :id="i").text-xl.mx-2.font-semibold.transition-all {{ i }}
                .absolute.h-1.rounded-full.w-20.bg-green-500.transition-all(class="-bottom-3").indicator
    button(@click="openModal") show
    portfolio-modal
</template>

<script setup>
const tabs = ref(['All', 'Web', 'Android'])
const activeTab = ref('All')

const onSelectTab = (tab) => {
    activeTab.value = tab
    indicatorStyle(tab)
}

const indicatorStyle = (tab) => {
    const indicator = document.querySelector('.indicator')
    const _activeTab = document.querySelector(`#${tab}`).getBoundingClientRect()
    const parentRect = document.querySelector('.menu-parent').getBoundingClientRect()
    const left = _activeTab.left - parentRect.left
    const width = _activeTab.width

    indicator.style.width = `${width}px`
    indicator.style.left = `${left}px`
} 

onMounted(() => {
    nextTick(() => {
        indicatorStyle('All')
    })
})
</script>

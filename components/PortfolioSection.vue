<template lang="pug">
div.min-h-screen
    section-header(bg-text="PORTFOLIO") Our Works
    ClientOnly
        .flex.justify-center
            .relative.justify-center.text-slate-500.menu-parent
                button(v-for="i in tabs" :key="i" @click="onSelectTab(i)" :class="{'active': activeTab === i}" :id="i").text-xl.mx-2.font-semibold.transition-all {{ i }}
                .absolute.h-1.rounded-full.w-20.bg-green-500.transition-all(class="-bottom-3").indicator
    .max-w-7xl.mx-auto.px-4.text-slate-700
        Transition
            portfolio-android(v-if="activeTab === 'Android'")
            portfolio-web(v-else)
</template>

<script setup>
const tabs = ref(['Web', 'Android'])
const activeTab = ref('Android')

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
        indicatorStyle('Android')
    })
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
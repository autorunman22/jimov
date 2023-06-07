<template lang="pug">
.relative.text-center.pb-20.lg_py-20.flex.justify-center.-z-10
    .font-bold.text-5xl.lg_text-9xl.opacity-5.absolute(class="lg_top-1/2 -translate-y-1/2") {{ bgText }}
    h2.text-5xl.font-semibold.relative
        span.text-slate-700: slot
        div.w-20.h-1.bg-green-500.mx-auto.absolute.left-0.right-0.-bottom-4
</template>

<script setup>
const props = defineProps({
    bgText: {
        required: true
    }
})
</script>
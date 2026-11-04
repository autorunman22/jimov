<template lang="pug">
header
  h2(class="font-serif text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.02em]")
    span(class="section-index" aria-hidden="true") {{ number }}
    | {{ title }}
  p(class="lede mt-6" v-if="lede") {{ lede }}
</template>

<script setup>
defineProps({
  number: { type: String, required: true },
  title: { type: String, required: true },
  lede: { type: String, default: '' },
})
</script>

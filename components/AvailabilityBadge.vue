<template lang="pug">
span(class="inline-flex items-center gap-3")
  span(class="dot-live" aria-hidden="true")
  span(
    class="text-[11px] uppercase tracking-label"
    :class="tone === 'dark' ? 'text-[#A8A29A]' : 'text-muted'"
  ) {{ label }}
</template>

<script setup>
defineProps({
  label: { type: String, default: 'Available for freelance' },
  tone: { type: String, default: 'light', validator: (v) => ['light', 'dark'].includes(v) },
})
</script>

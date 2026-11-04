<template lang="pug">
ul(class="flex flex-wrap items-center gap-6")
  li(v-for="social in socials" :key="social.label")
    a(
      class="link-quiet inline-flex items-center gap-1.5 text-sm"
      :href="social.href"
      :target="social.external ? '_blank' : undefined"
      :rel="social.external ? 'noopener noreferrer' : undefined"
    )
      | {{ social.label }}
      svg(class="h-3 w-3" aria-hidden="true" viewBox="0 0 12 12" fill="none")
        path(d="M3.2 8.8 8.8 3.2M8.8 3.2H4.3M8.8 3.2v4.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="square")
</template>

<script setup>
const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/h4ck3r22b', external: true },
  {
    label: 'Play Store',
    href: 'https://play.google.com/store/apps/dev?id=5623979583961178976',
    external: true,
  },
  { label: 'Email', href: 'mailto:ovejera.jimpaulo@gmail.com', external: false },
]
</script>

<template lang="pug">
section(class="section")
  div(class="container-content")
    section-heading(
      number="03"
      title="What I do"
      lede="Four disciplines, one way of working: understand the problem, design the smallest useful thing, then build it so it lasts."
    )
    ul(class="mt-14 border-t border-line")
      li(class="group border-b border-line" v-for="(service, index) in services" :key="service.title")
        div(class="grid gap-4 py-8 md_grid-cols-12 md_items-baseline md_gap-6")
          span(class="text-[11px] tabular text-pine md_col-span-1") {{ String(index + 1).padStart(2, '0') }}
          h3(class="font-serif text-2xl md_col-span-4 lg_text-3xl") {{ service.title }}
          p(class="text-sm leading-relaxed text-muted md_col-span-7") {{ service.desc }}
</template>

<script setup>
const services = [
  {
    title: 'Web Development',
    desc: 'Nuxt and Vue interfaces that stay fast as they grow — responsive, accessible, and built on solid engineering rather than shortcuts.',
  },
  {
    title: 'Android Development',
    desc: 'Kotlin and Jetpack Compose apps for consumer and enterprise use, from first prototype through Play Store release and maintenance.',
  },
  {
    title: 'Web Design',
    desc: 'Content-first layouts with a clear hierarchy, designed in the browser as much as in the mockup so the shipped site keeps its intent.',
  },
  {
    title: 'Meta Ads',
    desc: 'Targeted Facebook campaigns, landing pages and measurement for small businesses that need qualified leads, not vanity reach.',
  },
  {
    title: 'AI-assisted Development',
    desc: 'Copilot, Claude and automation tools used as leverage for scaffolding, refactors and repetitive work — with human review at every step.',
  },
]
</script>

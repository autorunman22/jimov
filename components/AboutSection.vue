<template lang="pug">
section(class="section")
  div(class="container-content")
    div(class="grid gap-14 lg_grid-cols-12")
      div(class="lg_col-span-7")
        section-heading(number="02" title="Know me more")
        div(class="prose-editorial mt-10 text-base leading-loose text-muted")
          p.
            I'm Jim — a web and Android developer based in Manila. For the past decade I've built
            products for fintech, travel, education and local businesses: fast interfaces, careful
            details, and code that stays easy to maintain.
          p.
            My work spans Nuxt and Vue on the web, Kotlin and Jetpack Compose on Android, and the
            APIs, data and automation that hold a product together. I care about the space between
            design and engineering — the part people actually feel.
          p.
            Lately I've been leaning on AI-assisted workflows: pairing tools like Copilot and Claude
            with careful review, so ideas turn into working software faster without handing off
            judgement.
      div(class="lg_col-span-5")
        dl(class="border-t border-line")
          div(
            class="flex items-baseline justify-between gap-6 border-b border-line py-4"
            v-for="row in details"
            :key="row.label"
          )
            dt(class="text-[11px] uppercase tracking-label text-muted") {{ row.label }}
            dd(class="text-right text-sm text-ink")
              a(class="link-quiet" v-if="row.href" :href="row.href") {{ row.value }}
              span(v-else) {{ row.value }}
        a(class="btn btn-ghost mt-8" :href="useAsset('cv.pdf')" target="_blank" rel="noopener")
          | Download resume
          svg(class="h-3 w-3" aria-hidden="true" viewBox="0 0 12 12" fill="none")
            path(d="M6 2v7M3 6.5 6 9.5l3-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="square")
    dl(class="mt-20 grid grid-cols-1 border border-line sm_grid-cols-3")
      div(
        class="p-8"
        v-for="(stat, index) in stats"
        :key="stat.label"
        :class="index > 0 ? 'border-t sm_border-t-0 sm_border-l' : ''"
      )
        dt(class="text-[11px] uppercase tracking-label text-muted") {{ stat.label }}
        dd(class="mt-2 font-serif text-4xl tabular") {{ stat.value }}
</template>

<script setup>
const details = [
  { label: 'Name', value: 'Jim Ovejera' },
  {
    label: 'Email',
    value: 'ovejera.jimpaulo@gmail.com',
    href: 'mailto:ovejera.jimpaulo@gmail.com',
  },
  { label: 'Phone', value: '+63 920 466 4852', href: 'tel:+639204664852' },
  { label: 'Based in', value: 'Manila, Philippines' },
  { label: 'Experience', value: '10+ years' },
  { label: 'Focus', value: 'Web & Android' },
]

const stats = [
  { label: 'Years experience', value: '10+' },
  { label: 'Projects shipped', value: '200+' },
  { label: 'Clients served', value: '50+' },
]
</script>

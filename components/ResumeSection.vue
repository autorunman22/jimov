<template lang="pug">
section(class="section")
  div(class="container-content")
    section-heading(
      number="04"
      title="Experience"
      lede="A decade of shipping products across mobile and web — fintech, travel, education and local business tools."
    )
    div(class="mt-14 grid gap-16 lg_grid-cols-12")
      div(class="lg_col-span-7")
        ol(class="border-l border-line")
          li(class="relative pb-12 pl-8" v-for="job in jobs" :key="job.role")
            span(
              class="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-paper bg-pine"
              aria-hidden="true"
            )
            p(class="text-[11px] uppercase tracking-label text-muted") {{ job.period }}
            h3(class="mt-2 font-serif text-2xl") {{ job.role }}
            a(
              class="mt-2 inline-flex items-center gap-2 text-sm text-muted"
              :href="job.url"
              target="_blank"
              rel="noopener noreferrer"
            )
              img(
                class="h-5 w-5 rounded-sm object-cover"
                :src="useAsset(job.icon)"
                alt=""
                width="20"
                height="20"
                loading="lazy"
              )
              span(class="link-quiet") {{ job.company }}
              svg(class="h-3 w-3" aria-hidden="true" viewBox="0 0 12 12" fill="none")
                path(d="M3.2 8.8 8.8 3.2M8.8 3.2H4.3M8.8 3.2v4.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="square")
            p(class="mt-4 text-sm leading-relaxed text-muted") {{ job.desc }}
      div(class="lg_col-span-5")
        h3(class="font-serif text-xl") Tech stack
        div(class="mt-6 space-y-6")
          div(v-for="group in stack" :key="group.label")
            p(class="text-[11px] uppercase tracking-label text-muted") {{ group.label }}
            ul(class="mt-3 flex flex-wrap gap-2")
              li(class="tag" v-for="item in group.items" :key="item") {{ item }}
        div(class="mt-10 border border-line p-6")
          p(class="text-[11px] uppercase tracking-label text-pine") AI workflow
          p(class="mt-3 text-sm leading-relaxed text-muted")
            | Copilot, Claude and automation (n8n, Make, Zapier) for scaffolding, refactors and
            | repeatable tasks — always reviewed before it ships.
        a(
          v-if="cvVisible"
          class="btn btn-primary mt-8"
          :href="useAsset('cv.pdf')"
          target="_blank"
          rel="noopener"
        )
          | Download CV
          svg(class="h-3 w-3" aria-hidden="true" viewBox="0 0 12 12" fill="none")
            path(d="M6 2v7M3 6.5 6 9.5l3-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="square")
</template>

<script setup>
import { siteConfig } from '~/config/site'

const cvVisible = siteConfig.cv.visible

const jobs = [
  {
    period: '2021 — Present',
    role: 'Android Developer',
    company: 'Quipper Philippines',
    url: 'https://play.google.com/store/apps/details?id=com.quipper.school.assignment',
    icon: 'icons/quipper.webp',
    desc: 'Work closely with a cross-functional team of designers, product managers and backend developers to create user-friendly, efficient mobile experiences for students and teachers.',
  },
  {
    period: '2020 — 2021',
    role: 'Android Developer',
    company: 'Cebu Pacific',
    url: 'https://play.google.com/store/apps/details?id=com.inkglobal.cebu.android',
    icon: 'icons/cebpac.png',
    desc: 'A project-based Android role: designing and building to coding standards, troubleshooting and debugging, performing code reviews, and recommending optimisations.',
  },
  {
    period: '2016 — 2020',
    role: 'Web Developer',
    company: 'GCash / Mynt',
    url: 'https://play.google.com/store/apps/details?id=com.globe.gcash.android',
    icon: 'icons/gcash.jpeg',
    desc: 'Developing and enhancing web applications with the Vue.js framework, collaborating with designers, backend developers and stakeholders on responsive, interactive interfaces.',
  },
]

const stack = [
  { label: 'Frontend', items: ['Nuxt', 'Vue', 'Tailwind CSS', 'HTML / CSS'] },
  { label: 'Mobile', items: ['Kotlin', 'Jetpack Compose', 'Java', 'XML'] },
  { label: 'Backend & data', items: ['Firebase', 'MySQL', 'MongoDB', 'REST APIs'] },
  {
    label: 'AI & automation',
    items: [
      'GitHub Copilot',
      'Claude',
      'ChatGPT',
      'OpenAI / Anthropic APIs',
      'Firefly',
      'n8n / Make / Zapier',
    ],
  },
  { label: 'Growth', items: ['Meta Ads', 'Analytics'] },
]
</script>

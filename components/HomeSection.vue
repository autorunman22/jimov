<template lang="pug">
section(class="relative flex min-h-[88svh] flex-col overflow-hidden lg_min-h-[100svh]")
  div(class="pointer-events-none absolute inset-0" aria-hidden="true")
    svg(
      class="absolute -right-44 -top-44 hidden h-[760px] w-[760px] text-line lg_block"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      stroke-width="0.75"
    )
      circle(cx="400" cy="0" r="80")
      circle(cx="400" cy="0" r="130")
      circle(cx="400" cy="0" r="180")
      circle(cx="400" cy="0" r="230")
      circle(cx="400" cy="0" r="280")
      circle(cx="400" cy="0" r="330")
  div(class="container-content relative grow flex items-center")
    div(class="grid w-full gap-14 py-16 lg_grid-cols-12 lg_items-end lg_py-24")
      div(class="lg_col-span-7")
        availability-badge(class="reveal")
        h1(class="reveal reveal-delay-1 mt-8 font-serif text-[clamp(3.25rem,7vw,6rem)] leading-[0.86] tracking-[-0.02em]")
          span(class="block") Jim
          span(class="block") Ovejera
        p(class="reveal reveal-delay-2 mt-8 max-w-[52ch] text-lg leading-relaxed text-muted")
          | Web and Android developer building calm, fast products in Manila — currently shaping mobile experiences at Quipper.
        div(class="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-3")
          a(class="btn btn-primary" href="#portfolio")
            | Selected work
            svg(class="h-3 w-3" aria-hidden="true" viewBox="0 0 12 12" fill="none")
              path(d="M3.2 8.8 8.8 3.2M8.8 3.2H4.3M8.8 3.2v4.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="square")
          a(
            v-if="cvVisible"
            class="btn btn-ghost"
            :href="useAsset('cv.pdf')"
            target="_blank"
            rel="noopener"
          )
            | Download CV
            svg(class="h-3 w-3" aria-hidden="true" viewBox="0 0 12 12" fill="none")
              path(d="M6 2v7M3 6.5 6 9.5l3-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="square")
      aside(class="reveal reveal-delay-2 relative border border-line bg-paper-2 p-8 lg_col-span-5")
        p(class="text-[11px] uppercase tracking-label text-pine") Currently
        p(class="mt-2 font-serif text-2xl leading-tight") Android Developer
        p(class="text-sm text-muted") Quipper Philippines
        dl(class="mt-8 border-t border-line")
          div(class="flex items-baseline justify-between gap-6 border-b border-line py-3")
            dt(class="whitespace-nowrap text-[11px] uppercase tracking-label text-muted") Focus
            dd(class="text-right text-sm text-ink") Product engineering
          div(class="flex items-baseline justify-between gap-6 border-b border-line py-3")
            dt(class="whitespace-nowrap text-[11px] uppercase tracking-label text-muted") Stack
            dd(class="text-right text-sm text-ink") Nuxt · Kotlin · Compose
          div(class="flex items-baseline justify-between gap-6 border-b border-line py-3")
            dt(class="whitespace-nowrap text-[11px] uppercase tracking-label text-muted") AI tools
            dd(class="text-right text-sm text-ink") Copilot · Claude
          div(class="flex items-baseline justify-between gap-6 border-b border-line py-3")
            dt(class="whitespace-nowrap text-[11px] uppercase tracking-label text-muted") Based
            dd(class="text-right text-sm text-ink") Manila (GMT+8)
  div(class="container-content pb-8")
    div(class="flex items-center justify-between border-t border-line pt-5")
      a(class="group inline-flex items-center gap-3 text-[11px] uppercase tracking-label text-muted" href="#about-me")
        | Scroll to about
        svg(
          class="h-3 w-3 transition-transform duration-300 group-hover_translate-y-0.5"
          aria-hidden="true"
          viewBox="0 0 12 12"
          fill="none"
        )
          path(d="M6 2v7M3 6.5 6 9.5l3-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="square")
      p(class="text-[11px] uppercase tracking-label text-muted") Manila, Philippines
</template>

<script setup>
import { siteConfig } from '~/config/site'

const cvVisible = siteConfig.cv.visible
</script>

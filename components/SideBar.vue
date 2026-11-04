<template lang="pug">
aside(class="on-ink fixed inset-y-0 left-0 z-40 hidden w-[280px] flex-col bg-ink text-paper xl_flex")
  div(class="border-b border-white/10 px-8 py-9")
    div(class="flex items-center justify-between")
      p(class="font-serif text-2xl leading-none") Jim Ovejera
      span(class="flex h-9 w-9 items-center justify-center border border-white/25 font-serif text-xs") JO
    p(class="mt-2 text-[11px] uppercase tracking-label text-[#A8A29A]") Web & Android Developer
    img(
      class="mt-8 h-28 w-28 rounded-full border border-white/15 object-cover"
      :src="useAsset('avatar.webp')"
      :srcset="`${useAsset('avatar.webp')} 1x, ${useAsset('avatar-2x.webp')} 2x`"
      sizes="112px"
      alt="Portrait of Jim Ovejera"
      width="224"
      height="224"
      loading="eager"
    )
  nav(class="flex-1 overflow-y-auto px-8 py-8" aria-label="Section navigation")
    ul(class="space-y-1")
      li(v-for="(link, index) in links" :key="link.id")
        a(
          class="group flex items-center gap-4 py-2"
          :href="`#${link.id}`"
          :aria-current="active === `#${link.id}` ? 'location' : undefined"
          @click.prevent="go(link.id)"
        )
          span(class="text-[10px] tabular text-white/55") {{ String(index + 1).padStart(2, '0') }}
          span(
            class="text-sm transition-colors group-hover_text-paper"
            :class="active === `#${link.id}` ? 'text-paper' : 'text-[#A8A29A]'"
          ) {{ link.label }}
          span(
            class="ml-auto h-1.5 w-1.5 rounded-full bg-pine transition-opacity"
            :class="active === `#${link.id}` ? 'opacity-100' : 'opacity-0'"
            aria-hidden="true"
          )
  div(class="border-t border-white/10 px-8 py-7")
    availability-badge(tone="dark")
    social-links(class="mt-5")
</template>

<script setup>
const links = [
  { id: 'home', label: 'Home' },
  { id: 'about-me', label: 'About' },
  { id: 'what-i-do', label: 'Services' },
  { id: 'resume', label: 'Experience' },
  { id: 'portfolio', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

const { active, go } = useActiveSection(links.map((link) => link.id))
</script>

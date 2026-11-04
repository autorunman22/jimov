<template lang="pug">
nav(class="on-ink sticky top-0 z-50 border-b border-white/10 bg-ink text-paper xl_hidden")
  div(class="flex items-center justify-between px-5 py-3")
    div(class="flex items-center gap-3")
      span(class="flex h-8 w-8 items-center justify-center border border-white/25 font-serif text-xs") JO
      p(class="font-serif text-lg leading-none") Jim Ovejera
    button(
      class="p-2"
      type="button"
      :aria-expanded="isOpen"
      aria-controls="mobile-menu"
      :aria-label="isOpen ? 'Close navigation' : 'Open navigation'"
      @click="isOpen = !isOpen"
    )
      svg(
        class="h-5 w-5"
        :class="isOpen ? 'hidden' : 'block'"
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
      )
        path(d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" stroke-width="1.4" stroke-linecap="square")
      svg(
        class="h-5 w-5"
        :class="isOpen ? 'block' : 'hidden'"
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
      )
        path(d="m5 5 10 10M15 5 5 15" stroke="currentColor" stroke-width="1.4" stroke-linecap="square")
  div#mobile-menu(
    class="overflow-hidden transition-[max-height] duration-300"
    :class="isOpen ? 'max-h-96' : 'max-h-0'"
  )
    ul(class="px-5 pb-5")
      li(v-for="(link, index) in links" :key="link.id")
        a(
          class="flex items-center gap-4 py-3"
          :href="`#${link.id}`"
          :aria-current="active === `#${link.id}` ? 'location' : undefined"
          @click.prevent="onNav(link.id)"
        )
          span(class="text-[10px] tabular text-white/55") {{ String(index + 1).padStart(2, '0') }}
          span(
            class="text-sm"
            :class="active === `#${link.id}` ? 'text-paper' : 'text-[#A8A29A]'"
          ) {{ link.label }}
          span(
            class="ml-auto h-1.5 w-1.5 rounded-full bg-pine"
            :class="active === `#${link.id}` ? 'opacity-100' : 'opacity-0'"
            aria-hidden="true"
          )
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

const isOpen = ref(false)
const { active, go } = useActiveSection(links.map((link) => link.id))

const onNav = (id) => {
  isOpen.value = false
  go(id)
}
</script>

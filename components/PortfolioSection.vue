<template lang="pug">
section(class="section")
  div(class="container-content")
    section-heading(
      number="05"
      title="Selected work"
      lede="Products I have designed, built or shipped — consumer apps, clinic and club platforms, and review tools."
    )
    div(class="mt-10 flex items-center gap-8 border-b border-line")
      button(
        class="-mb-px border-b-2 pb-3 text-[11px] uppercase tracking-label transition-colors"
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        :class="activeTab === tab.id ? 'border-pine text-ink' : 'border-transparent text-muted hover_text-ink'"
        :aria-pressed="activeTab === tab.id"
        @click="activeTab = tab.id"
      )
        | {{ tab.label }}
        span(class="ml-2 tabular") {{ tab.items.length }}
    Transition(name="fade" mode="out-in")
      div(class="mt-12 grid gap-10 md_grid-cols-2" :key="activeTab")
        a(
          class="group block"
          v-for="(project, index) in currentProjects"
          :key="project.slug"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
        )
          portfolio-cover(:project="project" :index="index + 1")
          div(class="mt-5 flex items-start justify-between gap-6")
            p(class="max-w-[46ch] text-sm leading-relaxed text-muted") {{ project.desc }}
            span(class="card-arrow mt-1 text-muted" aria-hidden="true")
              svg(class="h-4 w-4" viewBox="0 0 12 12" fill="none")
                path(d="M3.2 8.8 8.8 3.2M8.8 3.2H4.3M8.8 3.2v4.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="square")
          ul(class="mt-4 flex flex-wrap gap-2" v-if="project.tags.length")
            li(class="tag" v-for="tag in project.tags" :key="tag") {{ tag }}
</template>

<script setup>
import { androidProjects, webProjects } from '~/data/projects'

const tabs = [
  { id: 'web', label: 'Web', items: webProjects },
  { id: 'android', label: 'Android', items: androidProjects },
]

const activeTab = ref('web')

const currentProjects = computed(() => {
  const tab = tabs.find((entry) => entry.id === activeTab.value)
  return tab ? tab.items : []
})
</script>

<style scoped>
.card-arrow {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.group:hover .card-arrow {
  transform: translateY(-2px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(4px);
}

@media (prefers-reduced-motion: reduce) {
  .group:hover .card-arrow {
    transform: none;
  }
}
</style>

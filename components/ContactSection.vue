<template lang="pug">
section(class="section")
  div(class="container-content")
    section-heading(
      number="06"
      title="Let's talk"
      lede="Have a product in mind, or a project that needs a careful pair of hands? I reply within a day."
    )
    div(class="mt-14 grid gap-16 lg_grid-cols-12")
      div(class="lg_col-span-5")
        div(class="space-y-8")
          div
            p(class="text-[11px] uppercase tracking-label text-muted") Email
            a(
              class="mt-2 block break-words font-serif text-xl link-quiet sm_text-2xl"
              :href="`mailto:${email}`"
            ) {{ email }}
          div
            p(class="text-[11px] uppercase tracking-label text-muted") Phone
            a(class="mt-2 block text-base link-quiet" :href="phoneHref") {{ phone }}
          div
            p(class="text-[11px] uppercase tracking-label text-muted") Location
            p(class="mt-2 text-base text-ink") San Lazaro St. Sta. Cruz, Manila
        div(class="mt-10")
          availability-badge
          p(class="mt-2 text-xs text-muted") Manila (GMT+8) · replies within 24h
        social-links(class="mt-6")
      div(class="lg_col-span-7")
        form(@submit.prevent="onSubmit" novalidate)
          div(class="grid gap-5 sm_grid-cols-2")
            div
              label(class="block text-[11px] uppercase tracking-label text-muted" for="name") Name
              input#name(
                class="field mt-2"
                v-model="form.name"
                type="text"
                autocomplete="name"
                placeholder="Your name"
                :aria-invalid="errors.name ? 'true' : undefined"
                :aria-describedby="errors.name ? 'name-error' : undefined"
                @input="errors.name = ''"
              )
              p#name-error(class="mt-2 text-xs text-[#A33A2B]" v-if="errors.name") {{ errors.name }}
            div
              label(class="block text-[11px] uppercase tracking-label text-muted" for="email") Email
              input#email(
                class="field mt-2"
                v-model="form.email"
                type="email"
                autocomplete="email"
                placeholder="you@example.com"
                :aria-invalid="errors.email ? 'true' : undefined"
                :aria-describedby="errors.email ? 'email-error' : undefined"
                @input="errors.email = ''"
              )
              p#email-error(class="mt-2 text-xs text-[#A33A2B]" v-if="errors.email") {{ errors.email }}
          div(class="mt-5")
            label(class="block text-[11px] uppercase tracking-label text-muted" for="message") Message
            textarea#message(
              class="field mt-2 h-40"
              v-model="form.message"
              placeholder="What are you building, and what would a good outcome look like?"
              :aria-invalid="errors.message ? 'true' : undefined"
              :aria-describedby="errors.message ? 'message-error' : undefined"
              @input="errors.message = ''"
            )
            p#message-error(class="mt-2 text-xs text-[#A33A2B]" v-if="errors.message") {{ errors.message }}
          div(class="mt-6 flex flex-wrap items-center gap-4")
            button(class="btn btn-primary" type="submit") Send message
            p(class="text-xs text-muted") Opens your email client with the message ready to send.
          p(class="mt-4 text-sm text-pine" v-if="sent" role="status")
            | Your email app should be open — send the message when you're ready.
</template>

<script setup>
const email = 'ovejera.jimpaulo@gmail.com'
const phone = '+63 920 466 4852'
const phoneHref = 'tel:+639204664852'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

const validate = () => {
  errors.name = form.name.trim() ? '' : 'Please add your name.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ? ''
    : 'Please add a valid email address.'
  errors.message =
    form.message.trim().length >= 10
      ? ''
      : 'A sentence or two about the project helps — at least 10 characters.'

  return !errors.name && !errors.email && !errors.message
}

const onSubmit = () => {
  sent.value = false

  if (!validate()) {
    requestAnimationFrame(() => {
      const firstInvalid = document.querySelector('[aria-invalid="true"]')
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus()
    })
    return
  }

  const subject = encodeURIComponent(`Portfolio enquiry — ${form.name.trim()}`)
  const body = encodeURIComponent(
    `${form.message.trim()}\n\n— ${form.name.trim()}\n${form.email.trim()}`
  )

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  sent.value = true
}
</script>

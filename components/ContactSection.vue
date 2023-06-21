<template lang="pug">
div.min-h-screen
    section-header(bg-text="CONTACT") Get in Touch
    .max-w-7xl.mx-auto.px-4.text-slate-700
        .flex.px-4.space-x-8
            div
                h1.font-bold.text-3xl.mb-8 My Info
                div.text-slate-700.mt-8
                    .flex.space-x-6.border-b.py-3.border-slate-300
                        span.font-bold Email:
                        span.shrink-0.pr-10 ovejera.jimpaulo@gmail.com
                    .flex.space-x-6.border-b.py-3.border-slate-300
                        span.font-bold Contact:
                        span.shrink-0 +639204664852
                    .flex.space-x-6.border-b.py-3.border-slate-300
                        span.font-bold Address:
                        span.shrink-0 San Lazaro St. Sta. Cruz, Manila
            div.grow
                h1.font-bold.text-3xl.mb-8 Send Us a Note
                .flex
                    form.grow
                        .flex.space-x-4
                            input(type='text' placeholder="Name" required).grow.border.px-4.py-2.border-slate-800
                            input(type='email' placeholder="Email" required).grow.border.px-4.py-2.border-slate-800
                        textarea(placeholder="Tell us about your needs..." required).w-full.mt-4.h-44.grow.border.px-4.py-2.border-slate-800
                        button.block.mt-12.border-2.border-green-500.rounded-full.px-10.py-4.text-white.font-bold.transition-all.hover_bg-green-700.bg-green-500.text-center.shadow-l.mx-auto Send Message
</template>
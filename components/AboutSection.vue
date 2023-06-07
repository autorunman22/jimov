<template lang="pug">
div.min-h-screen
    .h-10
    section-header(bg-text="ABOUT ME") Know Me More
    .flex.justify-center.px-36.space-x-16
        div.bg-red-500s.tracking-wide.leading-loose.flex-1
            h1.font-bold.text-3xl.text-slate-700 Hello! I'm
                span.mx-2.text-green-500 Jim Ovejera 🖐
            p.mt-6.text-lg I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            br
            p.text-lg Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
        div.text-slate-700
            .flex.space-x-6.border-b.pb-3.border-slate-300
                span.font-bold Name:
                span.shrink-0 Jim Ovejera
            .flex.space-x-6.border-b.py-3.border-slate-300
                span.font-bold Email:
                span.shrink-0.pr-10 ovejera.jimpaulo@gmail.com
            .flex.space-x-6.border-b.py-3.border-slate-300
                span.font-bold Age:
                span.shrink-0 30
            .flex.space-x-6.border-b.py-3.border-slate-300
                span.font-bold From:
                span.shrink-0 Manila City, Philippines
            a(href="/").block.mt-12.border-2.border-green-500.rounded-full.px-10.py-4.text-white.font-bold.transition-all.hover_bg-green-700.bg-green-500.text-center.shadow-lg Download Resume
    .flex.items-center.justify-center.mt-20.text-center.text-slate-700
        div.px-10.bg-red-500s
            span.font-bold.text-4xl 10+
            div.text-2xl Years Experience
        div.px-10.border-x
            span.font-bold.text-4xl 50+
            div.text-2xl Happy Clients
        div.px-10.bg-red-500s
            span.font-bold.text-4xl 200+
            div.text-2xl Projects Done
</template>
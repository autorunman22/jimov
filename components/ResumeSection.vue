<template lang="pug">
div
    section-header(bg-text="SUMMARY") Resume
    .max-w-7xl.mx-auto.bg-red-500s
        .grid.grid-cols-1.xl_grid-cols-2.gap-12.text-slate-700
            div
                h1.font-bold.text-3xl.mb-8 My Experience
                div
                    .shadow-lg.border.border.rounded-md.px-6.py-6
                        span.bg-green-500.text-white.rounded-full.px-4.py-1 2021 - Present
                        h1.mt-4.font-semibold.text-2xl Android Developer
                        a(href='https://play.google.com/store/apps/details?id=com.quipper.school.assignment' target="_blank")
                            .flex.items-center.space-x-2.mt-2
                                img(src='/icons/quipper.webp').w-8.rounded-md
                                span.font-semibold.text-lg.hover_text-green-500 Quipper Philippines
                        p.mt-4 Work closely with our cross-functional team of designers, product managers, and backend developers to create user-friendly and efficient mobile experiences for our customers.
                div.mt-6
                    .shadow-lg.border.border.rounded-md.px-6.py-6
                        span.bg-green-500.text-white.rounded-full.px-4.py-1 2020 - 2021
                        h1.mt-4.font-semibold.text-2xl Android Developer
                        a(href='https://play.google.com/store/apps/details?id=com.inkglobal.cebu.android' target="_blank")
                            .flex.items-center.space-x-2.mt-2
                                img(src='/icons/cebpac.png').w-8.rounded-md
                                span.font-semibold.text-lg.hover_text-green-500 Cebu Pacific
                        p.mt-4 An Android project-based role where the main goal is to design and build an app adhering to coding standards and best practices, troubleshoot and debug issues, perform code reviews, and provide recommendations for code optimization.
                div.mt-6
                    .shadow-lg.border.border.rounded-md.px-6.py-6
                        span.bg-green-500.text-white.rounded-full.px-4.py-1 2016 - 2020
                        h1.mt-4.font-semibold.text-2xl Web Developer
                        a(href='https://play.google.com/store/apps/details?id=com.globe.gcash.android' target="_blank")
                            .flex.items-center.space-x-2.mt-2
                                img(src='/icons/gcash.jpeg').w-8.rounded-md
                                span.font-semibold.text-lg.hover_text-green-500 Gcash/Mynt
                        p.mt-4 Play a crucial role in developing and enhancing our web applications using Vue.js framework. Collaborate with our team of designers, backend developers, and stakeholders to create responsive and interactive user interfaces that provide an exceptional user experience.
            div
                h1.font-bold.text-3xl.mb-8 My Skills
</template>
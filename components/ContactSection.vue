<template lang="pug">
div.min-h-screen
    section-header(bg-text="CONTACT") Get in Touch
    .max-w-7xl.mx-auto.px-4.text-slate-700
        .flex.px-4.space-x-0.flex-col.lg_flex-row.space-y-8.lg_space-x-8.lg_space-y-0
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
                    form(v-on:submit.prevent="onSubmit").grow
                        .flex.space-x-4
                            input(type='text' v-model="name" placeholder="Name" required).grow.border.px-4.py-2.border-slate-800
                            input(type='email' v-model="email" placeholder="Email" required).grow.border.px-4.py-2.border-slate-800
                        textarea(placeholder="Tell us about your needs..." v-model="comment" required).w-full.mt-4.h-44.grow.border.px-4.py-2.border-slate-800
                        button.block.mt-12.border-2.border-green-500.rounded-full.px-10.py-4.text-white.font-bold.transition-all.hover_bg-green-700.bg-green-500.text-center.shadow-l.mx-auto Send Message
</template>

<script setup>
import Sib from "sib-api-v3-sdk"
const email = ref('')
const name = ref('')
const comment = ref('')

const smtpApiKey = useRuntimeConfig().public.smtpKey
const client = Sib.ApiClient.instance
const apiKey = client.authentications['api-key']
apiKey.apiKey = smtpApiKey

const onSubmit = async () => {
    const tranEmailApi = new Sib.TransactionalEmailsApi()
    const sender = {
        email: email.value,
        name: name.value,
    }
    const receivers = [
        {
            email: 'ovejera.jimpaulo@gmail.com',
        },
    ]
    await tranEmailApi
        .sendTransacEmail({
            sender,
            to: receivers,
            subject: 'Jim Ovejera - Portfolio',
            htmlContent: comment.value,
            params: {
                role: 'Frontend',
            },
        })
}
</script>
<script setup lang="ts">
// Por algum motivo o SEO parece não estar funcionando.
// useSeoMeta({
//     title: 'iPets - Sua privacidade',
//     ogTitle: 'iPets - Sua privacidade',
//     description: 'Saiba como mantemos seus dados seguros na iPets.',
//     ogDescription: 'Saiba como mantemos seus dados seguros na iPets.',
//     ogImage: '/logo.png',
// })
useHead({
    meta: [{ property: 'og:title', content: 'iPets - Sua privacidade' }, { property: 'og:description', content: 'Saiba como mantemos seus dados seguros na iPets.' },]
})
</script>



<template>
    <div>
        <div class="mx-32 my-8">
            <h1>Saiba como mantemos seus dados seguros na iPets</h1>
            <br>
            <ContentDoc path="/lgpd" />
        </div>
    </div>
</template>
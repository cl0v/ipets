<script setup lang="ts">
// Por algum motivo o SEO parece não estar funcionando.
useSeoMeta({
    title: 'iPets - Sua privacidade',
    ogTitle: 'iPets - Sua privacidade',
    description: 'Saiba como mantemos seus dados seguros na iPets.',
    ogDescription: 'Saiba como mantemos seus dados seguros na iPets.',
    ogImage: '/logo.png',
})
</script>


<template>
    <NuxtLayout name="documents">
        <ContentDoc path="/documents/como-protegemos-seus-dados" />
    </NuxtLayout>
</template>
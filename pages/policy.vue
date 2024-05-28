<!-- <script setup lang="ts">
useSeoMeta({
    ogTitle: 'iPets - Sua privacidade',
    ogDescription: 'Saiba como mantemos seus dados seguros na iPets.'
})
</script> -->

<script setup lang="ts">
useSeoMeta({
  title: 'iPets - Sua privacidade',
  ogTitle: 'iPets - Sua privacidade',
  description: 'Saiba como mantemos seus dados seguros na iPets.',
  ogDescription: 'Saiba como mantemos seus dados seguros na iPets.',
  ogImage: '/logo.png',
//   twitterCard: 'summary_large_image',
})
</script>


<template>
    <div>
        <div class="mx-32 my-8">
            <ContentDoc path="/lgpd" />
        </div>
    </div>
</template>
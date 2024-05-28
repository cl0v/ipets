<script setup lang="ts">
useSeoMeta({ ogImage: 'https://ipets.dreampuppy.com.br/logo512.png' })
useHead({
  titleTemplate: (titleChunk) => {
    return `iPets - ${titleChunk}`;
  },
  title: 'Filhotes disponíveis',
})
</script> 
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  margin: 0 !important;
}
</style>

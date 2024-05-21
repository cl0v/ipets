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


<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return `iPets - ${titleChunk}`;
  },
  title: 'Filhotes disponíveis',
})
</script>

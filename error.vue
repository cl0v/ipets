<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })

</script>

<template>
  <div>
    <h2>{{ error?.statusCode }}</h2>
    <h2>{{ error?.message }}</h2>
    <button @click="handleError">Ir para página inicial</button>
  </div>
</template>

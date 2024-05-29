<script setup lang="ts">
const props = defineProps({
    petPrice: { default: [] },
});
</script>

<template>
    <p class="text-3xl tracking-tight text-gray-900">{{ $t('global.currency') + petPrice }}</p>
</template>

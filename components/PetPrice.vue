<script setup lang="ts">
defineProps({
    petPrice: { type: Number as () => number, default: () => 0 },
});

</script>

<template>
    <p class="text-3xl tracking-tight text-gray-900">{{ $t('global.currency') + petPrice }}</p>
</template>

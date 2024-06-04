<script setup lang="ts">
import usePetPrice from '~/composables/priceState';

const { petPrice } = usePetPrice()

</script>

<template>
    <ClientOnly>
        <p class="text-3xl tracking-tight text-gray-900">{{ $t('global.currency') + petPrice }}</p>
    </ClientOnly>
</template>

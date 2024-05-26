<template>
    <p class="text-3xl tracking-tight text-gray-900">{{ $t('global.currency') + price }}</p>
</template>
<script setup lang="ts">

const { size, gender, color } = useRoute().query

// Validar os valores das queries

const { data } = await useFetch('/api/price', {
    query: {
        size: size,
        gender: gender,
        color: color
    }
})

const price = data.value?.price

</script>
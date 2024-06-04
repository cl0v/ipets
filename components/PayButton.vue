<script setup lang="ts">
const pending = ref(false)

// const paymentMethod = ref('mercadopago')

const pay = async () => {
	pending.value = true

	const { breed } = useRoute().params
	const { size, gender, color } = useRoute().query

	const response = await $fetch<{ url: string }>('/api/create-order', {
		method: 'POST',
		body: {
			breed: breed,
			size: size,
			gender: gender,
			color: color,
		},
	})

	pending.value = false

	if (response.url) {
		window.location.href = response.url
	} else {
		alert('Something went wrong')
	}
}
</script>

<template>
	<UButton @click="pay" :loading="pending" block size="xl" icon="i-mdi-credit-card">
		Comprar agora
	</UButton>
</template>

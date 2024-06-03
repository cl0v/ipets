<script setup lang="ts">
const pending = ref(false)

// const paymentMethod = ref('mercadopago')

const pay = async () => {
	pending.value = true

	const response = await $fetch<{ url: string }>('/api/create-order', {
		method: 'POST',
		body: {
			product_name: 'Nuxt Course',
			price: 50,
			// payment_method: paymentMethod,
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

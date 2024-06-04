<template>
  <div class="flex">
    <div class="w-1/2">
      <form @submit.prevent="submitForm" class="max-w-md mx-auto">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">Nome *</label>
          <input type="text" id="name" v-model="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-gray-700 font-bold mb-2">Telefone *</label>
          <input type="tel" id="phone" v-model="phone"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="whatsapp" class="block text-gray-700 font-bold mb-2">WhatsApp</label>
          <input type="tel" id="whatsapp" v-model="whatsapp"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="street" class="block text-gray-700 font-bold mb-2">Endereço *</label>
          <input type="text" id="street" v-model="street"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="number" class="block text-gray-700 font-bold mb-2">Cidade *</label>
          <input type="text" id="number" v-model="number"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="cep" class="block text-gray-700 font-bold mb-2">CEP *</label>
          <input type="text" id="cep" v-model="cep"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <PayButton />
      </form>
    </div>
    <div class="w-1/2 bg-gray-100 p-4">
      <h2 class="text-xl font-bold mb-4">Detalhes do Produto</h2>
      <div class="mb-4">
        <p class="text-gray-700 font-bold">Nome:</p>
        <p>Dados do filhote</p>
      </div>
      <div class="mb-4">
        <p class="text-gray-700 font-bold">Preço:</p>
        <p>Preo a ser pago</p>
      </div>
      <div class="mb-4">
        <p class="text-gray-700 font-bold">Descrição:</p>
        <p>Breve descricao</p>
      </div>
      <!-- <div class="mb-4">
        <p class="text-gray-700 font-bold">Imagem:</p>
        <img :src="product.image" alt="Product Image" class="w-full">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      whatsapp: '',
      cep: '',
      street: '',
      number: ''
    }
  },
  methods: {
    submitForm() {
      // handle form submission
    }
  }
}
</script>

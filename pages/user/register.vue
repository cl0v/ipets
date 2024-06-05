<template>
  <div class="flex">
    <div class="w-1/2">
      <form class="max-w-md mx-auto">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">Nome *</label>
          <input type="text" id="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-gray-700 font-bold mb-2">Telefone *</label>
          <input type="tel" id="phone"
           
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="whatsapp" class="block text-gray-700 font-bold mb-2">WhatsApp</label>
          <input type="tel" id="whatsapp"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="street" class="block text-gray-700 font-bold mb-2">Endereço *</label>
          <input type="text" id="street"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="number" class="block text-gray-700 font-bold mb-2">Cidade *</label>
          <input type="text" id="number" 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <div class="mb-4">
          <label for="cep" class="block text-gray-700 font-bold mb-2">CEP *</label>
          <input type="text" id="cep" 
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
        </div>
        <PayButton />
      </form>
    </div>
    <div class="w-1/2 bg-gray-100 p-4">
      <h2 class="text-xl font-bold mb-4">{{ $t("register.title") }}</h2>
      <div class="mb-4">
        <p class="text-gray-700 font-bold">{{ $t("register.details") }}</p>
        <!-- <p>{{ breed }} {{ color }} {{ gender }} {{ size }}</p> -->
      </div>
      <div class="mb-4">
        <p class="text-gray-700 font-bold"> {{ $t("register.total") }}</p>
        <p>Preo a ser pago</p>
      </div>
      <div class="mb-4">
        <p class="text-gray-700 font-bold">{{ $t("register.description") }}</p>
        <p>Breve descricao</p>
      </div>

      <div class="mt-10">
        <h2 class="text-sm font-medium text-gray-900">{{ $t('register.more.title') }}</h2>
        <div class="mt-2 space-y-1">
          <p class="text-xs text-gray-600">{{ $t('register.more.first') }}</p>
          <p class="text-xs text-gray-600">{{ $t('register.more.second') }}</p>
          <p class="text-xs text-gray-600">{{ $t('register.more.third') }}</p>
        </div>
      </div>
      <!-- <div class="mb-4">
        <p class="text-gray-700 font-bold">Imagem:</p>
        <img :src="product.image" alt="Product Image" class="w-full">
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">

const { intent } = useRoute().query
// const { breed, color, gender, size } = decodeToken(intent)

console.log(decodeToken(intent?.toString()??''))

</script>

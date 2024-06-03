<template>

  <Head>
    <Title>{{ pet.name }}</Title>
  </Head>
  <pre v-if="error">{{ error }}</pre>
  <div v-else class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li v-for="breadcrumb in pet.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <a :href="breadcrumb.href" class="mr-2 text-sm font-medium text-gray-900">{{ breadcrumb.name
                }}</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true"
                class="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Filhote de {{
              pet.name }} </a>
          </li>
        </ol>
      </nav>
      <PetImages :pet-images="images" />
      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pb-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-4 lg:pt-16">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ pet.name }}</h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">{{ $t('details.layout.info') }}</h2>
          <PetPrice :pet-price="price" />


          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">{{ $t('details.layout.reviews') }}</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                  :class="[reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                  aria-hidden="true" />
              </div>
              <p class="sr-only">{{ reviews.average }} {{ $t('details.layout.stars') }}</p>
              <a :href="reviews.href" class="disabled ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{
                reviews.totalCount }} {{ $t('details.layout.reviews') }}</a>
            </div>
          </div>

          <form class="mt-10">
            <!-- Cor do pelo -->
            <div>
              <h3 class="text-sm font-medium text-gray-900">{{ $t('details.color') }}</h3>

              <RadioGroup v-model="selectedColor" class="mt-4">
                <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                <div class="flex items-center space-x-3">
                  <RadioGroupOption as="template" v-for="color in pet.colors" :key="color.query" :value="color"
                    v-slot="{ active, checked }">
                    <div
                      :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                      <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                      <span aria-hidden="true"
                        :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900">{{ $t('details.variation') }}</h3>
                <!-- <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a> -->
              </div>

              <RadioGroup v-model="selectedSize" class="mt-4">
                <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  <RadioGroupOption as="template" v-for="size in pet.sizes" :key="size.name" :value="size"
                    :disabled="!size.inStock" v-slot="{ active, checked }">
                    <div
                      :class="[size.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200', active ? 'ring-2 ring-indigo-500' : '', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
                      <RadioGroupLabel as="span">{{ size.name }}</RadioGroupLabel>
                      <span v-if="size.inStock"
                        :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-md']"
                        aria-hidden="true" />
                      <span v-else aria-hidden="true"
                        class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                        <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100"
                          preserveAspectRatio="none" stroke="currentColor">
                          <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                        </svg>
                      </span>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <!-- Gender -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900">{{ $t('details.gender') }}</h3>
                <!-- <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Gender guide</a> -->
              </div>

              <RadioGroup v-model="selectedGender" class="mt-4">
                <RadioGroupLabel class="sr-only">Escolha um gênero</RadioGroupLabel>
                <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  <RadioGroupOption as="template" v-for="gender in genders" :key="gender.name" :value="gender"
                    :disabled="!gender.inStock" v-slot="{ active, checked }">
                    <div
                      :class="[gender.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200', active ? 'ring-2 ring-indigo-500' : '', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
                      <RadioGroupLabel as="span">{{ gender.name }}</RadioGroupLabel>
                      <span v-if="gender.inStock"
                        :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-md']"
                        aria-hidden="true" />
                      <span v-else aria-hidden="true"
                        class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                        <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100"
                          preserveAspectRatio="none" stroke="currentColor">
                          <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                        </svg>
                      </span>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
            <div
              class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:focus:ring-offset-2">
              <PayButton />
            </div>
            <!-- <PayButton /> -->
            <a type="submit" href="https://api.whatsapp.com/send?phone=5533997312898&text=Fazer pedido!"
              style="color: white;"
              class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Comprar</a>
          </form>
        </div>

        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">{{ $t('details.layout.description') }}</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ pet.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">{{ $t('details.layout.details') }}</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-1 pl-4 text-sm">
                <li class="text-gray-400">
                  <span class="text-gray-600"> {{ $t('details.layout.pedigree') }} </span>
                </li>
                <li class="text-gray-400">
                  <span class="text-gray-600">{{ $t('details.layout.vaccinnes') }}</span>
                </li>
                <li class="text-gray-400">
                  <span class="text-gray-600">{{ $t('details.layout.microchip') }}</span>
                </li>
                <li class="text-gray-400">
                  <span class="text-gray-600">{{ $t('details.layout.ship') }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">{{ $t('details.layout.specs') }}</h2>

            <div class="mt-4 space-y-1">
              <p class="text-xs text-gray-600">{{ $t('details.specs.images') }}</p>
              <p class="text-xs text-gray-600">{{ $t('details.specs.growth') }}</p>
              <p class="text-xs text-gray-600">{{ $t('details.specs.payment') }}</p>
              <p class="text-xs text-gray-600">{{ $t('details.specs.optional') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const { breed } = useRoute().params
const { size, gender, color } = useRoute().query

let { data: details, error } = await useFetch('/api/details', {
  query: { breed: breed }
})

const pet = details.value!

const reviews = { href: '#', average: 4, totalCount: 117 }

const genders = [{
  "name": "Macho",
  "inStock": true,
  "query": "male"
},
{
  "name": "Fêmea",
  "inStock": true,
  "query": "female"
}]

const { data: priceImage } = await useFetch('/api/details/price-image', {
  query: {
    breed: breed,
    size: size,
    gender: gender,
    color: color,
  }
});

const { images, price } = priceImage.value!

const selectedSize = ref(pet.sizes[0])
const selectedColor = ref(pet.colors[0])
const selectedGender = ref(genders[0])
</script>

<style>
a.disabled {
  pointer-events: none;
  cursor: default;
}
</style>
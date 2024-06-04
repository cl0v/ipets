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
            <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">
              Filhote de {{ pet.name }}
            </a>
          </li>
        </ol>
      </nav>
      <DetailsImages />
      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pb-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-4 lg:pt-16">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ pet.name }}</h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">{{ $t('details.layout.info') }}</h2>
          <DetailsPrice />


          <!-- Reviews -->
          <!-- <DetailsReviews/> -->

          <form class="mt-10">
            <!-- Colors -->
            <div>
              <h3 class="text-sm font-medium text-gray-900">{{ $t('details.color') }}</h3>
              <DetailsColors :pet-colors="pet.colors" />
            </div>
            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900">{{ $t('details.variation') }}</h3>
                <!-- <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a> -->
              </div>
              <DetailsSizes :pet-sizes="pet.sizes" />
            </div>

            <!-- Gender -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900">{{ $t('details.gender') }}</h3>
              </div>
              <DetailsGender />
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
import usePetPrice from '~/composables/priceState';
import usePetImages from '~/composables/imagesState';

const { breed } = useRoute().params

let { data: details, error } = await useFetch('/api/details', {
  query: { breed: breed }
})

const pet = details.value!

const reviews = { href: '#', average: 4, totalCount: 117 }

useFetchPriceNImages()

</script>

<style>
a.disabled {
  pointer-events: none;
  cursor: default;
}
</style>
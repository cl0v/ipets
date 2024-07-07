<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

import usePetImages from '~/composables/imagesState';

const { petImages } = usePetImages();

</script>


<style>
.carousel__item {
    /* 
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    */
    min-height: 200px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

/* .carousel__prev, */
/* .carousel__next { */
    /* box-sizing: content-box; */
    /* border: 5px solid white; */
/* }  */

</style>

<template>
    <ClientOnly>
        <Carousel>
            <Slide v-for="slide in petImages" :key="slide">
                <div class="carousel__item">
                    <NuxtImg :src="slide" alt="Imagem do filhote."
                        class="h-full w-full object-cover object-center" />
                </div>
            </Slide>
            <template #addons>
                <Navigation />
                <Pagination />
            </template>

        </Carousel>
        <!-- 
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
                data-carousel-item>
                <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                    <NuxtImg :src="petImages[0]" alt="Primeira imagem do filhote."
                        class="h-full w-full object-cover object-center" />
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8" data-carousel-item>
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <NuxtImg :src="petImages[1]" alt="Segunda imagem do filhote."
                            class="h-full w-full object-cover object-center" />
                    </div>
                    <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg" data-carousel-item>
                        <NuxtImg :src="petImages[2]" alt="Terceira imagem do filhote."
                            class="h-full w-full object-cover object-center" />
                    </div>
                </div>
                <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg"
                    data-carousel-item>
                    <NuxtImg :src="petImages[3]" alt="Quarta imagem do filhote."
                        class="h-full w-full object-cover object-center" />
                </div>
        </div> -->
    </ClientOnly>
</template>
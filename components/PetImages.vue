<script setup lang="ts">

const props = defineProps({
    petImages: { default: [] },
});


const imgs = props.petImages
// const { images, setImages } = useImages()

// const { size, gender, color } = useRoute().query

// const { data, error } = await useFetch('/api/images', {
//     query: {
//         size: size,
//         gender: gender,
//         color: color
//     }
// },)

// // setImages(data.value!.images)

// const imgs = data.value!.images
</script>
<template>
    <!-- Image gallery -->
    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img :src="imgs[0]" alt="Primeira imagem do filhote." class="h-full w-full object-cover object-center" />
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img :src="imgs[1]" alt="Segunda imagem do filhote." class="h-full w-full object-cover object-center" />
            </div>
            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img :src="imgs[2]" alt="Terceira imagem do filhote."
                    class="h-full w-full object-cover object-center" />
            </div>
        </div>
        <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img :src="imgs[3]" alt="Quarta imagem do filhote." class="h-full w-full object-cover object-center" />
        </div>
    </div>

</template>
<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>
  
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a v-for="product in products" :key="product.id" :href="product.href" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const products = [
    {
      id: 1,
      name: 'Rottweiler',
      href: '/filhotes/333333',
      price: 'R$1500',
      imageSrc: 'https://i.pinimg.com/564x/e7/fe/68/e7fe68fb70ed6f48d9c6d83dd742e276.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Shih-tzu',
      href: '#',
      price: 'R$3500',
      imageSrc: 'https://petfisio.com.br/wp-content/uploads/2022/11/Shih-Tzu.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Lulu da Pomerânia',
      href: '#',
      price: 'R$4500',
      imageSrc: 'https://http2.mlstatic.com/D_NQ_NP_911513-MLB73727477443_122023-O.webp',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Lulu da Pomerânia',
      href: '#',
      price: 'R$3500',
      imageSrc: 'https://www.animalsforsale.com.br/components/com_djclassifieds/images/item/58_img_2037_thb.webp',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Dalmata',
      href: '#',
      price: 'R$2800',
      imageSrc: 'https://img.olx.com.br/images/52/525219592033489.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Pug',
      href: '#',
      price: 'R$3200',
      imageSrc: 'https://clinica.encrenquinhas.com.br/imagens/pug-femea-filhote.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    // More products...
  ]
  </script>
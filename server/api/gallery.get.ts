export default defineEventHandler(() => {

    type Pets = Record<string, string>


// const repo = await $fetch('https://api.dreampuppy.com.br/gallery', {
//     headers: {
//       Authorization: `token ${config.token}`
//     }
//   })

    const pets: Pets[] = [
        {
            uuid: '7iudsahdiusah',
            name: 'Rottweiler',
            price: '1500',
            imageSrc: 'https://i.pinimg.com/564x/e7/fe/68/e7fe68fb70ed6f48d9c6d83dd742e276.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            uuid: '2iudsahdiusah',
            name: 'Shih-tzu',
            price: '3500',
            imageSrc: 'https://petfisio.com.br/wp-content/uploads/2022/11/Shih-Tzu.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            uuid: '3iudsahdiusah',
            name: 'Lulu da Pomerânia',
            price: '4500',
            imageSrc: 'https://http2.mlstatic.com/D_NQ_NP_911513-MLB73727477443_122023-O.webp',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            uuid: '4iudsahdiusah',
            name: 'Lulu da Pomerânia',
            price: '3500',
            imageSrc: 'https://www.animalsforsale.com.br/components/com_djclassifieds/images/item/58_img_2037_thb.webp',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            uuid: '5iudsahdiusah',
            name: 'Dalmata',
            price: '2800',
            imageSrc: 'https://img.olx.com.br/images/52/525219592033489.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            uuid: '6iudsahdiusah',
            name: 'Pug',
            price: '3200',
            imageSrc: 'https://clinica.encrenquinhas.com.br/imagens/pug-femea-filhote.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            uuid: '1iudsahdiusah',
            name: 'Golden Retriever',
            price: '3200',
            imageSrc: '/temp/3.heic',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
    ]

    return {
        pets
    }
})

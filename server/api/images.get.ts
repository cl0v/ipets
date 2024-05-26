export default defineEventHandler((event) => {

    let q = getQuery(event)

    const images: ImageObj[] =
        [
            {
                src: '/temp/0.heic',
                alt: 'Primeira imagem do filhote.',
            },
            {
                src: '/temp/1.heic',
                alt: 'Segunda imagem do filhote.',
            },
            {
                src: '/temp/3.heic',
                alt: 'Terceira imagem do filhote.',
            },
            {
                src: '/temp/2.heic',
                alt: 'Quarta imagem do filhote.',
            },
        ]

    return {
        images
    }

})

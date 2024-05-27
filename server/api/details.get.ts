
export default defineEventHandler((event) => {


    const product = {
        // Padrão é um macho x tamanho unico, creme
        name: 'Filhote de Golden Retriever',
        href: '#',
        breadcrumbs: [
            { id: 1, name: 'Cachorros', href: '#' },
            { id: 2, name: 'Golden Retriever', href: '#' },
        ],
        reviews: { href: '#', average: 4, totalCount: 117 },
        colors: [
            { name: 'Dourado Claro', class: 'bg-orange-300', selectedClass: 'bg-zinc-100', query: 'gold1' },
            { name: 'Creme', class: 'bg-orange-100', selectedClass: 'bg-zinc-100', query: 'cream' },
            { name: 'Dourado', class: 'bg-amber-800', selectedClass: 'bg-zinc-100', query: 'gold2' },
            { name: 'Dourado Escuro', class: 'bg-amber-950', selectedClass: 'bg-zinc-100', query: 'gold3' },
        ],
        sizes: [
            { name: 'Único', inStock: false, query: 'default' },
            // { name: 'XS', inStock: true },
            // { name: 'S', inStock: true },
            // { name: 'M', inStock: true },
            // { name: 'L', inStock: true },
            // { name: 'XL', inStock: true },
            // { name: '2XL', inStock: true },
            // { name: '3XL', inStock: true },
        ],
        gender: [
            { name: 'Macho', inStock: true, query: 'male' },
            { name: 'Fêmea', inStock: true, query: 'female' },
        ],
        description:
            'Nada melhor do que um Filhote de Golden Retriever para alegrar os seus dias. Essa raça é conhecida por seu carisma imenso e a quantidade de energia para brincadeiras. Além de ser uma ótima opção para quem tem crianças em casa.',
        highlights: [
            'Pelagem padrão',
            'Pedigree CBKC',
            'Microchipado',
            'Vermifugado e Vacinado corretamente',
        ]
    }

    return product
})

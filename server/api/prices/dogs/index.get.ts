export default defineEventHandler((event) => {
    // Esse cara não necessita de um json propriamente.
    // Responsável por definir o preço de todas as raças.
    return [
        {
            uuid: "golden_retriever",
            value: 3500,
        },
        {
            uuid: "rotweiller",
            value: 1640,
        },
    ]
})


// Valida a compra aqui no server e salva o pedido lá no firebase.
// Como o json representa a tabela verdade já indicando 
import json from '~/assets/jsons/price_table.json'
import { femalePriceMultiplier } from '../../utils/constants'


export default defineEventHandler((event) => {
    const { breed, gender, size, color } = getQuery(event)

    // const result = json.find((e) => e.uuid == breed && e.size == size && e.color == color)
    const result = json.find((e) => e.uuid == breed)

    const images = result!.images
    let price = result!.price

    if (gender == 'female') {
        price *= femalePriceMultiplier
    }

    return {
        images,
        price
    }
})
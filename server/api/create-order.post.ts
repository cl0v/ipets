import { Preference } from 'mercadopago'
import { mercadopago } from '../utils/mercadopago'
import { femalePriceMultiplier } from '../utils/constants'

import details from '~/assets/jsons/breeds_details.json'
import availableGenders from "~/assets/jsons/genders.json"
import priceTable from "~/assets/jsons/price_table.json"
import { addOrderRef } from '../utils/firebase'


export default defineEventHandler(async event => {
	const runtimeConfig = useRuntimeConfig()
	const body = await readBody(event)

	const isDev = process.dev

	const userId = await addOrderRef(body)

	const preference = new Preference(mercadopago)

	const selectedBreed = details.find(breed => breed.uuid === body.breed)
	const selectedColor = selectedBreed?.colors.find(color => color.query === body.color) ?? selectedBreed?.colors[0]
	const selectedSize = selectedBreed?.sizes.find(size => size.query === body.size) ?? selectedBreed?.sizes[0]
	const seletedGender = availableGenders.find(gender => gender.query === body.gender) ?? availableGenders[0]

	const title = `${selectedBreed?.name} ${selectedColor?.name} ${seletedGender?.name} ${selectedSize?.name}`
	let price = priceTable.find(price => price.uuid === body.breed && price.size === selectedSize?.query && price.color === selectedColor?.query)?.price

	if (seletedGender.query == 'female') {
		price = (price ?? 0) * femalePriceMultiplier
	}

	const response = await preference.create({
		body: {
			auto_return: 'approved',
			back_urls: {
				success: `${runtimeConfig.public.baseURL}/payment/success`,
			},
			items: [
				{
					id: body.breed
						.toLowerCase()
						.replace(' ', '_'),
					quantity: 1,
					title: title,
					unit_price: price ?? 5000, // O preço depende do filhote no json, consultar com base no uuid
				},
			],
			metadata: {
				uuid: userId
			},
			// payer: {
			// 	name: body.name,
			// 	identification: {
			// 		type: "CPF",
			// 		number: body.cpf
			// 	},
			// },
		},
	})

	if (isDev) {
		return { url: isDev ? response.sandbox_init_point : response.init_point }

	} else {
		return { url: response.init_point }
	}

})



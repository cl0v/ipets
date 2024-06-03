import { Preference } from 'mercadopago'
import { mercadopago } from '../utils/mercadopago'

export default defineEventHandler(async event => {
	const runtimeConfig = useRuntimeConfig()
	const body = await readBody(event)


	const preference = new Preference(mercadopago)

	const response = await preference.create({
		body: {
			auto_return: 'approved',
			back_urls: {
				success: `${runtimeConfig.public.baseURL}/payment/success`,
			},
			items: [
				{
					id: body.product_name
						.toLowerCase()
						.replace(' ', '_'),
					quantity: 1,
					title: body.product_name,
					unit_price: 1000, // O preço depende do filhote no json, consultar com base no uuid
				},
			],
		},
	})

	return { url: response.sandbox_init_point } //TODO: substituir pelo de producao

})

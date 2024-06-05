import { firestore } from "../utils/firebase"

export default defineEventHandler(async event => {

    const body = await readBody(event)

	const isDev = process.dev

    const response = await firestore.collection(isDev? 'devUsers' : 'users').add(body)

    return response.id
})
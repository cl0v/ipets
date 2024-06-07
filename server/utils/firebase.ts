import { collection } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import { addDoc } from 'firebase/firestore'

// used for the firestore refs

const isDev = process.dev

// here we can export reusable database references

export async function addOrderRef(data: Object): Promise<string> {
    const db = useFirestore()
    const ordersRef = collection(db, isDev ? 'dev-orders' : 'orders')

    const userDoc = await addDoc(ordersRef, data)

    return userDoc.id
}
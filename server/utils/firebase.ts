import { collection, doc } from 'firebase/firestore'

import { addDoc, updateDoc } from 'firebase/firestore'

import { useFirestore } from 'vuefire'

// used for the firestore refs

const isDev = process.dev

const db = useFirestore()

// here we can export reusable database references

export async function addOrderRef(data: Object): Promise<string> {
    const ordersRef = collection(db, isDev ? 'dev-orders' : 'orders')

    const userDoc = await addDoc(ordersRef, data)

    return userDoc.id
}

export async function linkOrderToPayment(orderId: string, status?: string, paymentId?: number,): Promise<string> {
    if (!orderId) {
        throw new Error('Missing orderId')
    }
    const orderDoc = doc(db, isDev ? 'dev-orders' : 'orders', orderId)

    await updateDoc(orderDoc, {
        payment_id: paymentId,
        payment_status: status
    })

    return orderDoc.id
}
import { collection } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import { addDoc } from 'firebase/firestore'
import firebaseServer from './firebaseServer'

export async function addDocument(collectionName: string, data: Object): Promise<string> {
    const isDev = process.dev
    firebaseServer()
    const db = useFirestore()
    const ordersRef = collection(db, collectionName)

    const userDoc = await addDoc(ordersRef, data)

    return userDoc.id
}
import { useFirestore } from 'vuefire'
import { addDoc, collection} from 'firebase/firestore'
import firebaseServer from './useFirebaseServer'



export const app = initializeApp({
    credential: cert('./service-account.json'),
})

export const firestore = getFirestore(app);
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccount = './service-account.json'; 


export const app = initializeApp({
    credential: cert(serviceAccount)
})

export const firestore = getFirestore();
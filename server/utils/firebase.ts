import { initializeApp, cert, type ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import serviceAccount from '../service-account.json'

export const app = initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
})

export const firestore = getFirestore();
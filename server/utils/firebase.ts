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


// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase-admin/firestore";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const config = {
//     apiKey: "AIzaSyAMZf5xEsBpFZxOpVE3ualVETZSNuUXubk",
//     authDomain: "ipets-c854c.firebaseapp.com",
//     projectId: "ipets-c854c",
//     storageBucket: "ipets-c854c.appspot.com",
//     messagingSenderId: "926293712378",
//     appId: "1:926293712378:web:60762d7dc7486e91cb5843",
//     measurementId: "G-MX3J0MYSNQ"
// };

// // Initialize Firebase
// export const app = initializeApp(config);

// export const firestore = getFirestore(app);
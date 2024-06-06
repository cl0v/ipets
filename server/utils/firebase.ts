import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase-admin/firestore';
// import { getAnalytics } from "firebase/analytics";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMZf5xEsBpFZxOpVE3ualVETZSNuUXubk",
  authDomain: "ipets-c854c.firebaseapp.com",
  projectId: "ipets-c854c",
  storageBucket: "ipets-c854c.appspot.com",
  messagingSenderId: "926293712378",
  appId: "1:926293712378:web:60762d7dc7486e91cb5843",
  measurementId: "G-MX3J0MYSNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const analytics = getAnalytics(app);

export const firestore = getFirestore(app);

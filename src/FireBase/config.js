import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from 'firebase/storage'

// # Fire base config details.
const firebaseConfig = {

    apiKey: "AIzaSyBb22b0aO58RUjUxYCHqRSP27MgrI57Vbk",

    authDomain: "react-firebase-app-42447.firebaseapp.com",

    projectId: "react-firebase-app-42447",

    storageBucket: "react-firebase-app-42447.appspot.com",

    messagingSenderId: "664057664221",

    appId: "1:664057664221:web:799a7cb1a601c358fcc134",

    measurementId: "G-MWKE54WPWD"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage()


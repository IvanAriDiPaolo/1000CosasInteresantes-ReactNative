import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"

export const firebaseApp = initializeApp({
    apiKey: 'AIzaSyDwGP-A7DmcdS5-uN0SHwzKiwE1b1gPESc',
    authDomain: 'https://coderhouse-rn-proyectofinal-default-rtdb.firebaseio.com',
    projectId: 'coderhouse-rn-proyectofinal'
});

export const db = getFirestore();
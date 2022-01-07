import { addDoc, collection } from "firebase/firestore";

import { LogBox } from "react-native";
import { db } from "../db/firestore";

export const agregarUsuarioDB = async (uid, nombre, email) => {
    try {
        const docRef = await addDoc(collection(db, "usuarios"), {
            uid,
            nombre,
            email,
            fecha: Date.now()
        });
        console.log("Usuario creado con id: ", docRef.id);
        LogBox.ignoreLogs(['Setting a timer']);
    } catch (e) {
        console.error("Error creando usuario: ", e);
        return false
    }
}
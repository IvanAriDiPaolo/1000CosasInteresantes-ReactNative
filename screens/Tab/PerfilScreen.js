import { Image, LogBox, Pressable, StyleSheet, Text, View, YellowBox } from 'react-native'
import React, { useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { logoutUser, tomarUsuarioDB } from '../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

import { db } from '../../db/firestore';
import imagen from '../../assets/profile.jpg';
import { setActiveUser } from '../../redux/actions/auth';

export default function PerfilScreen() {

    const dispatch = useDispatch();

    // const tomarUsuarioDB = async (uid) => {
    //     try {
    //         LogBox.ignoreLogs(['Setting a timer']);
    //         const q = query(collection(db, "usuarios"), where("uid", "==", uid));
    //         const querySnapshot = await getDocs(q);
    //         querySnapshot.forEach((doc) => {
    //             let userData = doc.data()

    //             dispatch(setActiveUser(userData))

    //         });
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    const { userId } = useSelector(state => state.auth);

    dispatch(tomarUsuarioDB(userId))

    const { activeUser } = useSelector(state => state.auth);

    // console.log(activeUser)
    return (
        <View style={styles.container}>
            <Image source={imagen} style={{ height: 150, width: 150, borderRadius: 200, marginTop: 20 }} />
            {/* <Pressable>
                <Text style={{ color: '#48c5cd', marginTop: 5 }}> Cambiar foto de perfil </Text>
            </Pressable> */}
            <View style={{ alignItems: 'center', marginTop: 35 }}>
                <Text style={styles.etiqueta}>Nombre:</Text>
                <Text style={styles.data}>{activeUser.nombre}</Text>
                <Text style={styles.etiqueta}>Email:</Text>
                <Text style={styles.data}>{activeUser.email}</Text>
                <Text style={{ color: '#fff', marginTop: 100 }}>Proximamente modificacion de datos personales</Text>
            </View>
            <Pressable onPress={() => dispatch(logoutUser())} style={styles.logout}>
                <Text style={styles.logoutText}> Cerrar sesión</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center'
    },
    data: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 15
    },
    etiqueta: {
        fontSize: 23,
        color: '#fff',
        // fontWeight: 'bold',
        marginTop: 15
    },
    logout: {
        position: 'absolute',
        bottom: 50,
        backgroundColor: '#2f558a',
        width: '35%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5
    },
    logoutText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})

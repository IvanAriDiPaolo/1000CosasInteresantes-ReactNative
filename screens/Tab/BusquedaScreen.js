import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Resultados from '../../components/ScreenBuscador/Resultados';
import { SearchBar } from 'react-native-elements'
import { useSelector } from 'react-redux';

const BusquedaScreen = ({ navigation }) => {
    const [db, setDb] = useState({})
    const [busqueda, setBusqueda] = useState('')
    const [resultados, setResultados] = useState([])
    const [sinResutados, setSinResutados] = useState(true)
    const [primeraBusqueda, setPrimeraBusqueda] = useState(true)

    const { databaseCargada } = useSelector(state => state.database);

    useEffect(() => {
        setDb(databaseCargada[0])
    }, [])

    useEffect(() => {
        resultados.length === 0
            ? setSinResutados(true)
            : setSinResutados(false);
    }, [resultados])

    const handleResultados = () => {
        (
            db.noticias.filter(item => item.titulo.toLowerCase().trim().includes(busqueda.toLowerCase().trim()))
            &&
            db.servicios.filter(item => item.titulo.toLowerCase().trim().includes(busqueda.toLowerCase().trim()))
        )
            ?
            filters()
            :
            noResultados();
    }

    const filters = () => {
        setResultados(
            [
                ...db.noticias.filter(item => item.titulo.toLowerCase().trim().includes(busqueda.toLowerCase().trim())),
                ...db.servicios.filter(item => item.titulo.toLowerCase().trim().includes(busqueda.toLowerCase().trim()))
            ]
        );
        setPrimeraBusqueda(false);
    }


    const noResultados = () => {
        setResultados([]);
        setSinResutados(true);
    }


    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://www.hotelbrunelleschi.it/blog/wp-content/uploads/2021/05/monumenti-aperti-firenze-1-940x628.jpg' }} />

            {
                primeraBusqueda
                    ?
                    <>
                        <Ionicons
                            name="search-sharp"
                            size={150}
                            color={'#999999'}
                            // onPress={handleServicio}
                            style={styles.back}
                        />
                        <Text style={{
                            color: '#999999',
                            fontSize: 25,
                            fontWeight: 'bold',
                        }}>
                            Busca algo como "Actas"
                        </Text>
                    </>
                    :
                    // loader
                    //     ? <Text> Cargando... </Text>
                    //     :
                    sinResutados
                        ?
                        <>
                            <Ionicons
                                name="sad-outline"
                                size={130}
                                color={'#999999'}
                                style={styles.back}
                            />
                            <Text style={{
                                color: '#999999',
                                fontSize: 25,
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                                No se encontraron {'\n'}
                                resultados con {'\n'}
                                '{busqueda}'{`\n`}
                                prueba tal vez con {'\n'}
                                'carpeta'
                            </Text>
                        </>
                        :
                        <FlatList
                            nestedScrollEnabled
                            ItemSeparatorComponent={
                                () => <View
                                    style={{
                                        height: '2%',
                                    }}
                                />
                            }
                            contentContainerStyle={styles.lista}
                            data={resultados}
                            keyExtractor={(item) => item.titulo}
                            renderItem={({ item }) => (
                                <Resultados item={item} navigation={navigation} />
                            )}
                        />
            }
            {/* TODO: IOS no soporta el search abajo con position absolute */}
            {/* <KeyboardAvoidingView behavior="padding" style={{ flex: 1, backgroundColor: "#FF0000", justifyContent: "flex-end" }}> */}
            <SearchBar
                containerStyle={{
                    backgroundColor: '#333333',
                    borderWidth: 1,
                    borderRadius: 3,
                    margin: 10,
                    width: '94%',
                    position: 'absolute',
                    bottom: 12,
                    flex: 1
                }}
                inputStyle={{ backgroundColor: 'white' }}
                inputContainerStyle={{ backgroundColor: 'white' }}
                placeholderTextColor={'#6e6e6e'}
                placeholder={''}
                value={busqueda}
                onSubmitEditing={handleResultados}
                onChangeText={(value) => setBusqueda(value)}
            />
            {/* </KeyboardAvoidingView> */}
        </View >
    )
}

export default BusquedaScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        paddingTop: 20,
        alignItems: 'center',
    },
    lista: {
        paddingBottom: 140,
        flexGrow: 1,
        marginTop: 15,
        paddingLeft: 7,
        paddingRight: 20,
        alignItems: 'center',
    }
})

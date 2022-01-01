import { Image, StyleSheet, View } from 'react-native'

import React from 'react'
import { TouchableOpacity } from 'react-native'
import hamburger from '../assets/hamburger.png';

const MenuHamburguesa = () => {
    return (
        <View>
            <TouchableOpacity >
                <Image source={hamburger} style={styles.hamburger} />
            </TouchableOpacity>
        </View>
    )
}

export default MenuHamburguesa

const styles = StyleSheet.create({
    hamburger: {
        height: 40,
    },
})

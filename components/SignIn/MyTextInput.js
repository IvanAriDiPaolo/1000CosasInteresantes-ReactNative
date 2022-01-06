import { StyleSheet, TextInput } from 'react-native'

import React from 'react'

const MyTextInput = ({ value, name, placeholder, onChange, keyboardType, secureTextEntry = false }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#fff"
            keyboardType={keyboardType || 'default'}
            secureTextEntry={secureTextEntry}
            name={name}
            value={value}
            onChangeText={text => onChange({ name, text })}
        />
    );
};

export default MyTextInput

const styles = StyleSheet.create({
    input: {
        color: '#fff',
        height: 40,
        width: 230,
        margin: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
})

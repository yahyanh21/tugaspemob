import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View styles={styles.container}>
            <TextInput 
            Value = {value}
            onChangeText={setValue}
            placeholder={placeholder} 
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#000000',
        borderWidth: 5,
        borderRadius: 10,

        paddingHorizontal: "100%",
        marginVertical: 5,
    },
    input: {
        color:'white'
    },
});

export default CustomInput

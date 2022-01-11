import React, {Component} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';



const BersihinScreen = () => {

    const onLocationPressed = () => {
        console.warn("Location in Bekasi")
        //navigation.navigate('Bersih')
    };


    return (
        <View style={styles.bg}>
            <Text style={styles.title}>Bersihin Laptop Kamu!</Text>
            <Text style={styles.text}>Lokasi anda :</Text>

            <CustomButton 
            text="Get Location" 
            onPress={(onLocationPressed)}/>

        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        width:26,
        height:26,
        justifyContent:'flex-start'
    },
    title:{
        fontSize: 24,
        alignContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black',
        margin: 10,},
    bg:{
        backgroundColor:"#03c2fc",
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
      },
    text:{
        fontSize: 14,
        color: 'black',
        margin: 4,
        fontWeight:'bold'
    },
    container:{
        width: '100%',

        padding: 15,
        marginVertical: 10,

        alignItems: 'center',
        borderRadius: 50,
    },
});

export default BersihinScreen

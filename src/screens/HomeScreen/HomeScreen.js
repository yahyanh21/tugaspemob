import React, {useState, useContext} from 'react'
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import acc from '../../../assets/images/account.png'
import homebg from '../../../assets/images/home.jpg'
import { Icon } from 'react-native-vector-icons/Icon';
import { AuthContext } from '../../navigation/AuthProvider';


const HomeScreen = () => {

    const navigation = useNavigation();
    const onBersihinPressed = () => {
        navigation.navigate('Bersih')
    };

    const onServisPressed = () => {
        console.warn('Servis');
    };

    const {user, logout} = useContext(AuthContext);

    return (
        
        <View>
        <ImageBackground source={homebg} style={styles.image}>
        
        <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
        <Image source={acc} style={styles.img}/>
        </TouchableOpacity>
            <Text style={styles.title}>Welcome to Mamang Service</Text>
            <Text>UID : {user.uid}</Text>
            <Text></Text>
            <Text></Text>
            <View style={styles.centerbutton}>

            <CustomButton 
            text="Bersihin" 
            onPress={onBersihinPressed}/>

            <CustomButton 
            text="Servis" 
            onPress={onServisPressed}/>

            <CustomButton 
            text="Log Out" 
            onPress={() => logout()}/>
            </View>
        </ImageBackground>
        </View>
        
    )
}

const styles = StyleSheet.create({
    img:{
        width:26,
        height:26,
        justifyContent:'flex-start',
        borderRadius: 75,
    },
    title:{
        fontSize: 24,
        alignContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#0011ff',
        margin: 10,},
    bg:{
        backgroundColor:"#FFFFFF"
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
      },
    centerbutton:{
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen

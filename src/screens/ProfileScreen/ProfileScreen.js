import React, {useContext, useState, useEffect} from 'react'
import { View, Text, Image, 
    StyleSheet, ScrollView, ImageBackground,
     TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import acc from '../../../assets/images/account.png'
import userpic from '../../../assets/profile/Fadel.png'
import zhonglipic from '../../../assets/profile/zhongli.jpg'
import { AuthContext } from '../../navigation/AuthProvider';




const ProfileScreen = () => {

    //const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
    //const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
    //initializeApp({
    //    credential: applicationDefault() });
      
    //const db = getFirestore();

    const navigation = useNavigation();

    const onHistoryPressed = () => {
        navigation.navigate('History')
    };

    const onLogOutPressed = () => {
        navigation.navigate('SignIn')
    };

    const {user, logout} = useContext(AuthContext);


    return (
        <View style={styles.bg}>
        <Text></Text>
        <TouchableOpacity onPress={()=>{alert("Profile Photo")}}>
        <Image source={userpic} style={styles.userphoto}/>
        </TouchableOpacity>
        
            <Text style={styles.title}> {user.email}</Text>

            <Text></Text>
            <Text></Text>
            <Text style={styles.userinfo}>      Nomor Telepon : +62 XXX-XXXXX-X640</Text>
            <Text style={styles.userinfo}>      Alamat : Pondok Annafi kamar no. 3</Text>
            <Text></Text>

            <CustomButton 
            text="History" 
            onPress={onHistoryPressed}/>

            <CustomButton 
            text="Log Out" 
            onPress={() => logout()}/>
        
        
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
    userphoto:{
        width:80,
        height:80,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
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
    userinfo:{
        fontSize: 14,
        color: 'black',
        margin: 4,
    },
});

export default ProfileScreen

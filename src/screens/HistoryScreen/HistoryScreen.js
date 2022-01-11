import React, {useContext, useState} from 'react'
import { View, Text, Image, 
    StyleSheet, ScrollView, ImageBackground,
     TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';
import acc from '../../../assets/images/account.png'
import userpic from '../../../assets/profile/Fadel.png'
import zhonglipic from '../../../assets/profile/zhongli.jpg'
import { AuthContext } from '../../navigation/AuthProvider';



const HistoryScreen = () => {

    const navigation = useNavigation();

    const onHistoryPressed = () => {
        console.warn("History")
        //navigation.navigate('Bersih')
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
            <View style={styles.square}>
            <Text style={styles.userinfo}>Order History No. : 123xyz</Text>
            <Text style={styles.userinfo}>Date Order : 21/7/2021</Text>
            <Text style={styles.userinfo}>Bill : Rp. 25.000,00-</Text>
            <Text style={styles.userinfo}>Payment : Cash</Text>
            <Text style={styles.userinfo}>Keterangan : Lunas</Text>
            </View>
            <View style={styles.square}>
            <Text style={styles.userinfo}>Order History No. : 123xyz</Text>
            <Text style={styles.userinfo}>Date Order : 2/1/2022</Text>
            <Text style={styles.userinfo}>Bill : Rp. 50.000,00-</Text>
            <Text style={styles.userinfo}>Payment : OVO transfer</Text>
            <Text style={styles.userinfo}>Keterangan : Lunas</Text>
            </View>
            <Text style={styles.userinfo}></Text>
            <Text></Text>

        
        
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
    square:{
        backgroundColor:'white',
        width: 336,
        height:199,
        margin: 10,
    },
});

export default HistoryScreen

import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import loginbg from '../../../assets/images/login.jpg';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigation = useNavigation();

    const onSubmitPressed = () => {
        console.warn("Submit");
    };

    const onBackSignInPressed = () => {
        console.warn("Back to SignIn");
        navigation.navigate("SignIn")
    };


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        <ImageBackground source={loginbg} style={styles.image}>
            <Text style={styles.title}>Reset your password</Text>

            <CustomInput 
            placeholder="Code" 
            value={code} 
            setValue={setCode}/>

            <CustomInput 
            placeholder="Enter your new Password" 
            value={newPassword} 
            setValue={setNewPassword}/>

            <CustomButton text="Submit" 
            onPress={onSubmitPressed}/>

            <CustomButton text="Back to Sign In" 
            onPress={onBackSignInPressed}
            type='TERTIARY'
            />

        </ImageBackground>
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    root: {
        alignItems:'center',
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    link:{
    color: '#FDB075'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
});

export default NewPasswordScreen
import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        console.warn("Confirmed");
        navigation.navigate("Home")
    };

    const onBackSignInPressed = () => {
        console.warn("Back to SignIn");
        navigation.navigate("SignIn")
    };

    const onResendCodePressed = () => {
        console.warn("Resend Code");
    };


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>

            <CustomInput 
            placeholder="Code" 
            value={code} 
            setValue={setCode}/>

            
            <CustomButton text="Confirm" 
            onPress={onConfirmPressed}/>

            <CustomButton text="Resend Code" 
            onPress={onResendCodePressed}
            type='SECONDARY'
            />

            <CustomButton text="Back to Sign In" 
            onPress={onBackSignInPressed}
            type='TERTIARY'
            />


        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    root: {
        alignItems:'center',
        padding : 20,
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
});

export default ConfirmEmailScreen
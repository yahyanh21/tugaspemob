import React from 'react'
import { View, Text, Pressable } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SocialSignInButtons = () => {
    
    const onSignInFacebook = () => {
        console.warn("Facebook");
        };

    const onSignInGoogle = () => {
        console.warn("Google");
        };

    return (
        <>

        <CustomButton text="Sign In with Facebook" 
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
         fgColor="#4765A9"
         />

        <CustomButton text="Sign In with Google" 
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        />

        </>
    )
}

export default SocialSignInButtons

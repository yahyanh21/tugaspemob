import React, {useState, useContext} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ImageBackground } from 'react-native';
import loginbg from '../../../assets/images/login.jpg';
import laptop from '../../../assets/images/newlaptopicon.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../navigation/AuthProvider';


const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    
    const onSignInPressed = () => {
        console.warn("Sign In");
        //validate user
        navigation.navigate('Home')
    };

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password");
        navigation.navigate('ForgotPassword')
    };

    const onSignInFacebook = () => {
        console.warn("Facebook");
    };

    const onSignInGoogle = () => {
        console.warn("Google");
    };

    const onSignUpPress = () => {
        console.warn("Create Account")
        navigation.navigate('SignUp')
    }

    const {login} =  useContext(AuthContext);

    return (
        <View style={styles.root}>
        <ImageBackground source={loginbg} style={styles.image}> 
           
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.title}>Welcome to Mamang Service</Text>

            <CustomInput 
            placeholder="Email" 
            value={email} 
            setValue={setEmail}/>
            
            <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
            />

            <CustomButton text="Sign In" 
            onPress={() => login(email, password)}/>

            <CustomButton text="Forgot Password" 
            onPress={onForgotPasswordPressed} 
            type="TERTIARY"/>

            <SocialSignInButtons/>

            <CustomButton text="Don't have an account? Create one" 
            onPress={onSignUpPress}
            type='TERTIARY'
            />
        </ImageBackground>
        </View>
        
    )
};

const styles = StyleSheet.create({
    root: {
        alignItems:'center',
       
    },
    logo: {
        width:'100%',
        maxWidth: 400,
        maxHeight:300,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#FFFFFF',
        margin: 5,},
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
      },
});

export default SignInScreen
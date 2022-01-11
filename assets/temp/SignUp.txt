import React, {useState, useContext} from 'react'
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import loginbg from '../../../assets/images/login.jpg';
import { AuthContext } from '../../navigation/AuthProvider';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();


    const onTermsOfUsePressed = () => {
        console.warn("Terms of Use")
    };

    const onPrivacyPressed = () => {
        console.warn("Privacy Policy")
    };

    const onSignInPress = () => {
        console.warn("Sign In")
        navigation.navigate("SignIn")
    };

    const {register} =  useContext(AuthContext);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        <ImageBackground source={loginbg} style={styles.image}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
            <Text style={styles.title}>Create an account</Text>
            <Text/>

            <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername}/>

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

            <CustomButton text="Register" 
            onPress={() => register(email, password)}/>

            <Text style={styles.text}>
            By Registering, you confirm that you accept our 
            <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use </Text>and 
            <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy </Text></Text>

            <SocialSignInButtons/>

            <CustomButton text="Have an account? Sign In" 
            onPress={onSignInPress}
            type='TERTIARY'
            />
        </ImageBackground>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    root: {
        alignItems:'center',
        flex: 1,
    },
    text: {
        color: 'black',
        marginVertical: 10,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#FFFFFF',
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

export default SignUpScreen
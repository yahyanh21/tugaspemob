import React, {useContext, useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import auth from '@react-native-firebase/auth'

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen'
import HomeScreen from '../screens/HomeScreen'
import BersihinScreen from '../screens/BersihinScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
   

    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
            </Stack.Navigator>
    )
}

export default Navigation

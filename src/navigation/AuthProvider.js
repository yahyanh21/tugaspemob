import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth'


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
        value={{
            user,
            setUser,
            login: async (email, password) => {
                try{
                    await auth().signInWithEmailAndPassword(email, password);
                } catch(e){
                    console.error(error);
                }
            },
            register: async(email, password) => {
                try{
                    await auth().createUserWithEmailAndPassword(email, password);
                } catch(e){
                    console.error(error);
                }
            },
            logout: async () => {
                try {
                    await auth().signOut();
                } catch(e){
                console.error(error);
            }
            },
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

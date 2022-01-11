/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
 } from 'react-native';

 import Providers from './src/navigation';
 import AppStack from './src/navigation/AppStack'
 import AuthStack from './src/navigation/AuthStack'
 
 const App = () => {
   return (
     <SafeAreaView style={styles.root}>
       <Providers />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   root : {
     flex: 1,
     backgroundColor: '#F9FBFC',
   },
 });
 
 export default App;
 
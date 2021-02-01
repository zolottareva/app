import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Button} from 'react-native';
import Authorization from './Views/Authorization';
import Registration from './Views/Registration'
import StartMakingYourLife from './Views/StartMakingYourLife'
import Step1 from './Views/Step1'
import Step2 from './Views/Step2'
import RestorePassword from './Views/RestorePassword'
import {createAppContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Registration">
        <Drawer.Screen name="Registration" component={Registration} options={{ title: "Регистрация"}} />
        <Drawer.Screen name="Authorization" component={Authorization} options={{ title: "Авторизация"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

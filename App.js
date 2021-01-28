import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Authorization from './Views/Authorization';
import Registration from './Views/Registration'
import StartMakingYourLife from './Views/StartMakingYourLife'
import Step1 from './Views/Step1'
import Step2 from './Views/Step2'
import RestorePassword from './Views/RestorePassword'
export default function App() {
  return (
      <RestorePassword/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

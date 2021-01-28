import React, {useState} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {Text, Button} from 'react-native-elements';

function StartMakingYourLife({navigation}) {
  let onPressSubmitButton = function () {
      // show next screen
  };
  return (
      <View style={styles.form}>
        <Text h3 h3Style={styles.registrationText}>
          {`Начните улучшение\nсвоей жизни прямо сейчас`}
        </Text>
        <Button
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          type="outline"
          title="Начать"
          onPress={onPressSubmitButton}
        />
        <View style={styles.alreadyHaveAnAccount}>
          <Text>Уже есть аккаунт?</Text>
          <Text style={styles.signInText}> Войти</Text>
        </View>
      </View>
  );
}
export default StartMakingYourLife;

const styles = StyleSheet.create({
  alreadyHaveAnAccount: {
    marginTop: 10,
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  signInText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  registrationText: {
    fontWeight: '400',
    marginLeft: 10,
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginTop: 40,
    padding: 8,
    flex: 1,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000000',
  },
  button: {
    borderColor: '#000000',
    padding: 25,
    marginTop: 300,
    marginBottom: 30,
  },
});

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {Text, Button} from 'react-native-elements';

function Step2() {
  let onPressSubmitButton = function () {
      // show next screen
  };
  return (
      <View style={styles.form}>
        <Text h4 style={styles.step}>
          Шаг 2
        </Text>
        <Text h4 style={styles.registrationText}>
          Cоздаем вашу личность
        </Text>
        <Button
          titleStyle={styles.buttonText}
          buttonStyle={styles.button}
          type="outline"
          title="Вперед"
          onPress={onPressSubmitButton}
        />
      </View>
  );
}
export default Step2;

const styles = StyleSheet.create({
  registrationText: {
    fontWeight: '500',
    marginTop: 30,
    textAlign: 'center',
  },
  step: {
      fontWeight: '300',
      textAlign: 'center',
      marginTop: 70,
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
    marginTop: 400,
  },
});

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {Text, Button} from 'react-native-elements';

function Step1() {
  let onPressSubmitButton = function () {
      // show next screen
  };
  return (
      <View style={styles.form}>
        <Text h3 h3Style={styles.registrationText}>
          {`Поздравляем!\nВы уже начали улучшение своей жизни!`}
        </Text>
        <Text h4 style={styles.step}>
          Шаг 1
        </Text>
        <Text h3 h3Style={styles.registrationText}>
          Ответьте на несколько вопросов
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
export default Step1;

const styles = StyleSheet.create({
  registrationText: {
    fontWeight: '400',
    marginLeft: 10,
    marginTop: 40,
    marginBottom: 20,
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
    marginTop: 270,
    marginBottom: 30,
  },
});

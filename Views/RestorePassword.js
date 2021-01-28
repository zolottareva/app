import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Input, Text, Button} from 'react-native-elements';

const inputEmail = React.createRef();
function RestorePassword() {
  let onPressSubmitButton = function () {
    Keyboard.dismiss();
    if (email === '') {
      inputEmail.current.shake();
    } else {
      // get request
    }
  };
  const [email, setEmail] = useState('');
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.form}>
        <Text h3 h3Style={styles.registrationText}>
          Восстановление пароля
        </Text>
        <Text style={styles.enterEmail}>
          Введите почту, на которую был зарегистрирвоан аккаунт, и мы вышлем ссылку с подтверждением
        </Text>
        <Input
          label="Электронная почта"
          labelStyle={styles.blackText}
          ref={inputEmail}
          placeholder="example@gmail.com"
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          titleStyle={styles.blackText}
          buttonStyle={styles.button}
          type="outline"
          title="Отправить"
          onPress={onPressSubmitButton}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
export default RestorePassword;

const styles = StyleSheet.create({
  alreadyHaveAnAccount: {
    justifyContent: 'center',
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
  },
  enterEmail: {
      fontSize: 15,
      marginBottom: 10,
  },
  signInText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  registrationText: {
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 40,
    marginBottom: 20,
  },
  form: {
    marginTop: 20,
    padding: 8,
    flex: 1,
  },
  blackText: {
    color: '#000000',
  },
  button: {
      marginTop: 50,
    borderColor: '#000000',
    padding: 25,
  },
});

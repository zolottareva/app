import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Input, Text, Button} from 'react-native-elements';
import { block } from 'react-native-reanimated';

const inputEmail = React.createRef();
const inputPassword = React.createRef();
function Authorization({navigation}) {
  let onPressSubmitButton = function () {
    Keyboard.dismiss();
    if (username === '' || password === '') {
      // parse
      inputEmail.current.shake();
      inputPassword.current.clear();
    } else {
      // get request
    }
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.form}>
        <Text h2 h2Style={styles.registrationText}>
          Вход
        </Text>
        <Input
          label="Электронная почта"
          labelStyle={styles.blackText}
          ref={inputEmail}
          placeholder="example@gmail.com"
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          label="Пароль"
          labelStyle={styles.blackText}
          ref={inputPassword}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          titleStyle={styles.blackText}
          buttonStyle={styles.button}
          type="outline"
          title="Зарегистрироваться"
          onPress={onPressSubmitButton}
        />
        <View style={styles.alreadyHaveAnAccount}>
          <Text>Нет аккаунта?</Text>
          <Text style={styles.signInText}> Зарегистрируйтесь</Text>
          <Text style={{textDecorationLine: 'underline', textAlign:"center"}}>Забыли пароль?</Text>
        </View>
        <View>
        <Text style={{textDecorationLine: 'underline', textAlign:"center"}}>Забыли пароль?</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default Authorization;

const styles = StyleSheet.create({
  alreadyHaveAnAccount: {
    justifyContent: 'center',
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
  },
  forgotPassword: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
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
    borderColor: '#000000',
    padding: 25,
  },
});

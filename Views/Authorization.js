import { useNavigationBuilder } from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
    View,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
} from 'react-native';
import {Input, Text, Button} from 'react-native-elements';
import MenuBar from '../Components/MenuBar'
import Registration from './Registration';
function Authorization({navigation}) {

    const emailRef = useRef();
    const passwordRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let onPressSubmitButton = function () {
        Keyboard.dismiss();
        if (email === '' || password === '') {
            emailRef.current.shake();
            passwordRef.current.clear();
            return;
        }

        // TODO request here
        console.log('Request to backend', email, password);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.form}>
            <MenuBar onPress={navigation.toggleDrawer}/>
                <Text h2 style={styles.registrationText}>
                    Вход
                </Text>
                <Input
                    label="Электронная почта"
                    labelStyle={styles.blackText}
                    onChangeText={setEmail}
                    ref={emailRef}
                    placeholder="example@gmail.com"
                />
                <Input
                    label="Пароль"
                    labelStyle={styles.blackText}
                    onChangeText={setPassword}
                    ref={passwordRef}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <Button
                    titleStyle={styles.blackText}
                    buttonStyle={styles.button}
                    type="outline"
                    title="Зарегистрироваться"
                    onPress={onPressSubmitButton}
                />
                <View style={styles.centeredContent}>
                    <Text>Нет аккаунта?</Text>
                    <Text style={styles.signInText} onPress={()=> navigation.navigate(Registration)}> Зарегистрируйтесь</Text>
                </View>
                <View style={styles.centeredContent}>
                    <Text>Забыли пароль?</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Authorization;

const styles = StyleSheet.create({
    centeredContent: {
        justifyContent: 'center',
        marginTop: 10,
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
        flexDirection: 'column'
    },
    blackText: {
        color: '#000000',
    },
    button: {
        borderColor: '#000000',
        padding: 25,
    },
});

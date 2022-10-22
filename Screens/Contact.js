// JavaScript source code
import React from 'react';
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
} from "react-native";

const App = ({navigation })=> {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

        <View style={styles.container}>
            <Text style={styles.titleText}>
                Contacts
            </Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Contact first name."
                    placeholderTextColor="#DDDDDD"
                    onChangeText={(fname) => setFname(fname)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Contact last name"
                    placeholderTextColor="#DDDDDD"
                    onChangeText={(lname) => setLname(lname)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Contact's Phone #."
                    placeholderTextColor="#DDDDDD"
                    onChangeText={(phone) => setPhone(phone)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Contact's Email."
                    placeholderTextColor="#DDDDDD"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Add Contact</Text>

            </TouchableOpacity>
        </View>
    );
}
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#FFFFFF",
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#1035AC",
    },
    loginText: {
        color: "#ffffff",
},
    titleText: {
        marginBottom: 50,
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000080',
     //   fontFamily: "Impact,Charcoal,sans-serif",
    }
});
import React from 'react';
import { Button, FlatList, StyleSheet, Text, View, Alert, TouchableOpacity, TextInput} from 'react-native';
    
const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.titleText}>
                Register
            </Text> */}

            <Text style = {styles.dogText}>   First Name: *</Text>
            <TextInput
                style={styles.input}
                placeholder = 'First Name'
                />
            <Text style = {styles.dogText}>   Last Name: *</Text>
            <TextInput
                style={styles.input}
                placeholder = 'Last Name'
                />
            <Text style = {styles.dogText}>   Email: *</Text>
            <TextInput
                style={styles.input}
                placeholder = 'Example@email.com'
                />
            <Text style = {styles.dogText}>   Username: *</Text>
            <TextInput
                style={styles.input}
                placeholder = 'Username'
                />
            <Text style = {styles.dogText}>   Password: *</Text>
            <TextInput
                style={styles.input}
                placeholder = 'Password'
                />
                
            <TouchableOpacity style={styles.registerBtn} onPress={() => Alert.alert('Registration Success')}>
                <Text style={styles.registerBtn_text}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center', 
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    titleText: {
        marginBottom: 50,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000080',
    },
    registerBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#1035AC",
    },
    registerBtn_text: {
        color: "#ffffff",
    },
    dogText: {
        color: "FFFFFF",
        fontSize:20,
    },
    input: {
        height: 40,
        width: 275, 
        margin: 12, //Length apart of other Fields around it
        borderWidth: 1,
        padding: 10, //Padding of placeholder
      },  
})
export default Register;
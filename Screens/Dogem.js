import * as React from 'react';
import {useEffect, useState} from 'react';
import * as SMS from 'expo-sms';
import * as Linking from 'expo-linking';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
/*CODE FOR THE DOGEM SCREEN
Components:
- DogEm title text
- "Enter mobile number" prompt
- Field for numbers and/or emails
- "Enter SMS body" prompt
- Field for the message
- Send Message button
- Phone Call button
*/
const App = () => {
    const [isAvailable, setIsAvailable] = useState(false);
    const [phoneNum, setPhoneNum] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const [contacts, setContacts] = useState([]);

    /* The messaging function uses the following:
     checkAvailability: This checks whether or not the app can open the user's default messaging app.
     sendSMS: 
       1. This is what will be called when the "Send Message" button is clicked. 
       2. It accepts an array of contacts' phone numbers and emails as well as 
       a message to send to the contacts. 
       3. It iterates for a specific message limit. For testing it is 5.
       4. It returns the status of a message (result) to the console. If the message
       sends, it returns sent. If it is cancelled, it returns cancelled. 
     addContact: This adds a contact's information to an array. 
   */  
  
    /* checkAvailability checks whether or not DogEm can open the user's messaging app */
    useEffect(() => {
      async function checkAvailability() {
        const isSmsAvailable = await SMS.isAvailableAsync();
        setIsAvailable(isSmsAvailable);
      }
      checkAvailability();
    }, []);
   
    /* sendSMS does a lot of heavy-lifting for the messaging function. 
    It establishes a message limit, iit auto-fills the message's fields with 
    the user's contacts list and the message they entered, and it returns the 
    status of the message. 
    */
    const sendSMS = async () => {
      for(let messageLimit=1; messageLimit<=5; messageLimit++) {
        const {result} = await SMS.sendSMSAsync(
        contacts,
        message
      );
      console.log(result);
      }
    };
    
    /* addContact is an array of the user's contacts. */
    const addContact = () => {
      /*
      newContacts is a clone of the setContacts array. 
      newContacts is set to something called the spread operator.
      The spread operator "..." is a handy tool for making an 
      exact copy of an existing array.
      */
      let newContacts = [...contacts];
      newContacts.push(phoneNum);
      setContacts(newContacts);
      setPhoneNum(undefined);
    };

    const showContacts = () => {
      if (contacts.length === 0) {
        return <Text>No contacts added!</Text>
      }
  
      return contacts.map((contact, index) => {
        return <Text key={index}>{contact}</Text>;
      });
    };

    /* The calling function uses the following:
    _pressCall: Opens the user's default calling app using Linking
    and calls the number that the user entered into the "Enter Mobile Number"
    field.
    */ 
    const _pressCall = () => {
      Linking.openURL(`tel:${phoneNum}`);
  };
    return (
  
      <View style={styles.container}>
          <ScrollView>
        <Text style={styles.titleText}> DogEm </Text>
        
        <View style={styles.inputView}>
        <Text style={styles.titleTextsmall}>Enter Mobile Number</Text>
          <TextInput
            style={styles.TextInput}
            value={phoneNum} 
            placeholder="Enter Contact Number"
            placeholderTextColor="#003f5c"
            onChangeText={(value) => setPhoneNum(value)}
          />
          <Text style={styles.forgot_button} onPress={addContact}>Add Contact</Text>
        </View>
  
        <View style={styles.inputView}>
        <Text style={styles.titleTextsmall}>Enter SMS body</Text>
          <TextInput
            style={styles.TextInput}
            value={message}
            placeholder="Enter SMS Body"
            placeholderTextColor="#003f5c"
            onChangeText={(value) => setMessage(value)}
          />
         </View>
        
         <Text>Contacts:</Text>
         {showContacts()}

         <Text style={styles.forgot_button} onPress={() => setContacts([])}>Clear Contacts</Text>
         
         <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={sendSMS}>
          <Text style={styles.buttonTextStyle}>Send Message</Text>
          </TouchableOpacity>

          <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={_pressCall}>
          <Text style={styles.buttonTextStyle}>Phone Call</Text>
          </TouchableOpacity> 

      </ScrollView>
      </View>
    );
  }
  
  /* This is where all the styling is: */  
  
  const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        textAlign: 'center',
    },
    titleText: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#1035AC',
    },
    titleTextsmall: {
        marginVertical: 8,
        fontSize: 16,
    },
    buttonStyle: {
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
        backgroundColor: '#1035AC',
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    TextInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
    },
   
    forgot_button: {
      height: 30,
      marginTop: 10,
      marginBottom: 20,
    },
  
    edit_contact_button: {
      height: 30,
      marginTop: 10,
      marginBottom: 20,
    },

    titleText: {
        marginBottom: 15,
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000080',
     //   fontFamily: "Impact,Charcoal,sans-serif",
    },

    scrollView: {
      width: '100%',
      alignSelf: 'center',
      borderRightWidth: 1,
      padding: 0,
    },
  
    contentContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    regularText: {
      color: 'red',
      marginBottom: 10,
      alignItems: "center",
      fontWeight: "bold",
      maxWidth: "100%",
    },
  });
  
  export default App;
// src/components/SignUpScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Title, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../components/textInput';
import Button from '../components/Buttons';
const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement your signup logic here
    console.log('Sign Up:', { name, email, phoneNumber, password });
  };

  const navigateToSignIn = () => {
    navigation.goBack(); // Use goBack to navigate back to the previous screen
  };

  const screenHeight = Dimensions.get('window').height;

  return (
    <>
<KeyboardAvoidingView
  behavior="padding"
  style={styles.container}
  keyboardVerticalOffset={-500} // Adjust the offset as needed
>
   
        <View style={[styles.titleContainer, { height: screenHeight * 0.40 }]}>
          <Title style={styles.title}>Sign Up</Title>
        </View>
        <View style={styles.formContainer}>
        <TextInput label="Name" value={name} onChangeText={setName} />
        <TextInput label="Email" value={email} onChangeText={setEmail} />
        <TextInput label="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} />
        <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Button label="Sign Up" onPress={handleSignUp} /> 
 
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  titleContainer: {
    backgroundColor: 'black',
    padding: 120,
    alignItems: 'center',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius:80,
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white', // Set the text color based on your design
    borderWidth: 2, // Set the border width for the title
    
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // backgroundColor: 'gray',
    

  },
  input: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.5)',
    elevation: 3, 
  },
  button: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#000', // Adjust the color according to your design
  },
});

export default SignUpScreen;

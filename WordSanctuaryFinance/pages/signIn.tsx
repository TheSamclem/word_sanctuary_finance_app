// SignInScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Title, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../components/textInput';
import Button from '../components/Buttons';

const SignInScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

//   const handleSignIn = () => {
//     navigation.navigate('SignUp');
//   };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Sign In:', { username, password });
    navigation.navigate('Dashboard');
    // Implement your sign-in logic here
    
  };

  return (
    <>
      <KeyboardAvoidingView
  behavior="padding"
  style={styles.container}
  keyboardVerticalOffset={-500}
      >
        <View style={[styles.titleContainer, { height: '40%' }]}>
          <Title style={styles.title}>Welcome Back</Title>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button label="Sign In" onPress={handleSignIn} />
          <TouchableOpacity onPress={navigateToSignUp}>
            <Text style={styles.linkText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Navigate to Forgot Password')}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
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
    backgroundColor: 'rgba(0,0,0,0)',
  },
  titleContainer: {
    backgroundColor: 'black',
    padding: 120,
    alignItems: 'center',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 2,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  linkText: {
    color: 'black',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;

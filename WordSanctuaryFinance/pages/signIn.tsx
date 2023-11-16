// src/components/SignInScreen.tsx
import React from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button, Title, Text } from 'react-native-paper';

const SignInScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assets/back.jpg')} // Replace with your image path
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
      >
        <View style={styles.content}>
          <Title style={styles.title}>Welcome Back</Title>
          <TextInput
            label="Username"
            mode="outlined"
            style={styles.input}
            // Add onChangeText and value props for handling input changes
          />
          <TextInput
            label="Password"
            secureTextEntry
            mode="outlined"
            style={styles.input}
            // Add onChangeText and value props for handling input changes
          />
          <Button mode="contained" style={styles.button} onPress={() => console.log('Sign In')}>
            Sign In
          </Button>
          <TouchableOpacity onPress={() => console.log('Navigate to Create Account')}>
            <Text style={styles.linkText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Navigate to Forgot Password')}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // Add an overlay for better readability
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Set the text color based on your design
  },
  input: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.8)', 
  },
  button: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#000',  
  },
  linkText: {
    color: 'white',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;

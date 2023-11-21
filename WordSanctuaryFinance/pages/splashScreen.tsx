// App.tsx
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate an asynchronous task, e.g., loading data or checking authentication
    const simulateAsyncTask = async () => {
      // Add your async logic here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating a 2-second task

      // Navigate to the sign-in screen after 5 seconds
      setTimeout(() => {
        navigation.navigate('SignIn'); 
      }, 5000);
    };

    simulateAsyncTask();
  }, [navigation]); // Run only once when the component mounts

  return (
    <View style={styles.container}>
      {/* Replace 'logo.png' with your actual logo */}
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, 
    height: 200,
  },
});

export default SplashScreen;

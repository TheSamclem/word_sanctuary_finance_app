// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';
import DashboardScreen from './pages/dashboard';
import SplashScreen from './pages/splashScreen';
import SignInScreen from './pages/signIn';
import SignUpScreen from './pages/signUp';
import OverviewScreen from './pages/overview';
import TransactionsScreen from './pages/transaction';
import SettingsScreen from './pages/settings';
import EnvelopeScreen from './pages/Envelope';
import CameraScreen from './pages/Camera';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardTabs: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={OverviewScreen}  />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Dashboard" component={DashboardTabs} />
        <Stack.Screen name="EnvelopeScreen" component={EnvelopeScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const getTabBarVisibility = (route: any) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Main';

  return !(routeName === 'Dashboard');
};


export default App;

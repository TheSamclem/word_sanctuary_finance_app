// DashboardScreen.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OverviewScreen from './overview';
import TransactionsScreen from './transaction';
import SettingsScreen from './settings';

const Tab = createBottomTabNavigator();

const DashboardScreen: React.FC = () => {
  return (
    <Tab.Navigator  >
      <Tab.Screen name="Home" component={OverviewScreen}  />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default DashboardScreen;

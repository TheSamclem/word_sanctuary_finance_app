
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { Card } from 'react-native-paper'; // Assuming you have a Card component from react-native-paper
import Icon from 'react-native-vector-icons/FontAwesome';
import TransactionCard from '../components/TransactionCard';
import { useNavigation } from '@react-navigation/native';

const OverviewScreen: React.FC = () => {
  const navigation = useNavigation();
  const userName = 'Samclem'; // Replace with the actual user's name
  const previousTransactions = [
    { id: 1, description: 'Transaction 1', amount: '$50.00' },
    { id: 2, description: 'Transaction 2', amount: '$30.00' },
    { id: 3, description: 'Transaction 3', amount: '$20.00' },
    { id: 4, description: 'Transaction 4', amount: '$50.00' },
    { id: 5, description: 'Transaction 5', amount: '$30.00' },
    { id: 6, description: 'Transaction 6', amount: '$20.00' },
    { id: 7, description: 'Transaction 5', amount: '$30.00' },
    { id: 8, description: 'Transaction 6', amount: '$20.00' },
    // Add more transactions as needed
  ];
  const handleEnvelopeClick = () => {
    // Navigate to the new screen for envelope
    navigation.navigate('CameraScreen'); // Replace 'EnvelopScreen' with the actual screen name
  };

  const handleCardClick = () => {
    // Navigate to the new screen for card
    navigation.navigate('CardScreen'); // Replace 'CardScreen' with the actual screen name
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Hi {userName}</Text>
      <Text style={styles.howToGive}>How do you want to give?</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleEnvelopeClick}>
          <View style={styles.iconItem}>
            <Card style={styles.card}>
              <Card.Content>
                <Icon name="envelope" size={100} color="black" />
                <Text style={styles.iconText}>Envelope</Text>
              </Card.Content>
            </Card>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Card clicked')}>
          <View style={styles.iconItem}>
            <Card style={styles.card}>
              <Card.Content>
                <Icon name="credit-card" size={100} color="black" />
                <Text style={styles.iconText}>Card</Text>
              </Card.Content>
            </Card>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Previous Transactions</Text>

      {previousTransactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  greeting: {
    paddingTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  howToGive: {
    color: 'gray',
    fontSize: 26,
    marginBottom: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  iconItem: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 8,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  transactionDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OverviewScreen;
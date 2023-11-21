// TransactionCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const TransactionCard = ({ transaction }) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <View>
          {/* <Text style={styles.transactionDescription}>{transaction.description}</Text> */}
          <Text style={styles.transactionAmount}>{transaction.amount}</Text>
        </View>
        
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionDescription: {
    fontSize: 16,
    marginBottom: 4,
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 14,
    color: 'gray',
  },
});

export default TransactionCard;

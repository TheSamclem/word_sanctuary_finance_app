import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Buttons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
const EnvelopeScreen: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();  
  
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleScanQRCode = (event: any) => {
    // Check if the QR code contains valid data
    if (event.data) {
      console.log('Scanned QR Code:', event.data);
      // Add your logic to handle the scanned QR code data
    }
    // Close the camera after scanning
    setIsCameraOpen(false);
  };

  const handleNext = () => {
    console.log('Amount:', amount);
    // Add navigation logic here
  };

  return (
    <View style={styles.container}>
      {!isCameraOpen ? (
        <>
          <TouchableOpacity onPress={() => setIsCameraOpen(true)} style={styles.scanButton}>
            <Card style={styles.card}>
              <Card.Content>
                <Icon name="qrcode" size={30} color="white" />
                <Text style={styles.buttonText}>Click to scan SmartQR Code</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <Text style={styles.label}>Envelope Status: Not Matched</Text>
          <Text style={styles.label}>Amount:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter amount"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />

          <Button label="Next >>" onPress={handleNext} />
        </>
      ) : (
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={handleScanQRCode}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  scanButton: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
  },
  nextButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  camera: {
    flex: 1,
  },
});

export default EnvelopeScreen;

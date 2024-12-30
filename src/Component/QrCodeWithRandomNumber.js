import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';

const QrCodeWithRandomNumber = () => {
  const [qrValue, setQrValue] = useState('');
  const [random, setRandom] = useState(0);
  const generateRandomNumber = () => {
    let value = Math.round(Math.random() * 10000);
    if (value < 9999) {
      value += 1000;
    }

    if (value > 9999) {
      value -= 1000;
    }
    setRandom(value);
    setQrValue(value.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code with Random Number</Text>
      <Text style={styles.randomNumber}>{random}</Text>
      <Button
        title="Generate Random Number"
        style={{margin: 110}}
        onPress={generateRandomNumber}
      />
      {qrValue ? (
        <QRCode
          value={qrValue}
          size={200}
          color="black"
          backgroundColor="white"
          style={styles.qrCode}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  randomNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  qrCode: {
    margin: 120,
  },
});

export default QrCodeWithRandomNumber;

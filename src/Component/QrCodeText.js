import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import QRCode from 'react-native-qrcode-svg';

const QrCode = () => {
    const [qrCode, setQrCode] = useState('');
    const [isActive, setIsActive] = useState(false);

    const generateQrCode = () => {
        if (!qrCode) return;
        setIsActive(true);
    };

    const handleInputChange = (text) => {
        setQrCode(text);
        if (!text) setIsActive(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>QR Code Generator</Text>
            <Text>Enter the text to create a QR Code:</Text>
            <TextInput 
                value={qrCode}
                onChangeText={handleInputChange}
                placeholder='Enter the Text'
                style={styles.input}
            />
            <TouchableOpacity 
                onPress={generateQrCode}
                disabled={!qrCode} // Disable if qrCode is empty
                style={[styles.button, !qrCode && styles.disabledButton]} // Style based on disabled state
            >
                <Text style={styles.buttonText}>Generate QR</Text>  
            </TouchableOpacity>
            {isActive && (
                <View style={styles.qrCodeContainer}>
                    <QRCode 
                        value={qrCode}
                        size={200}
                    /> 
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#cccccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    qrCodeContainer: {
        marginTop: 20,
    },
});

export default QrCode;

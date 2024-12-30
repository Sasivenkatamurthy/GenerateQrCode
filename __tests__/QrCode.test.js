import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import QrCodeWithRandomNumber from '../src/Component/QrCodeWithRandomNumber';

describe('QrCodeWithRandomNumber', () => {
  
  test('renders correctly', () => {
    const {getByText, queryByTestId} = render(<QrCodeWithRandomNumber />);
    
    // Check if title and button are rendered
    expect(getByText('QR Code with Random Number')).toBeTruthy();
    expect(getByText('Generate Random Number')).toBeTruthy();
    
    // QR Code should not be rendered initially
    expect(queryByTestId('qrCode')).toBeNull();
  });

  test('generates random number and displays QR code', () => {
    const {getByText, getByTestId} = render(<QrCodeWithRandomNumber />);
    
    // Fire button press event
    const button = getByText('Generate Random Number');
    fireEvent.press(button);

    // Check if random number text is updated and within range
    const randomNumberText = getByTestId('randomNumberText');
    const randomValue = parseInt(randomNumberText.props.children, 10);
    expect(randomValue).toBeGreaterThanOrEqual(1000);
    expect(randomValue).toBeLessThanOrEqual(9999);

    // Check if QR code is rendered with the correct value
    const qrCode = getByTestId('qrCode');
    expect(qrCode).toBeTruthy();
    expect(qrCode.props.value).toBe(randomValue.toString());
  });

  test('generates a new random number on each button press', () => {
    const {getByText, getByTestId} = render(<QrCodeWithRandomNumber />);
    
    const button = getByText('Generate Random Number');
    
    // Press the button twice to generate two different values
    fireEvent.press(button);
    const firstRandomNumber = parseInt(getByTestId('randomNumberText').props.children, 10);

    fireEvent.press(button);
    const secondRandomNumber = parseInt(getByTestId('randomNumberText').props.children, 10);

    expect(firstRandomNumber).not.toBe(secondRandomNumber);
  });

  test('QR code updates with each new random number', () => {
    const {getByText, getByTestId} = render(<QrCodeWithRandomNumber />);
    
    const button = getByText('Generate Random Number');
    fireEvent.press(button);

    // Capture initial QR code value
    const initialQRCodeValue = getByTestId('qrCode').props.value;

    // Generate a new random number
    fireEvent.press(button);
    const newQRCodeValue = getByTestId('qrCode').props.value;

    // Check QR code value has updated
    expect(initialQRCodeValue).not.toBe(newQRCodeValue);
  });

});

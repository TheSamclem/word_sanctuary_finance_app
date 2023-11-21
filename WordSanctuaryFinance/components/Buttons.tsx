// Button.tsx
import React from 'react';
import { Button as RNButton } from 'react-native-paper';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <RNButton mode="contained" style={{ width: '100%', marginTop: 10,backgroundColor:'black' }} onPress={onPress}>
      {label}
    </RNButton>
  );
};

export default Button;

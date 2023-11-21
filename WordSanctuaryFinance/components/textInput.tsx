// TextInput.tsx
import React from 'react';
import { TextInput as RNTextInput, useTheme } from 'react-native-paper';

interface TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  const theme = useTheme();

  return (
    <RNTextInput
      label={label}
      mode="outlined"
      style={{ width: '100%', marginBottom: 16 }}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      theme={{ colors: { primary: theme.colors.text, underlineColor: 'white' } }}
    />
  );
};

export default TextInput;

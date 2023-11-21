// Dropdown.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Picker as RNPicker } from 'react-native';
import { useTheme } from 'react-native-paper';

interface DropdownProps {
  label: string;
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
  items: Array<{ label: string; value: string }>;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  selectedValue,
  onValueChange,
  items,
}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <RNPicker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={[styles.picker, { color: theme.colors.text }]}
      >
        {items.map((item, index) => (
          <RNPicker.Item key={index} label={item.label} value={item.value} />
        ))}
      </RNPicker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'black', // Border color
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)', 
  },
  picker: {
    height: 40,
    width: '100%',
  },
});

export default Dropdown;

import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

interface Props {
  selectedValue: string;
  onValueChange: (value: string) => void;
  label: string;
  items: {
    label: string;
    value: string;
  }[]
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    marginBottom: 25
  },
  label: {
    fontWeight: 'bold',
    color: '#86939e',
    fontSize: 16
  },
  picker: {
    marginTop: 10,
    marginBottom: 10,
  }
});

const WrappedPicker: FunctionComponent<Props> = ({
  selectedValue,
  onValueChange,
  label,
  items
}) => (
  <View style={styles.wrapper}>
    <Text style={styles.label}>{label}</Text>
    <Picker style={styles.picker}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      mode="dropdown"
    >
      {items.map(item => (
        <Picker.Item
          key={item.value}
          label={item.label}
          value={item.value} />
      ))}
    </Picker>
    <Divider color="#888" width={1} />
  </View>
);

export default WrappedPicker;
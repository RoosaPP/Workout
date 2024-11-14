import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from '../Styles/styles';

export default function Settings({ unit, setUnit }) {
  const [selectedUnit, setSelectedUnit] = useState(unit); 

  const handleSave = () => {
    setUnit(selectedUnit); 
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.headlineLarge}>Settings</Text>

      <View>
        <Text>Select Unit:</Text>
        <RadioButton.Group onValueChange={value => setSelectedUnit(value)} value={selectedUnit}>
          <View style={Styles.radioOption}>
            <Text>Kilometers (km)</Text>
            <RadioButton value="km" />
          </View>
          <View style={Styles.radioOption}>
            <Text>Miles (mi)</Text>
            <RadioButton value="mi" />
          </View>
        </RadioButton.Group>
      </View>

      <Button mode="contained" onPress={handleSave} style={Styles.saveButton}>
        Save Settings
      </Button>
    </SafeAreaView>
  );
}

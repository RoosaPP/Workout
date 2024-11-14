
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from '../Styles/styles';
import { PaperProvider, useTheme } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import { ToggleButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';

const categories = ['run', 'ski', 'swim'];

export default function AddWorkOut({ workouts, setWorkouts }) { 
  
  const [category, setCategory] = useState(categories[0]);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const theme = useTheme();

  const handleAddWorkout = () => {
    const distanceNum = parseFloat(distance);
    const durationNum = parseFloat(duration);
  
    if (isNaN(distanceNum) || distanceNum < 0) {
      Alert.alert('Virhe', 'Anna positiivinen etäisyys.');
      return;
    }
  
    if (isNaN(durationNum) || durationNum < 0) {
      Alert.alert('Virhe', 'Anna positiivinen kesto.');
      return;
    }
  
    const newWorkout = {
      category,
      distance: distanceNum,
      duration: durationNum,
      date,
    };
  
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);

   
    setDistance('');
    setDuration('');
    setDate('');
  };
  
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={[Styles.headlineLarge, { color: theme.colors.primary }]}>Add workouts</Text>
      <CategorySelection value={category} setValue={setCategory} values={categories} />
      
      <TextInput
        style={Styles.textInput}
        placeholder="Distance (m)"
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
      />
      
      <TextInput
        style={Styles.textInput}
        placeholder="Duration (min)"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />
       
      <TouchableOpacity onPress={() => setCalendarVisible(!isCalendarVisible)}>
        <Text style={Styles.dateText}>{date ? date : "Valitse päivämäärä"}</Text>
      </TouchableOpacity>

      {isCalendarVisible && (
        <Calendar
          onDayPress={({ dateString }) => {
            setDate(dateString);
            setCalendarVisible(false);
          }}
          markedDates={{ [date]: { selected: true } }}
        />
      )}

      <Button title="Add Workout" onPress={handleAddWorkout} />
    </SafeAreaView>
  );
}

function CategorySelection({ value, setValue, values }) {
  const theme = useTheme();

  return (
    <View style={Styles.categories}>
      <ToggleButton.Group value={value} onValueChange={setValue}>
        {values.map(v => 
          <ToggleButton 
            key={v} 
            value={v} 
            icon={v} 
            iconColor={v === value ? theme.colors.onPrimary : theme.colors.primary}
            size={30}
            style={{ backgroundColor: v === value ? theme.colors.primary : null }}
          /> 
        )}
      </ToggleButton.Group>
    </View>
  );
}





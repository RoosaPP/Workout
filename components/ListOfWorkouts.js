import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from '../Styles/styles'; 






const calculateTotalDistances = (workouts) => {
  
  return workouts.reduce((totals, workout) => {
    const { category, distance } = workout;
    if (totals[category]) {
      totals[category] += distance;
    } else {
      totals[category] = distance;
    }
    return totals;
  }, {});
};

const categoryIcons = {
  AddWorkOut: 'plus',
  ListOfWorkouts: 'format-list-bulleted',
  Settings: 'account-settings',
};

export default function ListOfWorkouts({ workouts }) {
 
 const totalDistances = calculateTotalDistances(workouts);
 


  return (
    <View style={Styles.container}>
      <Text style={Styles.headlineLarge}>List of Workouts</Text>

     
      <View style={Styles.totalContainer}>
        <Text style={Styles.totalTitle}>Total distances:</Text>
        {Object.keys(totalDistances).map((category) => (
          <View key={category} style={Styles.totalBox}>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                name={categoryIcons[category]} 
                size={20}
                color="#000"
              />
            <Text style={Styles.totalText}>
              {category === 'run' && `Run: ${totalDistances[category]} m`}
              {category === 'swim' && `Swim: ${totalDistances[category]} m`}
              {category === 'ski' && `Ski: ${totalDistances[category]} m`}
            </Text>
              
            </View>
          </View>
        ))}
      </View>

      
      <FlatList
        data={workouts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={Styles.workoutBox}>
            <Text style={Styles.itemText}>{`Category: ${item.category}`}</Text>
            <Text style={Styles.itemText}>{`Distance: ${item.distance} m`}</Text>
            <Text style={Styles.itemText}>{`Duration: ${item.duration} min`}</Text>
            <Text style={Styles.itemText}>{`Date: ${item.date}`}</Text>
          </View>
        )}
      />
    </View>
  );
}

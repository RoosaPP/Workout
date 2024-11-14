import React, { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation, MD3LightTheme, PaperProvider } from 'react-native-paper';
import AddWorkOut from './components/AddWorkOut';  
import ListOfWorkouts from './components/ListOfWorkouts'; 
import Settings from './components/Settings'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const routes = [
  { key: 'AddWorkOut', title: 'Add workouts', focusedIcon: 'plus' },
  { key: 'ListOfWorkouts', title: 'List of workouts', focusedIcon: 'format-list-bulleted' }, 
  { key: 'Settings', title: 'Settings', focusedIcon: 'account-settings' }, 
];


export default function App() {
  const [workouts, setWorkouts] = useState([ 
    { category: 'run', distance: 5000, duration: 30, date: '2024-10-10' },
    { category: 'swim', distance: 1000, duration: 20, date: '2024-10-12' },
    { category: 'ski', distance: 2000, duration: 45, date: '2024-10-15' },
  ])

 
  const categoryIcons = routes.reduce((acc, route) => {
    acc[route.key] = route.focusedIcon;
    return acc;
  }, {});


    
   
  const [index, setIndex] = useState(0);


  
  const renderScene = BottomNavigation.SceneMap({
    AddWorkOut: () => <AddWorkOut workouts={workouts} setWorkouts={setWorkouts} />, 
    ListOfWorkouts: () => <ListOfWorkouts workouts={workouts} />,
    Settings: Settings,
  });
  return (
    <PaperProvider theme={MD3LightTheme}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        // Lisää ikonit tässä
        renderIcon={({ route, focused }) => (
          <Icon 
            name={route.focusedIcon} 
            size={24} 
            color={focused ? '#673ab7' : '#222'} 
          />
        )}
      />
    </PaperProvider>
  );
}

import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
  },
  headlineLarge: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: "center",
  },
  totalTitle: { // Oikea paikka
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalText: {
    fontSize: 16,
    marginTop: 5,
  },
  workoutItem: {
    padding: 15,
    backgroundColor: '#e6e6e6',
    marginBottom: 10,
    borderRadius: 8,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    margin: 10,
    height: 40, // Kentän korkeus
    borderColor: 'gray', // Reunan väri
    borderWidth: 1, // Reunan paksuus
    borderRadius: 5, // Pyöristys
    marginVertical: 10, // Marginaali ylös ja alas
    paddingHorizontal: 10, // Sisäinen marginaali vasemmalle ja oikealle
  },
  workoutBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Styles;

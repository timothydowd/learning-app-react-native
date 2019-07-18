import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screen/Home'
import AntonymsScreen from './src/screen/Antonyms'
import TestModeScreen from './src/screen/TestMode'



const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Antonyms: {screen: AntonymsScreen},
  TestMode: {screen: TestModeScreen}
});

const App = createAppContainer(MainNavigator);

export default App;
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

/* Component */
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
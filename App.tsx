import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import {enableScreens} from 'react-native-screens'
import { createStore, combineReducers } from "redux";
import {Provider} from "react-redux";

import TabNavigator from "./navigation/Navigator";
import { NativeBaseProvider } from "native-base";
import AppBar from "./components/AppBar";
import MealReducer from "./Redux/reducers/Meals";
import HomeScreen from "./screens/HomeScreen";
import Navigation from "./navigation/Navigation";

// Enables native screens for improved performance
enableScreens();

const rootReducer = combineReducers({
  meals: MealReducer
})

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log("Error loading fonts")}
      />
    );
  }

  return (
    <Provider store={store}>
    <NativeBaseProvider>
    <StatusBar style='dark'/>
      {/* <AppBar /> */}
      {/* <TabNavigator /> // Current Main Component */}
      {/* <HomeScreen /> */}
      <Navigation />
    </NativeBaseProvider>
    </Provider>
  );
}

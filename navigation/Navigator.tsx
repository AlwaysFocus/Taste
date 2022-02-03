import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealCategoryScreen from "../screens/MealCategoryScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

const Navigator = (props: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.backgroundColor,
          },
          headerTintColor: Colors.primaryColor,
        }}
      >
        <Stack.Screen
          name="Home"
          options={{
            title: "Home",
          }}
          component={CategoriesScreen}
        />
        <Stack.Screen
          name="MealCategories"
          options={({route}): NativeStackNavigationOptions => ({
            title: route.params?.name ?? "Meal Categories",
          })}
          component={MealCategoryScreen}
        />
        <Stack.Screen
          name="MealDetails"
          options={({ route }): NativeStackNavigationOptions => ({
            title: route.params?.name ?? "Meal Details",
          })}
          component={MealDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

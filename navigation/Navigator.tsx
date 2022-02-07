import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Ionicons from "@expo/vector-icons/Ionicons";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealCategoryScreen from "../screens/MealCategoryScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import NavHeaderButton from "../components/HeaderButton";
import { Platform } from "react-native";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RecipeStackNavigator = (props: any) => {
  const [starIcon, setStarIcon] = useState("ios-star-outline");

  const setFavoriteIcon = () => {
    if (starIcon === "ios-star-outline") {
      setStarIcon("ios-star");
    } else {
      setStarIcon("ios-star-outline");
    }
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.lightGrey,
        },
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="Categories"
        options={{
          title: "Home",
          headerTitleStyle: { fontSize: 20, fontFamily: "Roboto-Bold" },
        }}
        component={CategoriesScreen}
      />
      <Stack.Screen
        name="MealCategories"
        options={({ route }): NativeStackNavigationOptions => ({
          headerTitleStyle: { fontSize: 20, fontFamily: "Roboto-Bold" },
          title: route.params?.name ?? "Meal Categories",
        })}
        component={MealCategoryScreen}
      />
      <Stack.Screen
        name="MealDetails"
        options={({ route }): NativeStackNavigationOptions => ({
          headerTitleStyle: { fontSize: 20, fontFamily: "Roboto-Bold" },
          title: route.params?.name ?? "Meal Details",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={NavHeaderButton}>
              <Item
                title="Favorite"
                iconName={starIcon}
                onPress={setFavoriteIcon}
              />
            </HeaderButtons>
          ),
        })}
        component={MealDetailScreen}
      />
    </Stack.Navigator>
  );
};

const FavoritesStackNavigator = (props: any) => {
  const [starIcon, setStarIcon] = useState("ios-star-outline");

  const setFavoriteIcon = () => {
    if (starIcon === "ios-star-outline") {
      setStarIcon("ios-star");
    } else {
      setStarIcon("ios-star-outline");
    }
  };
  return (
    <Stack.Navigator
      name="Favorites"
      component={FavoritesScreen}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.lightGrey,
        },
        headerTitleStyle: { fontSize: 22, fontFamily: "Roboto-Bold" },
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="FavoriteMeals"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.lightGrey,
          },
          headerTitleStyle: { fontSize: 20, fontFamily: "Roboto-Bold" },
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="MealDetails"
        options={({ route }): NativeStackNavigationOptions => ({
          headerTitleStyle: { fontSize: 20, fontFamily: "Roboto-Bold" },
          title: route.params?.name ?? "Meal Details",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={NavHeaderButton}>
              <Item
                title="Favorite"
                iconName={starIcon}
                onPress={setFavoriteIcon}
              />
            </HeaderButtons>
          ),
        })}
        component={MealDetailScreen}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: "white" },
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "fast-food" : "fast-food-outline";
            } else if (route.name === "Favorites") {
              iconName = focused ? "star" : "star-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.darkBlue,
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen name="Home" component={RecipeStackNavigator} />
        <Tab.Screen name="Favorites" component={FavoritesStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;

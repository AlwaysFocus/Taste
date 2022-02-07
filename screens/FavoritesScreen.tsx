import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = ({ navigation }: any, props: any) => {
  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return <MealList mealsToDisplay={favoriteMeals} navigation={navigation} />;
};

export default FavoritesScreen;

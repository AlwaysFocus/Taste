import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealCategoryScreen = ({ navigation, route }: any, props: any) => {
  // This is how we retrieve the parameters passed from any other components
  // that passed data in the props.navigation.navigate('routeName', {parameters}) function.
  const categoryId = route.params.categoryId;

  // Find our selected category
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  // Get the meals to display, only return category ids that match
  const mealsToDisplay = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList mealsToDisplay={mealsToDisplay} navigation={navigation}/>
};



export default MealCategoryScreen;

import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import {DefaultRootState, useSelector} from "react-redux"

import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

import { CATEGORIES} from "../data/dummy-data";

const MealCategoryScreen = ({ navigation, route }: any, props: any) => {
  // This is how we retrieve the parameters passed from any other components
  // that passed data in the props.navigation.navigate('routeName', {parameters}) function.
  const categoryId = route.params.categoryId;

  const availableMeals = useSelector((state: any) => state.meals.filteredMeals);

  // Find our selected category
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  // Get the meals to display, only return category ids that match
  const mealsToDisplay = availableMeals.filter(
    (meal: any) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()} title="Back" />
      ),
    });
  }, [navigation]);

  if (mealsToDisplay.length === 0) {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>There are no meals that match your filter criteria.</Text>
        <Text style={{...styles.text, paddingVertical: 5}}> Please update your filters.</Text>
      </View>
    )
  }

  return <MealList mealsToDisplay={mealsToDisplay} navigation={navigation}/>
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto-Regular",
  }
})

export default MealCategoryScreen;

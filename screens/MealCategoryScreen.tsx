import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import MealItem from "../components/MealItem";

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

  const viewMealDetails = (mealId: string, mealTitle: string) => {
    navigation.navigate("MealDetails", { name: mealTitle, mealId: mealId });
  }

  const renderListItem = (itemData: any) => {
    return <MealItem meal={itemData.item} onSelectMeal={viewMealDetails}/>;
  };

  return (
    // <View style={styles.screen}>
    //   <Text>Meal Category Screen</Text>
    //   <Text>Selected Category: {selectedCategory?.title}</Text>
    //   <Button
    //     title="View Meal Details"
    //     onPress={() => {
    //       navigation.navigate("MealDetails", { name: selectedCategory?.title });
    //     }}
    //   />
    // </View>
    <View>
      <FlatList data={mealsToDisplay} renderItem={renderListItem} style={{width: '100%'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealCategoryScreen;

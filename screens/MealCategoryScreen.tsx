import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const MealCategoryScreen = ({ navigation, route }: any, props: any) => {
  // This is how we retrieve the parameters passed from any other components
  // that passed data in the props.navigation.navigate('routeName', {parameters}) function.
  const categoryId = route.params.categoryId;

  // Find our selected category
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>Meal Category Screen</Text>
      <Text>Selected Category: {selectedCategory?.title}</Text>
      <Button
        title="View Meal Details"
        onPress={() => {
            navigation.navigate("MealDetails", {name: selectedCategory?.title});
        }}
      />
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

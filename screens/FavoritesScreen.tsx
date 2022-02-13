import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const FavoritesScreen = ({ navigation }: any, props: any) => {
  const favoriteMeals = useSelector((state: any) => state.meals.favoriteMeals);

  if(favoriteMeals.length === 0 || !favoriteMeals)
  {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>
          No Favorite Meals. Go add some!
        </Text>
      </View>
    )
  }

  return <MealList mealsToDisplay={favoriteMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: "Roboto-Regular",
    
  }
})

export default FavoritesScreen;

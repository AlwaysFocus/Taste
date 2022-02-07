import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "./MealItem";

const MealList = ({ navigation, mealsToDisplay }: any, props: any) => {
  const viewMealDetails = (mealId: string, mealTitle: string) => {
    navigation.navigate("MealDetails", { name: mealTitle, mealId: mealId });
  };
  const renderListItem = (itemData: any) => {
    return <MealItem meal={itemData.item} onSelectMeal={viewMealDetails} />;
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={mealsToDisplay}
        renderItem={renderListItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;

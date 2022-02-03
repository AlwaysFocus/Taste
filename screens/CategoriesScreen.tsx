import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import CategoryGridItem from "../components/CategoryGridItem";

const CategoriesScreen = (props: any) => {
  const renderGridItem = (itemData: any) => {
    return (
      <CategoryGridItem
        color={itemData.item.color}
        categoryId={itemData.item.categoryId}
        title={itemData.item.title}
        onSelect={() => {
          // The second argument is an object where we define an accessible property
          // in the route we navigate to.
          props.navigation.navigate("MealCategories", {
            categoryId: itemData.item.id,
            name: itemData.item.title
          });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;

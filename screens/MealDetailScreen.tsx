import React, { useCallback, useEffect, useLayoutEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import { ToggleFavorite } from "../Redux/actions/Meals";
import NavHeaderButton from "../components/HeaderButton";

const ListItem = (props: any) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = (
  { navigation, route, navigation: { setParams } }: any,
  props: any
) => {
  const mealId = route.params.mealId;
  const mealIsFavorite = useSelector((state: any) =>
    state.meals.favoriteMeals.some((meal: any) => meal.id === mealId)
  );
  const availableMeals = useSelector((state: any) => state.meals.meals);

  const selectedMeal = availableMeals.find((meal: any) => meal.id === mealId);

  const dispatch = useDispatch();

  // Let's trigger the ToggleFavorite action
  const toggleFavorite = useCallback(() => {
    dispatch(ToggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    setParams({ toggleFavorite: toggleFavorite});
  }, [toggleFavorite]);

  useEffect(() => {
    setParams({ mealIsFavorite: mealIsFavorite});
  }, [mealIsFavorite])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={NavHeaderButton}>
          <Item
            title="Favorite"
            iconName={mealIsFavorite ? "ios-star" : "ios-star-outline"}
            onPress={toggleFavorite}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()} title="Back" />
      ),
    });
  }, [navigation, mealIsFavorite, toggleFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.mealTagText}>{selectedMeal?.duration}m</Text>
        <Text style={styles.mealTagText}>
          {selectedMeal?.complexity.toUpperCase()}
        </Text>
        <Text style={styles.mealTagText}>
          {selectedMeal?.affordability.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient: string) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal?.steps.map((step: string) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  mealTagText: {
    fontFamily: "Roboto-Light",
    fontSize: 20,
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: Colors.lightGrey,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
});

export default MealDetailScreen;

import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import Colors from "../constants/Colors";
import { MEALS } from "../data/dummy-data";


const ListItem = (props: any) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    )
}

const MealDetailScreen = ({ navigation, route }: any, props: any) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

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
      {selectedMeal?.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal?.steps.map((step) => (
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
      
  }
});

export default MealDetailScreen;

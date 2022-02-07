import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";

const MealItem = (props: any) => {
  let TouchableComponent;

  // Enable NativeFeedback if on Android 21.0+
  if (Platform.OS === "android" && Platform.Version >= 21.0) {
    TouchableComponent = TouchableNativeFeedback;
  } else if (Platform.OS === "ios") {
    TouchableComponent = TouchableOpacity;
  }

  const onSelectMeal = () => {
    props.onSelectMeal(props.meal.id, props.meal.title);
  };

  return (
    <View style={styles.mealItem}>
      <TouchableComponent style={styles.touchable} onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.meal.imageUrl }}
              style={styles.bgImage}
            >
              <Text style={styles.title} numberOfLines={1}>
                {props.meal.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text style={styles.mealTagText}>{props.meal.duration}m</Text>
            <Text style={styles.mealTagText}>
              {props.meal.complexity.toUpperCase()}
            </Text>
            <Text style={styles.mealTagText}>
              {props.meal.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  touchable: {
    flex: 1,
    width: "100%",
  },

  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    height: 200,
    backgroundColor: Colors.lightOrange,
    overflow: "hidden",
    margin: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
    flex: 1,
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "15%",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
  mealTagText: {
    fontFamily: "Roboto-Light",
    fontSize: 20,
  },
});

export default MealItem;

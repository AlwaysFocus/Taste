import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  Platform,
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
      <TouchableComponent style={{ flex: 1 }} onPress={onSelectMeal}>
        <View style={{flex: 1 }}>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <Text>{props.meal.title}</Text>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
              <Text>{props.meal.duration} min</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  mealRow: {
    flexDirection: "row",
    width: '100%'
  },
  mealItem: {
    height: 200,
    backgroundColor: Colors.mediumBlue,
    padding: 20,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
    flex: 1
  },
  mealHeader: {
      height: '80%',
  },
  mealDetails: {
      
  },
});

export default MealItem;

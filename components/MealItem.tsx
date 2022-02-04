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
      <TouchableComponent style={styles.touchable} onPress={onSelectMeal}>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <Text style={styles.title}>{props.meal.title}</Text>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <Text style={styles.duration}>{props.meal.duration} min</Text>
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
    alignItems: "center"
    
  },
  touchable: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    
  },
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
    flex: 1,
    
  },
  mealItem: {
    height: 200,
    backgroundColor: Colors.mediumBlue,
    padding: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
    flex: 1,
  },
  mealHeader: {
    height: "80%",
   
  },
  mealDetails: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20
  },
  duration: {
    fontFamily: 'Roboto-Light',
    fontSize: 20
  }
});

export default MealItem;

import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from "react-native";

const CategoryGridItem = (props: any) => {
  let TouchableComponent;

  // Enable NativeFeedback if on Android 21.0+
  if(Platform.OS === "android" && Platform.Version >= 21.0) {
    TouchableComponent = TouchableNativeFeedback;
  } else if(Platform.OS === "ios") {
    TouchableComponent = TouchableOpacity;
  }
  return (
    <View style={styles.gridItem}>
    <TouchableComponent style={{flex: 1}} onPress={props.onSelect}>
      <View style={[styles.container, {backgroundColor: props.color}]}>
        <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
      </View>
    </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20
  }
});

export default CategoryGridItem;

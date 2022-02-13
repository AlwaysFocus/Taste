import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useDispatch } from "react-redux";

import { SetFilters } from "../Redux/actions/Meals";
import Colors from "../constants/Colors";

const FilterSwitch = (props: any) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        trackColor={{ true: Colors.lightOrange, false: Colors.lightBlue }}
      />
    </View>
  );
};

const FilterScreen = (
  { navigation: any, navigation: { setParams } }: any,
  props: any
) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const { navigation } = props;

  const dispatch = useDispatch();
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      lactoseFree: isLactoseFree,
      vegetarian: isVegetarian,
    };

    // The keys in the appliedFilters object must match 
    // the keys being checked in the reducer action
    dispatch(SetFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Select Filters</Text>
      <FilterSwitch
        onChange={(newValue: boolean) => setIsGlutenFree(newValue)}
        value={isGlutenFree}
        label="Gluten-Free"
      />
      <FilterSwitch
        onChange={(newValue: boolean) => setIsVegan(newValue)}
        value={isVegan}
        label="Vegan"
      />
      <FilterSwitch
        onChange={(newValue: boolean) => setIsLactoseFree(newValue)}
        value={isLactoseFree}
        label="Lactose-Free"
      />
      <FilterSwitch
        onChange={(newValue: boolean) => setIsVegetarian(newValue)}
        value={isVegetarian}
        label="Vegetarian"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    padding: 5,
    marginVertical: 5,
  },
});

export default FilterScreen;

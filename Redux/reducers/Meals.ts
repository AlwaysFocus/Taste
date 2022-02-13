import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/Meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const MealReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal: any) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMealList = [...state.favoriteMeals];
        updatedFavMealList.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMealList };
      } else {
        const meal = state.meals.find((meal: any) => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal),
        };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const newFilteredMeals = state.meals.filter((meal: any) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }

        return true;
      });
      return { ...state, filteredMeals: newFilteredMeals };
    default:
      return state;
  }
};

export default MealReducer;

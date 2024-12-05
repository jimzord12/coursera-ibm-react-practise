import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Meal = keyof Omit<MealsState["meals"], "totalPeople">;

interface MealsState {
  meals: {
    breakfast: boolean;
    highTea: boolean;
    lunch: boolean;
    dinner: boolean;
    totalPeople: number;
  };
}

const initialState: MealsState = {
  meals: {
    breakfast: false,
    highTea: false,
    lunch: false,
    dinner: false,
    totalPeople: 0,
  },
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    toggleMeal: (state: MealsState, action: PayloadAction<Meal>) => {
      state.meals[action.payload] = !state.meals[action.payload];
    },

    updatePeople: (state: MealsState, action: PayloadAction<number>) => {
      state.meals.totalPeople = action.payload;
    },
  },
});

export const { toggleMeal, updatePeople } = mealsSlice.actions;
export default mealsSlice.reducer;

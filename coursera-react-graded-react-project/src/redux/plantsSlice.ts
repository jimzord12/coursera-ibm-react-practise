import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Plant = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  desc: string;
};

interface PlantsState {
  plants: Plant[];
}

const initialState: PlantsState = {
  plants: [],
};

const plantssSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    // addPlantToCart: (state: PlantsState, action: PayloadAction<Plant>) => {
    //   const addOn = state.plants.find((r) => r.id === action.payload.id);
    //   if (addOn) {
    //     addOn.quantity += 1;
    //     return;
    //   }

    //   const newAddon = action.payload;
    //   newAddon.quantity = 1;
    //   state.plants.push(newAddon);
    // },

    // removePlantFromCart: (state: PlantsState, action: PayloadAction<Plant>) => {
    //   const addOn = state.plants.find((r) => r.id === action.payload.id);
    //   if (!addOn) return;
    //   if (addOn && addOn.quantity > 0) {
    //     addOn.quantity -= 1;
    //     return;
    //   }

    //   const idx = state.plants.findIndex((r) => r.id === action.payload.id);
    //   state.plants.splice(idx, idx);
    // },

    // deletePlantFromCart: (state: PlantsState, action: PayloadAction<Plant>) => {
    //   const idx = state.plants.findIndex((r) => r.id === action.payload.id);
    //   if (idx === 0) {
    //     state.plants.shift();
    //     return;
    //   }
    //   state.plants.splice(idx, idx);
    // },

    addPlantToCart: (state: PlantsState, action: PayloadAction<Plant>) => {
      const addOn = state.plants.find((r) => r.id === action.payload.id);
      if (addOn) {
        addOn.quantity += 1; // This is fine with Immer, as `addOn` is proxied.
      } else {
        state.plants.push({ ...action.payload, quantity: 1 }); // Add a new plant.
      }
    },

    removePlantFromCart: (state: PlantsState, action: PayloadAction<Plant>) => {
      const plantIndex = state.plants.findIndex(
        (r) => r.id === action.payload.id
      );
      if (plantIndex !== -1) {
        const plant = state.plants[plantIndex];
        if (plant.quantity > 1) {
          plant.quantity -= 1; // Reduce quantity.
        } else {
          state.plants.splice(plantIndex, 1); // Remove plant if quantity is 0.
        }
      }
    },

    deletePlantFromCart: (state: PlantsState, action: PayloadAction<Plant>) => {
      const plantIndex = state.plants.findIndex(
        (r) => r.id === action.payload.id
      );
      if (plantIndex !== -1) {
        state.plants.splice(plantIndex, 1); // Remove the plant entirely.
      }
    },
  },
});

export const { addPlantToCart, removePlantFromCart, deletePlantFromCart } =
  plantssSlice.actions;
export default plantssSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AddOn = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

interface AddOnsState {
  addOns: AddOn[];
}

const initialState: AddOnsState = {
  addOns: [],
};

const addOnsSlice = createSlice({
  name: "addOns",
  initialState,
  reducers: {
    addAddOn: (state: AddOnsState, action: PayloadAction<AddOn>) => {
      const addOn = state.addOns.find((r) => r.id === action.payload.id);
      if (addOn) {
        addOn.quantity += 1;
        return;
      }

      const newAddon = action.payload;
      newAddon.quantity = 1;
      state.addOns.push(newAddon);
    },

    removeAddOn: (state: AddOnsState, action: PayloadAction<AddOn>) => {
      const addOn = state.addOns.find((r) => r.id === action.payload.id);
      if (!addOn) return;
      if (addOn && addOn.quantity > 0) {
        addOn.quantity -= 1;
        return;
      }

      const idx = state.addOns.findIndex((r) => r.id === action.payload.id);
      state.addOns.splice(idx, idx);
    },
  },
});

export const { addAddOn, removeAddOn } = addOnsSlice.actions;
export default addOnsSlice.reducer;

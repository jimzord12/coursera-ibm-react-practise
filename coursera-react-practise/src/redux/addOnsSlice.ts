import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AddOn = {
  id: number;
  name: string;
  price: number;
  quatity: number;
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
      state.addOns.push(action.payload);
    },
  },
});

export const { addAddOn } = addOnsSlice.actions;
export default addOnsSlice.reducer;

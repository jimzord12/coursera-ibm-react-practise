import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Room = {
  id: number;
  name: string;
  price: number;
  quatity: number;
  capacity: number;
};

interface RoomsState {
  rooms: Room[];
}

const initialState: RoomsState = {
  rooms: [],
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    addRoom: (state: RoomsState, action: PayloadAction<Room>) => {
      state.rooms.push(action.payload);
    },
  },
});

export const { addRoom } = roomsSlice.actions;
export default roomsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Room = {
  id: number;
  name: string;
  price: number;
  quantity: number;
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
      console.log("Redux Action AddRoom: ", action.payload);
      const room = state.rooms.find((r) => r.id === action.payload.id);
      if (room) {
        room.quantity += 1;
        return;
      }
      const newRoom = action.payload;
      newRoom.quantity = 1;
      state.rooms.push(newRoom);
    },

    removeRoom: (state: RoomsState, action: PayloadAction<Room>) => {
      const room = state.rooms.find((r) => r.id === action.payload.id);
      if (!room) return;
      if (room && room.quantity > 0) {
        room.quantity -= 1;
        return;
      }
      const idx = state.rooms.findIndex((r) => r.id === action.payload.id);
      state.rooms.splice(idx, idx);
    },
  },
});

export const { addRoom, removeRoom } = roomsSlice.actions;
export default roomsSlice.reducer;

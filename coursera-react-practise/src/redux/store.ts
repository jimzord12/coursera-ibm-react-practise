import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./roomSlice";
import mealsReducer from "./mealsSlice";
import addOnsReducer from "./addOnsSlice";

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    meals: mealsReducer,
    addOns: addOnsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

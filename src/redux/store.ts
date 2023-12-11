import { configureStore } from "@reduxjs/toolkit";
import modalViewSlice from "./features/motalViewSlice";
export const store = configureStore({
  reducer: {
    modalView: modalViewSlice,
  },
//   devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
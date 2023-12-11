import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthModelState {
    open: boolean;
    view: "login" | "signup" | "resetPassword";
  }
  
  const defaultModelState: AuthModelState = {
    open: false,
    view: "login",
  };

  export const modalViewSlice = createSlice({
    name: "modalView",
    initialState: defaultModelState,
    reducers: {
      setModalView: (state, action: PayloadAction<Partial<AuthModelState>>) => {
        state.open = action.payload.open ?? state.open;
        state.view = action.payload.view ?? state.view;
      },
    },
  });

  export const { setModalView } = modalViewSlice.actions;
  export default modalViewSlice.reducer;
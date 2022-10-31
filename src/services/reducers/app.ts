import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AppState {
  isUserLogged: boolean;
}

const initialState: AppState = {
  isUserLogged: false,
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    signin: (state) => {
      state.isUserLogged = true;
    },
  },
});

export const { reset, signin } = appSlice.actions;
export default appSlice.reducer;

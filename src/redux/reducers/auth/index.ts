import {
  CaseReducer,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../..";

const initialState: AuthState = {
  isLogged: false,
  user: "Boss",
};

const onLogin: CaseReducer<AuthState, PayloadAction<void>> = (state) => {
  state.isLogged = true;
  localStorage.setItem("isLogged", "true");
};

const onLogout: CaseReducer<AuthState, PayloadAction<void>> = (state) => {
  state.isLogged = false;
  localStorage.setItem("isLogged", "false");
};

export const authStateSlice = createSlice({
  name: "authState",
  initialState,
  reducers: {
    login: onLogin,
    logout: onLogout,
    setLoginState: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
  },
});

export const { login, logout, setLoginState } = authStateSlice.actions;
export const isLoggedSelector = (state: RootState) => state.authState.isLogged;
export const authStateSelector = (state: RootState) => state.authState;

export default authStateSlice.reducer;

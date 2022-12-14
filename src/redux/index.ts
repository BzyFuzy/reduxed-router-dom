import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authStateReducer from "./reducers/auth";

export const store = configureStore({
  reducer: {
    authState: authStateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

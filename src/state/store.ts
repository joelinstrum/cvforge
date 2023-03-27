import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

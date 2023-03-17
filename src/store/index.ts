import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootSlice';

export const store = configureStore({
  reducer: {
    root: rootReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

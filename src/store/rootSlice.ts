import { createSlice } from '@reduxjs/toolkit';

export interface RootState {
  theme: 'dark' | 'light';
}

const initialState: RootState = {
  theme: 'light',
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    storeSetLight: state => {
      state.theme = 'light';
    },
    storeSetDark: state => {
      state.theme = 'dark';
    },
  },
});

export const { storeSetLight, storeSetDark } = rootSlice.actions;
export default rootSlice.reducer;

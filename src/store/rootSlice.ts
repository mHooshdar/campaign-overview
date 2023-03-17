import { createSlice } from '@reduxjs/toolkit';

export interface RootState {
  theme: 'dark' | 'light';
}

// I did not want to add redux, and also to handle them in redux is not a good way and causes components to re-render
// however, because of the pdf file, I added the redux and redux-toolkit and also MUI
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

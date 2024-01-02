// tableSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const tableSlice = createSlice({
  name: 'table',
  initialState: {
    data: [],
    showDetails: {},
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    toggleDetails: (state, action) => {
      const { column } = action.payload;
      state.showDetails = {
        ...state.showDetails,
        [column]: !state.showDetails[column],
      };
    },
  },
});

export const { setData, toggleDetails } = tableSlice.actions;

export default tableSlice.reducer;
